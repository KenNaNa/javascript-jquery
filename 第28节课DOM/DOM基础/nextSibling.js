//兼容浏览器
function nextSibling( obj) {
    return obj.nextElementSibling===undefined?obj.nextSibling:obj.nextElementSibling
}