import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv1.805fdc4a4cd089a6",
      clientSecret: "4d5edb62d04d3e0f0aa326bdffb9172f2a392f94",
    }),
  ],
};

export default NextAuth(authOptions);
