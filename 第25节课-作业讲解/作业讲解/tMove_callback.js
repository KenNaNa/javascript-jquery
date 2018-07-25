function tMove(obj,attr,end,time,callback){//时间版的运动函数
     window.requestAnimationFrame = window.requestAnimationFrame || function(fn){
	    return setTimeout(fn,1000/60);}//兼容
	 window.cancleAnimationFrame = window.cancleAnimationFrame || clearTimeout;
	 var cssJson = getStyle(obj);//获取元素对象的属性
	 var start = parseInt(cssJson[attr]);//装化为整数
	 var S = end - start;//总路程已知
	 var oldDate = new Date();//初始时间
	 (function fn(){
	    var nowDate = new Date();//获取当前时间
		var t = nowDate - oldDate;//经过多长时间已知
		var s = S/time*t+start;//当前所走的路程
		var prop = t/time;//时间比例值
		prop>=1?prop=1:requestAnimationFrame(fn);
		obj.style[attr] = s + 'px';
		if( prop==1 ){
		   callback&&callback.call(obj);
		}
	 })();
   }