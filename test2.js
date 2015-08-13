function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
alert(foo()); // return 8


function foo(){
    var bar = function() { // var bar = undefined;
        return 3;          // bar = function() { return 3;}
    };
    return bar();          // after return is unreachable
    var bar = function() {
        return 8;
    };
}
alert(foo()); // return 3

alert(foo()); // return 3
function foo(){            // function declaration load before any
    var bar = function() { // code executed
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}


function foo(){
    return bar();           // hoisting var bar = undefined;
    var bar = function() {  // after return functions unreachable
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
alert(foo()); // TypeError: "bar not defined"