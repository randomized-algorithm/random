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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvcmFuZGludC5qcyJdLCJuYW1lcyI6WyJyYW5kaW50IiwiaSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCQSxPLEdBQUFBLE87O0FBTGhCOzs7OztBQUtPLFNBQVNBLE9BQVQsQ0FBbUJDLENBQW5CLEVBQXVCQyxDQUF2QixFQUEyQjtBQUNqQyxTQUFPRCxJQUFJRSxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsTUFBbUJILElBQUlELENBQXZCLENBQVosQ0FBWDtBQUNBIiwiZmlsZSI6InJhbmRpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogUmV0dXJucyBhbiBpbnRlZ2VyIGluIGludGVydmFsIFtpLCBqWyAoaSBpbmNsdWRlZCwgaiBleGNsdWRlZClcbiAqIGFjY29yZGluZyB0byBhIHVuaWZvcm0gZGlzdHJpYnV0aW9uLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kaW50ICggaSAsIGogKSB7XG5cdHJldHVybiBpICsgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oICkgKiAoIGogLSBpICkgKSA7XG59XG5cbiJdfQ==