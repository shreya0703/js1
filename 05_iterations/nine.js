//reduce() method 
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10




 const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0 )

// console.log(myTotal);

//arrow function
const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)
console.log(myTotal);


const shoppingcart = [ 
    {
        itemname : "js course",
        price: 2999
    },
    {
        itemname : "python course",
        price: 3999
    },
    {
        itemname : "mobile dev course course",
        price: 5999
    },
    {
        itemname : "data science course",
        price: 12999
    },
]

const  bill = shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(bill);



