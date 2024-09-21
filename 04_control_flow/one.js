//if statement
//syntex
// if(condition should be true to enter in for loop){

// }



const isUserLggedIn = true

if(isUserLggedIn){

}

//comparison operators-->   <    ,    >    ,   <=   , >=  ,  ==  , !=      , ===  also check the equlaity and the data type ,!==


// if(2=="2"){
//     console.log("yes");
    
// }

//triple eualtiy checks for the datatype too

if(2==="2"){
    console.log("yes");
    
}
  
// using if else

// const temperature = 41
// if(temperature<50){
//     console.log("less then 50");
    
// } else {
//     console.log("more than 50");
// }




// const score = 200

// if(score >100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
    
// }

// console.log(`user power : ${power}`);

//var has a global scope 
// const score = 200

// if(score >100){
//     var power = "fly"
//     console.log(`user power : ${power}`);
    
// }

// console.log(`user power : ${power}`);


// this will not throw an error as var i a global varibale and will cause confusion




//short hand notation
//impilcit scope only one line execution

// const balance = 1000
// if(balance>500) console.log("test");




//ways to add multiple line code but that is unreading form and should not be practiced
// const balance = 1000
// if(balance>500) console.log("test"),
// console.log("test2");


//nestng


// const balance = 1000
// if(balance < 500){
//     console.log(("less than"));
    
// }
//  else if(balance<750){
//     console.log("less than 750");
    
// } 
// else if( balance < 900){
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }




const userLogedIn = true
const debitCard = true


if(userLogedIn && debitCard){
    console.log("allowed for cousres");
    
}



if(userLogedIn ||  debitCard && 2==2){ //or
    console.log("allowed for cousres");
    
}




