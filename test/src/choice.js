import test from 'ava';
import {choice, _choice, randint} from '../../src/index.js';

import {range} from '@iterable-iterator/range';

const macro = (t, type, _, choice, n, i, j) => {
	const a = type.from(range(n));
	const b = type.from(a);

	const x = choice(b, i, j);

	t.deepEqual(b, a);
	t.true(a.slice(i, j).includes(x));
};

macro.title = (title, type, choice_name, _, n, i, j) =>
	title || `[${n}] choice ( ${type.name}, ${choice_name}, ${i}, ${j} )`;

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
	['kernel', _choice(randint)],
	['API', choice],
];

for (const type of types) {
	for (const [name, algorithm] of algorithms) {
		for (const [n, i, j] of params) {
			test(macro, type, name, algorithm, n, i, j);
		}
	}
}
