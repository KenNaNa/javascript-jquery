function getElementTop(element){
   var actualTop = element.offsetTop;
   var current = element.offsetParent;
   while (current !== null){
       actualTop += current. offsetTop;
       current = current.offsetParent;
  }
   return actualTop;
}