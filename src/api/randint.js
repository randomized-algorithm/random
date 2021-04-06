import random from './random.js';
import _randint from '../kernel/_randint.js';

/**
 * Returns an integer in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 *
 * @function
 * @param {number} i The inclusive left bound
 * @param {number} j The non-inclusive right bound
 * @return {number} An integer in the interval [i, j[ taken uniformly at
 * random.
 */
const randint = _randint(random);
export default randint;
