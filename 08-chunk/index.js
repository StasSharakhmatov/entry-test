// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
	let array = [];
	for (let i = size; i <= arr.length; i + size) {
		array.push(arr.splice(i));
	}
	array.unshift(arr);
	return array;
};