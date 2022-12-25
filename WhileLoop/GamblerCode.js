/**
 * Initializing the variable
 */
let money = 100
const GOAL = 200
let win = 0
let lose = 0
console.log("Intial Money is 100")
/**
 * loop applied to check the money between max to min.
 */
while ((money < GOAL) && (money > 0)) {
     // To generate random number
    let bet = Math.floor(Math.random() * 2)    
    /**
     * Check whether win or loose.
     */
    if (bet == 0) {
        money++
        win++
    }
    else {
        money--
        lose++
    }
}
if ((money == 200) && (money == 0)) {
    console.log("Gambler Has Won the game")
} else {
    console.log("Gambler Has Loss the game")
}
console.log("Final Money: " + money + " Win Times: " + win + " Bet Times: " +(win+lose))