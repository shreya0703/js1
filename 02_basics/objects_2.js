//constructor ki help se singleton objects

//const tinderUSer = new Object()//singleton object
const tinderUSer ={}//non singleton object
//console.log(tinderUSer);

tinderUSer.id = "123abc"
tinderUSer.name = "sammy"
tinderUSer.isLoggedin = false
//console.log(tinderUSer);

const regularUser ={
    email :"xyz@gamil.com",
    fullname:{
        userfullname:{
            firstname :"shreya",
            lastname:"raghav"
        }
    }
}

//adding values through add notation

//console.log(regularUser.fullname.userfullname.firstname);
//optiona chaining
//console.log(regularUser.fullname?.userfullname.firstname); 

//combining objects
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
//const obj3 ={obj1,obj2}//will merge two objects by adding two objects into another
//const obj3 =Object.assign(obj1,obj2)
//const obj3 =Object.assign({},obj1,obj2) //{}--> target mai return hogi values
//empty parenthese{} is a optional paramter and it gurantees that the target  object  will be returned
//console.log(obj3);


//another method to combine ---> spread operator
const obj3={...obj1,...obj2}
//console.log(obj3);

//another method when values are from database
 const users = [
    {
        id:1,
        email:'s@gmail.com',

    },
    {
        id:1,
        email:'s@gmail.com',

    },
    {
        id:1,
        email:'s@gmail.com',

    }
 ]
users[1].email
//console.log(tinderUSer);
//console.log(Object.keys(tinderUSer));
//console.log(Object.values(tinderUSer));
//console.log(Object.entries(tinderUSer));
//console.log(tinderUSer.hasOwnProperty('isLoggedin'));


//destructuring
const course = {
    coursename:"js",
    price:"999",
    cousreInstructor: "sir"

}
// course.cousreInstructor
const {cousreInstructor: instrutor} = course
//console.log(instrutor);

const navbar = ({company}) => {

}
navbar(company= "shreya") 