function removeClass(obj,shiftClass){
	   var oldClass = obj.className;
	   if(oldClass==''){
	      alert('你要删除的类名不存在');
	   }else{
	     var arr = oldClass.split(' ');
		 //console.log(arr);
		 var shiftArr = shiftClass.split(' ');
		 //console.log(shiftArr);
		 for( var i=0;i<arr.length;i++ ){
		     for( var j=0;j<shiftArr.length;j++ ){
			     if(shiftArr[j]==arr[i]){
					arr.splice(i,1);//只能删除一位
					var newClass = arr.join(' ');
				    obj.className = newClass;
				 }
			 }
		 }
	   }
	}