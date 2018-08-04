//获取字符串 数组的某一项

function indexOf(str,chr){
   for( var i=0,len=str.length;i<len;i++ ){
     if( str.charAt(i) === chr ){
	     return i;
		 break;
	 }
   }
   if( i===len ){
      return -1;
   }
}