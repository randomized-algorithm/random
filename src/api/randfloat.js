/**
 * Returns a floating point number in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

const randfloat = (i, j) => i + Math.random() * (j - i);
export default randfloat;
