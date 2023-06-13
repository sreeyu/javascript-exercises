const fibonacci = function(n) {
    n = Number(n);
    if(n <= 0){
        return "OOPS";
    }
    let prev1 = 1;
    let prev2 = 1;
    let current;
    if(n === 1 || n === 2){
        return prev1;
    }
    for (let i = 3; i <= n; i++){
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
