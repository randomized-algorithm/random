/**
 * Builds a randint function given a random number generator.
 *
 * @param {Function} random A function taking no arguments that returns a
 * double uniformly at random in the interval [0, 1).
 *
 * @return {Function} A randint function.
 */
const _randint = (random) => {
	/**
	 * Returns an integer in interval [i, j[ (i included, j excluded)
	 * according to a uniform distribution.
	 *
	 * @param {number} i The inclusive left bound
	 * @param {number} j The non-inclusive right bound
	 * @return {number} An integer in the interval [i, j[ taken uniformly at
	 * random.
	 */
	const randint = (i, j) => i + Math.floor(random() * (j - i));
	return randint;
};

export default _randint;
