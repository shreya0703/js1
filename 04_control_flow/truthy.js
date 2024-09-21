//truthy values --> when string values are assumed to be true and no need to tell that value is true or not


// const userEmail = "sr@gmail.com"  //assumed that it is true .... not empty --> truthy value 

// if(userEmail){
//     console.log("got user email");
    

// }else{
//     console.log("dont have email");
    
// }
//   falsy value:
//  false , 0 , -0 ,bigInt 0n ,  ""(emty string) , null , undefined ,NaN

// truthy values :
//   "0" , 'false' , " " , [] , {} , function(){}  


// userEmail = []
// if (userEmail.length===0){
//     console.log("yes");
    
// }



// const emptyObj ={}
// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
    
// }




// NULLISH COALESCING OPERATOR   (??) : NULL , UNDEFINED --> null value ke liye safety check 

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// terniary operator

//condition ? true : false


const  iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"):
console.log("more than 80");


