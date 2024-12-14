/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openingBrackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // if the string is not big enough OR doesn't start with an opening bracket
    if (s.length < 2 || !openingBrackets[s[0]]) return false;

    const stack = [];

    for (const char of s) {
        // check if it's an existent opening bracket
        if (openingBrackets[char]) {
            stack.push(char);
        } else {
            // if the ending bracket of the last opening bracket in the stack is not the same with current char (closing bracket)
            if (openingBrackets[stack.at(-1)] !== char) {
                return false;
            }
            
            // remove one character only because we don't push the current char
            stack.splice(-1, 1);
        }
    }

    if (stack.length !== 0) return false;

    return true;
};