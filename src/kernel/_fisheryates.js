/**
 * Sample array using Fisher-Yates method.
 */

const _fisheryates = (randint) => (n, a, i, j) => {
	// We will swap at most n elements

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
