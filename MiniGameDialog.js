import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as _ from "./HumanboyDialog.js";
import * as d from "./cv.js";
import * as C from "./DialogStyleModel.js";
import * as b from "./DialogStyleModel.js";
import * as p from "./MiniGameSoundManager.js";

function main() {
    var f, m, y, v, w, G, M, D;
    o._RF.push({}, "0e4d5z/zodDs77XSzwBsTjf", "MiniGameDialog", void 0);
    const {
        ccclass: L,
        property: B
    } = s;
    e("MiniGameDialog", (f = B(i), m = B(a), y = B(r), L((G = t((w = class extends c {
        constructor(...e) {
            super(...e), n(this, "center_btn_arrow", G, this), n(this, "btn_center", M, this), n(this, "buttonGroup", D, this), this._cb_center = null, this._onUpdateContent = null, this._onChangeLanguage = null, this.legacyDialog = void 0
        }
        onLoad() {
            this.btn_center.node.on(a.EventType.CLICK, (e => {
                p.playButtonSound("button_click"), this._cb_center && (this.center_btn_arrow.setScale(1, -1), this._cb_center(this))
            })), this.btn_center.node.active = !1
        }
        onDestroy() {
            d.MessageCenter.unregister("on_advance_autobet_add", this.node), d.MessageCenter.unregister("on_advance_autobet", this.node), d.MessageCenter.unregister(d.config.CHANGE_LANGUAGE, this.node)
        }
        show(e, t, n, o, i, a, r) {
            var s;
            this._onUpdateContent = a, this._onChangeLanguage = r, null == (s = this.legacyDialog) || s.show(e, t, n, o, i), this._onUpdateContent && (d.MessageCenter.register("on_advance_autobet_add", this._onUpdateContent.bind(this), this.node), d.MessageCenter.register("on_advance_autobet", this._onUpdateContent.bind(this), this.node)), this._onChangeLanguage && d.MessageCenter.register(d.config.CHANGE_LANGUAGE, this._onChangeLanguage.bind(this), this.node)
        }
        showCenterButton(e, t) {
            this.btn_center.node.active = !0, this._cb_center = t, this.btn_center.node.getChildByName("txt").getComponent(l).string = e
        }
        blockCenterButton() {
            const e = this.btn_center.node.getChildByName("txt");
            this.btn_center.interactable = !1, this.btn_center.node.targetOff(a.EventType.CLICK), e.getComponent(g).color = new h(h.GRAY), this.btn_center.node.getComponent(g).color = new h(h.GRAY), this.center_btn_arrow.getComponent(g).color = new h(h.GRAY)
        }
        close() {
            var e;
            d.MessageCenter.unregister("on_advance_autobet_add", this.node), d.MessageCenter.unregister("on_advance_autobet", this.node), d.MessageCenter.unregister(d.config.CHANGE_LANGUAGE, this.node), this._cb_center = null, this._onUpdateContent = null, this._onChangeLanguage = null, null == (e = this.legacyDialog) || e.close(), this.btn_center.node.active = !1
        }
        setLegacyDialog(e) {
            this.legacyDialog = e
        }
        updateCenterButton(e) {
            var t;
            null == (t = this.center_btn_arrow) || t.setScale(1, 1)
        }
        setTheme(e) {
            const t = b.getInstance().getTheme(e);
            if (!t) return;
            const {
                leftBtnSize: n,
                rightBtnSize: o,
                spacing: i,
                fontSize: a
            } = t;
            switch (e) {
                case C.TwoButton_NoMoney_Style:
                    this.btn_center.node.active = !1;
                    const e = this.node.getComponent(_);
                    e.btn_left.node, this.getComponent(u).width = n.x, e.btn_left.node.getComponent(u).height = n.y, e.btn_right.node.getComponent(u).width = o.x, e.btn_right.node.getComponent(u).height = o.y, a && (e.btn_left.node.getChildByName("txt").getComponent(l).fontSize = a, e.btn_right.node.getChildByName("txt").getComponent(l).fontSize = a), this.buttonGroup.spacingX = i
            }
        }
    }).prototype, "center_btn_arrow", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(w.prototype, "btn_center", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(w.prototype, "buttonGroup", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = w)) || v));
    o._RF.pop()
}