(function(exports, undefined){

	'use strict';


/* js/src/fisheryates.js */

/**
 * Sample array using Fisher-Yates method.
 */

var __fisheryates__ = function ( randint ) {

	var fisheryates = function ( n, a, i, j ) {

		var k, p, tmp;

		// we will swap at most n elements

		k = i + n;

		for ( ; i < k ; ++i ) {

			// choose any index p in the remaining array

			p = randint( i, j );


			// swap element at index p with first element in the array

			tmp  = a[i];
			a[i] = a[p];
			a[p] = tmp;

		}

	};

	return fisheryates;

};

exports.__fisheryates__ = __fisheryates__;
exports.__sample__ = __fisheryates__;

/* js/src/randfloat.js */

/**
 * Returns a floating point number in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

var randfloat = function ( i, j ) {
	return i + Math.random() * (j - i);
};

exports.randfloat = randfloat;

/* js/src/randint.js */

/**
 * Returns an integer in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

var randint = function ( i, j ) {
	return i + Math.floor( Math.random() * (j - i) );
};

exports.randint = randint;

/* js/src/shuffle.js */

/**
 * Shuffle array by sampling the complete array.
 */

var __shuffle__ = function ( sample ) {

	var shuffle = function ( a, i, j ) {
		sample(j - i, a, i, j);
	};

	return shuffle;
};

exports.__shuffle__ = __shuffle__;

})(typeof exports === 'undefined' ? this['random'] = {} : exports);
