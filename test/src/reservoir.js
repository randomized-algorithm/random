import test from 'ava';
import {range} from '@aureooms/js-itertools';
import {increasing} from '@aureooms/js-compare';
import {RedBlackTree} from '@aureooms/js-red-black-tree';
import {reservoir, _waterman, randint} from '../../src/index.js';

const macro = (t, _, reservoir, k, n) => {
	const sample = reservoir(k, range(n));
	const source = RedBlackTree.from(increasing, range(n));
	// We cannot use a Set as it would smoosh input duplicates

	console.debug({sample});
	t.is(sample.length, k);
	for (const i of range(Math.min(k, n))) t.true(source.remove(sample[i]));
	for (const i of range(n, k)) t.true(sample[i] === undefined);
};

macro.title = (title, algo, _, k, n) =>
	title || `[${algo}] reservoir(${k}, range(${n}))`;

const algorithms = [
	['Waterman', _waterman(randint)],
	['API', reservoir],
];

const params = [
	[0, 10],
	[5, 10],
	[10, 5],
	[10, 10],
	[50, 1000],
];

for (const [name, algorithm] of algorithms) {
	for (const [k, input] of params) {
		test(macro, name, algorithm, k, input);
	}
}
