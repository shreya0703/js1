//for each loop


const coding = ["js", "ruby", "python", "cpp"]

// coding.forEach(function (item) {     //callback fnction is used and it dont have a nam
//     console.log(item);
// })   


// arrow function

// coding.forEach( (item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)   //only reference give




// coding.forEach( (item , index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"


    },
    {
        languageName:"java",
        languageFileName:"java"


    },
    {
        languageName:"python",
        languageFileName:"py"


    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    

})