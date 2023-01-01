// Exercises Number 7 
// Write a function that takes one argument (any object)
// and then displays information
// about all its properties in the console.

const object = {
  firstName: 'John',
  lastName: 'Doe'
}

function showAnyObject(obj){
  for(objID in object){
    const param = object[objID];
    console.log(objID + ': ' + param);
  }
}

showAnyObject(object);