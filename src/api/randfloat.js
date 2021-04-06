import random from './random.js';
import _randfloat from '../kernel/_randfloat.js';

/**
 * Returns a double in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 *
 * @function
 * @param {number} i The inclusive left bound
 * @param {number} j The non-inclusive right bound
 * @return {number} A double in the interval [i, j[ taken uniformly at
 * random.
 */
const randfloat = _randfloat(random);
export default randfloat;
