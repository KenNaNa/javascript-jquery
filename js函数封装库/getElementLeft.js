function getElementLeft(element){
   var actualLeft = element.offsetLeft;
   var current = element.offsetParent;
   while (current !== null){
       actualLeft += current.offsetLeft;
       current = current.offsetParent;
    }
   return actualLeft;
}