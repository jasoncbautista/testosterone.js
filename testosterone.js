// If window is defined
// exports = {};

var testosterone = {};
var web = false;
if( this['document'] !=  null) {
    var exports = {};
    var web = true;
}

exports.count = 0;

exports._markForWeb= function(text){
    var body = document.getElementsByTagName("body")[0];
    var element = document.createElement("div");
    element.innerHTML = text;
    body.appendChild(element);
    return element;
};
exports._markSuccess = function(testName){
    if (web) {
        var element = exports._markForWeb("Success");
        element.setAttribute("style", "color: green");
    } else {
        console.log("\033[92m Success \033[92m \033[0m ");
    }
};

exports.log = function(log){
    console.log(log);
};

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
exports.assert = function(expected, got){
    if (expected === got) {
        exports._markSuccess();
    } else {
        exports._markFailure();
    }
};

exports.assertEquals = function(expected, got){
    exports.assert(expected, got);
}

exports.assertTrue= function(got){
    exports.assert(true, got);
}

testosterone = exports;
