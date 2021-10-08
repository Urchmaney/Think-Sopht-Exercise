const secondLargest = (values) => {
  let largest = -Infinity;
  let sndLargest = -Infinity;
  values.forEach(val => {
    if (val > sndLargest) sndLargest = val;
    if (val > largest) {
      sndLargest = largest;
      largest = val;
    }
  });
  return sndLargest;
}


console.log(secondLargest([10,290,281,32,1,0,817]))
console.log(secondLargest([-2,-7, -6, -7, -9]))