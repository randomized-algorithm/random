import test from 'ava';
import {randrange} from '../../src/index.js';

import type from '@aureooms/js-type';

test('randrange without step', (t) => {
	let r;

	const n = 5000;
	let ri = -n;
	let rj = n;

	const check = () => {
		t.true(r < rj, `${r} < ${rj}`);
		t.true(r >= ri, `${r} >= ${ri}`);
		t.true(type.isint(r), `type.isint(${r})`);
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
