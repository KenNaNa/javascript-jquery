//滚轮事件
function mousewheel(obj , Fn) {
	function eFn(e) {
		e = e || window.event;
		if ( Fn.call(this,e,e.wheelDelta/120 || -e.detail/3) === false ){
			e.preventDefault && e.preventDefault();
			e.returnValue = false;
		}
	}
	document.onmousewheel!==undefined?obj.onmousewheel=eFn:obj.addEventListener('DOMMouseScroll',eFn,false);
}