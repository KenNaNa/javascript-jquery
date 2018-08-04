//获取行间样式
function css(obj,name,value){
     if(arguments.length==2){
	     return obj.style[name];//获取对象的样式；
	 }else{
	     return obj.style[name] = value;//设置对象样式的值
	 }
}