import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cv.js";

function main() {
    var c, a, r, s, l, g, d, m;
    n._RF.push({}, "f2bedHQbupP+aJi3ZXNLBfl", "JackfruitFaceItem", void 0);
    const {
        ccclass: u,
        property: f
    } = cc._decorator;
    e("default", (c = f(cc.Node), a = f(cc.Label), r = f(cc.Node), u((l = class extends cc.Component {
        constructor(...e) {
            super(...e), t(this, "face_img", g, this), t(this, "gold_label", d, this), t(this, "gold_img", m, this), this._index = 0, this.canClick = !0
        }
        onLoad() {
            this.node.on(cc.Node.EventType.TOUCH_END, this.onBtnItemClick.bind(this), this), o.MessageCenter.register("FaceItem_canSendFace", this.setClick.bind(this), this.node)
        }
        onDestroy() {
            o.MessageCenter.unregister("FaceItem_canSendFace", this.node)
        }
        setData(e, t) {
            this._index = e, -1 == t ? (this.gold_label.node.active = !1, this.gold_img.active = !1, this.face_img.position.y = 5) : (this.gold_label.getComponent(cc.Label).string = o.StringTools.numberToString(o.StringTools.clientGoldByServer(t)), this.gold_label.node.active = !0, this.gold_img.active = !0, this.face_img.position.y = 15);
            let i = null;
            if (e < 6) i = o.resMgr.getSpriteAtlasFrame("zh_CN/game/dzpoker/animation/icon/effect", o.StringTools.formatC("animation-icon-icon%d", e));
            else {
                if (6 == e) return void o.resMgr.setSpriteFrame(this.face_img, "zh_CN/game/dzpoker/animation/icon/calmDown");
                i = o.resMgr.getSpriteAtlasFrame("zh_CN/game/dzpoker/animation/icon/effect", o.StringTools.formatC("animation-icon-icon%d", e - 1))
            }
            this.face_img.getComponent(cc.Sprite).spriteFrame = i
        }
        setClick(e) {
            this.canClick = e
        }
        onBtnItemClick() {
            this.canClick && o.MessageCenter.send("effet_call", this._index)
        }
    }, g = i(l.prototype, "face_img", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = i(l.prototype, "gold_label", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = i(l.prototype, "gold_img", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), s = l)) || s));
    n._RF.pop()
}