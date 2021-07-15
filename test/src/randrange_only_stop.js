import test from 'ava';
import {randrange} from '../../src/index.js';

test('randrange only stop', (t) => {
	let r;

	const n = 5000;
	let rj = n;

	const check = () => {
		t.true(r < rj, `${r} < ${rj}`);
		t.true(r >= 0, `${r} >= 0`);
		t.true(Number.isInteger(r), `Number.isInteger(${r})`);
	};

	for (let i = 1; i < n; ++i) {
		r = randrange(rj);

		check();

		--rj;
	}

	for (let i = 1; i < n; ++i) {
		r = randrange(rj);

		check();

		++rj;
	}
});
