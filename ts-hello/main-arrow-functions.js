var log = function (message) {
    console.log(message);
};
// this is typical way of creating a function in javascript
// now let's see how it is done in angular
var doLog = function (message) {
    console.log(message);
};
// if the body contains only one line, we can remove the 
// curly braces
var doLog2 = function (message) { return console.log(message); };
//or
var doLog3 = function (message) { return console.log(message); };
log("testing");
doLog("do testing");
doLog2("testing 2");
doLog3("testing 3");
