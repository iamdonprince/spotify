import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import LOGIN_URL from "../../../lib/spotify";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: { signIn: "/login" },
});
