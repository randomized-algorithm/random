
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
