var testosterone = { count: 0};

testosterone._markSuccess = function(testName){
    console.log("Success");
};

testosterone.log = function(log){
    console.log(log);
};

testosterone._markFailure= function(testName){
    console.log("\033[31m Failure \033[91m \033[0m ");
};

testosterone.assert = function(expected, got){
    if (expected === got) {
        testosterone._markSuccess();
    } else {
        testosterone._markFailure();
    }
};

testosterone.assertEquals = function(expected, got){
    testosterone.assert(expected, got);
}

testosterone.assertTrue= function(got){
    testosterone.assert(true, got);
}


testosterone._markSuccess();
testosterone._markFailure();
