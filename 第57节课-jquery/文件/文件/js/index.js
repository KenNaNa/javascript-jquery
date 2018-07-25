window.onload = function () {

    (function(){

        var length = 5*5*5,
            oUl = document.getElementById("list").children[0],
            aLi = oUl.children;

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
            setTimeout(Sphere , 200);
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
                    y_ = 0;
                this.onmousemove = function (e) {
                    x_ = e.clientX - lastX;
                    y_ = e.clientY - lastY;

                    roX -= y_*0.15;
                    roY += x_*0.15;

                    oUl.style.transform = "translateZ("+trZ+"px) rotateX("+roX+"deg) rotateY("+roY+"deg)";

                    lastX = e.clientX;
                    lastY = e.clientY;
                };
                this.onmouseup = function () {
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

        }

        //Sphere 球状布局
        function Sphere() {
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
                aLi[i].innerHTML = "第"+numC+"层，第"+numG+"个";
                aLi[i].style.transform = "rotateY("+(numG+1.3)*yDeg+"deg) rotateX("+(90-numC*xDeg)+"deg) translateZ(800px)";
            }
        }

        //Helix 螺旋式布局
        function Helix() {
            var h = 3.7,//环数
                tY = 7,//每个li上下位移相差
                num = Math.round(length/h),//每环个数
                deg = 360 / num,//每个li Y旋转相差
                mid = length/2 - 0.5;//找准中间点

            for (var i = 0; i < length; i++) {
                aLi[i].style.transform = "rotateY("+i*deg+"deg) translateY("+(i-mid)*tY+"px) translateZ(800px)";
            }
        }

        //Grid 层叠式布局
        function Grid() {
            var disX = 350;//每个li 水平（x）方向的间距
            var disY = 350;//每个li 垂直（y）方向的间距
            var disZ = 800;//每个li 纵深（z）方向的间距

            for (var i = 0; i < length; i++) {
                var oLi = aLi[i];
                var x = (oLi.x - 2) * disX,
                    y = (oLi.y - 2) * disY,
                    z = (oLi.z - 2) * disZ;
                oLi.style.transform = "translate3D("+x+"px,"+y+"px,"+z+"px)";
            }
        }
        


    })();

};




/*var oDiv = document.createElement("div");
                    oDiv.style.cssText = "background:pink; position:absolute; width:5px; height:5px; border-radius:100%; top:"+e.clientY+"px; left:"+e.clientX+"px;";
                    document.body.appendChild(oDiv);*/













