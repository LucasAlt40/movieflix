import axios from "axios";

const getNowPlaying = async (typeMedia) => {
  const urlTv = `https://api.themoviedb.org/3/tv/airing_today`;
  const urlMovie = `https://api.themoviedb.org/3/movie/now_playing`;

  const url = typeMedia === "tv" ? urlTv : urlMovie;

  const options = {
    method: "GET",
    url: url,
    params: {
      language: "en-US",
      api_key: process.env.REACT_APP_API_KEY,
    },
    headers: {},
  };


  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.message);
      console.log(error);
    });
};

export default getNowPlaying;
