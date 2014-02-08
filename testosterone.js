// If window is defined
// exports = {};

var testosterone = {};
var web = false;
if( this['document'] !=  null) {
    var exports = {};
    var web = true;
}

exports.count = 0;

/**
 * Simple function to log to the DOM.
 * @param {type} text,
 * @return {Null}
 */
exports._markForWeb= function(text){
    var body = document.getElementsByTagName("body")[0];
    var element = document.createElement("div");
    element.innerHTML = text;
    body.appendChild(element);
    return element;
};
/**
 * Logs  a test as successful
 * @param {type} testName,
 * @return {Null}
 */
exports._markSuccess = function(testName){
    if (web) {
        var element = exports._markForWeb("Success");
        element.setAttribute("style", "color: green");
    } else {
        console.log("\033[92m Success \033[92m \033[0m ");
    }
};

/**
 * Shorthand for console.log
 * @param {type} log,
 * @return {Null}
 */
exports.log = function(log){
    console.log(log);
};

/**
 * Logs a failed test
 * @param {type} testName,
 * @return {Null}
 */
exports._markFailure= function(testName){
    if (web) {
        var element = exports._markForWeb("Failure");
        element.setAttribute("style", "color: red");
    } else {
        console.log("\033[31m Failure \033[91m \033[0m ");
    }
};


// TODO: guard against comparing arrays
exports.assertArraysEqual = function(expected, got){
    // ...
};

/**
 * Asserts that parameter one equals parameter two
 * @param {type} expected,
 * @param {type} got,
 * @return {Null}
 */
exports.assert = function(expected, got){
    if (expected === got) {
        exports._markSuccess();
    } else {
        exports._markFailure();
    }
};

/**
 * Asserts the two things are equal  (doesnt handle arrays well)
 * @param {type} expected,
 * @param {type} got,
 * @return {Null}
 */
exports.assertEquals = function(expected, got){
    exports.assert(expected, got);
}

/**
 * Asserts something is true.
 * @param {type} got,
 * @return {Null}
 */
exports.assertTrue= function(got){
    exports.assert(true, got);
}

testosterone = exports;
