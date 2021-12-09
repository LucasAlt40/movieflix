import axios from "axios";

export default async function fetchData(url) {
  const promise = await axios.get(`https://api.themoviedb.org/3` + url);
  return promise.data;
}
