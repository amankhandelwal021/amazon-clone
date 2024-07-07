import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import 'dotenv/config'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
})

console.log(process.env.GOOGLE_CLIENT_SECRET)