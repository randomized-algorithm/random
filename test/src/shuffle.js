import test from 'ava';
import * as random from "../../src/index.js";


import util from "util" ;

import * as mem from "@aureooms/js-memory" ;
import * as array from "@aureooms/js-array" ;
import operator from "@aureooms/js-operator" ;


function one ( type, shuffle_name, shuffle ) {

	const type_name = type.toString().split(' ')[1].slice(0,-2) ;

	const calloc = mem._calloc( type );

	const n = 100;

	const a = calloc( n );
	const b = calloc( n );

	array.iota( a, 0, n, 0 );

	const range = function ( i, j ) {

		const name = util.format( "shuffle ( %s , %s , %s, %s )", type_name , shuffle_name , i, j );

		test( name, t => {

			array.copy( a, 0, n, b, 0 );
			shuffle( b, i, j );

			for ( let it = 0 ; it < i ; ++it ) {
				const msg = util.format( "b[%d] === a[%d]", it, it );
				t.deepEqual( b[it], a[it], msg );
			}

			const _a = Array.prototype.slice.call( a, i, j ).sort( operator.sub );
			const _b = Array.prototype.slice.call( b, i, j ).sort( operator.sub );

			const msg = "shuffled region contains same elements as original";

			t.deepEqual( _b, _a, msg );

			for ( let it = j ; it < n ; ++it ) {
				const msg = util.format( "b[%d] === a[%d]", it, it );
				t.deepEqual( b[it], a[it], msg );
			}

		});
	};


	range( 0, n );
	range( 20, n );
	range( 0, n - 20 );
	range( 10, n - 10 );

};

const types = [
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

const algorithms = [
	[ 'shuffle based on Fisher-Yates' , random._shuffle( random._fisheryates( random.randint ) ) ],
	[ 'shuffle based on random.sample' , random._shuffle( random.sample ) ],
	[ 'API' , random.shuffle ],
];

types.forEach( function ( type ) {

	algorithms.forEach( function ( [name, algorithm] ) {

		one( type, name, algorithm );

	});

});
