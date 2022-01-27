/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
	let myObject = {};
	let arr1 = Object.keys(fruits);
    let arr2 = arr1.filter(par => !fields.includes(par)).join('');
    myObject[arr2] = obj[arr2];
    return myObject;
};