import * as t from "./cc.js";
import * as o from "./cc.js";

function main() {
    var i;
    t._RF.push({}, "8300fKbRCJNNZIaIfwlVyBj", "GraphicHelper", void 0);
    let n = e("Corner", function(e) {
        return e[e.TopLeft = 0] = "TopLeft", e[e.TopRight = 1] = "TopRight", e[e.BottomRight = 2] = "BottomRight", e[e.BottomLeft = 3] = "BottomLeft", e
    }({}));
    const {
        ccclass: r,
        property: c
    } = o;
    var l = .5522847493;
    e("default", r(i = class {
        static roundRect(e, t, o, i, r, c, T = 0, s = !0, u = [n.TopLeft, n.TopRight, n.BottomRight, n.BottomLeft]) {
            if (c < .1) e.rect(t, o, i, r);
            else {
                let a = Math.min(c, .5 * Math.abs(i)) * Math.sign(i),
                    f = Math.min(c, .5 * Math.abs(r)) * Math.sign(r),
                    h = T,
                    p = function(c) {
                        e.moveTo(t, u.includes(n.BottomLeft) ? o + f : o), o + r - f - (o + a) > 0 && e.lineTo(t, o + r - f), u.includes(n.TopLeft) ? e.bezierCurveTo(t, o + r - f * (1 - l), t + a * (1 - l), o + r, t + a, o + r) : (e.lineTo(t, o + r), e.lineTo(t + a, o + r)), e.moveTo(t + a, o + r), e.lineTo(t + a + c, o + r), e.moveTo(t + a + h, o + r), e.lineTo(t + a + h - c, o + r), e.moveTo(t + a + h, o + r), t + i - a - (t + a + h) > 0 && e.lineTo(t + i - a, o + r), u.includes(n.TopRight) ? e.bezierCurveTo(t + i - a * (1 - l), o + r, t + i, o + r - f * (1 - l), t + i, o + r - f) : e.lineTo(t + i, o + r), o + f - (o + r - f) < 0 && e.lineTo(t + i, o + f), u.includes(n.BottomRight) ? e.bezierCurveTo(t + i, o + f * (1 - l), t + i - a * (1 - l), o, t + i - a, o) : e.lineTo(t + i, o), t + a - (t + i - a) < 0 && e.lineTo(t + a, o), u.includes(n.BottomLeft) ? e.bezierCurveTo(t + a * (1 - l), o, t, o + f * (1 - l), t, o + f) : e.lineTo(t, o)
                    },
                    m = .5,
                    v = s ? m : 0,
                    g = s ? 0 : m;
                p(0 != T ? h * g : h * v)
            }
        }
    }) || i);
    t._RF.pop()
}