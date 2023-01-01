// Exercises Number 10 
// Prepare a getEvensInRange function that takes two arguments:
// a number indicating the beginning of the range to be checked,
// number indicating its end.
// The function's task is to go through all the numbers within the given range
// and return an array that will contain only those that are even.
// To complete the task, it will be helpful to remember the syntax
// of the basic for loop and modulo division.


function getEvensInRange(start, end){
  const NewArray = [];

  for(let i = start; i <= end; i++) {
    if(i % 2 === 0) NewArray.push(i);
  }

  return NewArray;
}

getEvensInRange(0, 9); // returns [0, 2, 4, 6, 8]
getEvensInRange(7, 12); // returns [8, 10, 12]