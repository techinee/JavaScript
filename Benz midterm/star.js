function starRating(data){
    const sum = data.reduce((a,b)=>{
        return a+b;
    })

    let vote = 0;
    for(let i =0 ; i<data.length;i++){
        vote += data[i] * (i+1);
    }

    let avg = vote / sum ; 3.55
    
    return `[${avg.toFixed(2)}] ${'*'.repeat(Math.round(avg))}`;

}

console.log(starRating([55, 67, 98, 115, 61]));
console.log(starRating([0, 2, 0, 1, 23]));
console.log(starRating([16, 17, 23, 40, 45]));