import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Existing credentials logic...
        return null
      }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id
      return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 