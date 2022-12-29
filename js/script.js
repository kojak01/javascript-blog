// Exercises Number 3.
// sum of all salaries
// highest salary
// the lowest salary

const salaries = [2000, 3000, 1500, 6000, 3000];

let sum = 0;
let highestSalary = salaries[0];
let lowestSalary = salaries[0];

for(const salary of salaries){
  sum += salary;
  if(salary > highestSalary) highestSalary = salary;
  if(salary < lowestSalary) lowestSalary = salary;
}

console.log(sum, highestSalary, lowestSalary);