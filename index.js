// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Create a function that takes a number as an argument to check if it's even or odd using recursion

let greeting = "hi";
function checkEven(num) {
  //Conditionals that will determine if num is odd or even
  // console.log(num);
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } //Subtract num by 2 until its 0 or 1
  else {
    return checkEven(num - 2);
  }
}

console.log(checkEven(77));
