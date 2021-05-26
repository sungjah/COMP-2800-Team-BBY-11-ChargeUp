// JavaScript source code.

/**
 * 
 * @param {string} target
 * @param {string} pattern items that have to be present in pattern in this order - variable number of inputs
 * @returns boolean, true if target string matched pattern, false otherwise.
 */
function findPatternInString(target) {
    let prevItemIndex = 0;
    let foundItemIndex = -1;
    for (var i = 1; i < arguments.length; i++) {
        foundItemIndex = target.indexOf(arguments[i], prevItemIndex);
        prevItemIndex = foundItemIndex;
        if (foundItemIndex < 0) { return false; }
    }
    return true;
}

/**
 * 
 * @param {string} target
 * @param {string} pattern items that have to be present in pattern in this order - variable number of inputs
 * @param {string} replacements replacements for the above pattern, same number of inputs or else nothing happens
 * @returns result string.
 */
function replacePatternItemsInString(target) {
    let prevItemIndex = 0;
    let foundItemIndex = -1;

    let numInputs = Math.trunc((arguments.length - 1) / 2);
    if (numInputs*2 != arguments.length - 1) { return target; }

    let resultString = target;

    for (var i = 1; i <= numInputs; i++) {
        resultString = resultString.replace(arguments[i], arguments[i + numInputs]);
    }

    return resultString;
}