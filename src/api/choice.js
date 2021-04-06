import _choice from '../kernel/_choice.js';
import randint from './randint.js';

/**
 * Sample a single element from an array.
 *
 * @function
 * @param {Array} a The input array.
 * @param {number} i Inclusive left bound.
 * @param {number} j Non-inclusive right bound.
 * @return {any} The sampled element.
 */
const choice = _choice(randint);
export default choice;
