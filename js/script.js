// Exercises Number 4.
// sum of all salaries
// highest salary
// the lowest salary

const persons = {
  john: 2000,
  amanda: 3000,
  thomas: 1500,
  james: 6000,
  claire: 3000
};

let sum = 0;
let highestSalary = persons.john;
let lowestSalary = persons.john;

for(const personID in persons){
  const salaries = persons[personID]
  console.log(salaries);
  sum += salaries;
  if(salaries > highestSalary) highestSalary = salaries;
  if(salaries < lowestSalary) lowestSalary = salaries;
}

console.log(sum, highestSalary, lowestSalary);