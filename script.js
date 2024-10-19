/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  // Use map to filter and log developers
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  // Use forEach to filter and log developers
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  // Add a new employee object and then log the updated array
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  // Remove employee with profession 'admin' and log the updated array
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  // Create a new array and concatenate with the existing array, then log the result
  let newArr = [
    { id: 5, name: "alice", age: "22", profession: "manager" },
    { id: 6, name: "bob", age: "25", profession: "developer" },
    { id: 7, name: "eve", age: "30", profession: "designer" },
  ];
  let concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}
