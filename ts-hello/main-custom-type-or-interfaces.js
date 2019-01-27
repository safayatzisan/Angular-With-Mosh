var drawPoint = function (x, y, a, b, n, c) {
    //..
};
// look, here there are a lot of parameters here.
// this is bad code. we should not use this type of code.
// in that case, what should we do, we can make an object
// of those parameters and simply pass it to the arrow function
// parameter section
var drawPoint2 = function (point) {
    //...
};
drawPoint2({
    x: 1,
    y: 2
});
// but there is a problem using this type of code. let's 
// consider, someone inserts another parameter named 'name' 
// like this : 
drawPoint2({
    x: 1,
    y: 2,
    name: 'safayat'
});
// simplest solution for this is to make an inline annotation
// here is an example
var drawPoint3 = function (point) {
    //...
};
drawPoint3({
    x: 1,
    y: 2
});
var drawPoint4 = function (point) {
    //...
};
