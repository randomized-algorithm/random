import test from 'ava';
import * as random from '../../src/index.js';

import * as mem from '@aureooms/js-memory';
import * as array from '@aureooms/js-array';
import operator from '@aureooms/js-operator';

function one(type, sample_name, sample) {
	const type_name = type.toString().split(' ')[1].slice(0, -2);

	const calloc = mem._calloc(type);

	const n = 100;

	const a = calloc(n);
	const b = calloc(n);

	array.iota(a, 0, n, 0);

	const range = function (k, i, j) {
		const name = `sample ( ${type_name}, ${sample_name}, ${k}, ${i}, ${j} )`;

		test(name, (t) => {
			array.copy(a, 0, n, b, 0);
			sample(k, b, i, j);

			for (let it = 0; it < i; ++it) {
				const msg = `b[${it}] === a[${it}]`;
				t.deepEqual(b[it], a[it], msg);
			}

			const _a = Array.prototype.slice.call(a, i, j).sort(operator.sub);
			const _b = Array.prototype.slice.call(b, i, j).sort(operator.sub);

			const msg = 'shuffled region contains same elements as original';

			t.deepEqual(_b, _a, msg);

			for (let it = j; it < n; ++it) {
				const msg = `b[${it}] === a[${it}]`;
				t.deepEqual(b[it], a[it], msg);
			}
		});
	};

	range(n, 0, n);
	range(n - 20, 20, n);
	range(n - 20, 0, n - 20);
	range(n - 20, 10, n - 10);
	range(n - 30, 10, n - 10);
}

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
	Float64Array,
];

const algorithms = [
	['Fisher-Yates', random._fisheryates(random.randint)],
	['API', random.sample],
];

for (const type of types) {
	for (const [name, algorithm] of algorithms) {
		one(type, name, algorithm);
	}
}
