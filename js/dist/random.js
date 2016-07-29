( function ( ) {

'use strict' ;

var definition = function ( exports , undefined ) {


/* js/src/000-kernel */
/* js/src/000-kernel/fisheryates.js */

/**
 * Sample array using Fisher-Yates method.
 */

var _fisheryates = function ( randint ) {

	var fisheryates = function ( n , a , i , j ) {

		var k , p , tmp ;

		// we will swap at most n elements

		k = i + n ;

		for ( ; i < k ; ++i ) {

			// choose any index p in the remaining array

			p = randint( i , j ) ;


			// swap element at index p with first element in the array

			tmp  = a[i] ;
			a[i] = a[p] ;
			a[p] =  tmp ;

		}

	} ;

	return fisheryates ;

} ;

exports._fisheryates = _fisheryates ;

/* js/src/000-kernel/shuffle.js */

/**
 * Shuffle array by sampling the complete array.
 */

var _shuffle = function ( sample ) {

	var shuffle = function ( a , i , j ) {
		sample( j - i , a , i , j ) ;
	} ;

	return shuffle ;

} ;

exports._shuffle = _shuffle ;

/* js/src/001-api */
/* js/src/001-api/000-randfloat.js */

/**
 * Returns a floating point number in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

var randfloat = function ( i , j ) {
	return i + Math.random( ) * ( j - i ) ;
} ;

exports.randfloat = randfloat ;

/* js/src/001-api/001-randint.js */

/**
 * Returns an integer in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

var randint = function ( i , j ) {
	return i + Math.floor( Math.random( ) * ( j - i ) ) ;
} ;

exports.randint = randint ;

/* js/src/001-api/002-randrange.js */

/**
 * Return a randomly selected element from range(start, stop, step).
 */

var randrange = function ( start , stop , step ) {

	// TODO handle empty ranges

	if ( stop === undefined ) return randint( 0 , start ) ;
	if ( step === undefined ) step = 1 ;

	if ( stop >= start ) {
		return start + step * randint( 0 , Math.floor( ( stop - start ) / step ) ) ;
	}
	else {
		return start + step * randint( 0 , Math.floor( ( start - stop ) / -step ) ) ;
	}

} ;

exports.randrange = randrange ;

/* js/src/001-api/003-sample.js */

var sample = _fisheryates( randint ) ;

exports.sample = sample ;

/* js/src/001-api/004-shuffle.js */

var shuffle = _shuffle( sample ) ;

exports.shuffle = shuffle ;

return exports ;
} ;
if ( typeof exports === "object" ) {
	definition( exports ) ;
}
else if ( typeof define === "function" && define.amd ) {
	define( "aureooms-js-random" , [ ] , function ( ) { return definition( { } ) ; } ) ;
}
else if ( typeof window === "object" && typeof window.document === "object" ) {
	definition( window["random"] = { } ) ;
}
else console.error( "unable to detect type of module to define for aureooms-js-random") ;
} )( ) ;
