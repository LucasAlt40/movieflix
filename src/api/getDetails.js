import axios from "axios";
import enviroment from "./enviroment.dev";

const getDetails = async (typeMedia, id) => {
  const urlTv = `https://api.themoviedb.org/3/tv/${id}`;
  const urlMovie = `https://api.themoviedb.org/3/movie/${id}`;

  const url = typeMedia === "tv" ? urlTv : urlMovie;
  const options = {
    method: "GET",
    url: url,
    params: { language: "en-US", page: "1" },
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

export default getDetails;
