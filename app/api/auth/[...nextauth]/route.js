// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more providers here if needed
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Add user information to the token right after sign in
      if (account?.provider === "google") {
        token.id = profile.id;
        token.name = profile.name;
        token.email = profile.email;
        token.picture = profile.picture;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access token and user information from Google
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.picture = token.picture;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
