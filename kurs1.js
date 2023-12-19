//function expression 
const c2f = function(c){
    return c * (9/5) + 32
}

console.log(c2f(0))

//fat arrow function
let f2c = (f) =>{
    let c = Math.ceil(((f-32)) * 5/9)
    if(c<0) 
    {console.log(`Temperature is ${c}c, Very low`)}
    else if(c>=0 && c<=22) 
    {console.log(`Temperature is ${c}c, Noramal`)}
    else 
    {console.log(`Temperature is ${c}c, Very high`)}
}

f2c(43)

//method inside obj

let addition = {
    num1: 5,
    num2: 10,

    add: function(){
        return this.num1 + this.num2
    }
}

console.log(addition.add())