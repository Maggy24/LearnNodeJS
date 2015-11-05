// console.log(PI) // syntax error -- not defined
console.log("global PI before require module ",global.PI); // undefined
var mod =  require("./modules");
console.log("global PI",global.PI); // 3.14128
console.log("local PI",PI); // 3.14128
var PI = 3.333;    // if we define same varibale in file above statement will be undefined
console.log("new local PI",PI);
console.log("new global PI",global.PI); // 3.14128

//console.log(e);  // syntax error -- not defined because local in module.js

 // /* // if
mod.show();  // calling exports show method

console.log("Binary value ",mod.convertToBinary(11));
console.log("convertOctal fun value ",mod.convertToOctal(11));
console.log("Hex Decimal value of 11 :", mod.convertToHex(11));
// */


 /*   //else
mod();
console.log("Hex Decimal value of 11 :", mod.convertToHex(11));
 */ 

