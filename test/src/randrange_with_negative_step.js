import test from 'ava';
import * as random from '../../src';


import util from "util" ;

import type from "@aureooms/js-type" ;

test( "randrange with negative step", t => {

	var i, n, r, ri, rj, check , step;

	n = 5000;
	ri = -n;
	rj = n;

	check = function () {
		t.truthy( r <= rj, util.format( "%s <= %s", r, rj ) );
		t.truthy( r > ri, util.format( "%s > %s", r, ri ) );
		t.truthy( (rj - r) % (-step) === 0, util.format( "(%s - %s) %% (-%s) === 0", rj, r ,step ) );
		t.truthy( type.isint(r), util.format( "type.isint(%s)", r ) );
	};

	for ( step = -3 ; step <= -1 ; ++step ) {

		for ( i = 0 ; i < n ; ++i ) {
			r = random.randrange( rj, ri , step );

			check();

			++ri;
		}

		for ( i = 0 ; i < n ; ++i ) {
			r = random.randrange( rj, ri , step );

			check();

			--ri;
			--rj;
		}

		for ( i = 0 ; i < n ; ++i ) {
			r = random.randrange( rj, ri , step );

			check();

			++rj;
		}

	}

});
