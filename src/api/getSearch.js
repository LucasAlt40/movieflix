import axios from "axios";

const getSearch = async (typeMedia, query) => {
  const urlTv = `https://api.themoviedb.org/3/search/tv`;
  const urlMovie = `https://api.themoviedb.org/3/search/movie`;

  const url = typeMedia === "tv" ? urlTv : urlMovie;
  const options = {
    method: "GET",
    url: url,
    params: {
      language: "en-US",
      api_key: process.env.REACT_APP_API_KEY,
      query: query,
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
