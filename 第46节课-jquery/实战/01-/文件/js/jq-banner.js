$.fn.extend({
    banner : function (mJson) {

        var type = mJson.type || "fade",
            seamless = mJson.seamless || false,
            pic = mJson.picE,
            tab = mJson.tabE,
            btn = mJson.btnE,
            time = mJson.time,
            tabType = mJson.tabType || "click";

        var $pic = this.find(pic),
            $tab,
            $btn,
            length = $pic.length,
            index = 0;

        var $picUl,width,tabTime,
            timer1 = null,
            timer2 = null,
            clickTime = 0;

        //初始化
        this[0].onselectstart=function(){return false};
        if ( type === "fade" ){
            $pic.hide().eq(0).show();
        }else if ( type === "LRslide" ){
            $picUl = $pic.parent();
            width = $pic.width();
            if ( seamless ){
                $picUl.prepend( $pic.last().clone(true,true) );
                $picUl.append( $pic.first().clone(true,true) );
                $picUl.width((length+10)*width).css("marginLeft",-width).parent().css("overflow" , "hidden");
                $pic = $picUl.children();
            }else{
                $picUl.width((length+10)*width).parent().css("overflow" , "hidden");
            }
            $pic.css({
                width : width,
                position : "static",
                float : 'left'
            });
        }

        //关于tab
        if ( tab ){
            $tab = this.find(tab);
            tabTime = tabType==="click"?10:200;
            $tab.eq(0).addClass("on");
            $tab[tabType](function () {
                var x = $(this).index();
                if ( x !== index ){
                    clearTimeout(timer1);
                    timer1 = setTimeout(change,tabTime,x);
                }
            });
        }

        //关于btn
        if ( btn ){
            $btn = this.find(btn);
            $btn.click(function () {
                if ( new Date - clickTime > 510 ){
                    var x = index;
                    $(this).index()?x++:x--;
                    change(x);
                    clickTime = new Date;
                }
            });
        }

        //关于自动轮播
        if ( time ){
            this.hover(function () {
                clearInterval(timer2);
            },auto());
            function auto() {
                timer2 = setInterval(function () {
                    var x = index;
                    x ++;
                    change(x);
                },1000);
                return auto;
            }
        }

        //变化函数
        function change(i) {
            var moveIndex = i+1;
            var ifFade = type === "fade";
            i %= length;
            if(i<0)i=length-1;
            if ( !seamless )moveIndex = i;
            ifFade && $pic.eq(index).stop().fadeOut();
            $tab.eq(index).removeClass("on");
            index = i;
            if ( ifFade ){
                $pic.eq(index).stop().fadeIn();
            }else{
                $picUl.stop().animate({
                    marginLeft : -(moveIndex)*width
                },500,function () {
                    if ( seamless ){
                        if ( index === 0 || index === length-1 ){
                            $(this).css("marginLeft" , -moveIndex*width);
                        }
                    }
                });
            }
            $tab.eq(index).addClass("on");
        }

    }
});







