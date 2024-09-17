const Heroes =["thor","ironman","spiderman"]
const dc =["superman","batman","flash"]
//push---> only inserts in a already existing array
//Heroes.push(dc);
//console.log(Heroes);
//console.log(Heroes[3][1]);

//concatenation-> can run on new array
//const all_heroes = Heroes.concat(dc)
//console.log(all_heroes);

//spread operator
//const allnew_heroes =[...Heroes,...dc];
//console.log(allnew_heroes);


//const another_array = [1,2,3,4,[4,5],6,[7,8,7,[4,5]]]
//const real_array = another_array.flat(Infinity)//spreads al the value
//console.log(real_array);


console.log(Array.isArray("hello"))
console.log(Array.from("hello"))//coverts strrings into array
console.log(Array.from({name:"shreya"}))//intersting

let score1 = 100
let score2 = 200
let score3 =600
console.log(Array.of(score1,score2,score3));//of is used for number of elements

//
