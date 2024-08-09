import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5a54d9b6270141b692799a7365f53759",
  },
});
