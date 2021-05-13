function toArray(obj) {
    const arr = Array.from(Object.keys(obj), k=>[`${k}`, obj[k]]);
  return(arr);
  }
  
  
  console.log(toArray({ a: 1, b: 2 }));
  console.log(toArray({ shrimp: 15, tots: 12 }));
  console.log(toArray({}));