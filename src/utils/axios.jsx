// the base url component using axios
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  base_url: "https://image.tmdb.org/t/p/original"
});

export default instance;
