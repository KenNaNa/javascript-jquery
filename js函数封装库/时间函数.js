//时间函数
//字符串连接
function tick(){
	 var oDate = new Date();
	 var str = toDou(oDate.getHours())+toDou( oDate.getMinutes()) + toDou(oDate.getSeconds());
	 //console.log(str);
	 for(var i = 0;i < aImg.length;i++){
		 aImg[i].src = "img/"+str[i]+".jpg";
		 }
	 }