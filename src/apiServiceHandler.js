import http from "./http-common.js";

class ApiServiceHandler {
    getTimeline(data) {
      return http.get(`/timeline?data=${data}`);
    }
  }
export default new ApiServiceHandler();