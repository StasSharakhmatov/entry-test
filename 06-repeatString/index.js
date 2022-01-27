/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
	let str2 = '';
	for (let i = 0; i <= str.length; i++) {
		str2 += (str[i].repeat(i + 1) + '-')[0].toUpperCase() + (str[i].repeat(i + 1) + '-').slice(1);
	}
	return str2.slice(0, str2.length - 1);
}