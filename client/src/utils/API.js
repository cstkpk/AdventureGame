import axios from "axios";
const BASEURL = "https://api.le-systeme-solaire.net/rest/bodies/";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  createPlayer: function(name) {
    return axios.post("/api/story", name);
  },
  getPlayer: function(id) {
    return axios.get("/api/story/" + id);
  },
  updatePlayer: function(id) {
    return axios.put("/api/story/" + id);
  }
};
