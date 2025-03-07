import axios from "axios";

const api = axios.create({
  baseURL: "https://apidigishop.narinsoft.ir",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
