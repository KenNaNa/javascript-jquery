class DigitalRain{
	constructor(){
		this.drops = [];
		this.fontSize = 16;
		this.cols = 0;
		this.str = `也许有时候爱情,会有点害怕的感觉吧,总想说出口,却又难以说出口,一直都在心里,也许这就是爱情里,很多人忌惮的心态吧,但是不管怎么样,希望能勇敢的,说出那句话,总比最后,却没有说出口强很多吧,不管最后的,结局是什么样子的,依旧在心底,爱着的那个人,却永不褪色,那些轻易说着要分手的人啊其实这并不是真爱,因为真爱,是不会轻易说分开的,只是在你的身边,依旧会有,暖人，暖心，暖事,你也曾,被这个世界温柔以待,温暖就在身边,我们一直在努力着`;
		this.init();
		
	}


	init(){
		<!-- 创建画布 -->
		var that = this;
		window.onload = function(){
				var canvas = document.createElement('canvas');
				canvas.id = "canvas";
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;

				document.body.appendChild(canvas);

				that.str = that.str.split("");
		   		// let fontSize=16;//输出字体的大小

		   		//每列显示多少个信息
		   		var canvas = document.getElementById('canvas');
		   		console.log(canvas)
		   		that.cols=canvas.width/that.fontSize;
		   		//数组，统计下落的位置
			   for(let i=0;i<that.cols;i++){
			     that.drops[i]=1;
			   }
		}

		setInterval(this.draw,33);

	}

	

	// 绘制
	draw(){
		/**
	      *这的黑客帝国：
	      * 获取页面的 大小 包括宽度和高度
	      * 用cols获取能够宽度加载列数
	      * drops加载每一列的位置
	      * drops[2]=10 2为第二排的 top为10
	      */
	    var canvas = document.getElementById('canvas');
	    canvas.getContext('2d').fillStyle="rgba(0,0,0,0.05)";
	    canvas.getContext('2d').fillRect(0,0,canvas.width,canvas.height);

	    canvas.getContext('2d').fillStyle="green";
	    canvas.getContext('2d').font=this.fontSize+"px arial";
	    for(let i=0;i<this.cols;i++){
	      let text=this.str[ Math.floor( Math.random() * (this.str.length) ) ];
	      // console.info("x-"+i*fontSize);
	      // console.info("y-"+drops[i]*fontSize);
	      canvas.getContext('2d').fillText(text,i*this.fontSize,this.drops[i]*this.fontSize);
	      if(this.drops[i]*this.fontSize > canvas.height || Math.random() > 0.95)
	          this.drops[i] = 0;//把位置恢复到最上面
	      //控制下落的位置
	      this.drops[i]++;
	    }
	}

}