import test from 'ava';
import {randint} from '../../src/index.js';

test('randint', (t) => {
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
		r = randint(ri, rj);

		check();

		++ri;
	}

	for (let i = 0; i < n; ++i) {
		r = randint(ri, rj);

		check();

		--ri;
		--rj;
	}

	for (let i = 0; i < n; ++i) {
		r = randint(ri, rj);

		check();

		++rj;
	}
});
