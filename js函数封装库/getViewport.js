function getViewport(){
  if (document.compatMode == "BackCompat"){
      return {
         width: document.body.clientWidth,
         height: document.body.clientHeight
     };
  } else {
      return {
         width: document.documentElement.clientWidth,
         height: document.documentElement.clientHeight
     };
  }
}
//确定浏览器视口大小的时候。