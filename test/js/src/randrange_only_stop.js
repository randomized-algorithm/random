
var util, type;

util = require( "util" );

type = require( "aureooms-js-type" );



test( "randrange only stop", function () {

	var i, n, r, rj, check;

	n = 5000;
	rj = n;

	check = function () {
		ok( r < rj, util.format( "%s < %s", r, rj ) );
		ok( r >= 0, util.format( "%s >= %s", r, 0 ) );
		ok( type.isint(r), util.format( "type.isint(%s)", r ) );
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
