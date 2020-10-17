/**
 * Remove a specific item from an array
 * Note: Mutable
 * @param {*} arr 
 * @param {*} value 
 */
function removeItem(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

/* Demo */
const array = [1, 2, 3, 4, 2, 5];

console.log('Input: ', array);

console.log('Result: ', removeItem(array, 2));

console.log('Original: ', array);