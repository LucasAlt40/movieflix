import axios from "axios";
import enviroment from "./enviroment.dev";

const getUpcoming = async () => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/upcoming`,
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

export default getUpcoming;
