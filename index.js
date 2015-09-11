"use strict";

var $ = require('jquery').noConflict();


var assertions = {
  visible : function(){
      assert(this, $(this.obj).is(':visible') ,
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