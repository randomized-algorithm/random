import test from 'ava';
import {randrange} from '#module';

test('randrange with positive step', (t) => {
	let r;
	let step;

	const n = 5000;
	let ri = -n;
	let rj = n;

	const check = () => {
		t.true(r < rj, `${r} < ${rj}`);
		t.true(r >= ri, `${r} >= ${ri}`);
		t.true((r - ri) % step === 0, `(${r} - ${ri}) % ${step} === 0`);
		t.true(Number.isInteger(r), `Number.isInteger(${r})`);
	};

	for (step = 1; step <= 3; ++step) {
		for (let i = 0; i < n; ++i) {
			r = randrange(ri, rj, step);

			check();

			++ri;
		}

		for (let i = 0; i < n; ++i) {
			r = randrange(ri, rj, step);

			check();

			--ri;
			--rj;
		}

		for (let i = 0; i < n; ++i) {
			r = randrange(ri, rj, step);

			check();

			++rj;
		}
	}
});
