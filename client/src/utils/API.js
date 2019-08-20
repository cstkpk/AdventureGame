import axios from "axios";
const BASEURL = "https://api.le-systeme-solaire.net/rest/bodies/";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
