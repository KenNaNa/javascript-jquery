//手动模拟apply()
if( !Function.prototype.construct ){
   Function.prototype.construct = function(argArray){
      if(!Array.isArray(argArray)){
	     throw new TypeError('Argument must be an array');
	  }else{
	     var constr = this;
		 var nullaryFn = Function.prototype.bind.apply(constr,[null].concat(argArray));
	  }
	  return new nullaryFn();
   }
}