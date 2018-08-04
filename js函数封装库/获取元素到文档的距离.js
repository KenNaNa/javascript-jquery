//获取元素到文档的距离
function offset(obj){
	var json = {
		left : 0,
		top : 0
	};
	while ( obj !== document.body ){
		json.left += obj.offsetLeft;
		json.top += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return json;
}