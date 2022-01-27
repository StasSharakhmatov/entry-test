export const sameParityFilter = (arr = []) => {
	let array = [];
	for (let i = 0; i <= arr.length; i++) {
		if (arr[0] % 2 == 0) {
			if (arr[i] % 2 == 0) {
				array.push(arr[i]);
			}
		} else if (arr[0] % 2 !== 0) {
			if (arr[i] % 2 !== 0) {
				array.push(arr[i]);
			}
		}
	}
	return array;
}