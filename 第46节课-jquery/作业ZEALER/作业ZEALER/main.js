//水平列表的左右移动
var list = document.getElementsByClassName("goods-all")[0];
var btnLeft = document.getElementsByClassName("btn-left-border")[0];
var btnRight = document.getElementsByClassName("btn-right-border")[0];
var goods = list.getElementsByTagName("li");
function exchange(n){
  if (n==1) {
    var copy = goods[0].innerHTML;
    for (var i = 0; i < goods.length - 1; i++) {
      goods[i].innerHTML = goods[i+1].innerHTML;
    }
    goods[goods.length-1].innerHTML = copy;
    list.scrollLeft -= 286;
  }else{
    var copy = goods[goods.length - 1].innerHTML;
    for (var i = goods.length - 1; i > 0; i--) {
      goods[i].innerHTML = goods[i-1].innerHTML;
    }
    goods[0].innerHTML = copy;
    list.scrollLeft += 286;
  }
}
var move = 0;
var timer = null;
list.scrollLeft += 286;
btnLeft.onclick = function(){
  clearInterval(timer);
  timer =  setInterval("a(1)", 10);
}
btnRight.onclick = function(){
  clearInterval(timer);
  timer =  setInterval("a(0)", 10);
}
function a(n){
  if (move != 286) {
    if(n == 1){
      list.scrollLeft += 22;
    }else{
      list.scrollLeft-=22;
    }
    move+=22;
  }else{
    move = 0;
    clearInterval(timer);
    exchange(n);
  }
}
