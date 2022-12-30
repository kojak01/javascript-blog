// Exercises Number 6.
// Write a filterEmployees function that takes two arguments:
// an array with objects of the structure { name: 'First name', salary: salary-amount }
// the minimum value of the range,
// the maximum value of the range.

function filterEmployees(arr, min, max) {
  const filteredArray = [];

  for(const empl of employees) {
    if(empl.salary > min && empl.salary < max) {
      filteredArray.push(empl);
    }
  }

  return filteredArray;
}

const employees = [
  { name: 'Amanda Doe', salary: 3000 },
  { name: 'John Doe', salary: 4000 },
  { name: 'Claire Downson', salary: 2000 },
  { name: 'Freddie Clarkson', salary: 6000 },
  { name: 'Thomas Delaney', salary: 8200 }
];

const filteredEmployees = filterEmployees(employees, 2000, 8000);
console.log(filteredEmployees);