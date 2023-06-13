const palindromes = function (str) {
    str = str.replace(/[\s!,.]/g, '').toLowerCase();
    console.log(str)
    return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
