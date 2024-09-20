// this keyword --> tells about the cuurent context
const user ={
    username:"shreya",
    price: 999,
    welcomeMessae:function(){
        console.log(`${this.username} ,welocme to website`);
        
    }

}
//user.welcomeMessae ()      // 03_basics/03_arrow.js: Permission denied
//user.username ="karan"
//user.welcomeMessae()

//console.log(this)  //---> empty object when outsde any function

// function chai(){
//     let username = "shreya"
//     console.log(this.username); //----> not empty object this time when inside a funtion
    

// }
// chai()

// const chai = function(){
//     let username = "shreya"
//     console.log(this.username);
    
// }
// chai()


// arrow function

const chai = ()=>{
    let username = "shreya"
    console.log(this);
    
}


//chai()

//syntex
//    ()=>{}         

//explicit return 
//  const addtwo =(num1,num2)=>{
//     return num1+num2
//  }   
//  console.log(addtwo(3,4) )


//implicit return --> do not need to write retuen as code is of only a singgleline
 const addtwo = (num1,num2)=> (num1+num2) //parathesis does not requires return keyword but vurly braces do

 console.log(addtwo(8,7));



 


