import test from 'ava';
import * as random from '../../src';


import util from "util" ;

import type from "aureooms-js-type" ;



test( "randfloat", t => {

	var i, n, r, ri, rj, check;

	n = 5000;
	ri = -n;
	rj = n;

	check = function () {
		t.truthy( r < rj, util.format( "%s < %s", r, rj ) );
		t.truthy( r >= ri, util.format( "%s >= %s", r, ri ) );
		t.truthy( type.isfinite(r), util.format( "type.isint(%s)", r ) );
	};

	for ( i = 0 ; i < n ; ++i ) {
		r = random.randfloat( ri, rj );

		check();

		++ri;
	}

	for ( i = 0 ; i < n ; ++i ) {
		r = random.randfloat( ri, rj );

		check();

		--ri;
		--rj;
	}

	for ( i = 0 ; i < n ; ++i ) {
		r = random.randfloat( ri, rj );

		check();

		++rj;
	}


});
