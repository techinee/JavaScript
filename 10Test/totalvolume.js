function TotalVolume(){
    let sum = 0;
    for(let i = 0; i< arguments.length;i++){
        mul = 1;
        for(let s =0; s< arguments[i].length;s++){
            mul *= arguments[i][s];
        }
        sum += mul;
     }
     return sum;
   }
   
   
   
   
   
   
   
   
   console.log(TotalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
   console.log(TotalVolume([2,2,2],[2,1,1]));
   console.log(TotalVolume([1,1,1]));