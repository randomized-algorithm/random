
/**
 * Returns an integer in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

export function randint ( i , j ) {
	return i + Math.floor( Math.random( ) * ( j - i ) ) ;
}

