// create random  integer number between 1 and 10
let start = Math.floor(Math.random() * 10) + 1; 
let end = Math.floor(Math.random() * 10) + 1;

//create array with length equal to the difference between the two random generated numbers above, including them.
const range = () => {
  if(start < end) {
    return Array.from({length: (end - start) + 1}, (_, i) => start + i);
  } else {
    return Array.from({length: (start - end) +1}, (_, i) => end + i);
  }
}

console.log(start, end, range())
