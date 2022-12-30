// Exercises Number 5.
// add object with unique tags 

const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

const uniqueTags = {};

for(const tag of tags){
  if(!uniqueTags[tag]) uniqueTags[tag] = {apperances: 1};
  else uniqueTags[tag].apperances++;
}

console.log(uniqueTags);