
// Structure of Creating a function
// Function: it is a block of code that will not run until it is called laterly.
// DRY : Donot Repeat Yourself
// Functions will be executed to fulfil DRY Methodology
function functionName () {

}

// console.log(typeof functionName); // function

function addition (first , second) {

  console.log("Value stored in first = " + first);
  console.log("Value stored in second = " + second);
  let sum = first + second;
  console.log("The addition of first and second = " + sum)

  return sum; // return statement will return the value of the variable to the caller of the function.
}


// console.log(x);  // it will throw an error because you cannot access any variable before initialization
let x = 10;
let y = 15;

// let sum1 = x + y;
let sum1 = addition(x , y);

let a = 12;
let b = 15;

let sum2 = addition(a , b);

// console.log(sum)


document.getElementById("show").innerText = sum2;



function addNumbers () {

  
  let num1data = document.getElementById("num1").value;
  console.log(typeof num1data);
  let num1 = parseInt(num1data);
  console.log(typeof num1);
  let num2 = parseInt(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("result").innerText = "The sum of " + num1 + " and " + num2 + " is " + sum;
}