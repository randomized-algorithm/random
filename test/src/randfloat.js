import test from 'ava';
import {randfloat} from '../../src/index.js';

test('randfloat', (t) => {
	let r;

	const n = 5000;
	let ri = -n;
	let rj = n;

	const check = () => {
		t.true(r < rj, `${r} < ${rj}`);
		t.true(r >= ri, `${r} >= ${ri}`);
		t.true(Number.isFinite(r), `Number.isFinite(${r})`);
	};

	for (let i = 0; i < n; ++i) {
		r = randfloat(ri, rj);

		check();

		++ri;
	}

	for (let i = 0; i < n; ++i) {
		r = randfloat(ri, rj);

		check();

		--ri;
		--rj;
	}

	for (let i = 0; i < n; ++i) {
		r = randfloat(ri, rj);

		check();

		++rj;
	}
});
