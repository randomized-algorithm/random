
var util, type;

util = require( "util" );

type = require( "aureooms-js-type" );



test( "randfloat", function () {

	var i, n, r, ri, rj, check;

	n = 5000;
	ri = -n;
	rj = n;

	check = function () {
		ok( r < rj, util.format( "%s < %s", r, rj ) );
		ok( r >= ri, util.format( "%s >= %s", r, ri ) );
		ok( type.isfinite(r), util.format( "type.isint(%s)", r ) );
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
