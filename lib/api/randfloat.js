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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvcmFuZGZsb2F0LmpzIl0sIm5hbWVzIjpbInJhbmRmbG9hdCIsImkiLCJqIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNZ0JBLFMsR0FBQUEsUzs7QUFMaEI7Ozs7O0FBS08sU0FBU0EsU0FBVCxDQUFxQkMsQ0FBckIsRUFBeUJDLENBQXpCLEVBQTZCO0FBQ25DLFNBQU9ELElBQUlFLEtBQUtDLE1BQUwsTUFBbUJGLElBQUlELENBQXZCLENBQVg7QUFDQSIsImZpbGUiOiJyYW5kZmxvYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogUmV0dXJucyBhIGZsb2F0aW5nIHBvaW50IG51bWJlciBpbiBpbnRlcnZhbCBbaSwgalsgKGkgaW5jbHVkZWQsIGogZXhjbHVkZWQpXG4gKiBhY2NvcmRpbmcgdG8gYSB1bmlmb3JtIGRpc3RyaWJ1dGlvbi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZGZsb2F0ICggaSAsIGogKSB7XG5cdHJldHVybiBpICsgTWF0aC5yYW5kb20oICkgKiAoIGogLSBpICkgO1xufVxuXG4iXX0=