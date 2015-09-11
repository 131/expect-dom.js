"use strict";

var isVisible = require('udom/isVisible');


function DOM(obj) {
  console.log("testing ", obj, document.querySelector(obj).tagName);
  if(typeof obj == "string")
    return document.querySelector(obj);
  if (obj && obj.tagName)
    return obj;
  if (obj && obj.jquery)
    return obj.get(0);

  throw "Do you provide a DOM or jQuery object?";
}


var assertions = {
  visible : function(){
      assert(this, isVisible(DOM(this.obj)) ,
        "Expected element to be visible",
        "Expected element to not be visible");
  },
};



function assert(self, truth, msg, error) {
  self.assert(truth,
    function () { return msg; },
    function () { return error; });
}



module.exports = function(expect){

  for(var assertion in assertions)
    expect.Assertion.prototype[assertion] = assertions[assertion];

}