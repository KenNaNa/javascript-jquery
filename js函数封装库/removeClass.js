//删除某个Class类名
//
function removeClass(obj,cName){
   //首先，取得类名字符串并拆分成数组
   var classNames = obj.className.split(/\s+/);
   var pos,//存储要删除类名的位置
       len = classNames.length,
	   i;
   for( i=0;i<len;i++ ){
       if( classNames[i]==cName ){
	       pos = i;
		   break;
	   }
   }
   classNames.splice(i,1);
   obj.className = classNames.join(' ');
}