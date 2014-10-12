
/**
 * Returns a floating point number in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

var randfloat = function ( i, j ) {
	return i + Math.random() * (j - i);
};

exports.randfloat = randfloat;
