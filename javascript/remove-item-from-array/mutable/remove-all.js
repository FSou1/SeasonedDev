/**
 * Remove all occurrences of an item from an array
 * Note: Mutable
 * @param {*} arr 
 * @param {*} value 
 */
function removeItemAll(arr, value) {
    while ((index = arr.indexOf(value)) > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

/* Demo */
const array = [1, 2, 3, 4, 2, 5];

console.log('Input: ', array);

console.log('Result: ', removeItemAll(array, 2));

console.log('Original: ', array);