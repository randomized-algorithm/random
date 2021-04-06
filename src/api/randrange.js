import randint from './randint.js';

/**
 * Pick an element from range(start, stop, step) uniformly at random.
 *
 * Return an element from range(start, stop, step) selected uniformly at random.
 * If step is positive, this set corresponds to
 * {x: x in [start, stop[ AND x % step = 0}.
 * If step is negative, the range has to be given in reverse order, that is,
 * largest value first, smallest value second. Both the starting value and the
 * step value are optional. By default the starting value is <code>0</code>.
 * The default for the step value is <code>1</code>.
 *
 * TODO: Handle empty ranges.
 *
 * @param {number} [start=0] - The starting value.
 * @param {number} stop - The stopping value.
 * @param {number} [step=1] - The step value.
 * @return {number} The picked element.
 */
const randrange = (start, stop, step) => {
	if (stop === undefined) return randint(0, start);
	if (step === undefined) step = 1;

	if (stop >= start) {
		return start + step * randint(0, Math.floor((stop - start) / step));
	}

	return start + step * randint(0, Math.floor((start - stop) / -step));
};

export default randrange;
