import axios from "axios";


export async function axiosGet(url) {
    return await axios.get("https://api.themoviedb.org/3" + url)
        .then((response) => response);
}


