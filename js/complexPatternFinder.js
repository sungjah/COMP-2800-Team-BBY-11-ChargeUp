// JavaScript source code.

/**
 * 
 * @param {string} target
 * @param {string} pattern items that have to be present in pattern in this order - variable number of inputs
 * @returns boolean, true if target string matched pattern, false otherwise.
 */
function findPatternInString(target) {
    let nextSearchableIndex = 0;
    let foundItemIndex = -1;
    //loop through arguments starting with second one
    for (var i = 1; i < arguments.length; i++) {
        //find pattern element #i in target string ONLY after the previous found element
        foundItemIndex = target.indexOf(arguments[i], nextSearchableIndex);
        nextSearchableIndex = foundItemIndex + arguments[i].length + 1;
        //indexOf returns -1 if nothing was found so if it's less than 0 the pattern is not present
        if (foundItemIndex < 0) { return false; }
    }
    //if none of the pattern items were not found they are all present
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
    let nextSearchableIndex = 0;
    let foundItemIndex = -1;

    //find the number of items in pattern
    let numInputs = Math.trunc((arguments.length - 1) / 2);
    //do nothing and return unmodified string if there was an incorrect number of arguments
    if (numInputs*2 != arguments.length - 1) { return target; }

    let resultString = target;

    //Check to ensure all replaceable pattern elements are present. This works the same as findPatternInString.
    for (var i = 1; i <= numInputs; i++) {
        foundItemIndex = target.indexOf(arguments[i], nextSearchableIndex);
        nextSearchableIndex = foundItemIndex + arguments[i].length + 1;
        if (foundItemIndex < 0) { return target; }
    }

    //replace replaceable pattern elements with corresponding replacement pattern elements
    for (var i = 1; i <= numInputs; i++) {
        resultString = resultString.replace(arguments[i], arguments[i + numInputs]);
    }

    return resultString;
}