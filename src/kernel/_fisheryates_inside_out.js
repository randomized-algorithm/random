/**
 * Shuffle elements of an iterable using an inside-out implementation of the
 * Fisher-Yates method.
 *
 * One can observe that if the input contains n elements, the loop has exactly
 * n! possible outcomes: one for the first iteration, two for the second, three
 * for the third, etc., the number of outcomes of a loop being the product of
 * the number of outcomes for each iteration. Given a perfect randint function,
 * each iteration's outcomes are equally likely, and independent of other
 * iterations outcomes.  The proof below shows that these outcomes are
 * distinct.
 *
 * To see that this method yields the correct result (assume perfect randint):
 *   1. Observe that it is correct when the input is empty.
 *   2. By induction:
 *     - Induction hypothesis: assume it is correct when the input consists of
 *       n elements.
 *     - We almost insert the (n+1)th element at one of the n+1 possible
 *       insertion position in the output array. Almost because we move the
 *       element that is at the insertion position at the end instead of
 *       shifting the elements right of the insertion position to make room for
 *       the inserted element.
 *     - Ideally, since we inserted the last element at one of the n+1
 *       positions, we would like that the elements inserted earlier form one
 *       of n! permutations uniformly at random after moving the element under
 *       the insertion position. This is true because the permutations that we
 *       obtain after this move are in one-to-one correspondance with the n!
 *       distinct permutations that can be obtained before the move. These are
 *       equally likely to be produced by the induction hypothesis.
 *
 * @param {Function} randint The randint function.
 * @return {Function} The sampling function.
 */
const _fisheryates_inside_out = (randint) => {
	/**
	 * Given an input iterable, constructs an array containing the elements of
	 * the input shuffled uniformly at random.
	 *
	 * @param {Iterable} iterable The input iterable.
	 * @param {Array} [output=[]] The constructed array.
	 * @return {Array} The constructed array.
	 */
	const shuffled = (iterable, output = []) => {
		let n = 0;
		for (const item of iterable) {
			const i = randint(-1, n);
			if (i === -1) output.push(item);
			else {
				output.push(output[i]);
				output[i] = item;
			}

			++n;
		}

		return output;
	};

	return shuffled;
};

export default _fisheryates_inside_out;
