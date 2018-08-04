//randomColor()
function randomColor(){
   var c = '#';
   for( var i=0;i<6;i++ ){
      c += parseInt((Math.random()*16).toString(16));
   }
   return c;
}