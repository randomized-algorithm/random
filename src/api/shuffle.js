import _shuffle from '../kernel/_shuffle.js';
import sample from './sample.js';

/**
 * Shuffle array in-place between positions i and j-1 (inclusive).
 * The other positions are left untouched.
 * @function
 * @param {Array} a The input array.
 * @param {number} i The inclusive left bound.
 * @param {number} j The non-inclusive right bound.
 */
const shuffle = _shuffle(sample);
export default shuffle;
