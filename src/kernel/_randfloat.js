/**
 * Builds a randfloat function given a random number generator.
 *
 * @param {Function} random A function taking no arguments that returns a
 * double uniformly at random in the interval [0, 1).
 *
 * @return {Function} A randfloat function.
 */
const _randfloat = (random) => {
	/**
	 * Returns a double in interval [i, j[ (i included, j excluded)
	 * according to a uniform distribution.
	 *
	 * @param {number} i The inclusive left bound
	 * @param {number} j The non-inclusive right bound
	 * @return {number} A double in the interval [i, j[ taken uniformly at
	 * random.
	 */
	const randfloat = (i, j) => i + random() * (j - i);
	return randfloat;
};

export default _randfloat;
