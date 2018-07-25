//fade和非无缝轮播(左右轮播)
    $.fn.extend({
	    banner:function(json){
		  var  type = json.type || 'fade',
		       picLi = json.picLi,
		       tabLi = json.tabLi,
			   btnDiv = json.btnDiv,
			   tabBtnType = json.tabBtnType || 'click',//默认为点击事件
			   time = json.time;
			   seamless = json.seamless || false;//false默认为非无缝轮播
		   var $pic,
		       $tab,
               $btn;
		   (picLi)&&( $pic = this.find(picLi) );
		   (tabLi)&&( $tab = this.find(tabLi) );
		   (btnDiv)&&( $btn = this.find(btnDiv) );
		   var  length = $pic.length,
                index = 0,
                clickTime = 0,
                timer1 = null,
                timer2 = null;
		  var $picUl = $pic.parent(),
		      width = $pic.width();
          //初始化样式
		  this[0].onselectstart = function(){return false;}//阻止默认选中
		  $tab.eq(0).addClass("on");
		  if( type == 'fade' ){
			  $pic.hide().eq(0).show();
		  }else
		  if( type == 'LRslide' ){//非无缝轮播

			  $picUl = $pic.parent();
              width = $pic.width();
			  $picUl.width((length+10)*width).parent().css("overflow" , "hidden");
			  $pic.css({
				 width : width,
				 position : "static",
				 float : 'left'
			  });
		  }

          //tab区
		  if( tabLi ){//判断传进去的参数是否存在
		     tabTime = (tabBtnType=='click')?10:200;
			 $tab[tabBtnType](function () {
				var x = $(this).index();
				if ( x !== index ){
					clearTimeout(timer1);
					timer1 = setTimeout(change,tabTime,x);
				}
			 });
		  }
		  //btn区
		  if( btnDiv ){
		     $btn.click(function () {
				if ( new Date - clickTime > 500 ){
					var x = index;
					if ( $(this).index() ){
						x ++;
						x %= length;
					}else{
						x --;
						if(x<0)x=length-1;
					}
					change(x);
					clickTime = new Date;
				}
			 });

		  }
		  //定时器
        this.hover(function () {
            clearInterval(timer2);
        },auto());
        function auto() {
            timer2 = setInterval(function () {
                var x = index;
                x ++;
                x %= length;
                change(x);
            },3000);
            return auto;
        }
        //变化函数
        function change(i) {
            var ifFade = (type=='fade');
			if(ifFade){
			   $pic.eq(index).stop().fadeOut();
			}
			$tab.eq(index).removeClass("on");
            index = i;
			if( ifFade ){
			    $pic.eq(index).stop().fadeIn();
			}else{
				$picUl.stop().animate({
					marginLeft : -index*width
				},300);
			}
            $tab.eq(index).addClass("on");
			//console.log(1)
			//console.log(seamless)
        }
	}
	});