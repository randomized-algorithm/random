
/**
 * Sample array using Fisher-Yates method.
 */

export function _fisheryates ( randint ) {

	const fisheryates = function ( n , a , i , j ) {

		// we will swap at most n elements

		const k = i + n ;

		for ( ; i < k ; ++i ) {

			// choose any index p in the remaining array

			const p = randint( i , j ) ;


			// swap element at index p with first element in the array

			const tmp  = a[i] ;
			a[i] = a[p] ;
			a[p] =  tmp ;

		}

	} ;

	return fisheryates ;

}

