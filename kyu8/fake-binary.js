// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// My Solution:
function fakeBin(x){
    let output = ''
    for (let i = 0; i < x.length; i++) {
        if(Number(x[i]) >= 5){
            output += 1;
        }
        else{
            output += 0;
        }
    }
    console.log(output);
}
fakeBin("5");