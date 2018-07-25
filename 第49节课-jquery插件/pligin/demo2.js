$.zxit={
	centerDiv:function(obj){
		obj.css({
			'top':($(window).height()-div.height())/2,
			'left':($(window).width()-div.width())/2,
			'position':'absolute'
		});
		
		return obj;
	}
}