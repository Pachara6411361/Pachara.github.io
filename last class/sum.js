// create an array
let myNums = [1,2,3,4,5,6,7,8,9,10]

// create a variable for the sum and initialize it
let sum = 0;

// iterate over each item in the array
for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}

console.log(sum) // 15

//use array function
sum=0
function add(a,b){
    return a+b

}
// Arrow function
// (parameters) => return value
sum = myNums.reduce(add)// function as a parameter

sum = myNums.reduce((a,b) => a+b)    // arrow function


console.log("Array function:",sum)

console.log("Products", myNums.reduce((a,b) => a*b) )