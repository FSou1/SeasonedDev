/**
 * Remove (filter) all occurrences of an item from an array
 * Note: Immutable
 * @param {*} arr 
 * @param {*} value 
 */
function removeItemAll(arr, value) {
    return arr.filter(element => element !== value);
}

/* Demo */
const array = [1, 2, 3, 4, 2, 5];

console.log('Input: ', array);

console.log('Result: ', removeItemAll(array, 2));

console.log('Original: ', array);