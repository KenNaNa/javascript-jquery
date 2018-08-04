//Selectors API Level 2 规范为 Element 类型新增了一个方法 matchesSelector()。
//这个方法接收一个参数，即 CSS 选择符
//如果调用元素与该选择符匹配，返回 true；否则，返回 false。
  function matchesSelector(element, selector){
    element.matchesSelector&&(return element.matchesSelector(selector));
    element.msMatchesSelector&&(return element.msMatchesSelector(selector));
    element.mozMatchesSelector&&(return element.mozMatchesSelector(selector));
    element.webkitMatchesSelector&&(return element.webkitMatchesSelector(selector));
    element.matchesSelector&&element.msMatchesSelector&&element.mozMatchesSelector&&element.webkitMatchesSelector&&(throw new Error("Not supported."));
}