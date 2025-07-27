import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cv.js";
import * as f from "./GiftPanel.js";

function main() {
    var b, S, v, z, E, C, G, P, T;
    n._RF.push({}, "b0e1aXJl49Eg5usCdUgZq57", "GiftGoodsHelp", void 0);
    const {
        ccclass: y,
        property: x
    } = o;
    e("GiftGoodsHelp", (b = x(s), S = x(a), v = x(s), y(((T = class extends l {
        constructor(...e) {
            super(...e), i(this, "panel", C, this), i(this, "txt", G, this), i(this, "img_shield", P, this), this._txt_scr_size = new r(r.ZERO), this._panel_scr_size = new r(r.ZERO), this.panelUITransform = null
        }
        autoShow(e, t = !0) {
            this._layoutPanel(), this._adaptPanelPos(e), this._autoSelectAnimFunc(!0, t)
        }
        autoHide(e = !0) {
            this._autoSelectAnimFunc(!1, e)
        }
        onLoad() {
            m.resMgr.adaptWidget(this.node, !0), this.node.on(s.EventType.TOUCH_END, this._onClick, this), this._txt_scr_size = h(m.resMgr.getLabelStringSize(this.txt)), this.panelUITransform = this.panel.getComponent(c), this._panel_scr_size = h(this.panelUITransform.contentSize)
        }
        start() {}
        onEnable() {
            this._registerEvent()
        }
        onDisable() {
            this._unregisterEvent()
        }
        _registerEvent() {
            m.MessageCenter.register(`${f.g_class_name}_hide`, this._onMsgHideGiftPanel.bind(this), this.node)
        }
        _unregisterEvent() {
            m.MessageCenter.unregister(`${f.g_class_name}_hide`, this.node)
        }
        _autoSelectAnimFunc(e, t, i = null) {
            this.node.active = !0;
            let n = null;
            if (e) {
                this.panel.setScale(g(0, 0, 1));
                let e = p.call((() => {
                    this.panel.setScale(g(1, 1, 1)), this.img_shield.getComponent(_).enabled = !1, this.img_shield.active = !1, i && i()
                }));
                if (t) {
                    let t = p().to(.3, {
                        scale: g(u.ONE)
                    }, {
                        easing: d.backOut
                    });
                    n = p().sequence(t, e)
                } else n = e
            } else {
                this.panel.setScale(g(1, 1, 1));
                let e = p.call((() => {
                    this.panel.setScale(g(0, 0, 1)), this.img_shield.getComponent(_).enabled = !1, this.img_shield.active = !1, this.node.active = !1, i && i()
                }));
                if (t) {
                    let t = p().to(.3, {
                        scale: g(0, 0, 1)
                    }, {
                        easing: d.backIn
                    });
                    n = p().sequence(t, e)
                } else n = e
            }
            n && (n.target(this.panel).start(), this.img_shield.active = !0, this.img_shield.getComponent(_).enabled = !0)
        }
        _layoutPanel() {
            let e = m.config.getCurrentLanguage() === m.Enum.LANGUAGE_TYPE.zh_CN || m.config.getCurrentLanguage() === m.Enum.LANGUAGE_TYPE.zh_TW,
                t = m.config.getStringData("Gift_question_des"),
                i = m.StringTools.calculateAutoWrapString(this.txt.node, t + "\n  " + e);
            this.txt.string = i;
            let n = m.resMgr.getLabelStringSize(this.txt).height - this._txt_scr_size.height;
            n = Math.max(0, n), this.panelUITransform.setContentSize(this._panel_scr_size.width, this._panel_scr_size.height + n), m.resMgr.adaptWidget(this.panel, !0)
        }
        _adaptPanelPos(e) {
            let t = new u(u.ZERO),
                i = h(e.getComponent(c).contentSize);
            e.parent.getComponent(c).convertToWorldSpaceAR(e.position, t), t.y -= i.height * e.getComponent(c).anchorY + 0, t.y -= this.panelUITransform.height * (1 - this.panelUITransform.anchorY);
            let n = new u(u.ZERO);
            this.panel.parent.getComponent(c).convertToNodeSpaceAR(t, n), this.panel.setPosition(n)
        }
        _onClick(e) {
            this.autoHide()
        }
        _onMsgHideGiftPanel() {
            this.node.removeFromParent(), m.tools.destroyNode(this.node)
        }
    }).g_class_name = "GiftGoodsHelp", C = t((E = T).prototype, "panel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(E.prototype, "txt", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(E.prototype, "img_shield", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = E)) || z));
    n._RF.pop()
}