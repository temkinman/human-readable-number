const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
module.exports = function toReadable(number) {
    const numStr = number.toString();

    if (number === 0) {
        return "zero";
    }

    if (number < 100) {
        return getStringUntilHunred(number);
    }

    if (number < 1000) {
        let result = "";
        if (number % 100 === 0) return ones[numStr[0]] + " hundred";
        else {
            result += ones[numStr[0]] + " hundred ";
            result += getStringUntilHunred(number % 100);
            return result;
        }
    }
};

function getStringUntilHunred(number) {
    const numStr = number.toString();
    if (number < 20) {
        return ones[number];
    }
    if (number % 10 === 0) {
        return tens[numStr[0]];
    }
    return tens[numStr[0]] + " " + ones[numStr[1]];
}
