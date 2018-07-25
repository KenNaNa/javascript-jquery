//move.js的升级版
//运动框架
    function move( obj , attr , endW , speed , callback ) {
        window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {return setTimeout(fn , 1000/60)};
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
        var cssJson = obj.currentStyle || getComputedStyle(obj);
        var startW = parseFloat(cssJson[attr]);
        var flag = startW > endW;
        if ( flag )speed = -speed;
        (function fn(){
            startW += speed;
            (flag?startW <= endW:startW >= endW)?startW = endW:requestAnimationFrame(fn);
            obj.style[attr] = startW+'px';
            if( startW === endW ){
                callback && callback.call(obj);
            }
        })();
    }