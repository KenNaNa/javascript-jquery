    function $(id){
      return document.getElementById(id);
    }
   //画布 的大小设置
   var mywindow=window.screen;
   var canvas=$("canvas");
   canvas.width=mywindow.width;
   canvas.height=mywindow.height;

   //要输出的信息
   var str=`也许有时候爱情,会有点害怕的感觉吧,总想说出口,却又难以说出口,一直都在心里,也许这就是爱情里,很多人忌惮的心态吧,但是不管怎么样,希望能勇敢的,说出那句话,总比最后,却没有说出口强很多吧,不管最后的,结局是什么样子的,依旧在心底,爱着的那个人,却永不褪色,那些轻易说着要分手的人啊其实这并不是真爱,因为真爱,是不会轻易说分开的,只是在你的身边,依旧会有,暖人，暖心，暖事,你也曾,被这个世界温柔以待,温暖就在身边,我们一直在努力着`;
   str=str.split("");
   var fontSize=16;//输出字体的大小

   //每列显示多少个信息
   var cols=canvas.width/fontSize;
   //数组，统计下落的位置
   var drops=[];
   for(var i=0;i<cols;i++){
     drops[i]=1;
   }

   var ctx=canvas.getContext("2d");
   function draw(){
    /**
      *这的黑客帝国：
      * 获取页面的 大小 包括宽度和高度
      * 用cols获取能够宽度加载列数
      * drops加载每一列的位置
      * drops[2]=10 2为第二排的 top为10
      */
    ctx.fillStyle="rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="green";
    ctx.font=fontSize+"px arial";
    for(var i=0;i<cols;i++){
      var text=str[ Math.floor( Math.random() * (str.length) ) ];
      // console.info("x-"+i*fontSize);
      // console.info("y-"+drops[i]*fontSize);
      ctx.fillText(text,i*fontSize,drops[i]*fontSize);
      if(drops[i]*fontSize > canvas.height || Math.random() > 0.95)
          drops[i] = 0;//把位置恢复到最上面
      //控制下落的位置
      drops[i]++;
    }
  }
  setInterval(draw,33);