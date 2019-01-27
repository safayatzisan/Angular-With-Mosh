
let log = function(message){
    console.log(message);
}
// this is typical way of creating a function in javascript
// now let's see how it is done in angular

let doLog = (message) => {
    console.log(message);
}
// if the body contains only one line, we can remove the 
// curly braces

let doLog2 = (message) => console.log(message);

//or
let doLog3 = (message) => console.log(message);

log("testing");
doLog("do testing");
doLog2("testing 2");
doLog3("testing 3");
