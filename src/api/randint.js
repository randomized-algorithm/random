/**
 * Returns an integer in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

const randint = (i, j) => i + Math.floor(Math.random() * (j - i));
export default randint;
