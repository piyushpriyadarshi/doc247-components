import { BACKEND_SSR_URL } from "@/constant/ApiConstant";
import { postData } from "./ApiUtils";

export const login = async (credentials) => {
  console.log("login url ", BACKEND_SSR_URL.login);
  try {
    const user = await postData(BACKEND_SSR_URL.login, {
      username: credentials?.username,
      password: credentials?.password,
    });
    user.roles = user?.roles?.split(",");
    return user;
  } catch (error) {
    console.log(error);
  }
};
