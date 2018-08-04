//阻止事件冒泡
function stopBubble(e){
   if(e&&e.stopPropagation){
      return e.stopPropagation();
   }else{
      return window.event.cancelBubble = true;
   }
   return false;
}