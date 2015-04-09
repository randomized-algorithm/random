
var util, operator, array, mem, one, calloc;;

util = require( "util" );

mem = require( "aureooms-js-mem" );
array = require( "aureooms-js-array" );
operator = require( "aureooms-js-operator" );


one = function ( type, sample ) {

	var calloc, a, b, n, range;

	calloc = mem.__calloc__( type );

	n = 100;

	a = calloc( n );
	b = calloc( n );

	array.iota( a, 0, n, 0 );

	range = function ( k, i, j ) {

		var name;

		name = util.format( "sample ( %s, %s, %s )", k, i, j );

		test( name, function () {

			var it, msg, _a, _b;

			array.copy( a, 0, n, b, 0 );
			sample( k, b, i, j );

			for ( it = 0 ; it < i ; ++it ) {
				msg = util.format( "b[%d] === a[%d]", it, it );
				deepEqual( b[it], a[it], msg );
			}

			_a = Array.prototype.slice.call( a, i, j ).sort( operator.sub );
			_b = Array.prototype.slice.call( b, i, j ).sort( operator.sub );

			msg = "shuffled region contains same elements as original";

			deepEqual( _b, _a, msg );

			for ( it = j ; it < n ; ++it ) {
				msg = util.format( "b[%d] === a[%d]", it, it );
				deepEqual( b[it], a[it], msg );
			}

		});
	};


	range( n, 0, n );
	range( n - 20, 20, n );
	range( n - 20, 0, n - 20 );
	range( n - 20, 10, n - 10 );
	range( n - 30, 10, n - 10 );



};

types = [
	Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
	Uint8ClampedArray,
	Float32Array,
	Float64Array
];

algorithms = [
	random._fisheryates( random.randint ),
	random.sample
];

types.forEach( function ( type ) {

	algorithms.forEach( function ( algorithm ) {

		one( type, algorithm );

	});

});
