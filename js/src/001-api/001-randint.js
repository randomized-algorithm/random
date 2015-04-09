
/**
 * Returns an integer in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

var randint = function ( i , j ) {
	return i + Math.floor( Math.random( ) * ( j - i ) ) ;
} ;

exports.randint = randint ;
