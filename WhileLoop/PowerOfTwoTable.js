const prompt =require("prompt-sync")({ sigint: true});
let table = parseInt(prompt("Enter power -> "));
for (var i = 1 ; i<= table ; i++){
    console.log("2 * "+ i +" = " + Math.pow(2,i));
}
