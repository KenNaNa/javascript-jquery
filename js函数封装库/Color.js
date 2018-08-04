function Color(){
	      var color = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
		  var str = '';
		  for( var i=0;i<6;i++ ){
			 str += color[Math.floor(Math.random()*16)];
		  }
		  str = '#' + str;
		  return str;
	  }