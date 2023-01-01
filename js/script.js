// Exercises Number 9 
// Write a formatName function that takes the first name
// and last name as an argument, and then returns the corrected form.
// Corrected, i.e. one in which only the first letter of the name will be capitalized,
// and the rest will be lowercase.

function formatName(name){
  const firstNameAndLastName = name.split(' ');
  let firstName = firstNameAndLastName[0];
  let lastName = firstNameAndLastName[1];

  firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase()
  lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1).toLowerCase()

  return firstName + ' ' + lastName;
}

console.log(formatName('aMAnDa dOE')); // returns Amanda Doe
console.log(formatName('AMANDA DOE')); // returns Amanda Doe
console.log(formatName('john DOE')); // returns John Doe