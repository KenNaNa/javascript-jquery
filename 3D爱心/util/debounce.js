// 封装一个节流函数
// @param  func  回调函数
// @param  wait  延时
// @param  immediate 是否立即执行
var me = {};
me.debounce = function(func, wait, immediate){
	var that = this;
	var timeout;
	var result;
	var _debounce;
	_debounce = function(){
		var context = that;
		var args = arguments
		if(timeout){
			clearTimeout(timeout);
		}
		if(immediate){
			// 如果执行过了，就不再执行
			// 等待几秒过后再触发
			var callNow = !timeout;
			console.log(callNow)
			// console.log(timeout);
			timeout = setTimeout(function(){
				// timeout = null;
				// func.apply(context, args);//这样的话跟上一届就没啥区别了
				// 把定时器清掉
				timeout = null;
				console.log(timeout)
			}, wait)
			// 是否立即执行
			if(callNow){
				// 在一段时间内，连续滑动的时候
				// 只让下面这个函数执行一遍
				result = func.apply(context, args);
				console.log(result)
			}
		}else{
			// 这一步其实就永远不会执行了
			console.log(1)
			timeout = setTimeout(function(){
				func.apply(context, args);
			},wait);
		}
		return result
	}

	_debounce.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
        console.log(1)
    };

    return _debounce;

}