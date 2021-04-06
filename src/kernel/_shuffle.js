/**
 * Shuffle array by sampling the complete array.
 */

const _shuffle = (sample) => (a, i, j) => sample(j - i, a, i, j);
export default _shuffle;
