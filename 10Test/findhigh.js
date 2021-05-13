function highestOccurrence(arr) {
	let res={};
    for(let x of arr){
        if(res[x]){
            res[x]=res[x]+1;
         }
         else{
             res[x]=1;
         }
    }
    let m =Math.max(...Object.values(res));
    let result=[];
    for(let k in res){
        if(res[k]===m){
            result.push(k);
        }
    }
    return result.map(x => gen(x));
}
function gen(x){
    if(!(Number(x)==x))
    {
        return x;
    }
    return Number(x);
}



console.log(highestOccurrence([2, 3, 2, 5, 6, 7, 2]));
console.log(highestOccurrence([1, 2, 3, 3, "a", "b", "b", "c"]));
console.log(highestOccurrence(["it", "keeps", "coding", "on", "or", "it", "gets", "the", "hose"]));