//centerDiv
$.Li = {
  centerDiv:function(obj){
     obj['css']({
	     left:($(window).height()-obj['height']())/2,
		 top :($(window).width()-obj['width']())/2,
		 position:'abolute'
	 });
	 return obj;//是为可以进行链式操作
  }
}