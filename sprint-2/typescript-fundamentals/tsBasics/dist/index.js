"use strict";
function positiveSum(arr) {
    let positiveNumbers = arr.filter(num => num > 0);
    let lengthOfNumbers = positiveNumbers.length;
    if (lengthOfNumbers > 0) {
        return positiveNumbers.reduce((prev, next) => prev + next, 0);
    }
    else {
        return 0;
    }
}
positiveSum([1, 2, 3, 4, 5]);
//# sourceMappingURL=index.js.map