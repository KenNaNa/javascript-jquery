//兼容性写法
//判断firstElementChild是否存在
function judge(obj,value,attribute){
	if(obj.firstElementChild){
	   obj.style.attribute = value;
	}else{
	   obj.style.attribute = value;
	}
}