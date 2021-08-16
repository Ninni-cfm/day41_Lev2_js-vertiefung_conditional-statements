//************************************************************************************************
function playGame() {
    let sizeJohn = getValue("sizeJohn");
    let ageJohn = getValue("ageJohn");
    let sizeMeike = getValue("sizeMeike");
    let ageMeike = getValue("ageMeike");

    let pointsJohn = ageJohn * 5 + sizeJohn;
    let pointsMeike = ageMeike * 5 + sizeMeike;

    setValue("pointsJohn", pointsJohn);
    setValue("pointsMeike", pointsMeike);

    if (pointsJohn > pointsMeike) {
        setValue("resultGame", "John has won!");
    } else if (pointsJohn < pointsMeike) {
        setValue("resultGame", "Meike has won!");
    } else {
        setValue("resultGame", "Draw! Nobody has won!");
    }
}

//************************************************************************************************
function checkDifference() {
    let num = getValue("numDiff");
    let diff = absoluteNumber(num - 27);
    if (diff > 27) {
        setValue("resultDiff", (diff * 2) + " (*2!)");
    }
    else {
        console.log(diff * 2);
        setValue("resultDiff", diff);
    }

}

//************************************************************************************************
function sumValues() {
    let num1 = getValue("numSum1");
    let num2 = getValue("numSum2");

    let sum = calculate(num1, num2);
    setValue("resultSum", calculate(num1, num2));
}
function calculate(num1, num2) {
    let sum = num1 + num2;
    if (num1 == num2) {
        sum *= 5;
        sum += " (equal numbers => sum * 5!)"
    }
    return sum;
}

//************************************************************************************************
// little helper functions
function getValue(id) {
    let val = document.getElementById(id).value;
    return Number(val != null && val != undefined ? val : 0);
}
function setValue(id, value) {
    document.getElementById(id).innerHTML = value;
}
// Replacement for Math.abs(number)...
function absoluteNumber(num) {
    return num < 0 ? num * -1 : num;
}
