
class Point{

    constructor(x?:number, y?:number){ 
        // this ? is used for making this optional. 
        //so that we can even use this without sending parameters. 
        this.x = x;
        this.y=y;
    }

    private x: number;
    private y: number;

    draw(){
        console.log('X : ' + this.x + ", Y : " + this.y);
    }

    getDistance(anotherPoint:Point){
        //..
    }
}


// let point: Point = new Point();
// we can write like this, or this way
// let point = new Point();
// point.x = 1;
// point.y=2;
let point = new Point(1,2);

point.draw();
