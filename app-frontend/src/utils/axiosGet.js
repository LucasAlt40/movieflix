import axios from "axios";

export async function axiosGet(options) {
  return await axios.request(options).then((response) => response);
}
