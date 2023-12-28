let calculator = function(num1,op ,num2){

    switch(op) {
        case "+":
          return num1+num2;
          break;
        case "-":
          return num1-num2;
          break;
        case "*":
          return num1*num2;
          break;
        case "/":
          return num1/num2;
        default:
          text = "error";
      } 

}

// console.log(calculator(5,"+",5));
// console.log(calculator(5,"-",2));
// console.log(calculator(10, "*", 5));
// console.log(calculator(10,"/",2));



let array = [1,2,3,4]

const narr = array.map((item, index)=>(item+1))

//console.log(narr)

const reducearray = array.reduce((acc,s) => {
    return acc+s;
}, 1)

//console.log(`suma e ${reducearray}`);

let ar = [2,4,1,5]
let ar1 = [3,5,1,1]

console.log(ar+ar1)

