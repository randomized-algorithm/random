"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._fisheryates = _fisheryates;

/**
 * Sample array using Fisher-Yates method.
 */

function _fisheryates(randint) {

	var fisheryates = function fisheryates(n, a, i, j) {

		// we will swap at most n elements

		var k = i + n;

		for (; i < k; ++i) {

			// choose any index p in the remaining array

			var p = randint(i, j);

			// swap element at index p with first element in the array

			var tmp = a[i];
			a[i] = a[p];
			a[p] = tmp;
		}
	};

	return fisheryates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9rZXJuZWwvX2Zpc2hlcnlhdGVzLmpzIl0sIm5hbWVzIjpbIl9maXNoZXJ5YXRlcyIsInJhbmRpbnQiLCJmaXNoZXJ5YXRlcyIsIm4iLCJhIiwiaSIsImoiLCJrIiwicCIsInRtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFLZ0JBLFksR0FBQUEsWTs7QUFKaEI7Ozs7QUFJTyxTQUFTQSxZQUFULENBQXdCQyxPQUF4QixFQUFrQzs7QUFFeEMsS0FBTUMsY0FBYyxTQUFkQSxXQUFjLENBQVdDLENBQVgsRUFBZUMsQ0FBZixFQUFtQkMsQ0FBbkIsRUFBdUJDLENBQXZCLEVBQTJCOztBQUU5Qzs7QUFFQSxNQUFNQyxJQUFJRixJQUFJRixDQUFkOztBQUVBLFNBQVFFLElBQUlFLENBQVosRUFBZ0IsRUFBRUYsQ0FBbEIsRUFBc0I7O0FBRXJCOztBQUVBLE9BQU1HLElBQUlQLFFBQVNJLENBQVQsRUFBYUMsQ0FBYixDQUFWOztBQUdBOztBQUVBLE9BQU1HLE1BQU9MLEVBQUVDLENBQUYsQ0FBYjtBQUNBRCxLQUFFQyxDQUFGLElBQU9ELEVBQUVJLENBQUYsQ0FBUDtBQUNBSixLQUFFSSxDQUFGLElBQVFDLEdBQVI7QUFFQTtBQUVELEVBckJEOztBQXVCQSxRQUFPUCxXQUFQO0FBRUEiLCJmaWxlIjoiX2Zpc2hlcnlhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFNhbXBsZSBhcnJheSB1c2luZyBGaXNoZXItWWF0ZXMgbWV0aG9kLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfZmlzaGVyeWF0ZXMgKCByYW5kaW50ICkge1xuXG5cdGNvbnN0IGZpc2hlcnlhdGVzID0gZnVuY3Rpb24gKCBuICwgYSAsIGkgLCBqICkge1xuXG5cdFx0Ly8gd2Ugd2lsbCBzd2FwIGF0IG1vc3QgbiBlbGVtZW50c1xuXG5cdFx0Y29uc3QgayA9IGkgKyBuIDtcblxuXHRcdGZvciAoIDsgaSA8IGsgOyArK2kgKSB7XG5cblx0XHRcdC8vIGNob29zZSBhbnkgaW5kZXggcCBpbiB0aGUgcmVtYWluaW5nIGFycmF5XG5cblx0XHRcdGNvbnN0IHAgPSByYW5kaW50KCBpICwgaiApIDtcblxuXG5cdFx0XHQvLyBzd2FwIGVsZW1lbnQgYXQgaW5kZXggcCB3aXRoIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGFycmF5XG5cblx0XHRcdGNvbnN0IHRtcCAgPSBhW2ldIDtcblx0XHRcdGFbaV0gPSBhW3BdIDtcblx0XHRcdGFbcF0gPSAgdG1wIDtcblxuXHRcdH1cblxuXHR9IDtcblxuXHRyZXR1cm4gZmlzaGVyeWF0ZXMgO1xuXG59XG5cbiJdfQ==