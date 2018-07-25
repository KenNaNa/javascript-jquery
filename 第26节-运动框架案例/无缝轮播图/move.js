(function(){
//  ==========
//  = 运动模式 = 
//  ========== 
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
//  ==========
//  = 运动函数 = 
//  ========== 
function tMove(dom, json, time, speed, callback) {
	window.requestAnimationFrame = window.requestAnimationFrame || function(fn) {return setTimeout(fn, 1000 / 60)};
	window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
	if(typeof speed == 'function'){
					callback = speed;
					speed = 'linear';
				}else{
					speed = speed || 'linear';
				}
	var start = {},end = {},Ttimer={};
	for(var attr in json) {
		if(attr == 'opacity'){
			start[attr] = parseFloat(getStyle(dom, attr))||1;
		}else{
			start[attr] = parseFloat(getStyle(dom, attr))||0;
		}
		end[attr] = json[attr] - start[attr];
		if(!end[attr]) {
			delete start[attr];
			delete end[attr];
		}
	}
	var stime = new Date();
	(function fn() {
		var t = new Date() - stime;
		t >= time ? t = time : Ttimer.timer = requestAnimationFrame(fn);
		var d = time;
		var t = (new Date() - stime);
		for(var attr in start) {
			var b = start[attr];
			var c = end[attr];
			var val = Tween[speed](t, b, c, d);
			if(attr === "opacity") {
				dom.style[attr] = val;
				dom.style.filter = "alpha(opacity=" + val * 100 + ")";
			} else {
				dom.style[attr] = val + 'px';
				if(t >= time) {
					dom.style[attr] = json[attr]+ 'px';
					Ttimer.flag = true;
				}
			}
		}
		if(Ttimer.flag) callback && callback.call(dom);
	})();
	return Ttimer;
}
window.tMove = tMove;
return tMove;   //当tMove变量名被占用，可以赋值给新变量；
})();
//  ========== 
//  = 兼容6 7 8  = 
//  ========== 
function getStyle(dom, attr) {
	var css = dom.currentStyle || getComputedStyle(dom);
		return css[attr];
}
function getClass(classname) {
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(classname);
	} else {
		var dom = [];
		var all = document.getElementsByTagName("*");
		for(var i = 0; i < all.length; i++) {
			cclass = all[i].className.split(' ');
			for(var j = 0; j < cclass.length; j++) {
				if(cclass[j] === classname) {
					dom.push(all[i]);
				}
			}
		}
		return dom;
	}
}
