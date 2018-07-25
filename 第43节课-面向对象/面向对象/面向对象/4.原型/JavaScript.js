function personal() {}

/*
personal.prototype.age = "20";
personal.prototype.sex = "boy";
personal.prototype.information = function() {
	return this.age + " " + this.sex;
};
*/

personal.prototype = {
	age : "20",
	sex : "boy",
	information : function() {
		return this.age + " " + this.sex;
	}
};

var David = new personal();
alert(David.information());