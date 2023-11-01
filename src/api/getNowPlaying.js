import axios from "axios";
import mountOptions from "./enviroment.dev";

const getNowPlaying = async (typeMedia) => {
  const urlTv = `https://api.themoviedb.org/3/tv/airing_today`;
  const urlMovie = `https://api.themoviedb.org/3/movie/now_playing`;

  const url = typeMedia === "tv" ? urlTv : urlMovie;

  const options = mountOptions(url, "GET");

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.message);
      console.log(error);
    });
};

export default getNowPlaying;
