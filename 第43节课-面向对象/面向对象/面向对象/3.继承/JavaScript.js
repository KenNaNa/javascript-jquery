//构造函数
function personal(age,sex){
	this.age = age;
	this.sex = sex;
	this.information = function() {
		return this.age + " " + this.sex;
	};
}

var David = new Object(); //继承
personal.call(David,20,"boy");

alert(David.information());