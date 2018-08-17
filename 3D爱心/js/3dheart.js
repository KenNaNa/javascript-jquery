class HeartLove3D {
	constructor(ele){
		// 保存元素
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

		this.init();
	}
	// 样式不全
	_prefixStyle (style) {
		// 什么都不支持返回false
		if ( this.vendors === false ) return false;
		// 没有后缀名也支持
		if ( this.vendors === '' ) return style;
		// 最后直接返回
		return this.vendors + style.charAt(0).toUpperCase() + style.substr(1);
	}
	// 初始化函数
	init(){
		let str = ``;
		for(let i=1;i<=36;i++){
			// 创建一个
			str+=`<div class=rib${i}></div>\n`;
		}
	    let that = this;
		this.ele.innerHTML = str;
		this.ele.addEventListener('mouseover',function(){
			this.style[that._prefixStyle("animation")] = `spin 15s infinite linear alternate `;
			this.style[that._prefixStyle("transition")] = `transform 1s linear alternate`
			this.style[that._prefixStyle("transform")] = `scale(2,2)`;
		},true)


		// 取消鼠标触摸时
		// 还原样式
		this.ele.addEventListener('mouseout', function(){
			this.style[that._prefixStyle("transition")] = '';
			this.style[that._prefixStyle("animation")] = ``;
			this.style[that._prefixStyle("transform")] = ``;
		}, true)
	}
	
}

