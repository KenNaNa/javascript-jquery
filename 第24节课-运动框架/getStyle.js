//getStyle(obj)
//用于兼容所有浏览器的获取元素样式的方法
function getStyle(obj){
   if(window.currentStyle){
     return obj.currentStyle;
   }else{
     return getComputedStyle(obj);
   }
   //return obj.currentStyle || getComputedStyle(obj);
}