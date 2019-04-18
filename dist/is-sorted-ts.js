"use strict";
function defaultComparator(a, b) {
    return a - b;
}
function checksort(array, comparator) {
    if (!Array.isArray(array))
        throw new TypeError('Expected Array, got ' + (typeof array));
    comparator = comparator || defaultComparator;
    for (var i = 1, length = array.length; i < length; ++i) {
        if (comparator(array[i - 1], array[i]) > 0)
            return false;
    }
    return true;
}
module.exports = checksort;
