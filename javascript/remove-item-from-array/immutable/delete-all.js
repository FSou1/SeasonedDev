/**
 * Delete (map) all occurrences of an item from an array
 * Note: Immutable
 * @param {*} arr 
 * @param {*} value 
 */
function deleteItemAll(arr, value) {
    return arr.map(element => element === value ? undefined : element);
}

/* Demo */
const array = [1, 2, 3, 4, 2, 5];

console.log('Input: ', array);

console.log('Result: ', deleteItemAll(array, 2));

console.log('Original: ', array);