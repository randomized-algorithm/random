
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
