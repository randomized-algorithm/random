import _fisheryates_inside_out from '../kernel/_fisheryates_inside_out.js';
import randint from './randint.js';

/**
 * Given an input iterable, constructs an array containing the elements of the
 * input shuffled uniformly at random.
 *
 * @function
 * @param {Iterable} iterable The input iterable.
 * @param {Array} [output=[]] The constructed array.
 * @return {Array} The constructed array.
 */
const shuffled = _fisheryates_inside_out(randint);
export default shuffled;
