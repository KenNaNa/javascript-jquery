function getClass(obj){
     if(document.getElementsByClassName){//H5提供的函数不兼容IE678
	    return document.getElementsByClassName(obj);//返回获取后的对象
	 }else{
	    var all = document.getElementsByTagName('*');//获取所有的标签
		var arr = [];
		for( var i=0;i<all.length;i++ ){
		    var ObjClass = obj.split(' ');//切割
			var ClassName = all[i].className.split(' ');
			for( var j=0;j<ClassName.length;j++ ){
			    for( var k=0;k<ObjClass.length;k++ ){
				   if(ObjClass[k]==ClassName[j]){
				      arr.push(all[i]);
				   }
				}
			}
		}
		return arr;
	 }
   }