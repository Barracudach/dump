import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";

function main() {
    var d;
    e._RF.push({}, "83dbdfV8/VONpdn5kEYD3im", "HeadPointsAni", void 0);
    const {
        ccclass: r,
        property: c
    } = s;
    t("default", r(d = class extends n {
        playPointAni(t, e) {
            let n = i("UI1/lab", this.node),
                s = !1;
            t >= 1e6 && (t *= .001, s = !0);
            let d = l.StringTools.serverGoldToShowString(t);
            if (s) {
                let t = d.indexOf(".");
                t > 0 && (d = d.slice(0, t))
            }
            n.getComponent(o).string = l.config.getStringDataCasino("InquireView_lab_3") + (t >= 0 ? "+" : "") + d + (s ? "K" : "");
            let r = this.node.getComponent(a);
            this.node.active = !0, r && (r.stop(), e && -1 != e && e < r.defaultClip.duration ? (0 == e && (e = .3), this.gotoFrameAndPlay(r, e)) : r.play())
        }
        resetPointAni() {
            let t = this.node.getComponent(a);
            t && (t.stop(), this.node.active = !1)
        }
        gotoFrameAndPlay(t, e) {
            t.play(t.defaultClip.name), t.getState(t.defaultClip.name).setTime(t.defaultClip.duration - e)
        }
    }) || d);
    e._RF.pop()
}