function additivePersistence(num,step = 0){
    const data = num.toString().split('').map((i)=>parseInt(i));
    if(data.length > 1){
        const sum = data.reduce((a,b)=> a+b);
        step++;
        additivePersistence(sum,step);
    }
    else {
      console.log(step);
    }
}


additivePersistence(1679583);
additivePersistence(123456)
additivePersistence(6)