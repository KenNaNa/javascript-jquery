/*
    当然，可以从一个函数中返回另一个函数，而且这也是极为有用的一种技术。
    例如，假设有一个
	对象数组，我们想要根据某个对象属性对数组进行排序。
	而传递给数组 sort()方法的比较函数要接收
	两个参数，即要比较的值。可是，我们需要一种方式来指明按照哪个属性来排序。
	要解决这个问题，
	可以定义一个函数，它接收一个属性名，
	然后根据这个属性名来创建一个比较函数，下面就是这个函
	数的定义
*/

function createComparisonFunction(propertyName) {
		return function(object1, object2){
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			if (value1 < value2){
			     return -1;
			} else if (value1 > value2){
			     return 1;
			} else {
			     return 0;
			}
		};
	}