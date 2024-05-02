import http from "./http-common.js";

class ApiServiceHandler {
     getTimeline(data) {
      const out = http.get(`/timeline?data=${data}`);
      return out;
    }

    getTimelineImages(){
      const out = http.get(`/timelineImages`);
      return out;
    }

    getPlants() {
      return http.get('/plants')
    }

    getImage(plant) {
      return http.get(`/image/${plant}`);
    }
  }
export default new ApiServiceHandler();