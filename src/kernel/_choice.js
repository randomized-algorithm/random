/**
 * Builds a choice function given a randint function.
 *
 * @param {Function} randint The randint function.
 * @return {Function} The choice function.
 */
const _choice = (randint) => {
	/**
	 * Sample a single element from an array.
	 *
	 * @param {Array} a The input array.
	 * @param {number} i Inclusive left bound.
	 * @param {number} j Non-inclusive right bound.
	 * @return {any} The sampled element.
	 */
	const choice = (a, i, j) => {
		const x = randint(i, j);
		return a[x];
	};

	return choice;
};

export default _choice;
