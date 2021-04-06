function dropRight(arr,num=1){
    return arr.splice(0,arr.length-num)
}

console.log(dropRight([1, 2, 3]));
console.log(dropRight([1, 2, 3], 2));
console.log(dropRight([1, 2, 3], 5));
console.log(dropRight([1, 2, 3], 0));
