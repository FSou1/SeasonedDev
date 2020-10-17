/**
 * Delete an item from an array
 * Note: Mutable
 * @param {*} arr 
 * @param {*} value 
 */
function deleteItem(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        delete arr[index];
    }
    return arr;
}

/* Demo */
const array = [1, 2, 3, 4, 2, 5];

console.log('Input: ', array);

console.log('Result: ', deleteItem(array, 2));

console.log('Original: ', array);