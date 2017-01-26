"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randfloat = randfloat;

/**
 * Returns a floating point number in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

function randfloat(i, j) {
  return i + Math.random() * (j - i);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wMDEtYXBpLzAwMC1yYW5kZmxvYXQuanMiXSwibmFtZXMiOlsicmFuZGZsb2F0IiwiaSIsImoiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7OztRQU1nQkEsUyxHQUFBQSxTOztBQUxoQjs7Ozs7QUFLTyxTQUFTQSxTQUFULENBQXFCQyxDQUFyQixFQUF5QkMsQ0FBekIsRUFBNkI7QUFDbkMsU0FBT0QsSUFBSUUsS0FBS0MsTUFBTCxNQUFtQkYsSUFBSUQsQ0FBdkIsQ0FBWDtBQUNBIiwiZmlsZSI6IjAwMC1yYW5kZmxvYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogUmV0dXJucyBhIGZsb2F0aW5nIHBvaW50IG51bWJlciBpbiBpbnRlcnZhbCBbaSwgalsgKGkgaW5jbHVkZWQsIGogZXhjbHVkZWQpXG4gKiBhY2NvcmRpbmcgdG8gYSB1bmlmb3JtIGRpc3RyaWJ1dGlvbi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZGZsb2F0ICggaSAsIGogKSB7XG5cdHJldHVybiBpICsgTWF0aC5yYW5kb20oICkgKiAoIGogLSBpICkgO1xufVxuXG4iXX0=