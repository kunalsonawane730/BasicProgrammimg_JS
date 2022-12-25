//Declared Array
let randomNumArr = new Array();

//Intialised Counter
let counter = 0;

//Running through loop to add multiple random numbers to array
for (let c = 1; c <= 10; c ++) {
	let ran = Math.floor(Math.random() * (1000 - 100 + 1))+100;
	randomNumArr.push(ran);
}

//Printing array
console.log("Array is [" + randomNumArr + "]");

let max = 0;
let min = 1000;
let secMax;
let secMin;

//Loop for sorting an array
for (let i = 0; i<10; i++){

    for(let j = 0; j<10-i-1; j++){

        if (randomNumArr[j] > randomNumArr[(j+1)]) {
            let temp = randomNumArr[j];
            randomNumArr[j]= randomNumArr[(j+1)];
            randomNumArr[(j+1)] = temp;
        }
    }
}

//Printing a sorted array
console.log("Sorted Array: [" + randomNumArr + "]");

//Printing all numbers
console.log("Second Largest Number: " + randomNumArr[8]);
console.log("Second Smallest Number: " + randomNumArr[1]);