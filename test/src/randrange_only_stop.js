import test from 'ava';
import * as random from '../../src';


import util from "util" ;

import type from "aureooms-js-type" ;



test( "randrange only stop", t => {

	var i, n, r, rj, check;

	n = 5000;
	rj = n;

	check = function () {
		t.truthy( r < rj, util.format( "%s < %s", r, rj ) );
		t.truthy( r >= 0, util.format( "%s >= %s", r, 0 ) );
		t.truthy( type.isint(r), util.format( "type.isint(%s)", r ) );
	};

	for ( i = 1 ; i < n ; ++i ) {
		r = random.randrange( rj );

		check();

		--rj;
	}

	for ( i = 1 ; i < n ; ++i ) {
		r = random.randrange( rj );

		check();

		++rj;
	}


});
