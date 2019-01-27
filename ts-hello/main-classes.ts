
class Point{
    x: number;
    y: number;

    draw(){
        console.log('X : ' + this.x + "Y : " + this.y);
    }

    getDistance(anotherPoint:Point){
        //..
    }
}


// let point: Point = new Point();
// we can write like this, or this way
let point = new Point();
point.draw();
