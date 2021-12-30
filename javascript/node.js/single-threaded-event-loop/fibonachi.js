const getFibonacciNumber = (num) => {
    if (num === 0) {
        return 0;
    }
    else if (num === 1) {
        return 1;
    }
    else {
        return getFibonacciNumber(num - 1) + getFibonacciNumber(num - 2);
    }
}

exports.getFibonacciNumber = getFibonacciNumber;