//自写的Math.round()函数成为整数
function MathRound(num){
    var arr = String(num).split('.');//将数字转化为字符串
    var arrNum = arr[1].split('');//将第二位再一次转化为字符串
	var newNum = 0;
	if(Number(arrNum[0])>=5){
	  newNum = Number(arr[0])+1;
	}else{
	  newNum = Number(arr[0]);
	}
    return newNum;
};