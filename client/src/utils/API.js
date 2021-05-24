import axios from "axios";
import {useState} from 'react'
// eslint-disable-next-line
export default {
  getEmployees: function () {
    return axios.get(`https://randomuser.me/api/?results=200`);
  },

};
