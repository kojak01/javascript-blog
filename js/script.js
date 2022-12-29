// Exercises Number 2.
// create two arrays
// 1. names array
// 2. salary array

const employees = {
  john: {
    name: 'John Doe',
    salary: 3000
  },
  amanda: {
    name: 'Amanda Doe',
    salary: 4000
  },
}

const employeesNames = [];
const employeesSalaries = [];

for(const employeeID in employees){
  const employee = employees[employeeID];
  console.log(employee);

  const empName = employee.name.split(' ')[0];
  console.log(empName);
  employeesNames.push(empName);
  employeesSalaries.push(employee.salary);
}

console.log(employeesNames);
console.log(employeesSalaries);