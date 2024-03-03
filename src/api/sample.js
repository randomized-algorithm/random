import _fisheryates from '../kernel/_fisheryates.js';

import randint from './randint.js';

/**
 * Take a sample of size n (without replacement) from the items i through
 * j-1 of the input array. This is done in-place. The sample can be retrieved
 * from position i to i+n.
 *
 * @function
 * @param {number} n The size of the sample.
 * @param {Array} a The input array.
 * @param {number} i The inclusive left bound.
 * @param {number} j The non-inclusive right bound.
 */
const sample = _fisheryates(randint);
export default sample;
