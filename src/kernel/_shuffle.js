
/**
 * Shuffle array by sampling the complete array.
 */

export function _shuffle ( sample ) {

	const shuffle = function ( a , i , j ) {
		sample( j - i , a , i , j ) ;
	} ;

	return shuffle ;

}

