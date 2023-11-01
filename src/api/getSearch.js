import axios from "axios";
import mountOptions from "./enviroment.dev";

const getSearch = async (typeMedia, query) => {
  const urlTv = `https://api.themoviedb.org/3/search/tv`;
  const urlMovie = `https://api.themoviedb.org/3/search/movie`;

  const url = typeMedia === "tv" ? urlTv : urlMovie;

  const options = mountOptions(url, "GET", { query: query });

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.message);
      console.log(error);
    });
};

export default getSearch;
