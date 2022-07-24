import axios from "axios";

const getUpcoming = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming",
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

export default getUpcoming;
