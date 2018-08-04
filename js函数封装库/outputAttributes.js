//遍历元素的属性函数
//兼容IE7之前 
//每个特性节点都有一个名为 specified 的属性，这个属性的值如果为 true，
//则意味着要么是在 HTML 中指定了相应特性，
//attributes[i]获取的是属性节点

function outputAttributes(element){
   var attrName,
	   attrValue,
	   attrArr = new Array(),
	   length = element.attributes.length;
   for( var i=0;i<length;i++ ){
       if(element.attributes[i].specified){
	       attrName = element.attributes[i].nodeName;//属性名称
		   attrValue = element.attributes[i].nodeValue;//属性节点的内容
           attrArr.push(attrName "=\""+attrValue+"\"");
	   }
   }
   return attrArr.join(' ');

}