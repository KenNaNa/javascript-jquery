/*
 要求开发一个插件
	奇数行颜色为#38a38a
	偶数行颜色为#09f
	但鼠标移入时颜色变yellow
	移除时还是原来的颜色
*/

(function($){

   $.fn.table = function(options){
      var defaults = {
	     //各种参数 各种属性

		 evenRowClass:'evenRow',
		 oddRowClass:'oddRow',
		 currentRowClass:'currentRow',
		 eventType:'mouseenter',
		 eventType2:'mouseleave'
	   
	  }
	  var options = $.extend(defaults,options);
	  this.each(function(){
	     //实现功能代码
		 //偶数行颜色
		 var _this = $(this);
		 _this.find('tr:even').addClass(options.evenRowClass);

		 //奇数行颜色
		 _this.find('tr:odd').addClass(options.oddRowClass);


		 /*This.find('tr').mouseenter(function(){
		    $(this).addClass(options.currentRowClass);
		 }).mouseleave(function(){
		    $(this).removeClass(options.currentRowClass);
		 })*/
         _this.find('tr').bind(options.eventType,function(){
		    $(this).addClass(options.currentRowClass);
		 });
		 _this.find('tr').bind(options.eventType2,function(){
		    $(this).removeClass(options.currentRowClass);
		 });

	  })
   }
   
})(jQuery)