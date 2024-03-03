import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {sorted} from '@iterable-iterator/sorted';
import {increasing} from '@total-order/primitive';

import {shuffled, _fisheryates_inside_out, randint} from '#module';

const macro = (t, _, shuffle, i, j) => {
	const input = list(range(i, j));
	const output = shuffled(range(i, j));
	t.is(output.length, input.length);
	t.deepEqual(sorted(increasing, output), sorted(increasing, input));
};

macro.title = (title, shuffle_name, _, i, j) =>
	title || `[${n}] shuffled ( ${shuffle_name}, ${i}, ${j} )`;

const n = 100;

const params = [
	[0, n],
	[20, n],
	[0, n - 20],
	[10, n - 10],
];

const algorithms = [
	['inside-out Fisher-Yates', _fisheryates_inside_out(randint)],
	['API', shuffled],
];

for (const [name, algorithm] of algorithms) {
	for (const [i, j] of params) {
		test(macro, name, algorithm, i, j);
	}
}
