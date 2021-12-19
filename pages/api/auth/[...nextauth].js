import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi from "../../../lib/spotify";
import LOGIN_URL from "../../../lib/spotify";

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedTokens } = await spotifyApi.refreshAccessToken();
    console.log("REFRESH TOKEN IS", refreshToken);
    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "refreshTokenError",
    };
  }
}

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
  callbacks: {
    async jwt({ token, profile, user, account }) {
      if (user && account) {
        console.log({ user });
        // Initial sign in
        if (account && user) {
          return {
            ...token,
            accessToken: account.access_token,
            accessTokenExpires: account.expires_in * 1000,
            refreshToken: account.refresh_token,
            user,
            username: account.providerAccountId,
          };
        }

        // Return previous token if the access token has not expired yet
        if (Date.now() < token.accessTokenExpires) {
          return token;
        }

        //Access token has expired
        console.log("ACCESS TOKEN HAS EXPIRED");
        return await refreshAccessToken(token);
      }
    },
    session({ session, token }) {
      session.user.username = token.username;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.error = token.error;

      return session;
    },
  },
});
