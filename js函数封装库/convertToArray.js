//将类数组转换为真正的数组
function convertToArray(nodes){
    var array = null;
	var b = /msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent);
	if(  ){//检测用户浏览器是不是ＩＥ
	    array = Array.prototype.slice.call(nodes.childNodes,0);//转换为数组
	}else{
	    var len = nodes.length;
		array = new Array();
		for( var i=0;i<len;i++ ){
		   array.push(nodes[i]);
		}
	}
	return array;
}
/*
  function convertToArray(nodes){
	var array = null;
	try {
		array = Array.prototype.slice.call(nodes, 0); //针对非 IE 浏览器
	} catch (ex) {
		array = new Array();
		for (var i=0, len=nodes.length; i < len; i++){
			array.push(nodes[i]);
		}
    }
	return array;
}
*/