//要想知道某个元素在页面上的偏移量，
//将这个元素的 offsetLeft 和 offsetTop 与其 offsetParent
//的相同属性相加，如此循环直至根元素，就可以得到一个基本准确的值。
function getOffset(obj){
   var json = {
       left:0;
	   top:0;
   }
   while(obj.offsetParent!=null){
       json.left += obj.offsetLeft;
	   json.top += obj.offsetTop;
	   obj = obj.offsetParent;
   }
   return json
}