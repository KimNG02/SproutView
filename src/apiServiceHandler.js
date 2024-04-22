import http from "./http-common.js";

class ApiServiceHandler {
     getTimeline(data) {
      const out = http.get(`/timeline?data=${data}`);
      return out;
    }
  }
export default new ApiServiceHandler();