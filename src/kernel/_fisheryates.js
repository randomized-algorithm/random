/**
 * Sample array using Fisher-Yates method.
 */

const _fisheryates = (randint) => (n, a, i, j) => {
	// We will swap at most n elements
	// NOTE: When n = j - i, the last swap swaps a[j-1] with itself,
	// which is a NOOP. /!\ HOWEVER, the last swap is NOT a NOOP when
	// n < j - i. Hence we cannot let k = i + n - 1 in general.
	const k = i + n;

	for (; i < k; ++i) {
		// Choose any index p in the remaining array

		const p = randint(i, j);

		// Swap element at index p with first element in the array

		const tmp = a[i];
		a[i] = a[p];
		a[p] = tmp;
	}
};

export default _fisheryates;
