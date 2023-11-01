import axios from "axios";
import mountOptions from "./enviroment.dev";

const getDetails = async (typeMedia, id) => {
  const urlTv = `https://api.themoviedb.org/3/tv/${id}`;
  const urlMovie = `https://api.themoviedb.org/3/movie/${id}`;

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

export default getDetails;
