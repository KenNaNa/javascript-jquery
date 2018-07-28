/*
	Anthor Ken
	call 13425477079
	time 2017-10-11-19-43
 */
!function(){
	//对象的接口函数
	function $(options){
		//返回对象的初始化
		return new Init(options);
	}
	//构造jquery对象函数
	function Init(args){
		this.exe(args);
	}
	Init.prototype = {
		//获取参数对应的js对象
        exe : function (args) {
            var typeargs = typeof args;
            switch (typeargs){
                case 'string':
                    if(/^<[^><]+>/.test(args)){
                    	var oDiv = document.createElement('div');
                    	oDiv.innerHTML = args;
                    	this.length = oDiv.children.length;
                    	for( var i=0;i<this.length;i++ ){
                    		this[i] = oDiv.children[i];
                    	}
                    }else{
                    	var arrObj = document.querySelectorAll(args);

	                    //设置了Fly对象的length属性
	                    this.length = arrObj.length;
	                    //将获取的js对象存储在Fly对象的数字下标下
	                    for (var i=0;i<this.length;i++){
	                        this[i] = arrObj[i];

	                    } 
                    }
                    break;
                case "object":
                    if(args.nodeType || args === window){
                        this.length = 1;
                        this[0] = args;
                    }else{
                        this.length = args.length;
                        for (var i=0;i<this.length;i++){
                            this[i] = args[i];
                        }
                    }
                    break;
                case "function":
                    window.onload = args;
                    break;
            }
        },
		each : function(fn){
			for( var i=0;i<this.length;i++ ){
				fn.call(this[i],i,this[i]);
			}
		},
		get : function(index){//获取js对象
			return this[index];
		},
		eq : function(index){//获取jq对象
			return $(this[index]);
		},
		index : function(){
		},
		css : function(){
			var length = arguments.length;//获取传入的参数length
			var args = arguments;
			if(length===2){//判断传入的参数是否是两个
				this.each(function(){
					//console.log(this);//p元素
					this.style[args[0]] = args[1];
				});
			}
			else if(length===1){
				if(typeof args[0]==='object'){//json对象
					this.each(function(){
						for(var key in args[0]){//遍历JSON对象
							this.style[key] = args[0][key];
						}
					});
				}
				if(typeof args[0]==='string'){
					var obj = this[0];
					var val = '';
					if(args[0]==='top'){
						val = obj.offsetTop + 'px';
					}
					else if(args[0]==='left'){
						val = obj.offsetLeft + 'px';
					}
					else if(args[0]==='right'){
						val = obj.offsetLeft + obj.offsetWidth + 'px';
					}
					else if(args[0]==='bottom'){
						val = obj.offsetTop + obj.offsetHeight + 'px';
					}
					else{
						val = obj.currentStyle?obj.currentStyle[args[0]]:getComputedStyle(obj)[args[0]];
					}
					return val;
				}
			}
			return this;
		},
		attr : function(){
			var length = arguments.length;//获取传入的参数length
			var args = arguments;
			if(length===2){//判断传入的参数是否是两个
				this.each(function(){
					this.setAttribute(args[0],args[1]);
				});
			}
			else if(length===1){
				if(typeof args[0]==='object'){//json对象
					this.each(function(){
						for(var key in args[0]){//遍历JSON对象
							this.setAttribute(key,args[0][key]);
						}
					});
				}
				if(typeof args[0]==='string'){
					return this[0].getAttribute(args[0]);
				}
			}
			return this;
		},
		removeAttr : function(){
			var args = arguments[0];
			this.each(function(){
				this.removeAttribute(args);
			});
			return this;
		},
		addClass : function(cName){
			this.each(function(){
				if(this.className){//判断this.className是否存在
					var cNameArr = this.className.split(' ');//用空格切割className
				    for( var i=0;i<cNameArr.length;i++ ){
				    	if(!new RegExp('(^|\\s)'+cNameArr[i]+'(\\s|$)').test(this.className)){
				    		this.className += ' '+cNameArr[i];
				    	}
				    }
				}else{
					this.className = cName;
				}
			});
			return this;
		},
		removeClass : function(cName){
			this.each(function(){
				var cNameArr = cName.split(' ');
				var classArr = this.className.split(' ');
				for( var i=classArr.length;i>0;i-- ){//重复的className遍历
					for( var j=0;j<cNameArr.length;j++ ){
						if( classArr[i]===cNameArr[j] ){
							classArr.splice(i,1);//删除重复的className
						}
					}
				}
				this.className = classArr.join(' ');
			});
			return this;
		},
		toggleClass : function(cName){
			this.each(function(){
				var cNameArr = cName.split(' ');
				var len = cNameArr.length;
			    var classArr = this.className.split(' ');
			    for( var i=0;i<len;i++ ){
			    	for( var j=len;j>i+1;j-- ){
			    		if( cNameArr[i]===cNameArr[j] ){
			    			cNameArr.splice(j,1);
			    		}
			    	}
			    }
			    for( var i=0;i<len;i++ ){//有相同就删除 没有就添加
			    	var bool = false;//标志是否
			    	for( var j=classArr.length;j>=0;j-- ){
			    		if( classArr[j]===cNameArr[i] ){
			    			classArr.splice(j,1);
			    			bool = true;
			    		}
			    	}
			    	if(!bool){
			    		classArr.push(cNameArr[i]);
			    	}
			    }
			    this.className = classArr.join(' ');
			});
		},
		html : function(params){
			if(!params){//或者判断为typeof params !=='undefined'
				this.each(function(){
					this.innerHTML = params;
				});
			}else{
				return this[0].innerHTML;
			}
			return this;
		},
		text : function(params){
			if(!params){//或者判断为typeof params !=='undefined'
				this.each(function(){
					this.innerText = params;
				});
			}else{
				return this[0].innerText;
			}
			return this;
		},
		val : function(params){
			if(!params){//或者判断为typeof params !=='undefined'
				this.each(function(){
					this.value = params;
				});
			}else{
				return this[0].value;
			}
			return this;
		},
		offset : function(){
			var json = {left:0,top:0};
			var obj = this[0];
			while(obj!==document.body){
				json.left += obj.offsetLeft;
				json.top += obj.offsetTop;
				obj = obj.offsetParent;
			}
			var scrollLeft = document.body.scrollLeft||document.documentElement.scrollLeft;
			var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
			json.left -= scrollLeft;
			json.top -= scrollTop;
			return json;
		},
		scrollTop : function(params){
			var Rexp = /(^d+$)|(^d+'px'$)/;
			if(this[0]===window||this[0]===document||this[0]===document.body){
				if( Rexp.test(params) ){
					document.documentElement?document.documentELement.scrollTop=Number(parseFloat(params))+'px':document.body.scrollTop=Number(parseFloat(params))+'px';
				}else{
					return document.documentElement.scrollTop||document.body.scrollTop;
				}
			}else{
				if( Rexp.test(params) ){
					this[0].scrollTop = Number(parseFloat(params))+'px';
				}else{
					return this[0].scrollTop;
				}
			}
			return this;
		},
		scrollLeft : function(params){
			var Rexp = /(^d+$)|(^d+'px'$)/;
			if(this[0]===window||this[0]===document||this[0]===document.body){
				if( Rexp.test(params) ){
					document.documentElement?document.documentELement.scrollLeft=Number(parseFloat(params))+'px':document.body.scrollLeft=Number(parseFloat(params))+'px';
				}else{
					return document.documentElement.scrollLeft||document.body.scrollLeft;
				}
			}else{
				if( Rexp.test(params) ){
					this[0].scrollLeft = Number(parseFloat(params))+'px';
				}else{
					return this[0].scrollLeft;
				}
			}
			return this;
		},
		position : function(){
			var json = {
				left : this[0].offsetLeft,
				top : this[0].offsetTop
			}
			return json;
		},
		height : function(unit){
			if(typeof unit!=='undefined'){
				this.each(function(){
					this.css('height',unit+'px');
				});
			}else{
				return parseFloat(this[0].css('height'));
			}
			return this;
		},
		width : function(unit){
			if(typeof unit!=='undefined'){
				this.each(function(){
					this.css('width',unit+'px');
				});
			}else{
				return parseFloat(this[0].css('width'));
			}
			return this;
		},
		innerHeight : function(){
			return this[0].clientHeight;
		},
		innerWidth : function(){
			return this[0].clientWidth;
		},
		outerHeight : function(){
			return this[0].offsetHeight;
		},
		outerWidth : function(){
			return this[0].offsetWidth;
		},
		append : function(args){
			var argsType = typeof args;
			if(argsType==='string'){//是一个字符串
				if(/^<[^><]+>/.test(args)){//$('<div></div>')
					this.append($(args));
				}else{
					var oTxt = document.createTextNode(args);
					var _this = this[0];
					_this.appendChild(oTxt);
				}
			}
			if(argsType==='object'){
				if(args.constructor===Init){//是一个jquery对象
					var _this = this[0];
					args.each(function(i){
						_this.appendChild(args[i]);
					});
					//console.log(_this);//div
				}else{//是一个js对象
					//先把js对象转换为一个jquery对象
					//再调用自身
					this.append($(args));
				}
			}
			return this;
		},
		preappend : function(args){
			var argsType = typeof args;
			if(argsType==='string'){//是一个字符串
				if(/^<[^><]+>/.test(args)){//$('<div></div>')
					this.preappend($(args));
				}else{
					var oTxt = document.createTextNode(args);
					var _this = this[0];
					_this.insertBefore(oTxt,_this.children[0]);
				}
			}
			if(argsType==='object'){
				if(args.constructor===Init){//是一个jquery对象
					var _this = this[0];
					args.each(function(i){
						_this.insertBefore(args[args.length-1-i],_this.children[0]);
					});
					//console.log(_this);//div
				}else{//是一个js对象
					//先把js对象转换为一个jquery对象
					//再调用自身
					this.preappend($(args));
				}
			}
			return this;
		},
		wrap : function(args){
			var argsType = typeof args;
			if(argsType==='string'&&/^<[^><]+>/.test(args)){//'<div></div>'
				args = $(args)[0];//先将其转换为jq对象
			}else if(argsType==='object'){
				if(args.constructor===Init){//是jq对象
					args = args[0];
				}else if(!args.nodeType && args.length){//是js对象
					args = args[0];
				}
			}else{//是一个函数
				if(argsType==='function'){
					args = args();//先执行函数获取函数返回值
					argsType = typeof args;
					if(args!==undefined){
						if(argsType==='string'&&/^<[^><]+>/.test(args)){//'<div></div>'
							args = $(args)[0];//先将其转换为jq对象
						}else if(argsType==='object'){
							if(args.constructor===Init){//是jq对象
								args = args[0];
							}else if(!args.nodeType && args.length){//是js对象
								args = args[0];
							}
						}
					}
				}
			}
			var thisParent = this[0].parentNode;
			//console.log(args)
			//console.log(this[0])
			//console.log(thisParent);
			thisParent.insertBefore(args,this[0]);
			this.each(function(){
				args.appendChild(this);//这个this是指获取到的元素
			});
			return this;
		},
		unwrap : function(){//注意只能用于特定的某个元素 删除父级元素
			// console.log(this[0]);
			// console.log(this[1]);
			// console.log(this[2]);
			// console.log(this)
			var parent = this[0].parentNode;
			var pParent = parent.parentNode;
			var aSiblings = parent.children;
			for( var i=aSiblings.length-1;i>=0;i-- ){
				pParent.insertBefore(aSiblings[aSiblings.length-1-i],parent);
			}
			pParent.removeChild(parent);
			return this;
		},
		empty : function(){
			this.each(function(){
				this.innerHTML = '';
			});
			return this;
		},
		remove : function(){
			this.each(function(){
				this.parentNode.removeChild(this);
			});
			return this;
		},
		children : function(args){
			var argsType = typeof args;
			var arr = [];
			if(argsType==='string'){//'div'
				this.each(function(){
					var allChild = this.querySelectorAll(args);//在父级元素的基础上获取子元素
					for( var i=0;i<allChild.length;i++ ){//获取他的直接子元素
						if(allChild[i].parentNode===this){
							arr.push(allChild[i]);
						}
					}
				});
			}else{//没传参数
				this.each(function(){
					for( var i=0;i<this.children.length;i++ ){
						arr.push(this.children[i]);
					}
				});
			}
			return $(arr);
		},
		find : function(args){//还有缺陷
			var argsType = typeof args;
			var arr = [];
			if(!argsType)reurn;//没传参返回
			if(argsType==='string'){
				this.each(function(){
					var allChild = this.querySelectorAll(args);//在父级元素的基础上获取子元素
					for( var i=0;i<allChild.length;i++ ){//获取他的直接子元素
						if(allChild[i].parentNode===this){
							arr.push(allChild[i]);
						}
					}
				});
			}
			return $(arr);
		},
		hasClass : function(args){
			var bool = false;
			var arr = args.split(' ');
			var cName = this[0].className;
			for( var i=0;i<arr.length;i++ ){
				if(new RegExp('(^|\\s)'+arr[i]+'(\\s|$)').test(cName)){
					bool = true;
				}else{
					bool = false;
					break;
				}
			}
			return bool;
		},
		siblings : function(args){
			var argsType = typeof args;
			var arr = [];
			if( argsType==='string' ){//siblings('div');
				this.each(function(){
					var all = this.parentNode.querySelectorAll(args);
                    for (var i = 0; i < all.length; i++) {
                        if (all[i].parentNode === this.parentNode && all[i] !== this) {
                            arr.push(all[i]);
                        }
                    }
				});
			}else{
				this.each(function () {
                    var all = this.parentNode.children;
                    for (var i = 0; i < all.length; i++) {
                        if (all[i] !== this) {
                            arr.push(all[i]);
                        }
                    }
                });
			}
			return $(arr);
		},
		hover : function(){
			var args = arguments;
			if( args.length ){
				if(args.length===1){args[1]=args[0];}
				this.each(function(){
					this.addEventListener('mouseenter',args[0],false);
					this.addEventListener('mouseleave',args[1],false);
				});
			}
			return this;
		},
		click : function(){
			var args = arguments;
			if( args.length===1&&typeof args==='function' ){
				this.each(function(){
					this.addEventListener('click',args[0],false);
				});
			}
		},
		on : function (eName, eFn) {
            if (eName === 'mousewheel'){
                this.each(function () {
                    if (this[eName + 'FLY']) {
                        this[eName + 'FLY'].push(eFn);
                    } else {
                        this[eName + 'FLY'] = [eFn];
                    }
                    document.onmousewheel===null?this.onmousewheel=eFn:this.addEventListener('DOMMouseScroll',eFn);
                });
            }else{
                this.each(function () {
                    if (this[eName + 'FLY']) {
                        this[eName + 'FLY'].push(eFn);
                    } else {
                        this[eName + 'FLY'] = [eFn];
                    }
                    if (document.addEventListener) {
                        this.addEventListener(eName, eFn);
                    } else {
                        this.attachEvent('on' + eName, eFn);
                    }
                });
            }
            return this;
        },
        off : function (eName) {
            this.each(function () {
                if (this[eName + 'FLY']) {
                    for (var i = 0; i < this[eName + 'FLY'].length; i++) {
                        if (document.removeEventListener) {
                            this.removeEventListener(eName, this[eName + 'FLY'][i]);
                        } else {
                            this.detachEvent('on' + eName, this[eName + 'FLY'][i]);
                        }
                    }
                    if(eName === 'mousewheel'){
                        this.onmousewheel = null;
                    }
                }
            });
            return this;
        },
        mouseenter : function(args){
        	this.on('mouseenter',args);
        },
        mouseleave : function(args){
        	this.on('mouseleave',args);
        },
        mouseover : function(args){
        	this.on('mouseover',args);
        },
        mouseout : function(args){
        	this.on('mouseout',args);
        },
        mouseup : function(args){
        	this.on('mouseup',args);
        },
        mousedown : function(args){
        	this.on('mousedown',args);
        },
        mousemove : function(args){
        	this.on('mousemove',args);
        },
        focus : function (huamei) { //彩蛋 華魅
            return this.on('focus' , huamei);
        },

        blur : function (huamei) { //彩蛋 華魅
            return this.on('blur' , huamei);
        },

        change : function (huamei) { //彩蛋 華魅
            this.on('change' , huamei);
        },

        submit : function (huamei) { //彩蛋 華魅
            return this.on('submit' , huamei);
        },

        dblclick : function (huamei) { //彩蛋 華魅
            return this.on('dblclick' , huamei);
        },

        keydown : function (huamei) { //彩蛋 華魅
            return this.on('keydown' , huamei);
        },

        keyup : function (huamei) { //彩蛋 華魅
            return this.on('keyup' , huamei);
        },

        keypress : function (huamei) { //彩蛋 華魅
            return this.on('keypress' , huamei);
        },

        scroll : function (huamei) { //彩蛋 華魅
            return this.on('scroll' , huamei);
        },

        resize : function (huamei) { //彩蛋 華魅
            return this.on('resize' , huamei);
        },

        load : function (huamei) { //彩蛋 華魅
            return this.on('load' , huamei);
        },

        mousewheel : function (huamei) { //彩蛋 華魅
            return this.on('mousewheel' , huamei);
        }

	};
	Init.prototype.constructor = Init;
	window.$ = window.ken = $;
}();