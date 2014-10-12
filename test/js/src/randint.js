
var util, type;

util = require( "util" );

type = require( "aureooms-js-type" );



test( "randint", function () {

	var i, n, r, ri, rj, check;

	n = 5000;
	ri = -n;
	rj = n;

	check = function () {
		ok( r < rj, util.format( "%s < %s", r, rj ) );
		ok( r >= ri, util.format( "%s >= %s", r, ri ) );
		ok( type.isint(r), util.format( "type.isint(%s)", r ) );
	};

	for ( i = 0 ; i < n ; ++i ) {
		r = random.randint( ri, rj );

		check();

		++ri;
	}

	for ( i = 0 ; i < n ; ++i ) {
		r = random.randint( ri, rj );

		check();

		--ri;
		--rj;
	}

	for ( i = 0 ; i < n ; ++i ) {
		r = random.randint( ri, rj );

		check();

		++rj;
	}


});
