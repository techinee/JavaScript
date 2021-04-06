function arrayValuesTypes(arr){
    let result = [];
    for(let value of arr){
        result.push(typeof value);
    }
    return result;
}


console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));
