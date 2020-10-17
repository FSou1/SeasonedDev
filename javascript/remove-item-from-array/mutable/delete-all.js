/**
 * Delete all occurrences of an item from an array
 * Note: Mutable
 * @param {*} arr 
 * @param {*} value 
 */
function deleteItemAll(arr, value) {
    while ((index = arr.indexOf(value)) > -1) {
        delete arr[index];
    }
    return arr;
}

/* Demo */
const array = [1, 2, 3, 4, 2, 5];

console.log('Input: ', array);

console.log('Result: ', deleteItemAll(array, 2));

console.log('Original: ', array);