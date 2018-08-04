//兼容火狐 谷歌 IE的写法
	function addEvent(obj,eName,eFn){
	   if(document.addEventListener){//判断如果不存在 则为自定义属性undefined 如果存在则为null 因为还没有赋值
		   return obj.addEventListener(eName,eFn,false);
	   }else{
	       return obj.attachEvent('on'+eName,eFn);
	   }
	}