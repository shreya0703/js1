const myObj = {
    js : 'javascript',
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"

}

//for in loop for iterati objects



//for keys printing
// for (const key in myObj) {
//     console.log(key);
    
    
// }
// for object printing objects
// for (const key in myObj) {
//     console.log(myObj[key]);
    
    
// }

//to print together
// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
    
    
// }



const programming =["js","array","python","cpp"]
for (const key in programming) {                  //returns keys of arrays --->0,1,2,3,...
   console.log(programming[key]);
   
    
}



const map = new Map()
map.set("IN","india")
 map.set("USA","United States of America")
map.set("Fr","france")
map.set("IN","india")

// for (const key in map) {
//     console.log(key);
    
   
// }