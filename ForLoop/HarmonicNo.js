const prompt =require("prompt-sync")({ sigint: true});
let harmonicNumber = parseInt(prompt("Enter the number to print harmonic number upto -> "));
var singleLine = "";
for(var i = 1 ; i <= harmonicNumber ;i++){
   singleLine += "1/"+i+" + ";
}
console.log(singleLine);