import axios from "axios";
import enviroment from "./enviroment.dev";

const getSearch = async (typeMedia, query) => {
  const urlTv = `https://api.themoviedb.org/3/search/tv`;
  const urlMovie = `https://api.themoviedb.org/3/search/movie`;

  const url = typeMedia === "tv" ? urlTv : urlMovie;

  const options = {
    method: "GET",
    url: url,
    params: { language: "en-US", page: "1", query: query },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${enviroment.ApiKey}`,
    },
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.message);
      console.log(error);
    });
};

export default getSearch;
