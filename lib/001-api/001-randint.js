"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randint = randint;

/**
 * Returns an integer in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

function randint(i, j) {
  return i + Math.floor(Math.random() * (j - i));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wMDEtYXBpLzAwMS1yYW5kaW50LmpzIl0sIm5hbWVzIjpbInJhbmRpbnQiLCJpIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNZ0JBLE8sR0FBQUEsTzs7QUFMaEI7Ozs7O0FBS08sU0FBU0EsT0FBVCxDQUFtQkMsQ0FBbkIsRUFBdUJDLENBQXZCLEVBQTJCO0FBQ2pDLFNBQU9ELElBQUlFLEtBQUtDLEtBQUwsQ0FBWUQsS0FBS0UsTUFBTCxNQUFtQkgsSUFBSUQsQ0FBdkIsQ0FBWixDQUFYO0FBQ0EiLCJmaWxlIjoiMDAxLXJhbmRpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogUmV0dXJucyBhbiBpbnRlZ2VyIGluIGludGVydmFsIFtpLCBqWyAoaSBpbmNsdWRlZCwgaiBleGNsdWRlZClcbiAqIGFjY29yZGluZyB0byBhIHVuaWZvcm0gZGlzdHJpYnV0aW9uLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kaW50ICggaSAsIGogKSB7XG5cdHJldHVybiBpICsgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oICkgKiAoIGogLSBpICkgKSA7XG59XG5cbiJdfQ==