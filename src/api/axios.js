import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "a7452de7d14ab05e02b05976d50cbfd9",
    language: "ko-KR",
  },
});

export default instance;
