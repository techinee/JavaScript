function missingNum(arr) {
    for(i =1;i<=arr.length+1;i++){
        if(arr.indexOf(i)===-1){
            return i;
        }
    }
}




console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log (missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));