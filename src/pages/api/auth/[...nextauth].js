import NextAuth from "next-auth/next";
import { AppProviders } from "next-auth/providers";

export default NextAuth({
  providers: [
    AppProviders.Github({
      clientId: "",
      clientSecret: "",
    }),
  ],
});
