const SpotifyWebApi = require("spotify-web-api-node");

const scopes = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-library-read",
  //   "user-library-modify",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",");

const params = {
  scope: scopes,
};

const queryParams = new URLSearchParams(params);
export const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParams.toString();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
});

export default spotifyApi;
