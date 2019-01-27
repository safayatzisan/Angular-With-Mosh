var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X : ' + this.x + "Y : " + this.y);
    };
    Point.prototype.getDistance = function (anotherPoint) {
        //..
    };
    return Point;
}());
// let point: Point = new Point();
// we can write like this, or this way
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
