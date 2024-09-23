// for of loop
 let greeting = "hello everyone"
for (const val  of greeting) {
    //console.log(val);
    
}

[""]


//maps --> key value pairs , remembers the oriinal insertion order of the keys and unique values
const map = new Map()
map.set("IN","india")
 map.set("USA","United States of America")
map.set("Fr","france")
map.set("IN","india")
// console.log(map);


for (const [key,value] of map){
    //console.log( key, "-:",value);
    
}



// =======================================

// object---->


const myObj = {
    game1: 'NFS',
    game2:'spiderman'
}
for (const [key, value] of myObj){
   // console.log(key , "--" , value);
                                                 //will give error
}





