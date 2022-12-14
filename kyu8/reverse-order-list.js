// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//My solution:
function reverseList(arr) {     
    let reversed = arr.reverse()
    console.log(reversed)
}
reverseList([1,2,3,4,5])

// Second Attempt:
function reverseList(arr){
    console.log(arr.reverse());
}
reverseList([1,2,3,4,5])