window.onload = function () {

    (function(){

        var length = 5*5*5,
            oUl = document.getElementById("list").children[0],
            aLi = oUl.children;

        for (var i = 0; i < length; i++) {
            var oLi = document.createElement("li");
            oLi.x = i % 5;
            oLi.y = Math.floor( i%25/5 ) ;
            oLi.z = Math.floor( i/25 ) ;
            oLi.innerHTML = "x:"+oLi.x+" y:"+oLi.y+" z:"+oLi.z;
            oUl.appendChild(oLi);
        }

        Grid();

        //拖拽/滚轮事件的添加
        (function(){

            var roX = 0,
                roY = 0,
                trZ = -1500;

            document.onselectstart = function () {
                return false;
            };
            document.ondrag = function () {
                return false;
            };
            document.onmousedown = function (e) {
                var sX = e.clientX,
                    sY = e.clientY,
                    rY = roY,
                    rX = roX;
                this.onmousemove = function (e) {
                    var chaX = e.clientX - sX,//得到鼠标x位移量
                        chaY = e.clientY - sY;//得到鼠标y位移量

                    rY = roY + chaX*0.15; //设置Y度数
                    rX = roX - chaY*0.15; //设置X度数

                    oUl.style.transform = "translateZ("+trZ+"px) rotateX("+rX+"deg) rotateY("+rY+"deg)";
                };
                this.onmouseup = function () {
                    roX = rX;
                    roY = rY;
                    this.onmousemove = null;
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

        //Grid 布局方式
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














