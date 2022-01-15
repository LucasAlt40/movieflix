import axios from "axios";

export default async function getData(url) {
  const response = await axios.get(`https://api.themoviedb.org/3` + url);
  return response.data;
}
