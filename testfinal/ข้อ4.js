function sommut(num){
    if (num.toString().length > 2) {
        let result = 0;
        let x = [...num.toString()].reverse().map(value=>parseInt(value));
        x.forEach((value, index) =>{
            result += value * ((10 ** index) % 13);

        })
        return sommut(result);
    }
    return num;

}

console.log(sommut(1234567)); 
console.log(sommut(8529)); 
console.log(sommut(85299258));