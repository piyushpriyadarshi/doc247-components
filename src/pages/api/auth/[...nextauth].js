import { login } from "@/utils/AuthUtils";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { BACKEND_SSR_URL, BACKEND_URL } from "../../../constants/ApiConstants";
// import { LoginRequest } from "../../../utils/ApiDataTransformer";
export default NextAuth({
  // Configure one or more authentication providers
  session: {
    jwt: true,
    maxAge: 60 * 60,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      // id:'Credentials',
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        //   const res = await fetch("/your/endpoint", {
        //     method: 'POST',
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        //   })
        //   const user = await res.json()

        //   // If no error and we have user data, return it
        //   if (res.ok && user) {
        //     return user
        //   }
        // const payload = new LoginRequest(credentials);

        // try {
        //   //   console.log(BACKEND_SSR_URL.login);
        //   const res = await axios.post(BACKEND_SSR_URL.login, payload);
        //   const user = res?.data?.user;
        //   return user;
        // } catch (error) {
        //   console.log(error);
        //   return null;
        // }
        // console.log(credentials);
        const user = await login(credentials);
        // const user = {
        //   id: 1,
        //   name: "J Smith",
        //   email: "jsmith@example.com",
        //   roles: ["APPUSER"],
        //   token: "eeeee",
        // };

        // console.log(credentials);
        // // Return null if user data could not be retrieved
        return user;
      },
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user,credentials);
      console.log("Account provide", account.provider);
      console.log("Account provider profile", JSON.stringify(profile));
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },
    async session({ session, user, token }) {
      // console.log(token);
      session.accessToken = token.accessToken;
      session.roles = token.roles;
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.accessToken = user.token;
        token.roles = user.roles;
        token.user = user;
        token.accessTokenExpires = Date.now() + account.expires_at * 1000;
      }
      return token;
    },
  },
  secret: "piyush@99",
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  jwt: {
    maxAge: 60,
  },
});
