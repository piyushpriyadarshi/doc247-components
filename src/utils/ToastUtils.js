import { toast as toaster } from "react-hot-toast";
export const createHotToast = (message, type) => {
  switch (type) {
    case "success":
      toaster.success(message, {
        style: {
          borderRadius: "10px",
        },
      });
      break;
    case "error":
      toaster.error(message);
      break;
    case "promise":
      const promiseObj = message.promise;
      console.log(promiseObj);
      toaster.promise(
        promiseObj,
        {
          loading: message.loading,
          success: message.success,
          error: message.error,
        },
        {
          style: {
            borderRadius: "10px",
          },
        }
      );
      break;
    default:
      toaster(message);
      break;
  }
};
