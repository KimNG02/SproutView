import http from "./http-common.js";

class ApiServiceHandler {
    getTimeline(data) {
      return http.get(`/test?data=${data}`);
    }
  }
export default new ApiServiceHandler();