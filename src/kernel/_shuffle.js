/**
 * Shuffle the array by sampling the entire array.
 *
 * @param {Function} sample The sample function.
 * @return {Function} The shuffle function.
 */
const _shuffle = (sample) => {
	/**
	 * Shuffle array in-place between positions i and j-1 (inclusive).
	 * The other positions are left untouched.
	 *
	 * @param {Array} a The input array.
	 * @param {number} i The inclusive left bound.
	 * @param {number} j The non-inclusive right bound.
	 */
	const shuffle = (a, i, j) => sample(j - i, a, i, j);
	return shuffle;
};

export default _shuffle;
