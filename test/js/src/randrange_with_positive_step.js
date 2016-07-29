
var util, type;

util = require( "util" );

type = require( "aureooms-js-type" );

test( "randrange with positive step", function () {

	var i, n, r, ri, rj, check , step;

	n = 5000;
	ri = -n;
	rj = n;

	check = function () {
		ok( r < rj, util.format( "%s < %s", r, rj ) );
		ok( r >= ri, util.format( "%s >= %s", r, ri ) );
		ok( (r - ri) % step === 0, util.format( "(%s - %s) %% %s === 0", r, ri ,step ) );
		ok( type.isint(r), util.format( "type.isint(%s)", r ) );
	};

	for ( step = 1 ; step <= 3 ; ++step ) {

		for ( i = 0 ; i < n ; ++i ) {
			r = random.randrange( ri, rj , step );

			check();

			++ri;
		}

		for ( i = 0 ; i < n ; ++i ) {
			r = random.randrange( ri, rj , step );

			check();

			--ri;
			--rj;
		}

		for ( i = 0 ; i < n ; ++i ) {
			r = random.randrange( ri, rj , step );

			check();

			++rj;
		}

	}

});
