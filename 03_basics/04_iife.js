// Immediately invoked function expression(IIFE) --> functions that are immediated executed . also to remove the pollution that are caused by the variables of the global sope


(function chai(){
    //named iife --> when function have a name
    console.log(`DB connected`);
    
})();
//; semicolon is required to end the iife funtion execution
//()() // fintion and then its execution
(  function code(){
    console.log(`DB CONNECTED TO`);
    
})();
( ()=>{
    console.log(`DB CONNECTED THREE`);
    
})();


( (name)=>{
    console.log(`DB CONNECTED THREE ${name}`);
    
})('shreya')