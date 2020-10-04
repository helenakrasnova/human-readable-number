const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
];
const dozens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
];

module.exports = function toReadable(number) {

    if (number < 20) {
        return digits[number];
    }
    else if (number >= 20 && number < 100) {
        return processTwoDigits(number);
    }
    else if (number >= 100) {
        let quotient = Math.floor(number / 100);
        let reminder = number % 100;
        let result = digits[quotient] + ' hundred';
        if (reminder < 20 && reminder!==0) {
            return result + ' ' + digits[reminder];
        }
        
        return reminder !== 0 ? result + ' ' + processTwoDigits(reminder) : result;
    }
}
function processTwoDigits(number) {
    let quotient = Math.floor(number / 10);
    let remainder = number % 10;
    let result = dozens[quotient - 2];
    return remainder === 0 ? result : result + ' ' + digits[remainder];
}

