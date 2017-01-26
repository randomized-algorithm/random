
/**
 * Returns a floating point number in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

export function randfloat ( i , j ) {
	return i + Math.random( ) * ( j - i ) ;
}

