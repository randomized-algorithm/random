/**
 * Construct a sampling function using Algorithm R due to Alan Waterman (both
 * name and attribution are due to Knuth).
 *
 * @param {Function} randint The randint function.
 * @return {Function} The sample function.
 */
const _waterman = (randint) => {
	/**
	 * Samples k items uniformly at random from an iterable of unknown size.
	 *
	 * We want each item to have probability k/n of being selected.
	 *
	 * The algorithm works as follows:
	 *   1. We initialize a candidate sample with the first k items.
	 *   2. For each remaining item i, decide whether to insert it in the
	 *   candidate sample with probability k/i, evicting an item from the
	 *   candidate sample at random, or to discard it immediately (with
	 *   probability 1-k/i),
	 *
	 * To prove that the obtained probability of inclusion for each item is correct
	 * we multiply two probabilities:
	 *   1. The probability of entering the candidate sample.
	 *   2. The probability of staying in the candidate sample until the end.
	 *
	 * For items 1 to k, probability 1. is 1, and probability 2. is
	 * (1-1/(k+1))(1-1/(k+2))...(1-1/n)
	 * = (k/(k+1))((k+1)/(k+2))...((n-1)/n) which telescopes to k/n.
	 *
	 * For items i = k+1 to n, where probability 1. is k/i, and probability 2.
	 * is (1-1/(i+1))(1-1/(i+2))...(1-1/n)
	 * = (i/(i+1))((i+1)/(i+2))...((n-1)/n) which telescopes to i/n.
	 *
	 * NOTE: Could also implement so that it yields after each input item.
	 * NOTE: One can reduce the expected number of random bits needed by
	 * avoiding generating any number above k-1:
	 *   - First we branch on whether i < k.
	 *   - Then we generate the random number between 0 and k-1 only if needed.
	 *
	 * To decide on the branch, flip a biased coin with parameter p = k/n.
	 * To do so, flip a fair coin until it differs from the binary
	 * representation of k/n (0.10110101...).
	 * The computation can be made efficient by realizing several things:
	 *   - k is fixed and smaller than n (so divmod step can be skipped)
	 *   - k/(n+1) < k/n (so we can avoid recomputing if the biased flip > k/n)
	 *
	 * This would reduce the number of necessary random bits from O(n log n) to
	 * expected O(n).
	 *
	 * @param {number} k The size of the sample.
	 * @param {Iterable} iterable The input iterable.
	 * @param {Array} [output=new Array(k)] The output array.
	 * @return {Array} The output array.
	 */
	const sample = (k, iterable, output = new Array(k)) => {
		const it = iterable[Symbol.iterator]();

		let n = 0;

		for (; n < k; ++n) {
			const {value, done} = it.next();
			if (done) return output;
			output[n] = value;
		}

		for (; ; ++n) {
			const {value, done} = it.next();
			if (done) return output;
			const i = randint(0, n);
			if (i < k) output[i] = value;
		}
	};

	return sample;
};

export default _waterman;
