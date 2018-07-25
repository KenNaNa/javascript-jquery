var bgImg = new Image();
bgImg.src = './images/bg.jpg';//背景
var hbImg = new Image();
hbImg.src = './images/b.gif';
var htImg = new Image();
htImg.src = './images/t.gif';
var hlImg = new Image();
hlImg.src = './images/l.gif';
var hrImg = new Image();
hrImg.src = './images/r.gif';
var bodyImg = new Image();
bodyImg.src = './images/body.gif';
var foodImg = new Image();
foodImg.src = './images/food.gif';

function Snake(){
	
	this.cav = document.getElementById("cav");//画图区域
	this.canvas = this.cav.getContext('2d');//绘制画布
	this.step = 25;//步长
	this.width = 500;//画布宽度
	this.height = 500;//画布高度
	this.stepW = this.width/this.step;
	this.stepH = this.height/this.step;
	this.snakeArr = [];//蛇身数组
	this.foodArr = [];
	
	//1,绘制游戏元素
	this.draw = function(){
		//1,绘制背景
		this.canvas.drawImage(bgImg,0,0,this.width,this.height);
		//2，画蛇
		this.drawSnake();
		//3，画食物
		this.drawFood();
	}
	this.drawFood = function(){
		if(this.foodArr.length != 0){//说明有食物
			this.canvas.drawImage(foodImg,this.foodArr[0].x*this.step,this.foodArr[0].y*this.step,this.step,this.step);
			return;
		}
		//var x = Math.random();//0-1小数
		var x = Math.floor(Math.random()*this.stepW);
		var y = Math.floor(Math.random()*this.stepH);
		//this.canvas.drawImage(foodImg,x*this.step,y*this.step,this.step,this.step);
		for(var i=0;i<this.snakeArr.length;i++){
			if(this.snakeArr[i].x==x && this.snakeArr[i].y==y){
				this.drawFood();
				break;
			}
		}
		//没重合
		this.foodArr[0] = {
			x:x,
			y:y,
			img:foodImg
		}
		this.canvas.drawImage(foodImg,this.foodArr[0].x*this.step,this.foodArr[0].y*this.step,this.step,this.step);
	}
	this.drawSnake = function(){
		//初始化蛇身体
		if(this.snakeArr.length == 0 ){
			for(var i=0;i<5;i++){
				this.snakeArr[i] = {
					x:this.stepW/2 + i -2,
					y:this.stepH/2,
					img:bodyImg,
					d:'l'
				}
			}
			this.snakeArr[0].img = hlImg;//改蛇头图片
		}
		for(var i=0;i<this.snakeArr.length;i++){
			this.canvas.drawImage(this.snakeArr[i].img,
				this.snakeArr[i].x*this.step,
				this.snakeArr[i].y*this.step,
				this.step,this.step);
		}
	}
	//2,让蛇动起来
	this.move = function(){
		
	}
	//3,让他去死
	this.hit = function(){
		
	}
}
