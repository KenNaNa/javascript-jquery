function Parent() {
	this.property = "money";
}

function Son() {
	this.age = 20;
}

Son.prototype = new Parent(); //将实例化的父类赋值给子类的原型

var son = new Son();
alert(son.property);