window.onload = function () {

    (function(){
        //局部重要变量
        var length = 5*5*5,//li总个数
            oUl = document.getElementById("list").children[0],//所有li的父级
            aLi = oUl.children;//所有li

        //初始化
        (function(){
            for (var i = 0; i < length; i++) {
                var oLi = document.createElement("li");
                oLi.x = i % 5;
                oLi.y = Math.floor( i%25/5 ) ;
                oLi.z = Math.floor( i/25 ) ;
                oLi.innerHTML = "x:"+oLi.x+" y:"+oLi.y+" z:"+oLi.z;

                var tX = Math.random()*6000-3000,
                    tY = Math.random()*6000-3000,
                    tZ = Math.random()*6000-3000;

                oLi.style.transform = "translate3D("+tX+"px,"+tY+"px,"+tZ+"px)";
                oUl.appendChild(oLi);
            }
            setTimeout(Grid , 200);
        })();

        //关于弹窗事件
        (function(){
            var oAlert = document.getElementById("alert");
            oUl.onclick = function (e) {
                var target = e.target;
                if ( /li/i.test(target.nodeName) ){
                    target.goudan = target.goudan?false:show();
                }
                e.cancelBubble = true;
            }
            oAlert.onclick = function (e) {
                e.cancelBubble = true;
            };
            document.onclick = function () {
                hide();
            };

            function show() {
                if ( !oAlert.timer ){
                    oAlert.timer = true;
                    oAlert.style.display = "block";
                    oAlert.style.transform = "rotateY(0deg) scale(2)";
                    oAlert.style.opacity = "0";
                    var time = 300,
                        sTime = new Date();
                    function m() {
                        var prop = (new Date - sTime) / time;
                        if ( prop >= 1 ){
                            prop = 1;
                            oAlert.timer = false;
                        }else{
                            requestAnimationFrame(m);
                        }
                        oAlert.style.transform = "rotateY(0deg) scale("+((1-2)*prop+2)+")";
                        oAlert.style.opacity = prop;
                    }
                    requestAnimationFrame(m);
                }
                return false;
            }
            function hide() {
                if ( oAlert.style.display === "block"&& !oAlert.timer ){
                    oAlert.timer = true;
                    oAlert.style.display = "block";
                    oAlert.style.transform = "rotateY(0deg) scale(1)";
                    oAlert.style.opacity = "1";
                    var time = 300,
                        sTime = new Date;
                    function m() {
                        var prop = (new Date - sTime) / time;
                        if ( prop >= 1 ){
                            prop = 1;
                            oAlert.timer = false;
                            oAlert.style.display = "none";
                        }else{
                            requestAnimationFrame(m);
                        }
                        oAlert.style.transform = "rotateY("+180*prop+"deg) scale("+(1-prop)+")";
                        oAlert.style.opacity = 1-prop;
                    }
                    requestAnimationFrame(m);
                }
            }
        })();

        //拖拽/滚轮事件的添加
        (function(){
            var roX = 0,
                roY = 0,
                trZ = -2500,
                timerMouse = null;

            document.onselectstart = function () {
                return false;
            };
            document.ondrag = function () {
                return false;
            };
            document.onmousedown = function (e) {
                cancelAnimationFrame( timerMouse );
                var sX = e.clientX,
                    sY = e.clientY,
                    lastX = sX,
                    lastY = sY,
                    x_ = 0,
                    y_ = 0,
                    ifMove = false;
                if ( /li/i.test(e.target.nodeName) ){
                    var thisLi = e.target;
                }
                this.onmousemove = function (e) {
                    ifMove = true;
                    x_ = e.clientX - lastX;
                    y_ = e.clientY - lastY;

                    roX -= y_*0.15;
                    roY += x_*0.15;

                    oUl.style.transform = "translateZ("+trZ+"px) rotateX("+roX+"deg) rotateY("+roY+"deg)";

                    lastX = e.clientX;
                    lastY = e.clientY;
                };
                this.onmouseup = function (e) {
                    if ( ifMove && e.target === thisLi ){
                        thisLi.goudan = true;
                    }
                    this.onmousemove = null;
                    function m() {
                        x_ *= 0.9;
                        y_ *= 0.9;
                        roX -= y_*0.15;
                        roY += x_*0.15;
                        oUl.style.transform = "translateZ("+trZ+"px) rotateX("+roX+"deg) rotateY("+roY+"deg)";
                        if ( Math.abs(x_) < 0.1 && Math.abs(y_) < 0.1 )return;
                        timerMouse = requestAnimationFrame(m);
                    };
                    timerMouse = requestAnimationFrame(m);
                }
            };

            !function ( fn ) {
                if ( document.onmousewheel === undefined ){
                    document.addEventListener("DOMMouseScroll" , function (e) {
                        var d = -e.detail/3;
                        fn.call(this , d);
                    },false);
                }else{
                    document.onmousewheel = function (e) {
                        var d = e.wheelDelta / 120;
                        fn.call(this , d);
                    }
                }
            }(function (d) {
                trZ += d*100;
                oUl.style.transform = "translateZ("+trZ+"px) rotateX("+roX+"deg) rotateY("+roY+"deg)";
            });



        })();

        //左下btn点击
        (function () {
            var aBtn = document.getElementById("btn").getElementsByTagName("li");
            var arr = [Table , Sphere , Helix , Grid];
            for (var i = 0 , length = aBtn.length; i < length; i++) {
                (function(i){
                    aBtn[i].onclick = arr[i];
                })(i);
            }
        })();

        //Table 元素周期表布局
        function Table() {
            if ( Table.arr ){
                for (var i = 0; i < length; i++) {
                    aLi[i].style.transform = Table.arr[i];
                }
            }else{
                Table.arr = [];
                var n = Math.ceil(length / 18) + 2;
                var midY = n / 2 - 0.5;
                var midX = 18 / 2 - 0.5;
                var disX = 170;
                var disY = 210;

                var arr = [
                    {x : 0, y : 0},
                    {x : 17, y : 0},
                    {x : 0, y : 1},
                    {x : 1, y : 1},
                    {x : 12, y : 1},
                    {x : 13, y : 1},
                    {x : 14, y : 1},
                    {x : 15, y : 1},
                    {x : 16, y : 1},
                    {x : 17, y : 1},
                    {x : 0, y : 2},
                    {x : 1, y : 2},
                    {x : 12, y : 2},
                    {x : 13, y : 2},
                    {x : 14, y : 2},
                    {x : 15, y : 2},
                    {x : 16, y : 2},
                    {x : 17, y : 2}
                ];

                for (var i = 0; i < length; i++) {
                    var x,y;
                    if ( i < 18 ){
                        x = arr[i].x;
                        y = arr[i].y;
                    }else{
                        x = i%18;
                        y = Math.floor(i/18)+2;
                    }
                    var val = "translate3D("+(x-midX)*disX+"px,"+(y-midY)*disY+"px,0px)";
                    Table.arr[i] = val;
                    aLi[i].style.transform = val;
                }
            }

        }

        //Sphere 球状布局
        function Sphere() {
            if ( Sphere.arr ){
                for (var i = 0; i < length; i++) {
                    aLi[i].style.transform = Sphere.arr[i];
                }
            }else{
                Sphere.arr = [];
                var arr = [1,3,7,9,11,14,21,16,12,10,9,7,4,1],
                    arrLength = arr.length,
                    xDeg = 180 / (arrLength-1);

                for (var i = 0; i < length; i++) {

                    //求出当前 i 处于arr的第几层 第几个
                    var numC = 0 , numG = 0;
                    var arrSum = 0;
                    for (var j = 0; j < arrLength; j++) {
                        arrSum += arr[j];
                        if ( arrSum > i ){
                            numC = j;
                            numG = arr[j] - (arrSum - i);
                            break;
                        }
                    }
                    var yDeg = 360 / arr[numC];
                    var val = "rotateY("+(numG+1.3)*yDeg+"deg) rotateX("+(90-numC*xDeg)+"deg) translateZ(800px)";
                    Sphere.arr[i] = val;
                    aLi[i].style.transform = val;
                }
            }

        }

        //Helix 螺旋式布局
        function Helix() {
            if (Helix.arr){
                for (var i = 0; i < length; i++) {
                    aLi[i].style.transform = Helix.arr[i];
                }
            }else{
                Helix.arr = [];
                var h = 3.7,//环数
                    tY = 7,//每个li上下位移相差
                    num = Math.round(length/h),//每环个数
                    deg = 360 / num,//每个li Y旋转相差
                    mid = length/2 - 0.5;//找准中间点
                for (var i = 0; i < length; i++) {
                    var val = "rotateY("+i*deg+"deg) translateY("+(i-mid)*tY+"px) translateZ(800px)";
                    Helix.arr[i] = val;
                    aLi[i].style.transform = val;
                }
            }

        }

        //Grid 层叠式布局
        function Grid() {
            if ( Grid.arr ){
                for (var i = 0; i < length; i++) {
                    aLi[i].style.transform = Grid.arr[i];
                }
            }else{
                Grid.arr = [];
                var disX = 350;//每个li 水平（x）方向的间距
                var disY = 350;//每个li 垂直（y）方向的间距
                var disZ = 800;//每个li 纵深（z）方向的间距
                for (var i = 0; i < length; i++) {
                    var oLi = aLi[i];
                    var x = (oLi.x - 2) * disX,
                        y = (oLi.y - 2) * disY,
                        z = (oLi.z - 2) * disZ;
                    var val = "translate3D("+x+"px,"+y+"px,"+z+"px)";
                    Grid.arr[i] = val;
                    oLi.style.transform = val;
                }
            }

        }


    })();

};




/*var oDiv = document.createElement("div");
                    oDiv.style.cssText = "background:pink; position:absolute; width:5px; height:5px; border-radius:100%; top:"+e.clientY+"px; left:"+e.clientX+"px;";
                    document.body.appendChild(oDiv);*/













