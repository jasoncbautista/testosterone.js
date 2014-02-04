exports.count = 0;

exports._markSuccess = function(testName){
    console.log("\033[92m Success \033[92m \033[0m ");
};

exports.log = function(log){
    console.log(log);
};

exports._markFailure= function(testName){
    console.log("\033[31m Failure \033[91m \033[0m ");
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


exports._markSuccess();
exports._markFailure();


return exports;
