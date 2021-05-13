//1
    /*
    let x = 0;
    let y ;

    if(y){
        y = 5;
    }else{
        y = 6;
    } */

    //y = y||5;  //ถ้า y ยังไม่มีค่าให้เอาเลข 5 ไปเป็นค่า

    //console.log(y);



//2  ให้ Poom แตกออกเป็นตัวๆ
    //let name = 'Poom';


    //console.log(name.split(''));
    //console.log(Array.from(name));



//3 ให้ num1, num2 รวมกัน
 /* let num1 = [1,2,3];
    let num2 = [4,5,6];

    console.log([...num1,...num2]); */


//4
    /*
    function call(...num){
        console.log(num);
    }

    call(4,5,6,7);
    call(1,2,3);
    */



//5  แสดงค่าใน poom 
/*    let poom = {
        name : 'Poom',
        sname : 'Joe'
    }

    let {name, sname} = poom

    console.log(name);
    console.log(sname); */


//6
/*    let sum = (num1,num2) => {
        if(num1 != 0){
            return num1+num2;
        }
    };

    console.log(sum(1,2)); */


//7
/*
    console.log("===== FOR IN =====");
    for (const i in num2){  //ตำแหน่งของ array
        console.log(i);
    }

    console.log("===== FOR OF =====");
    for(const i of num2){  //ค่าของ array
        console.log(i);
    } */


//8 ยกกำลัง
  /*  console.log(10**2); */


//9 ทำให้เป็น int
 //1. let num = '101' ** 2;  console.log(num);
 //2. console.log(parseInt(num));
 //3. console.log(BigInt(num));
 //4. console.log(Number(num));

//10  ถ้าเลข 0 อยู่ตัวแรกจะไม่แสดง
 /*  let num1 = '0110ddsfsdf'

   console.log(parseInt(num1)); 
    console.log(Number(num1)); */

//11 แสดงค่าตามที่เลือก
/*    let text = ['tang', 'nammon', 'poom'];
    let [first, second] = text
    console.log(first);
    console.log(second); */

//12
 /*   sumnum = num =>{
        let temp = num.toString();
        let arr = temp.split();

    let arr_num = [];
    
        for (const value of arr) {
            arr_num.push(parseInt(value))
        
    
        let arr_num = arr.map(value=>parseInt(value)).arr_num.reduce((a,b) => a+b);
        
        for (const value of arr_num) {
            result += value
        }
        console.log(arr_num);    
    }
    sumnum(16)*/


//13 เลขบวกกันแล้ว เอาไปหาร ลงตัวให้ true; ถ้าไม่ให้ false 
/*
    function araidee(num){
        let num1 = [...num.toString()].map(value=>parseInt(value)).reduce((a,b) => a+b);
        
        if(num % num1 == 0){
            return true;
        }
        return false;

    }

    console.log(araidee(75));
    console.log(araidee(171));
    console.log(araidee(481));
    console.log(araidee(89));
    console.log(araidee(516));
    console.log(araidee(200)); */


//14 เรียงน้อยไปมาก
 /*   function sort(num){
        num = num.sort((a,b)=>a-b);
        return num;
    }

    console.log(sort([5,1,5475,0,15])); */


//15
/*    function arai(num1,num2){
        let num = 0;
        let result = "";
        if(num1 > 0 && num2 > 0){
            num = BigInt(num1) + BigInt(num2) ;
            result = num.toString();
            return result;
        }else{
            return ("-1");
        }
        
    }

    console.log(arai("4","5")); 
    console.log(arai("sdlsd","5"));
    console.log(arai("186787694919681987765498","268487654165465"));
    console.log(arai("5","drtfyugihoj"));  */



//16 
 /*   function sommut(num){
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
    console.log(sommut(85299258)); */



//17
/*let x = "Hello world"

console.log(x.split('').find(value => value == 'H')); //มีตัว H ไหม
console.log(x.match(/(or)/));
console.log(x.startsWith(x[0].match(/[A-Z/])));*/

