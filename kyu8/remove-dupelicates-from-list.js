// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

// My Solution:
function distinct(a) {
    let unique = a.filter((c,index) => {
        return a.indexOf(c) === index;
    })
    return unique;
}
console.log(distinct([1,1,2]))