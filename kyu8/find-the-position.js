// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

// My Solution:
function position(letter){
    //Write your own Code!
    const alphabet = ['null','a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let x = alphabet.indexOf(letter);
    return `Position of alphabet: ${x}`; 
}