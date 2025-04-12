import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const { apiBase } = useRuntimeConfig();

export default NuxtAuthHandler({
    secret: 'DNASata@2025!',
    pages: {
        signIn: 'auth/login'
    },
    callbacks: {
        jwt({ token, user }) {
          if(user) {
            token.sessionToken = user.token
            token.userId = user.userDetails.userId
            token.firstName = user.userDetails.firstName
            token.lastName = user.userDetails.lastName
            token.phoneNo = user.userDetails.phoneNo
            token.email = user.userDetails.email
            token.isActive = user.userDetails.isActive
          }
          return token
        },
        async session({ session, token }) {
          const additionalUserData: any = token
    
          return {
            ...session,
            user: {
              userId: additionalUserData.userId,
              firstName: additionalUserData.firstName,
              lastName: additionalUserData.lastName,
              phoneNo: additionalUserData.phoneNo,
              email: additionalUserData.email,
              isActive: additionalUserData.isActive,
              token: token.sessionToken
            }
          }
        }
      },
    providers: [
        //@ts-expect-error
        CredentialsProvider.default({
            name: 'Credentials',
            async authorize(credentials: any) {
                const response: any = await $fetch('Authentication/CreateToken', {
                    baseURL: apiBase,
                    method: 'POST',
                    body: {
                        username: credentials.email,
                        password: credentials.password
                    }
                });

                const user = await response;

                return user;
            }
        })
    ]
});
