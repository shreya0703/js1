//lecture 13

//dates

//myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toISOString());
//console.log(typeof myDate);//date is an object


//let myCreatedDate = new Date(2023,0,23)//months start from 0 in js
//let myCreatedDate = new Date("2024-01-14") //yyyy-mm-dd
let myCreatedDate = new Date("01-12-2024")
//console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));//to convert into seconds from ms

let newDate  = new Date()
console.log(newDate.getDate());




//`` back text and ${}--> string interpolation

//console.log(`${newDate.getDate()} and the time is ${Math.floor(newDate.getTime()/1000)}`);

newDate.toLocaleString('default',{weekday: "long"})









