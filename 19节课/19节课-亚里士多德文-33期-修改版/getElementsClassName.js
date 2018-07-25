function getElementsByClassName(classStr,tagName,element){
     tagName = (tagName || '*');
     element = (element || document);
 
     if(typeof tagName == 'object'){
         element = tagName; tagName = '*';
     }
 
     if(document.getElementsByClassName){
         return element.getElementsByClassName(classStr);
     }else{
         var nodes = element.getElementsByTagName(tagName),
             ret = [];
         for(i = 0; i < nodes.length; i++) {
             if(hasClass(nodes[i],classStr)) ret.push(nodes[i]);
         }
         return ret;
     }
 
     function hasClass(tagStr,classStr){
         var arr=tagStr.className.split(/\s+/ ); //这个正则表达式是因为class可以有多个,判断是否包含
         for (var i=0;i<arr.length;i++){
             if (arr[i]==classStr) return true;
         }
         return false;
     };
 };