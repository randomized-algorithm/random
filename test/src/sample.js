import test from 'ava';
import {sample, _fisheryates, randint} from '../../src/index.js';

import {range} from '@iterable-iterator/range';
import {increasing} from '@total-order/primitive';

const macro = (t, type, _, sample, n, k, i, j) => {
	const a = type.from(range(n));
	const b = type.from(a);

	sample(k, b, i, j);

	for (let it = 0; it < i; ++it) {
		const msg = `b[${it}] === a[${it}]`;
		t.deepEqual(b[it], a[it], msg);
	}

	const _a = Array.prototype.slice.call(a, i, j).sort(increasing);
	const _b = Array.prototype.slice.call(b, i, j).sort(increasing);

	const msg = 'shuffled region contains same elements as original';

	t.deepEqual(_b, _a, msg);

	for (let it = j; it < n; ++it) {
		const msg = `b[${it}] === a[${it}]`;
		t.deepEqual(b[it], a[it], msg);
	}
};

macro.title = (title, type, sample_name, _, n, k, i, j) =>
	title || `[${n}] sample ( ${type.name}, ${sample_name}, ${k}, ${i}, ${j} )`;

const n = 100;
const params = [
	[n, n, 0, n],
	[n, n - 20, 20, n],
	[n, n - 20, 0, n - 20],
	[n, n - 20, 10, n - 10],
	[n, n - 30, 10, n - 10],
];

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
	['Fisher-Yates', _fisheryates(randint)],
	['API', sample],
];

for (const type of types) {
	for (const [name, algorithm] of algorithms) {
		for (const [n, k, i, j] of params) {
			test(macro, type, name, algorithm, n, k, i, j);
		}
	}
}
