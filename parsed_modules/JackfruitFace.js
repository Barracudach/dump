import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as o from "./cv.js";
import * as s from "./JackfruitFaceItem.js";

function main() {
    var n, a, h, r;
    c._RF.push({}, "bd558ahu5RN3aKeL+/Y0ioW", "JackfruitFace", void 0);
    const {
        ccclass: u,
        property: d
    } = cc._decorator;
    t("JackfruitFace", (n = d(cc.Prefab), u((h = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "faceItem", r, this), this._opcityNum = 0
        }
        onLoad() {
            let t = this.node.getChildByName("view_panel"),
                e = t.getContentSize();
            for (let i = 0; i < 12; i++) {
                let c = cc.instantiate(this.faceItem),
                    n = c.getContentSize(),
                    a = cc.v2(-(e.width - n.width) / 2, (e.height - n.height) / 2);
                c.getComponent(s).setData(i, o.JackfruitManager.tRoomData.fee.emotionFee), c.setPosition(cc.v2(a.x + Math.floor(i % 4) * n.width, a.y - Math.floor(i / 4) * n.height)), t.addChild(c)
            }
            o.MessageCenter.register("effet_call", this.doOpcityX.bind(this), this.node)
        }
        onDestroy() {
            o.MessageCenter.unregister("effet_call", this.node)
        }
        start() {}
        Update(t) {
            if (this._opcityNum = this._opcityNum - 1, this._opcityNum <= 150) return this.node.active = !1, this._opcityNum = 300, void this.unschedule(this.Update);
            let e = this._opcityNum >= 255 ? 255 : this._opcityNum;
            this.doOpcity(this.node, e)
        }
        doOpcity(t, e) {
            if (!t) return;
            t.opacity = e;
            let i = t.childrenCount,
                c = t.children;
            for (let t = 0; t < i; t++) c[t].opacity = e, c[t].childrenCount > 0 && this.doOpcity(c[t], e)
        }
        doOpcityX(t) {
            this.doOpcity(this.node, 255), this.unschedule(this.Update), this._opcityNum = 300, this.schedule(this.Update, 0)
        }
        show() {
            this.unschedule(this.Update), this.node.active = !0, this.doOpcity(this.node, 255)
        }
    }, r = i(h.prototype, "faceItem", [n], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = h)) || a));
    c._RF.pop()
}