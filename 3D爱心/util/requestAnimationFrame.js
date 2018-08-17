var me = {}
me.requestAnimationFrame = window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame ||
								window.oRequestAnimationFrame ||
								window.msRequestAnimationFrame ||
								function(cb){window.setTimeout(callback,1000/60);};