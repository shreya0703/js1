//declaring objects--> 2 ways 1.constructor 2.literals

//singleton is made from constructor
//pbect.create //constructor method

//object literals
//const jsUser ={}//empty object



//declaring symbol
const mySym = Symbol("key1")


const jUser ={
    name:"shreya",
    "fullname":"shreya raghav",
    [mySym]:"mykey1",  //declaring symbol


    age: 18,
    location : "delhi",
    email : "shreya@google.com",
    isLoggedIn: false,
    lastLoginDays:["monday","friday"]


}
//console.log(jUser.email)  //accesing vaues thorugh dot notation
//console.log(jUser["email"]);  //accessing values through [] 
//console.log(jUser[mySym]);
//console.log(typeof jUser[mySym]);

//jUser.email ="shreyacaffe.com"//changing
//Object.freeze(jUser);//makes jsuer permamnet no chnages in jsuser
//console.log(jUser);


//functions

jUser.greeting = function(){
    console.log("helo js user")
}
console.log(jUser.greeting);
//console.log(jUser.greeting());

jUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
    
}
console.log(jUser.greeting());
console.log(jUser.greetingTwo());






