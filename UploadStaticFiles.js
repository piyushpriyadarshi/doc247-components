const fs = require("fs");
const path = require("path");
const async = require("async");
const AWS = require("aws-sdk");
const mime = require("mime-types");
const readdir = require("recursive-readdir");
const rootFolder = path.resolve(__dirname, "./");

//add bucket access key here
const Config = {
  accessKey: "",
  secretKey: "",
  region: "ap-south-1",
  uploadFolder: "./.next/static", //give the folder path which need to upload
  maxAsyncOperation: 10,
  bucketName: "awsomecoderscdn",
  s3Path: "astrology-staging",
};

const spacesEndpoint = new AWS.Endpoint("sgp1.digitaloceanspaces.com");
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: "DO00BTDMMF37WCU99YU2",
  secretAccessKey: "YJWURH3lGtRwlKoEXNO8TsBSpXaMTRokZW3Gr2bWuLc",
});
// const s3 = new AWS.S3({
//   accessKeyId: Config.accessKey,
//   secretAccessKey: Config.secretKey,
//   region: Config.region,
// });

function getFiles(dirPath) {
  return fs.existsSync(dirPath) ? readdir(dirPath) : [];
}

async function uploadToS3(upload) {
  const filesToUpload = await getFiles(path.resolve(__dirname, upload));
  await async.eachOfLimit(
    filesToUpload,
    Config.maxAsyncOperation,
    async.asyncify(async (file) => {
      const mimeType = mime.lookup(file);
      let Key = file.replace(`${rootFolder}`, "");
      Key = Key.replace(/\\/g, "/");
      Key = `${Config.s3Path}${Key}`;
      console.log(`Uploading file to ${Key} location`);
      let fileBuffer = fs.readFileSync(file);
      const param = {
        Key: Key.replace(`/.next/static/`, "/_next/static/"),
        Bucket: Config.bucketName,
        Body: fileBuffer,
        ContentType: mimeType,
        ACL: "public-read",
      };
      await s3
        .upload(param)
        .promise()
        .catch((error) => {
          console.log(
            `[AWS] Unable to upload file "${Key}" Error: ${JSON.stringify(
              error?.stack
            )}`
          );
        });
    })
  );
}

uploadToS3(Config.uploadFolder)
  .then(() => {
    console.log("uploaded successfully");
  })
  .catch((err) => {
    console.error(err.message);
  });
