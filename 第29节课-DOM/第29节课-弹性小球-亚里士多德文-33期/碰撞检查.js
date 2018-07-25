function impact(el1, el2) {
        var e1 = {
            x: getDefaultStyle(el1, 'left'),
            y: getDefaultStyle(el1, 'top'),
            w: getDefaultStyle(el1, 'width'),
            h: getDefaultStyle(el1, 'height')
        }
        var e2 = {
            x: getDefaultStyle(el2, 'left'),
            y: getDefaultStyle(el2, 'top'),
            w: getDefaultStyle(el2, 'width'),
            h: getDefaultStyle(el2, 'height')
        }
        var px, py;
        px = e1.x <= e2.x ? e2.x : e1.x;
        py = e1.y <= e2.y ? e2.y : e1.y;
        if (px >= e1.x && px <= e1.x + e1.w && py >= e1.y && py <= e1.y + e1.h && px >= e2.x && px <= e2.x + e2.w && py >= e2.y && py <= e2.y + e2.h) {
            return true;
        } else {
            return false;
        }
    }
    function getDefaultStyle(obj, attribute) {
        return parseInt(obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj, false)[attribute]);
    }