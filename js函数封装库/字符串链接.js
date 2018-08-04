//字符串链接obj 可以是a标签,img标签
//在这里的obj.length==str.length;
function strConcat(obj,attribute,str){
     for(var i = 0;i < obj.length; i++){
	     obj[i].attribute = "" + str.charAt(i) + "";
	 }
}