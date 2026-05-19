import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Usuario' },
        password: { label: 'Contraseña', type: 'password' }
      },
      authorize: (credentials) => {
        const isValidUser = credentials.username === process.env.ADMIN_USER;
        const isValidPass = credentials.password === process.env.ADMIN_PASSWORD;

        if (isValidUser && isValidPass) {
          return { id: '1', name: process.env.ADMIN_USER };
        }

        return null;
      }
    })
  ]
});
