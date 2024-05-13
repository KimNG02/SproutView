import axios from "axios";

export default axios.create({
  // baseURL: "https://sprout-view-server-54zqmtijra-lz.a.run.app/api",
  baseURL: "/api",

  headers: {
    "Content-type": "application/json",
  },
});
