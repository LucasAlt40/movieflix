import axios from "axios";
import mountOptions from "./enviroment.dev";

const getUpcoming = async () => {
  const options = mountOptions(
    "https://api.themoviedb.org/3/movie/upcoming",
    "GET"
  );

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.message);
      console.log(error);
    });
};

export default getUpcoming;
