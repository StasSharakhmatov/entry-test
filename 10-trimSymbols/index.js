/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
// export function trimSymbols(string, size) {
// 	let arr = string.split('');
// 	let arr2 = [];
// 	for (let i = 0; i < string.length; i++) {
// 		if (arr[i] == arr[i - 1]) {
// 			arr2.push(arr.shift());
// 		}
// 	}
// 	return arr;
// }

// export function trimSymbols(string, size) {
// 	let sum = 0;
// 	for (i = 0; i <= string.length; i++) {
// 		for (j = 1; j <= string.length; j++) {
// 		if (string[i] == string[j]) {
// 			sum += 1;
// 		}
// 	}
// }
// 	return sum;
// }