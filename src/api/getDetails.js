import axios from "axios";

const getDetails = async (typeMedia, id) => {
  const urlTv = `https://api.themoviedb.org/3/tv/${id}`;
  const urlMovie = `https://api.themoviedb.org/3/movie/${id}`;

  const url = typeMedia === "tv" ? urlTv : urlMovie;
  const options = {
    method: "GET",
    url: url,
    params: {
      language: "en-US",
      api_key: process.env.REACT_APP_API_KEY,
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
