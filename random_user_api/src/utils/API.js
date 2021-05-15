import axios from "axios";

// eslint-disable-next-line
export default {
  getRandomUser: function () {
    return axios.get(`https://randomuser.me/api/?results=200`)
  }
};
