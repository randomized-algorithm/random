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

		var k, p, tmp;

		// we will swap at most n elements

		k = i + n;

		for (; i < k; ++i) {

			// choose any index p in the remaining array

			p = randint(i, j);

			// swap element at index p with first element in the array

			tmp = a[i];
			a[i] = a[p];
			a[p] = tmp;
		}
	};

	return fisheryates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wMDAta2VybmVsL2Zpc2hlcnlhdGVzLmpzIl0sIm5hbWVzIjpbIl9maXNoZXJ5YXRlcyIsInJhbmRpbnQiLCJmaXNoZXJ5YXRlcyIsIm4iLCJhIiwiaSIsImoiLCJrIiwicCIsInRtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFLZ0JBLFksR0FBQUEsWTs7QUFKaEI7Ozs7QUFJTyxTQUFTQSxZQUFULENBQXdCQyxPQUF4QixFQUFrQzs7QUFFeEMsS0FBSUMsY0FBYyxTQUFkQSxXQUFjLENBQVdDLENBQVgsRUFBZUMsQ0FBZixFQUFtQkMsQ0FBbkIsRUFBdUJDLENBQXZCLEVBQTJCOztBQUU1QyxNQUFJQyxDQUFKLEVBQVFDLENBQVIsRUFBWUMsR0FBWjs7QUFFQTs7QUFFQUYsTUFBSUYsSUFBSUYsQ0FBUjs7QUFFQSxTQUFRRSxJQUFJRSxDQUFaLEVBQWdCLEVBQUVGLENBQWxCLEVBQXNCOztBQUVyQjs7QUFFQUcsT0FBSVAsUUFBU0ksQ0FBVCxFQUFhQyxDQUFiLENBQUo7O0FBR0E7O0FBRUFHLFNBQU9MLEVBQUVDLENBQUYsQ0FBUDtBQUNBRCxLQUFFQyxDQUFGLElBQU9ELEVBQUVJLENBQUYsQ0FBUDtBQUNBSixLQUFFSSxDQUFGLElBQVFDLEdBQVI7QUFFQTtBQUVELEVBdkJEOztBQXlCQSxRQUFPUCxXQUFQO0FBRUEiLCJmaWxlIjoiZmlzaGVyeWF0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogU2FtcGxlIGFycmF5IHVzaW5nIEZpc2hlci1ZYXRlcyBtZXRob2QuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9maXNoZXJ5YXRlcyAoIHJhbmRpbnQgKSB7XG5cblx0dmFyIGZpc2hlcnlhdGVzID0gZnVuY3Rpb24gKCBuICwgYSAsIGkgLCBqICkge1xuXG5cdFx0dmFyIGsgLCBwICwgdG1wIDtcblxuXHRcdC8vIHdlIHdpbGwgc3dhcCBhdCBtb3N0IG4gZWxlbWVudHNcblxuXHRcdGsgPSBpICsgbiA7XG5cblx0XHRmb3IgKCA7IGkgPCBrIDsgKytpICkge1xuXG5cdFx0XHQvLyBjaG9vc2UgYW55IGluZGV4IHAgaW4gdGhlIHJlbWFpbmluZyBhcnJheVxuXG5cdFx0XHRwID0gcmFuZGludCggaSAsIGogKSA7XG5cblxuXHRcdFx0Ly8gc3dhcCBlbGVtZW50IGF0IGluZGV4IHAgd2l0aCBmaXJzdCBlbGVtZW50IGluIHRoZSBhcnJheVxuXG5cdFx0XHR0bXAgID0gYVtpXSA7XG5cdFx0XHRhW2ldID0gYVtwXSA7XG5cdFx0XHRhW3BdID0gIHRtcCA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0cmV0dXJuIGZpc2hlcnlhdGVzIDtcblxufVxuXG4iXX0=