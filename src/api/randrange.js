import { randint } from './randint' ;

/**
 * Return a randomly selected element from range(start, stop, step).
 */

export function randrange ( start , stop , step ) {

	// TODO handle empty ranges

	if ( stop === undefined ) return randint( 0 , start ) ;
	if ( step === undefined ) step = 1 ;

	if ( stop >= start ) {
		return start + step * randint( 0 , Math.floor( ( stop - start ) / step ) ) ;
	}
	else {
		return start + step * randint( 0 , Math.floor( ( start - stop ) / -step ) ) ;
	}

}

