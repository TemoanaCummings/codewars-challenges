// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My Solution:
// function evenOrOdd(number) {
//   if(number % 2 === 0){
//     console.log("Even")
//   }
//   else{
//     console.log("Odd")
//   }
// }
// evenOrOdd(2)

// New Solution:
function evenOrOdd(n){
  return n % 2 === 0 ? "Even" : "Odd";
}
evenOrOdd(1)

// Better Solution:
const evenOrOdd = n => n % 2 === 0 ? "Even" : "Odd";