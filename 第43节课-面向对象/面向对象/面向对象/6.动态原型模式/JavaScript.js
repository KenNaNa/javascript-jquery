function personal(age,sex) {
	this.age = age;
	this.sex = sex;

	if(typeof this.information != "function"){
		alert("strat");
		personal.prototype.information = function() {
			return this.age + " " + this.sex;
		};
		alert("end");
	}
}

var David = new personal(20,"David");
alert(David.information());

var Lina = new personal(20,"Lina");
alert(Lina.information());