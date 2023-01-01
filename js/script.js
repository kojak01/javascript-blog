// Exercises Number 11
// Your task is to write a function called filter that takes two arguments
// - any array and a callback function.
// The purpose of the function is to return a new filtered array 
// containing only those elements for which the passed callback 
// function returns true.
filter([5, 6, 7], function(item) { return item%2 === 0 });
  function filter(arr, cb){
    const ArrayFilter = [];
    for(const element of arr) {
      if(cb(element)) ArrayFilter.push(element)
    }
    return ArrayFilter
}