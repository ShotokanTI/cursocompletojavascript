function multiply() {
    var length = arguments.length;
    var total = 1;
    if (length > 0) {
        for (var i = 0; i < length; i += 1) {
            total = total * arguments[i];
        }
        return console.log(total);
    }
    console.log(0);
}

var multiply_once = once(multiply);
multiply_once(3, 'matheus');  // 12
multiply_once(3, 4);  //Error: Cannot read property 'apply' of null

function once(func) {
    return function () {
        var f = func;
        func = null;
        return f.apply(this, arguments);
    };
}