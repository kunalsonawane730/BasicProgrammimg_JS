// Generating Random Years from 1900 to 2900
function generateRandomYear() {
    return Math.round(Math.random() * 1000 + 1900);
}

let year = generateRandomYear();
checkLeapYear(year);

function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}