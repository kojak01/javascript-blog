// Exercises Number 1.
// Create female name boards.
const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];

const newArray = [];

for(const name of names){
  if(name.slice(-1) === 'a'){
    newArray.push(name);
  }
}

console.log(newArray);