function personal(age,sex) {
	var object = new Object();
		object.age = age;
		object.sex = sex;
		object.information = function() {
			return this.age + " " + this.sex;
		};
		return object;
}

var David = personal(20,"boy");
var Lina = personal(18,"girl");

alert(David.information());
alert(Lina.information());