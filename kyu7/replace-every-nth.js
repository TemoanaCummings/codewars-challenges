// Task
// Write a method, that replaces every nth char oldValue with char newValue.

// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.

// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
// Example:
// n:         2
// old_value: 'a'
// new_value: 'o'
// "Vader said: No, I am your father!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced
// "Vader soid: No, I am your fother!"
// As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

// My solution:
function replaceNth(text, n, oldValue, newValue) {
    var count = 0;
    if(n <= 0){
      return text;
    }
    console.log(n);
    return text.split("").map(function(item, index){
      if(item === oldValue){
        count++;
      }
      if(item === oldValue && count % n === 0){
        console.log(item, count, index);
        return newValue;
      }else{
        return item;
      }
    }).join("");
}