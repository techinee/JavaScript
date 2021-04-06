function countTrue(data){
    const count = data.filter(value => value === true);
    return count.length
}


console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
