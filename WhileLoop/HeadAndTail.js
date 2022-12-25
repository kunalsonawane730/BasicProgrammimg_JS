/**
 * Initializing the variable
 */
let head = 1
let tail = 1
/**
 * Loop apply upto 10 digit
 */
while ((head <= 11) && (tail <= 11)) {
    // finding out the random value
    var val = Math.floor(Math.random() * 2)     
    if (val == 0) 
    {
        head++
    } else {
        tail++
    }
}
/**
 * Prints heads or tails.
 */
console.log("Total Heads: " + (head - 1) + " Total Tails: " + (tail - 1))
if (head == 12) {
    console.log("Head Won 11 Times")
} else {
    console.log("Tail Won 11 Times")
}