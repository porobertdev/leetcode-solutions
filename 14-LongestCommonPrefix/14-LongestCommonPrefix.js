/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';

    for (let i = 1; i <= strs[0].length; i++) {
        const slice = strs[0].slice(0, i);

        // check if all strings of the array starts with the current slice
        const filtered = strs.filter(s => s.slice(0, i) === slice);

        if (filtered.length === strs.length) {
            result = slice;
        }
    }

    return result;
};