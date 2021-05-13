function araidee(num1, num2){
    let num = 0;
    let result = "";
    if(num1 > 0 && num2 > 0){
        num = BigInt(num1) + BigInt(num2);
        result = num.toString();
        return result;

    }else 
        return ("-1");
    
}

console.log(araidee("4","5")); 
console.log(araidee("sdlsd","5"));
console.log(araidee("186787694919681987765498","268487654165465"));
console.log(araidee("5","drtfyugihoj"));