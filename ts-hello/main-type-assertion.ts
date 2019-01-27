
let message; 
message = "abc";

//let endsWithC = message.endsWith("c");
let endsWithC1 = (<string>message).endsWith('c');
let endsWithC2 = (message as string).endsWith('c');

console.log(endsWithC1 + " " + endsWithC2);

// When we are declaring a variable without assigning any type 
// with it, it automatically considers it as "any" type.
// For that, we have 2 options. We can write 
// 'message.endsWith("c")' to '(<string>message)' this.
// or : '(message as string)'
