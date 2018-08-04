function addClass(elem,classN){
     var arr1 = elem.className.split(' ');//对传参进来的类名进行切割 
	 var arr2 = classN.split(' ');//对要添加的类名进行切割
	 var arr3 = arr1.concat(arr2);//连接数组
     console.log(arr3);
	 for( var i=0;i<arr3.length;i++ ){
	    for( var j=0;j<arr3.length-i-1;j++ ){
		   if(arr3[i]==arr3[j]){
		      arr3.splice(j,1)
			  arr3.length--;
		   }
		}
	 }
   }