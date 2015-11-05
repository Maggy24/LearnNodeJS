PI = 3.14128;  //defining global 

var e = 10;  // local declaration (only acessible in module.js)

exports.show = function(){
    console.log("Inside show");
    console.log("PI from module js : ",PI);
    console.log("e ", e); // local accessible;
    console.log("Octal value ",octal(e));
    modulefunction();
    console.log("show End");
   
};
exports.convertToBinary = function(value)
{
  console.log("e from exports.convertToBinary : ", e); // local accessible;
  return value.toString(2);
};

var octal = exports.convertToOctal = function(value){
   console.log("Inside octal");
   return value.toString(8);
}

/*  // this part will not work because exports is a obect.
exports = function(){
   console.log("inside exports");
};
*/

 /*  //else
module.exports = function(){
  console.log("Inside module.exports");
}
*/

module.exports.convertToHex = function()
{
  console.log("Print e value from module.export.convertToHex: ",e);
  console.log("converting e value in Hex");
  return e.toString(16);
};


function modulefunction(){    // local fun like -- var modulefunction = function(){}
  console.log("inside local function");
}
// modulefunction = function (){ } //  it will override on above function which is already modulefunction defined 

/*
//this will not work without exports object for global acess
// variable will go global but function will not without exports object
// so intead of modulefunction if we use exports.modulefunction it will work.
modulefunction = function (){    // global fun 
  console.log("inside module global function");
}
*/

// module returns module.exports object; 
// exports is child object of module --  module.exports
// default varibale without var keyword -- module.exports.variablename
// module.export will override on all the methods that has been previously defined with export keyword

