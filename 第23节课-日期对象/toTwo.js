//时间补0 成为两位数
function toTwo(n){
   if(n<10){
     return '0'+n;
   }else{
     return n;
   }
}