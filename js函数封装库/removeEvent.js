//兼容所有浏览器的写法
   function removeEvent(obj,eName,eFn){
       if(document.removeEventListener){
	      return obj.removeEventListener(eName,eFn,false);
	   }else{
	      return obj.detachEvent('on'+eName,eFn);
	   }
   }