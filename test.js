//random sequence generator

let start = Math.floor(Math.random() * 10) + 1;
let end = Math.floor(Math.random() * 10) + 1;

const range = () => {
  if(start < end) {
    return Array.from({length: (end - start) + 1}, (_, i) => start + i);
  } else {
    return Array.from({length: (start - end) +1}, (_, i) => end + i);
  }
}

console.log(start, end, range())
