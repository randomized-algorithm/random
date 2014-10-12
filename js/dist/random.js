(function(exports, undefined){

	'use strict';


/* js/src/randint.js */


var randint = function(i, j){
	return i + Math.floor(Math.random() * (j - i));
};

exports.randint = randint;
/* js/src/sample.js */

/**
 * Sample using Fisher-Yates method.
 */

var sample_t = function(randint){

	var sample = function(n, a, i, j){
		var tmp, k, t = i - 1, x = i + n;

		while(++t < x){
			k    = randint(t, j);
			tmp  = a[t];
			a[t] = a[k];
			a[k] = tmp;
		}
	};

	return sample;

};

exports.sample_t = sample_t;
/* js/src/shuffle.js */


var shuffle_t = function(sample){

	var shuffle = function(a, i, j){
		sample(j - i, a, i, j);
	};

	return shuffle;
};

exports.shuffle_t = shuffle_t;
})(typeof exports === 'undefined' ? this['random'] = {} : exports);
