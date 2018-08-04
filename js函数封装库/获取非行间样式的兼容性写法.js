function getStyle(obj,name){
     if(obj.currentStyle){//如果对象有非行间样式
	     return obj.currentStyle[name];//返回对象的名称兼容IE浏览器
	 }else{
	     return getComputedStyle(obj,'').name;//兼容火狐，谷歌浏览器
	 }
}