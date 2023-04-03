/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type GetServerSidePropsContext } from "next";
import { type NextAuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import type { DefaultSession } from "next-auth";
import { env } from "~/env.mjs";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    session({ session, token }) {
      // @ts-ignore
      session.user.id = token.sub;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

/**
 * Wrapper for getServerSession, used in trpc createContext and the
 * restricted API route
 *
 * Don't worry too much about the "unstable", it's safe to use but the syntax
 * may change in future versions
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */

export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return await getServerSession(ctx.req, ctx.res, authOptions);
};
