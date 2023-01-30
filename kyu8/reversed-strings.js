// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solution: 
function solution(str){
  let arr = str.split("");
  let reverse = arr.reverse();
  let result = reverse.join("");
  return result;
}
solution("Hello");