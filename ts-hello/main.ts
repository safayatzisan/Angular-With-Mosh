// function log(message){
//     console.log(message);
// }

// var message = "Hello world";

// log(message);

function doSomething(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log("Finally : "+i);
    // we will get 5 here. but languages like C#/Java we don't
    // have this kind of functionality. that i variable is not
    // supposed to be manipulated or accessed outside of that
    // scope. Here comes the use of let keyword. let's see

    for(let j=0;j<5;j++){
        console.log(j);
    }
    //console.log("Finally : "+j);
}

doSomething();