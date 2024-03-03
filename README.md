:game_die: [@randomized/random](https://randomized-algorithm.github.io/random)
==

<p align="center">
<a href="https://xkcd.com/1210">
<img src="https://imgs.xkcd.com/comics/im_so_random.png" width="600">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Randomness algorithms for JavaScript.
See [docs](https://randomized-algorithm.github.io/random/index.html).
Parent is [js-algorithms](https://make-github-pseudonymous-again.github.io/js-algorithms).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {
	randint , // randint(i, j) => [i, j[ \cap ZZ
	randfloat , // randfloat(i, j) => [i, j[
	sample , // sample(k, array, i, j) /!\ in-place (output is items i through i + k - 1)
	shuffle , // shuffle(array, i, j) /!\ in-place
	reservoir as sampled , // sampled(k, iterable[, output = []]) => sample array
	shuffled , // shuffled(iterable[, output = []]) => shuffled array
	choice , // choice(array, i, j) => item
	randrange , // randrange([start = 0,] stop[, step = 1]) => item
} from '@randomized/random' ;

// NOTE a specific entropy source can be used by constructing these functions
// from their low-level implementation, for instance

import {_fisheryates, _randint} from '@randomized/random';
import {splitmix64, nextFloat64} from '@entropy-source/pseudo-random';

const prng = splitmix64([123, 456]);
const random = () => nextFloat64(prng);
const randint = _randint(random);
const sample = _fisheryates(randint);
```

[![License](https://img.shields.io/github/license/randomized-algorithm/random.svg)](https://raw.githubusercontent.com/randomized-algorithm/random/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@randomized/random.svg)](https://www.npmjs.org/package/@randomized/random)
[![Tests](https://img.shields.io/github/actions/workflow/status/randomized-algorithm/random/ci.yml?branch=main&event=push&label=tests)](https://github.com/randomized-algorithm/random/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/randomized-algorithm/random.svg)](https://github.com/randomized-algorithm/random/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/randomized-algorithm/random.svg)](https://github.com/randomized-algorithm/random/issues)
[![Downloads](https://img.shields.io/npm/dm/@randomized/random.svg)](https://www.npmjs.org/package/@randomized/random)

[![Code issues](https://img.shields.io/codeclimate/issues/randomized-algorithm/random.svg)](https://codeclimate.com/github/randomized-algorithm/random/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/randomized-algorithm/random.svg)](https://codeclimate.com/github/randomized-algorithm/random/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/randomized-algorithm/random/main.svg)](https://codecov.io/gh/randomized-algorithm/random)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/randomized-algorithm/random.svg)](https://codeclimate.com/github/randomized-algorithm/random/trends/technical_debt)
[![Documentation](https://randomized-algorithm.github.io/random/badge.svg)](https://randomized-algorithm.github.io/random/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@randomized/random)](https://bundlephobia.com/result?p=@randomized/random)
