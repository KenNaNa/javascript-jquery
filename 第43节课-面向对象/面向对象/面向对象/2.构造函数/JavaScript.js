//构造函数
function personal(age,sex){
	this.age = age;
	this.sex = sex;
	this.information = function() {
		return this.age + " " + this.sex;
	};
}

var David = new personal(20,"boy"); //实例化
var Lina = new personal(18,"girl");

alert(David.information());
alert(Lina.information());