
import NextAuth from "next-auth"

import { findUserByEmail, insertUser } from "../../../../database/user"

import { compare } from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  secret: 121,

  providers: [
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET
    //   }),
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET

    //   }),
    CredentialsProvider({
      authorize: async (credentials, req) => {
        const user = await findUserByEmail(credentials.email)

        if (!user)
          throw new Error("No user found with the email " + credentials.email)

        const verifyPassword = await compare(
          credentials.password,
          user.password
        )

        if (!verifyPassword) throw new Error("Invalid password")

        //console.log('logging user',user)

        let userName = user.name
        userName = userName.split(" ")

        let initials =
          userName.length > 1
            ? userName[0][0].toUpperCase() + " " + userName[1][0].toUpperCase()
            : userName[0][0].toUpperCase()

        return Promise.resolve({
          id: user.id,
          email: user.email,
          role: user.role,
          initials: initials
        })
      }
    })
  ],

  secret: process.env.NEXTAUTH_SECRET,
  /* 
pages: {
  error: '/my-error-page?error=invalid login', 
},*/
  callbacks: {
    jwt: async ({ token, user, account }) => {
      user && (token.user = user)

      // ---- **** GOOGLE OR FACEBOOK
      // if (account) {
      //   if (account.provider == "google" || account.provider == "facebook") {
      //     token.user.socialOwner = account.provider
      //     const socialUser = await getSocialUser(token.user)
      //     token.user = socialUser
      //   }
      // }
      // ---- **** GOOGLE OR FACEBOOK

      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session
    }
  }
})
      // ---- **** GOOGLE OR FACEBOOK

// const getSocialUser = async data => {
//   const user = await findUserByEmail(data.email)

//   if (!user) {
//     const obj = {
//       email: data.email,
//       name: data.name,
//       socialOwner: data.socialOwner,
//       socialId: data.id
//     }

//     const insert = await insertUser(obj)

//     return Promise.resolve({
//       id: insert.insertId,
//       email: data.email,
//       role: "user"
//     })
//   }

//   return Promise.resolve({ id: user.id, email: user.email, role: user.role })
// }
      // ---- **** GOOGLE OR FACEBOOK
