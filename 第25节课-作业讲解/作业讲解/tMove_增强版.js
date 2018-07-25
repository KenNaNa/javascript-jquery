var oldDate = new Date();//初始时间
	 (function fn(){
	    var nowDate = new Date();//获取当前时间
		var t = nowDate - oldDate;//经过多长时间已知
		var prop = t/time;//时间比例值
		prop>=1?prop=1:requestAnimationFrame(fn);
		var s = {};//当前所走的路程
		for( var key in start ){
			if( key=='opacity' ){//兼容opacity
			   s[key] = S[key]*prop+start[key];
			   obj.style[key]=s[key];
			   obj.style.filter = 'alpha(opacity='+s[key]*100+')';
			}else{
			   s[key] = S[key]*prop+start[key];
			   obj.style[key] = s[key] + 'px';
			}
		}
		//var s = S/time*t+start;
		if( prop==1 ){
		   callback&&callback.call(obj);
		}
	 })();
   }


   function getStyle(obj){//获取样式
      return obj.currentStyle || getComputedStyle(obj);
   }
