// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".

// My Solution:
function switchItUp(number){
    //Write your own Code!
    if(number === 0){
        return "Zero";
    }
    else if(number === 1){
        return "One";
    }
    else if(number === 2){
        return "Two";
    }
    else if(number === 3){
        return "Three";
    }
    else if(number === 4){
        return "Four";
    }
    else if(number === 5){
        return "Five";
    }
    else if(number === 6){
        return "Six";
    }
    else if(number === 7){
        return "Seven";
    }
    else if(number === 8){
        return "Eight";
    }
    else{
        return "Nine";
    }
}
console.log(switchItUp(1));