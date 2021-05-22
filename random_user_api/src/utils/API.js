import axios from "axios";
import {useState} from 'react'
// eslint-disable-next-line
export default {
  getEmployees: function () {
    return axios.get(`https://randomuser.me/api/?results=200`);
  },


  sortByName: function(employees) {
    // employees.preventDefault();
    // const { employees } = employeeRows;
    return(console.log(employees))
    
    // let sortedEmployees = [...employees];
    // return sortedEmployees.sort((a, b) => {
    //   if (a.name < b.name) {
    //     return -1;
    //   }
    //   if (a.name > b.name) {
    //     return 1;
    //   }
    //   return 0;
    // });

  },

};
