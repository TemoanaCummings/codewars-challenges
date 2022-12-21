// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// My Soltuon:
function digitize(n) {
    n = String(n).split("").map((n)=>{
        return n.to
    })
    console.log(n.reverse())
}
digitize(12345)
//Only converted to string, need better to be INT.

// Best Soltion
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}
