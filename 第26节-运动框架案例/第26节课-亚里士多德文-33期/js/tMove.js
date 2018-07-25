//时间版运动框架
    function tMove( obj , json , time , callback ) {
        window.requestAnimationFrame = window.requestAnimationFrame||function(a){return setTimeout(a,1000/60)};
        window.cancelAnimationFrame = window.cancelAnimationFrame||clearTimeout;
        var cssJson = obj.currentStyle || getComputedStyle(obj);
        var start = {},S = {};
        for (var key in json) {
            start[key] = parseFloat(cssJson[key]);//储存每个属性的 初始值
            S[key] = json[key] - start[key];//存储每个属性的 总路程
            if ( !S[key] ){
                delete start[key];
                delete S[key];
            }
        }
        var sTime = new Date();
        (function fn() {
            var prop = (new Date() - sTime) / time;
            prop>=1?prop = 1:requestAnimationFrame(fn);
            for (var key in start){
                if ( key === "opacity" ){
                    var val = S[key] * prop + start[key];
                    obj.style[key] = val;
                    obj.style.filter = "alpha(opacity="+ val*100 +")";
                }else{
                    obj.style[key] = S[key] * prop + start[key] + 'px';
                }
            }
            if ( prop === 1 )callback && callback.call( obj );
        })();
    }