import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/db";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/sign-in",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@exemplo.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        console.log(user);

        if (!user) {
          console.log("user not found");
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          credentials?.password,
          user.password
        );

        if (!passwordMatch) {
          console.log("password not match");
          return null;
        } else {
          console.log("password match");
          console.log(user);
        }

        return {
          id: user.id + "",
          name: user.name,
          email: user.email,
          username: user.username,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        console.log("jwt" + { ...token, username: user.username });
        return { token, username: user.username };
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log(
        "session" +
          {
            ...session,
            user: { ...session.user, username: token.username },
          }
      );
      return {
        ...session,
        user: { ...session.user, username: token.username },
      };
    },
  },
};
