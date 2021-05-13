let cal = num=>{
    let temp = num.toString();
    let arr = temp.split('').map(value=>Number(value)).reduce((a,b)=>(a+b));
    return(num%arr ==0)? true : false ;
}
console.log(cal(75));
console.log(cal(171));
console.log(cal(481));
console.log(cal(89));
console.log(cal(516));
console.log(cal(200));