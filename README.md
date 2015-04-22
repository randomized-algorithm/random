[js-random](http://aureooms.github.io/js-random)
==

Randomness code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-random.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-random/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-random.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-random)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-random.svg?style=flat)](http://bower.io/search/?q=aureooms-js-random)
[![Build Status](http://img.shields.io/travis/aureooms/js-random.svg?style=flat)](https://travis-ci.org/aureooms/js-random)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-random.svg?style=flat)](https://coveralls.io/r/aureooms/js-random)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-random.svg?style=flat)](https://david-dm.org/aureooms/js-random#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-random.svg?style=flat)](https://david-dm.org/aureooms/js-random#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-random.svg?style=flat)](https://codeclimate.com/github/aureooms/js-random)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-random.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-random)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-random.svg?style=flat)](https://github.com/aureooms/js-random/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-random.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-random)

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let random = require( "aureooms-js-random" ) ;
```

Example usage:

```js
random.randfloat( 0 , 1 ) ; // 0.19876947347074747
random.randfloat( 0 , 1 ) ; // 0.23755912738852203

random.randint( 0 , 100 ) ; // 57
random.randint( 0 , 100 ) ; // 31

let a = [ 0 , 1 , 2 , 3 ] ;

random.sample( 1 , a , 0 , 4 ) ;
a ; // [ 0 , 1 , 2 , 3 ]

random.sample( 1 , a , 0 , 4 ) ;
a ; // [ 1 , 0 , 2 , 3 ]

random.shuffle( a , 0 , 4 ) ;
a ; // [ 1 , 3 , 0 , 2 ]

random.shuffle( a , 0 , 4 ) ;
a ; // [ 3 , 2 , 1 , 0 ]
```
