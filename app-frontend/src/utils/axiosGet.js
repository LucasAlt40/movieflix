import axios from "axios";

export async function axiosGet(url) {
  return await axios
    .get("http://localhost:8080" + url)
    .then((response) => response);
}
