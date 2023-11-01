import axios from "axios";
import mountOptions from "./enviroment.dev";

const getPopular = async (typeMedia) => {
  const urlTv = `https://api.themoviedb.org/3/tv/popular`;
  const urlMovie = `https://api.themoviedb.org/3/movie/popular`;

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

export default getPopular;
