/**
 * Sample element from an array using Fisher-Yates method.
 *
 * NOTE: The original description of the algorithm by Fisher and Yates [1] had
 * unnecessary bookkeeping which made the algorithm run in O(n * (j-i)) time.
 * This implementation follows Durstenfeld's [2] and Knuth's [3] descriptions
 * which yield O(n) running time.
 *
 * For more information see the excellent "Fisher–Yates shuffle" page on
 * Wikipedia [4]. Fisher and Yates description is referred there as
 * "Fisher and Yate's original method" or "pencil-and-paper method".
 * The more efficient implementation described by Durstenfeld and Knuth is
 * referred there as "the modern method".
 *
 * [1] Fisher, Ronald A.; Yates, Frank (1938). Statistical tables for
 *     biological, agricultural and medical research.
 * [2] Durstenfeld, R. (July 1964). "Algorithm 235: Random permutation"
 * [3] Knuth, Donald E. (1969). Seminumerical algorithms. The Art of Computer
 *     Programming Volume 2.
 * [4] https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
 *
 * @param {Function} randint The randint function.
 * @return {Function} The sampling function.
 */
const _fisheryates = (randint) => {
	/**
	 * Take a sample of size n (without replacement) from the items i through
	 * j-1 of the input array. This is done in-place. The sample can be
	 * retrieved from position i to i+n.
	 *
	 * @param {number} n The size of the sample.
	 * @param {Array} a The input array.
	 * @param {number} i The inclusive left bound.
	 * @param {number} j The non-inclusive right bound.
	 */
	const sample = (n, a, i, j) => {
		// We will swap at most n elements
		// NOTE: When n = j - i, the last swap swaps a[j-1] with itself,
		// which is a NOOP. /!\ HOWEVER, the last swap is NOT a NOOP when
		// n < j - i. Hence we cannot let k = i + n - 1 in general.
		const k = i + n;

		for (; i < k; ++i) {
			// Choose any index p in the remaining array
			const p = randint(i, j);

			// Swap selected element with the first remaining element.
			const tmp = a[i];
			a[i] = a[p];
			a[p] = tmp;
		}
	};

	return sample;
};

export default _fisheryates;
