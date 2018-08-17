class TextMove{
	constructor(ele){
		this.ele = ele;
		this.vendors = (function(){
			var element = document.createElement('div').style;
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;
				for(;i<l;i++){
					// 拼凑样式
					transform = vendors[i]+'ransform';
					if(transform in element){
						// 判断transform 是否是 element的属性
						// 如果是，就要截取浏览器的后缀名
						// 最后返回浏览器的后缀名
						// 在谷歌浏览器中 vendors[0]就好了
						// 直接返回空，就是指没有后缀名，浏览器也支持了
						return vendors[i].substr(0,vendors[i].length-1);
					}
				}
				// 否则就返回false
				return false;
		})();
		this.init()
	}

	_prefixStyle (style) {
		// 什么都不支持返回false
		if ( this.vendors === false ) return false;
		// 没有后缀名也支持
		if ( this.vendors === '' ) return style;
		// 最后直接返回
		return this.vendors + style.charAt(0).toUpperCase() + style.substr(1);
	}
	change(){
		var that = this;
		window.tMove(this.ele,{opacity:1,left:400,top:300},8000,function(){
			that.ele.style['transition'] = "opacity 2s ease-in"
			that.ele.style['opacity'] = 1;
		});
	}

	init(){
		this.change()
	}

	
	
}

// 运动框架
(function () {
    var Tween = {
        linear: function (t, b, c, d){  //匀速
            return c*t/d + b;
        },
        easeIn: function(t, b, c, d){  //加速曲线
            return c*(t/=d)*t + b;
        },
        easeOut: function(t, b, c, d){  //减速曲线
            return -c *(t/=d)*(t-2) + b;
        },
        easeBoth: function(t, b, c, d){  //加速减速曲线
            if ((t/=d/2) < 1) {
                return c/2*t*t + b;
            }
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInStrong: function(t, b, c, d){  //加加速曲线
            return c*(t/=d)*t*t*t + b;
        },
        easeOutStrong: function(t, b, c, d){  //减减速曲线
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
            if ((t/=d/2) < 1) {
                return c/2*t*t*t*t + b;
            }
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
            if (t === 0) {
                return b;
            }
            if ( (t /= d) == 1 ) {
                return b+c;
            }
            if (!p) {
                p=d*0.3;
            }
            if (!a || a < Math.abs(c)) {
                a = c;
                var s = p/4;
            } else {
                var s = p/(2*Math.PI) * Math.asin (c/a);
            }
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
            if (t === 0) {
                return b;
            }
            if ( (t /= d) == 1 ) {
                return b+c;
            }
            if (!p) {
                p=d*0.3;
            }
            if (!a || a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else {
                var s = p/(2*Math.PI) * Math.asin (c/a);
            }
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        elasticBoth: function(t, b, c, d, a, p){
            if (t === 0) {
                return b;
            }
            if ( (t /= d/2) == 2 ) {
                return b+c;
            }
            if (!p) {
                p = d*(0.3*1.5);
            }
            if ( !a || a < Math.abs(c) ) {
                a = c;
                var s = p/4;
            }
            else {
                var s = p/(2*Math.PI) * Math.asin (c/a);
            }
            if (t < 1) {
                return - 0.5*(a*Math.pow(2,10*(t-=1)) *
                    Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            }
            return a*Math.pow(2,-10*(t-=1)) *
                Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
        },
        backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
            if (typeof s == 'undefined') {
                s = 1.70158;
            }
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        backOut: function(t, b, c, d, s){
            if (typeof s == 'undefined') {
                s = 3.70158;
            }
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        backBoth: function(t, b, c, d, s){
            if (typeof s == 'undefined') {
                s = 1.70158;
            }
            if ((t /= d/2 ) < 1) {
                return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            }
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
            return c - Tween['bounceOut'](d-t, 0, c, d) + b;
        },
        bounceOut: function(t, b, c, d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
            }
            return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
        },
        bounceBoth: function(t, b, c, d){
            if (t < d/2) {
                return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
            }
            return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
        }
    };
	
    function tMove( obj , json , time , type , callback ) {
        window.requestAnimationFrame = window.requestAnimationFrame||function(a){return setTimeout(a,1000/60)};
        window.cancelAnimationFrame = window.cancelAnimationFrame||clearTimeout;
        var sss = {};
        if ( typeof type === "function" ){
            callback = type;
            type = "elasticBoth";
        }else{
            type = type || "elasticBoth";
        }
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
            var t = new Date() - sTime; //经过了多长时间
            t>= time?t=time:sss.timer=requestAnimationFrame(fn);
            for (var key in S) {
                var val = Tween[type](t , start[key] , S[key] , time);
                if ( key === "opacity" ){
                    obj.style[key] = val;
                    obj.style.filter = "alpha(opacity="+ val*100 +")";
                }else{
                    obj.style[key] = val + 'px';
                }
            }
            if(t===time)callback && callback.call( obj );
        })();
        return sss;
    }
    window.tMove = tMove;
    return tMove;
})();