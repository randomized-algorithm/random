import test from 'ava';
import {randrange} from '../../src/index.js';

test('randrange without step', (t) => {
	let r;

	const n = 5000;
	let ri = -n;
	let rj = n;

	const check = () => {
		t.true(r < rj, `${r} < ${rj}`);
		t.true(r >= ri, `${r} >= ${ri}`);
		t.true(Number.isInteger(r), `Number.isInteger(${r})`);
	};

	for (let i = 0; i < n; ++i) {
		r = randrange(ri, rj);

		check();

		++ri;
	}

	for (let i = 0; i < n; ++i) {
		r = randrange(ri, rj);

		check();

		--ri;
		--rj;
	}

	for (let i = 0; i < n; ++i) {
		r = randrange(ri, rj);

		check();

		++rj;
	}
});
