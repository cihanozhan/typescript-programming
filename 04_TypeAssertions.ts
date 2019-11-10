/*
    Type Assertions

    http://cihanozhan.com
*/

let message;
message = 'Hello World';

// let count = message.length;
let count = (<string>message).length;
let _length = (message as string).length;

console.log(count);
console.log(_length);