(function{
	var lastTime = 0;
	var vendors = ['webkit','moz'];
	for( var i=0;i<vendors.length && !window.requestAnimationFrame; ++i ){
		window.requestAnimationFrame = window[vendors[i]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[i]+'CancelAnimationFrame']||
									  window[vendors[i]+'CancelRequestAnimationFrame'];
	}
	if(!window.requestAnimationFrame){
		window.requestAnimationFrame = function(callback){
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0,16.7-(currTime-lastTime));
			var id = window.setTimeout(function(){
				callback(currTime+timeToCall);
			},timeToCall)
			lastTime = currTime + timeToCall;
			return id;
		}
	}
	if(!window.cancelAnimationFrame){
		window.cancelAnimationFrame = function(id){
			clearTimeout(id);
		}
	}	
})()