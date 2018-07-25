//1、直接给jquery添加全局函数
/*jQuery.myAlert=function(str){
	alert(str);
};*/

/*jQuery.myAlert2=function(str){
	alert(str);
};*/

//2、用extend()方法
/*jQuery.extend({
	myAlert:function(str){
		alert(str);
	},
	myAlert2:function(){
		alert(2222222);
	}
});*/

//3、使用命名空间

jQuery.zxit={
	myAlert:function(str){
		alert(str);
	}
}