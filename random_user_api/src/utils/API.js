import axios from "axios";

// eslint-disable-next-line
export default {
  getEmployees: function () {
    return axios.get(`https://randomuser.me/api/?results=200`);
  },

  sortByName: function (employees){
    console.log(employees) 
    // const { employees } = employeeRows;
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

  handleSort: function(sortMethod, employeeRows) {
    switch(sortMethod) {
      case('Name'):
        return(this.sortByName(employeeRows))
    default:
      return
    }
  }
};
