/*
   drag
*/

(function($){

   $.fn.drag = function(options){
      var defaults = {
	     //各种参数 各种属性
	     eventMouseDown:'mousedown',
		 eventMouseMove:'mousemove',
		 eventMouseUp:'mouseup'
	  }
	  var options = $.extend(defaults,options);
	  this.each(function(){
	     //实现功能代码
		 var _this = $(this);//缓存
		 var _document = $(document);
		 var _window = $(window);
		 _this[options.eventMouseDown](function(e){
		     var sX = e.pageX;//初始点击的位置
	         var sY = e.pageY;
	         var sBX = $(this).offset().left;
	         var sBY = $(this).offset().top;
	         var disX = sX - sBX;
	         var disY = sY - sBY;
		 _document[options.eventMouseMove](function(e){
			  var nX = e.pageX;
			  var nY = e.pageY;
			  var l = nX - disX;
			  var t = nY - disY;
			  var maxT = _window.height()-$box.height();
			  var maxL = _window.width()-$box.width();
			  //限定大小
			  l = Math.min(l,maxL);
			  l = Math.max(0,l);
			  t = Math.min(t,maxT);
			  t = Math.max(0,t);
			  (l<50)&&(l=0);
			  (t<50)&&(t=0);
			  $box.css({
				 'left':l+'px',
				 'top':t+'px'
			  });
		   });
		 });
		 _document[options.eventMouseUp](function(){
	       _document.off(options.eventMouseMove);
	     });
	  })
	  return this;
   }
   
})(jQuery)