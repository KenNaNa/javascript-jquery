//阻止默认事件的函数
function stopDefault(e){
   //如果提供了事件对象 这是一个非IE浏览器
   if(e&&e.preventDefault){//判断e事件对象 e.preventDefault是否存在
      return e.preventDefault();
   }else{
      window.event.returnValue = false;
   }
   return false;
}