function personal(age,sex) {
	this.age = age;
	this.sex = sex;
	this.necessity = ["computer","television"];
}

personal.prototype = {
	information : function() {
		return this.age + " " + this.sex;
	}
};

var David = new personal(20,"David");
alert(David.information());