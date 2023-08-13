import axios from "axios";
import { getSession, signIn } from "next-auth/react";
// import { BACKEND_URL } from "../constants/ApiConstants";

const session = null;

// axios.interceptors.request.use(async function (config) {
//   const session = await getSession();
//   console.log(session);
//   const token = session?.accessToken;
//   // const token = localStorage.getItem('sharemycodes_accessToken');
//   config.headers.authentication = token ? token : "";
//   return config;
// });

export const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};
export const postData = async (url, payload) => {
  const res = await axios.post(url, { ...payload });
  return res.data;
};
export const putData = async (url, payload) => {
  const res = await axios.put(url, { ...payload });
  return res.data;
};
export const login = async (type, payload) => {
  return new Promise(async (resolve, reject) => {
    const res = await signIn(type, payload);
    if (res.status === 200) {
      resolve();
    } else {
      reject();
    }
    console.log(res);
  });
};
