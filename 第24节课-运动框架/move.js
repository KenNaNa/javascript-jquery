//move.js
function move(obj,attr,start,end,speed){//运动函数
	window.requestAnimationFrame = window.requestAnimationFrame||function(fn){
	  return setTimeout(fn,1000/60);
	}
	window.cancleAnimationFrame = window.cancleAnimationFrame||clearTimeout;
	var bool = start>end?true:false;//判断目标值与初始值的大小
	obj.style[attr] = start + 'px';//设定初始值
	speed = bool?-speed:speed;//判断速度值
	//console.log(bool);
	(function fn(){
	  start += speed;//在这个示例过程start始终要小于end
	  (bool?start <= end:start >= end)?start = end:requestAnimationFrame(fn);
		obj.style[attr] = start + 'px';
	})();//函数自执行
}