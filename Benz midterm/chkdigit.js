function isPandigital(data){
    let set1 = [0,1,2,3,4,5,6,7,8,9];
    let set2 = [];
    let temp = data.toString().split('').map((i)=>parseInt(i));
    for(let value of temp){
        if(!set2.includes(value)) {
            set2.push(value);
        }
    }
    
    set2.sort((a,b)=>a-b);
    for(let i=0;i<set1.length;i++){
        if(set1[i] != set2[i]){
           return false;
        }
    }
    return true;

}

console.log(isPandigital(98140237568910));
console.log(isPandigital(90864523148909));
console.log(isPandigital(112233445566778899n));
