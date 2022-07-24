import axios from "axios";

const getPopular = async (typeMedia) => {
  const urlTv = `https://api.themoviedb.org/3/tv/popular`;
  const urlMovie = `https://api.themoviedb.org/3/movie/popular`;

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

export default getPopular;
