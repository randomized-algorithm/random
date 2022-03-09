import test from 'ava';

import {range} from '@iterable-iterator/range';
import {increasing} from '@total-order/primitive';
import {shuffle, _shuffle, sample, _fisheryates, randint} from '#module';

const macro = (t, type, _, shuffle, n, i, j) => {
	const a = type.from(range(n));
	const b = type.from(a);

	shuffle(b, i, j);

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

macro.title = (title, type, shuffle_name, _, n, i, j) =>
	title || `[${n}] shuffle ( ${type.name}, ${shuffle_name}, ${i}, ${j} )`;

const n = 100;

const params = [
	[n, 0, n],
	[n, 20, n],
	[n, 0, n - 20],
	[n, 10, n - 10],
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
	['shuffle based on Fisher-Yates', _shuffle(_fisheryates(randint))],
	['shuffle based on sample', _shuffle(sample)],
	['API', shuffle],
];

for (const type of types) {
	for (const [name, algorithm] of algorithms) {
		for (const [n, i, j] of params) {
			test(macro, type, name, algorithm, n, i, j);
		}
	}
}
