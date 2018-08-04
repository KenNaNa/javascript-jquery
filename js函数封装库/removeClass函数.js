function removeClass(elem,classN){
      var arr1 = elem.className.split(' ');
	  var arr2 = classN.split(' ');
	  for( var i=0;i<arr1.length;i++ ){
	     for( var j=0;j<arr2.length;j++ ){
		    if(arr1[i]==arr2[j]){
			   arr1.splice(i,1);
			}
		 }
	  }

	  elem.className = arr1.join(' ');
   }