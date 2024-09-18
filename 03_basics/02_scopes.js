//scopes
var c = 300//global scope
let a = 100

if(true){//block scope
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ",a);
    
}
for(i<0;i<Array.length; i++){
    const element = Array[i]

}


console.log(a);
//console.log(b);
//console.log(c);

