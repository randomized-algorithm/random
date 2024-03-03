import _waterman from '../kernel/_waterman.js';

import randint from './randint.js';

/**
 * Reservoir sampling.
 *
 * @function
 * @param {number} k The size of the sample.
 * @param {Iterable} iterable The input iterable.
 * @param {Array} [output=new Array(k)] The output array.
 * @return {Array} The output array.
 */
const reservoir = _waterman(randint);
export default reservoir;
