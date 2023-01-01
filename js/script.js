// Exercises Number 8 
// Write a forEach function that takes two arguments:
// any board, any callback function.
// The task of the function should be to go through each 
// element of the array and call the callback function for each separately.
// The one we get in the second parameter. 
// Importantly, this callback function should be called with one argument,
//  equal to the currently handled element.

forEach(['John', 'Amanda', 'Thomas'], function(item) { console.log(item); });

function forEach(arr, cb){
  for(const element of arr) {
    cb(element);
  }
}