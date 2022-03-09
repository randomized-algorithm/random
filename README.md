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
	randint , // randint(i, j) -> [i, j[ \cap ZZ
	randfloat , // randfloat(i, j) -> [i, j[
	sample , // /!\ in-place
	shuffle , // /!\ in-place
} from '@randomized/random' ;
```

[![License](https://img.shields.io/github/license/randomized-algorithm/random.svg)](https://raw.githubusercontent.com/randomized-algorithm/random/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@randomized/random.svg)](https://www.npmjs.org/package/@randomized/random)
[![Tests](https://img.shields.io/github/workflow/status/randomized-algorithm/random/ci?event=push&label=tests)](https://github.com/randomized-algorithm/random/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/randomized-algorithm/random.svg)](https://github.com/randomized-algorithm/random/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/randomized-algorithm/random.svg)](https://github.com/randomized-algorithm/random/issues)
[![Downloads](https://img.shields.io/npm/dm/@randomized/random.svg)](https://www.npmjs.org/package/@randomized/random)

[![Code issues](https://img.shields.io/codeclimate/issues/randomized-algorithm/random.svg)](https://codeclimate.com/github/randomized-algorithm/random/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/randomized-algorithm/random.svg)](https://codeclimate.com/github/randomized-algorithm/random/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/randomized-algorithm/random/main.svg)](https://codecov.io/gh/randomized-algorithm/random)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/randomized-algorithm/random.svg)](https://codeclimate.com/github/randomized-algorithm/random/trends/technical_debt)
[![Documentation](https://randomized-algorithm.github.io/random/badge.svg)](https://randomized-algorithm.github.io/random/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@randomized/random)](https://bundlephobia.com/result?p=@randomized/random)
