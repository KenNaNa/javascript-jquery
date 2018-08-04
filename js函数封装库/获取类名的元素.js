//获取类名的元素
function getByClassName(oParent,sClass){
	var aEle = oParent.getElementsByTagName("*");
	var aResult = [];
	for(var i = 0 ;i < aEle.length ; i++){
		if(aEle[i].className == sClass ){
		   aResult.push(aEle[i]);
		}
	}
	return aResult;
	
}
console.log(aResult);