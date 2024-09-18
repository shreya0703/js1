

//function 
function sayMyname() { // function scope or definition
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("Y");
    console.log("A");

}

//funtion refrence 
//sayMyname ()//excution
// no need to define the
// function addTwoNumbers(number1, number2){//parameters
//     console.log(number1 + number2);
    

// }

function addTwoNumbers(number1, number2){
   // let result = number1+number2
   // return result
   return number1+number2
    

}
const result = addTwoNumbers(3,5) //arguments
//console.log("result:",result);


function loginUserMessae(username){
    if(username=== undefined){
        console.log("please enter a username")
        return
    }
    //or
    //if(!username){
    //    console.log("please enter a username")
    //    return
    //}
    return `${username} just loged in `
}

//console.log(loginUserMessae("aman"))
//console.log(loginUserMessae())

// -----------------------------------------------------
//functions with obects and arrays

function calculateCartPrice(...num1){  // rest operator for multiple value 
    return num1

}
//console.log(calculateCartPrice(2,6,7,7939,4,5,7,9))   //restoperator ...



function calculateCartPrice(val1,val2,...num1){  // rest operator for multiple value 
    return num1

}
//console.log(calculateCartPrice(2,6,7,7,8)) 


const user ={
    username:"shreya",
    ages: "20"
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and age is ${anyobject.age}`);
    

}
handleObject(user)


const mynewArray =[200,600,300,800]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(mynewArray));


