import * as t from "./cc.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var g;
    t._RF.push({}, "90786Kd6IZMqIIyea6a8BR7", "Base64Img", void 0);
    const {
        ccclass: m
    } = l;
    e("Base64Img", m(g = class extends s {
        constructor(...e) {
            super(...e), this.cachedScreenshot = void 0
        }
        get ImageExist() {
            var e;
            let t = null == (e = this.node) ? void 0 : e.getComponent(n);
            return null != t && null != t.spriteFrame
        }
        cleanImage(e = !0) {
            var t;
            this.setScale();
            let s = null == (t = this.node) ? void 0 : t.getComponent(n);
            s && (a.isNative && a.os === a.OS.WINDOWS && null != this.cachedScreenshot && (i.releaseAsset(this.cachedScreenshot), this.cachedScreenshot = null), e && s.destroy())
        }
        setImage(e, t) {
            const {
                pixelsHeight: s,
                sizeMode: d = n.SizeMode.TRIMMED
            } = t;
            this.cleanImage(!1);
            let h = this.node.getComponent(n);
            if (h || (h = this.node.addComponent(n)), h.sizeMode = d, a.isNative && a.os === a.OS.WINDOWS) {
                let t = e;
                return void i.loadRemote(t, function(e, t) {
                    if (e || !t) return;
                    this.cachedScreenshot = t;
                    const n = new o;
                    if (n.image = this.cachedScreenshot, n.setWrapMode(o.WrapMode.CLAMP_TO_EDGE, o.WrapMode.CLAMP_TO_EDGE), s) {
                        const e = s / n.height;
                        this.setScale(e)
                    }
                    const a = new c;
                    a.texture = n, h.spriteFrame = a
                }.bind(this))
            }
            let l = new Image;
            l.onload = function() {
                let e = new o;
                e.image = new r(l), e.setWrapMode(o.WrapMode.CLAMP_TO_EDGE, o.WrapMode.CLAMP_TO_EDGE);
                let t = new c;
                if (t.texture = e, h.spriteFrame = t, s) {
                    const e = s / l.height;
                    this.setScale(e)
                }
            }.bind(this);
            var g = e.indexOf("data:image/png;base64") >= 0 ? e : `data:image/png;base64,${e}`;
            l.src = g
        }
        setScale(e = 1) {
            d(this.node, !0) && (this.node.scale = new h(e, e, e))
        }
    }) || g);
    t._RF.pop()
}