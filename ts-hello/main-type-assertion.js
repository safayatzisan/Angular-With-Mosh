var message;
message = "abc";
//let endsWithC = message.endsWith("c");
var endsWithC1 = message.endsWith('c');
var endsWithC2 = message.endsWith('c');
console.log(endsWithC1 + " " + endsWithC2);
// When we are declaring a variable without assigning any type 
// with it, it automatically considers it as "any" type.
// For that, we have 2 options. We can write 
// 'message.endsWith("c")' to '(<string>message)' this.
// or : '(message as string)'
