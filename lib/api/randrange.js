'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.randrange = randrange;

var _randint = require('./randint');

/**
 * Return a randomly selected element from range(start, stop, step).
 */

function randrange(start, stop, step) {

	// TODO handle empty ranges

	if (stop === undefined) return (0, _randint.randint)(0, start);
	if (step === undefined) step = 1;

	if (stop >= start) {
		return start + step * (0, _randint.randint)(0, Math.floor((stop - start) / step));
	} else {
		return start + step * (0, _randint.randint)(0, Math.floor((start - stop) / -step));
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvcmFuZHJhbmdlLmpzIl0sIm5hbWVzIjpbInJhbmRyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJ1bmRlZmluZWQiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCQSxTLEdBQUFBLFM7O0FBTmhCOztBQUVBOzs7O0FBSU8sU0FBU0EsU0FBVCxDQUFxQkMsS0FBckIsRUFBNkJDLElBQTdCLEVBQW9DQyxJQUFwQyxFQUEyQzs7QUFFakQ7O0FBRUEsS0FBS0QsU0FBU0UsU0FBZCxFQUEwQixPQUFPLHNCQUFTLENBQVQsRUFBYUgsS0FBYixDQUFQO0FBQzFCLEtBQUtFLFNBQVNDLFNBQWQsRUFBMEJELE9BQU8sQ0FBUDs7QUFFMUIsS0FBS0QsUUFBUUQsS0FBYixFQUFxQjtBQUNwQixTQUFPQSxRQUFRRSxPQUFPLHNCQUFTLENBQVQsRUFBYUUsS0FBS0MsS0FBTCxDQUFZLENBQUVKLE9BQU9ELEtBQVQsSUFBbUJFLElBQS9CLENBQWIsQ0FBdEI7QUFDQSxFQUZELE1BR0s7QUFDSixTQUFPRixRQUFRRSxPQUFPLHNCQUFTLENBQVQsRUFBYUUsS0FBS0MsS0FBTCxDQUFZLENBQUVMLFFBQVFDLElBQVYsSUFBbUIsQ0FBQ0MsSUFBaEMsQ0FBYixDQUF0QjtBQUNBO0FBRUQiLCJmaWxlIjoicmFuZHJhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmFuZGludCB9IGZyb20gJy4vcmFuZGludCcgO1xuXG4vKipcbiAqIFJldHVybiBhIHJhbmRvbWx5IHNlbGVjdGVkIGVsZW1lbnQgZnJvbSByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRyYW5nZSAoIHN0YXJ0ICwgc3RvcCAsIHN0ZXAgKSB7XG5cblx0Ly8gVE9ETyBoYW5kbGUgZW1wdHkgcmFuZ2VzXG5cblx0aWYgKCBzdG9wID09PSB1bmRlZmluZWQgKSByZXR1cm4gcmFuZGludCggMCAsIHN0YXJ0ICkgO1xuXHRpZiAoIHN0ZXAgPT09IHVuZGVmaW5lZCApIHN0ZXAgPSAxIDtcblxuXHRpZiAoIHN0b3AgPj0gc3RhcnQgKSB7XG5cdFx0cmV0dXJuIHN0YXJ0ICsgc3RlcCAqIHJhbmRpbnQoIDAgLCBNYXRoLmZsb29yKCAoIHN0b3AgLSBzdGFydCApIC8gc3RlcCApICkgO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHJldHVybiBzdGFydCArIHN0ZXAgKiByYW5kaW50KCAwICwgTWF0aC5mbG9vciggKCBzdGFydCAtIHN0b3AgKSAvIC1zdGVwICkgKSA7XG5cdH1cblxufVxuXG4iXX0=