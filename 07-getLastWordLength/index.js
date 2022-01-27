export const getLastWordLength = str => {
	if (str.length == 0) {
		return 0;
	} else {
		let array = str.split(' ').reverse();
		for (let i = 0; i < array.length; i++) {
			if (array[i].length > 0) {
				return array[i].length;
			}
		}
	}
};