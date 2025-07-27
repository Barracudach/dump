import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cv.js";

function main() {
    var h, u, d, A;
    r._RF.push({}, "8317cfVzPJOk5CGJ619f81K", "FaceEmoBase", void 0);
    const {
        ccclass: g,
        property: m
    } = o;
    e("default", (h = m(i), g((A = t((d = class extends n {
        constructor(...e) {
            super(...e), a(this, "face_ani_prefab", A, this), this.faceArr = []
        }
        addChildToContainer(e) {}
        showFaceAni(e, t, a = 1) {
            p.tools.isSoundEffectOpen() && p.AudioMgr.playEffect(p.StringTools.formatC("zh_CN/game/dzpoker/audio/voice_%d", t + 1)), this.hideAniBySameWorldPos(e);
            let r = this.getFaceAni();
            e = r.parent.getComponent(c).convertToNodeSpaceAR(e), r.setPosition(e.x, e.y), r.setScale(s(a, a, a));
            let i = (t + 6) % 12;
            return r.getComponent(l).play("face_" + i), r
        }
        getFaceAni() {
            let e = null,
                t = this.faceArr.length;
            for (let a = 0; a < t; a++)
                if (!this.faceArr[a].active) {
                    e = this.faceArr[a];
                    break
                } return e || (e = f(this.face_ani_prefab), this.addChildToContainer(e), this.faceArr.push(e), e.setScale(s(1.6, 1.6, 1.6)), e.getComponent(l).on(l.EventType.FINISHED, (t => {
                e.active = !1
            }), this)), e.active = !0, e
        }
        hideAniBySameWorldPos(e) {
            let t = this.faceArr.length;
            for (let a = 0; a < t; a++) {
                let t = this.faceArr[a].parent.getComponent(c).convertToWorldSpaceAR(this.faceArr[a].getPosition());
                Math.abs(t.x - e.x) < 1 && Math.abs(t.y - e.y) < 1 && (this.faceArr[a].active = !1)
            }
        }
    }).prototype, "face_ani_prefab", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = d)) || u));
    r._RF.pop()
}