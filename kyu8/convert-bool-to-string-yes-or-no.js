// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// My Solution;
function boolToWord( bool ){
    if(bool === true){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}
boolToWord(true)

// Best Solution:
function boolToWord( bool ){
    return bool ? 'Yes':'No';
}