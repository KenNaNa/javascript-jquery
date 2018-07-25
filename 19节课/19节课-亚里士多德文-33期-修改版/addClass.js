function addClass(obj,newClass){
	   var oldClass = obj.className;
	   if(oldClass==''){
	      obj.className = newClass;
	   }else{
		   var arr = newClass.split(' ');//去掉多余的空格
		   var newClass = [];
		   for( var i=0;i<arr.length;i++ ){
		      if(arr[i]!=''){//判断不为空则添加到newClass中
			     newClass.push(arr[i]);
			  }
		   }
		   var str = newClass.join(' ');//然后再用连接方法连接
		   obj.className = str+' '+oldClass;
	   }
	}