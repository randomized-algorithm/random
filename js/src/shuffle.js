
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
