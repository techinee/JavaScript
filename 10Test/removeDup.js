function removeDups(name){
    let x = [];
    name.forEach(value=>{ //เขียนเต็มๆ name.forEach(function(value){
        if(!x.includes(value)){ //includes เชคว่ามีมั้ย
            x.push(value) // push เอาเข้า
        }
    });
    return x;
 }
 
     console.log(removeDups([1,0,1,0]))
     console.log(removeDups(["The","big","cat"]))
     console.log(removeDups(["John","Taylor","John"]))
 
 
 
 