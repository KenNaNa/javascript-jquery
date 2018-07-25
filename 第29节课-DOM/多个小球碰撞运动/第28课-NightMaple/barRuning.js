
var dBody = document.documentElement|| document.body; //兼容Google 的    body
var bar = document.getElementsByClassName("bar");
var num = 5,Vx = [];Vy = [],color = "",x = [],y = [],originX = [],originY = [];//小球的个数 及 初始化速度 ,颜色,位置，圆心坐标
var timer = null,flag = true;
window.requestAnimationFrame = window.requestAnimationFrame || function(obj){return setTimeout(obj,1000/60)};
window.cancleAnimationFrame = window.cancleAnimationFrame ||  clearTimeout;

//console.log(dBody.clientWidth)

for(var i = 0 ; i < num ; i++){
	var div = document.createElement("div"); //创建div节点
	div.className = "bar";					 //类名位bar
	dBody.appendChild(div);
	bar[i].style.backgroundColor = bColor();    //添加color	
	Vx[i] = Math.floor(Math.random()*10 + 2);				//随机Vx
	Vy[i] = Math.floor(Math.random()*10 + 2) ;				//随机Vy
	
	
//	bar[i].style.left = Math.floor(Math.random()*100+ 100*i) + "px";	//随机bar 的x坐标
//	bar[i].style.top = Math.floor(Math.random()*100 + 100*i) + "px";		//随机bar的y坐标
//	originX = bar[i].clientWidth/2 +　bar[i].offsetLeft;  //bar 的圆心x坐标
//	originY = bar[i].clientHeight/2 + bar[i].offsetTop;		//bar 的圆心y坐标
	
//	x[i] = bar[i].offsetLeft ;					//获取x坐标
//	y[i] = bar[i].offsetTop;					//获取y坐标
//	console.log(bar[i].originY)
}



//随机生成不重合的n个小球
do{
	flag = true;
	for (var i = 0 ; i < num ; i++) {
		originX[i] = Math.floor(Math.random()*(dBody.clientWidth - bar[i].clientWidth/2));
		originY[i] = Math.floor(Math.random()*(dBody.clientHeight - bar[i].clientHeight/2));
	}
	
	for (var i = 0 ; i < num ; i++) {
		for (var j = 0 ; j < num ; j++) {
			if(i != j){
				if( //如果c^2 < a^2 + b^2 则不重合 flag=0 ,终止随机数产生
					Math.pow(bar[i].clientWidth/2 + bar[j].clientWidth/2,2) <
					Math.pow(originX[i] - originX[j],2) +　Math.pow(originY[i] - originY[j],2)
				){
					flag = false; 
				}
			}
		}
	}
		
}while (flag);


for (var i = 0 ; i < num ; i++) {
	
	x[i] = originX[i] - bar[i].clientWidth/2;  
	y[i] = originY[i] - bar[i].clientHeight/2;
	bar[i].style.left = x[i] + "px";	 //初始bar 的left,top值
	bar[i].style.top = y[i] + "px";
}

window.onresize = runing();

window.onclick = function(){
	cancelAnimationFrame(timer)
}

//小球运动轨迹
function runing(){
	for (var i = 0 ; i < num ; i++) {
		x[i] = x[i] + Vx[i];					//改变x坐标
		y[i] = y[i] + Vy[i]; 					//改变y坐标
		originX[i] = originX[i] + Vx[i];		//圆心x坐标
		originY[i] = originY[i] + Vy[i];		//圆心y坐标
		if(x[i] > dBody.clientWidth - 100){		//判断超出右边界
			Vx[i] = -Vx[i];
			x[i] = dBody.clientWidth - 100;
		}else if(x[i] < 0){						//判断超出左边界
			Vx[i] = -Vx[i];
			x[i] = 0;
		}
		
		if(y[i] > dBody.clientHeight - 100){	//判断超出下边界
			Vy[i] = -Vy[i];
			y[i] = dBody.clientHeight - 100;
		}else if(y[i] < 0){						//判断超出上边界
			Vy[i] = -Vy[i];
			y[i] = 0;
		}
		
		//判断小球是否碰撞
		for (var j = 0 ; j < num ; j++) {
			if(i != j){
				if(
					Math.pow(bar[i].clientWidth/2 + bar[j].clientWidth/2,2) >
					Math.pow(originX[i] - originX[j],2) +　Math.pow(originY[i] - originY[j],2)
				){
					Vx[i] = -Vx[i];
					Vy[i] = -Vy[i];
					x[i] = x[i] + Vx[i];				
					y[i] = y[i] + Vy[i]; 
				}
				
			}
		}
		
		bar[i].style.left = x[i] + "px";		//改变小球left坐标
		bar[i].style.top = y[i] + "px";			//改变小球top坐标
	}
	
	
	timer = requestAnimationFrame(runing);
}

//随机生成小球颜色
function bColor(){
	return "#" + function(color){					//获得color
		return new Array(7-color.length).join("0")+color;  //为color补0
	}((Math.random()*0x1000000 << 0).toString(16));   //得到color为的[0,ffffff];
	
}
