/**
 * Created by Administrator on 2017/2/28.
 * version fly-1.0
 * Author 31期JavaScript全体小伙伴
 *
 */
!function(){

    //$外界接口函数
    function $(options) {
        return new Init(options);
    }

    //构建Fly对象的构造函数
    function Init( bear ) { //彩蛋 bear
        this.exe(bear);
    }
    Init.prototype = {
        //获取参数对应的js对象
        exe : function (bear) {
            var typeBear = typeof bear;
            switch (typeBear){
                case 'string':
                    var arrObj = document.querySelectorAll(bear);

                    //设置了Fly对象的length属性
                    this.length = arrObj.length;

                    //将获取的js对象存储在Fly对象的数字下标下
                    for (var i=0;i<this.length;i++){
                        this[i] = arrObj[i];
                    }
                    break;
                case "object":
                    if(bear.nodeType || bear === window){
                        this.length = 1;
                        this[0] = bear;
                    }else{
                        this.length = bear.length;
                        for (var i=0;i<this.length;i++){
                            this[i] = bear[i];
                        }
                    }
                    break;
                case "function":
                    window.onload = bear;
                    break;
            }
        },

        //遍历each方法
        each : function (xLong) { //彩蛋 小龙
            for (var i=0;i<this.length;i++){
                xLong.call(this[i] , i);
            }
        },

        //get 获取对于的js对象
        get : function (fzc) { //彩蛋 風之彩
            return this[fzc];
        },

        //eq 获取对应的Fly对象
        eq : function (fzc) { //彩蛋 風之彩
            return $(this[fzc]);
        },

        //设置/获取样式
        css : function () {
            var lxy = arguments; //彩蛋 lxy
            if (lxy.length === 2){
                this.each(function () {
                    this.style[lxy[0]] = lxy[1];
                });
            }else if(lxy.length === 1){
                if (typeof lxy[0] === 'object'){
                    this.each(function () {
                        for (var key in lxy[0]){
                            this.style[key] = lxy[0][key];
                        }
                    });
                }else if( typeof lxy[0] === 'string'){
                    var obj = this[0] , val = '';
                    if (lxy[0] === 'left'){
                        val = obj.offsetLeft + 'px';
                    }else if (lxy[0] === 'right'){
                        val = obj.offsetLeft + obj.offsetWidth + 'px';
                    }else if (lxy[0] === 'top'){
                        val = obj.offsetTop + 'px';
                    }else if (lxy[0] === 'bottom'){
                        val = obj.offsetTop + obj.offsetHeight + 'px';
                    }else{
                        val = obj.currentStyle?obj.currentStyle[lxy[0]]:getComputedStyle(obj)[lxy[0]];
                    }
                    return val;
                }
            }
            return this;
        },
    };

    window.$ = $;
}();

