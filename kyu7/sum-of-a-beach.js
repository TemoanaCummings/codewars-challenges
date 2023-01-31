// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
// sumOfABeach("cItYTowNcARShoW")               ==>  0

// My Solution:
function sumOfABeach(beach) {
    // your code here
    let result = 0;
    beach = beach.toLowerCase();
    let elements = ["sand", "water", "fish", "sun"];
    for (let i = 0; i < 4; i++) {
        while (beach.includes(elements[i])) {
            beach = beach.replace(elements[i], '');
            result++;
        }
    }
    return result;
}