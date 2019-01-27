
let drawPoint = (x,y,a,b,n,c) => {
    //..
}

// look, here there are a lot of parameters here.
// this is bad code. we should not use this type of code.
// in that case, what should we do, we can make an object
// of those parameters and simply pass it to the arrow function
// parameter section

let drawPoint2 = (point) => {
    //...
}

drawPoint2({
    x:1,
    y:2
});

// but there is a problem using this type of code. let's 
// consider, someone inserts another parameter named 'name' 
// like this : 

drawPoint2({
    x:1,
    y:2,
    name: 'safayat'
});

// simplest solution for this is to make an inline annotation
// here is an example

let drawPoint3 = (point :{x:number, y:number}) => {
    //...
}

drawPoint3({
    x:1,
    y:2
});

// in this case, we can't even add another property here.
// but the smartest solution would be create an interface.
// like this :

interface Point{
    x:number,
    y:number
}

let drawPoint4 = (point :Point) => {
    //...
}