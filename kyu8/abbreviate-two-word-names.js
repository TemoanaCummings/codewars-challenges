// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// My solution:
// function abbrevName(name){
//     const fullName = name.split(' ');
//     const initials = fullName.shift().charAt(0) + "." + fullName.pop().charAt(0);
//     console.log(initials.toUpperCase())
// }
// abbrevName("sam harris")

// Second try:
function abbrevName(name){
    return name.split(' ').map(index => index[0].toUpperCase()).join('.')
    // Splits name at the space inbetween
    // map gets eletements at index position 0 and upper cases them
    // Joins together with '.' in between
}
console.log(abbrevName('sam harris'));