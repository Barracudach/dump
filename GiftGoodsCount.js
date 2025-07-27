import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cv.js";
import * as m from "./Enum.js";
import * as v from "./TableView.js";
import * as C from "./GiftPanel.js";
import * as w from "./GiftGoodsCountItem.js";
import * as b from "./GameSceneInstance.js";

function main() {
    var S, G, y, z, E, I, T, M, P;
    n._RF.push({}, "1f24fhWhltPTJrReo6Zd3p1", "GiftGoodsCount", void 0);
    const {
        ccclass: k,
        property: O
    } = a;
    e("GiftGoodsCount", (S = O(s), G = O(v), y = O(s), k(((P = class e extends o {
        constructor(...e) {
            super(...e), i(this, "panel", I, this), i(this, "view", T, this), i(this, "img_shield", M, this), this._view_scr_size = new l(l.ZERO), this._panel_scr_size = new l(l.ZERO), this.panelUITransform = null
        }
        autoShow(e, t, i = 1, n = !0) {
            this._layoutPanel(t, i, e.getComponent(r).width), this._adaptPanelPos(e), this._autoSelectAnimFunc(!0, n)
        }
        autoHide(e = !0) {
            this._autoSelectAnimFunc(!1, e)
        }
        onLoad() {
            f.resMgr.adaptWidget(this.node, !0), this.node.on(s.EventType.TOUCH_END, this._onClick, this), this._view_scr_size = c(this.view.node.getComponent(r).contentSize), this.panelUITransform = this.panel.getComponent(r), this._panel_scr_size = c(this.panelUITransform.contentSize)
        }
        start() {}
        onEnable() {
            this._registerEvent()
        }
        onDisable() {
            this._unregisterEvent()
        }
        _registerEvent() {
            f.MessageCenter.register(`${C.g_class_name}_hide`, this._onMsgHideGiftPanel.bind(this), this.node), f.MessageCenter.register(`${w.g_class_name}_click`, this._onClickItem.bind(this), this.node)
        }
        _unregisterEvent() {
            f.MessageCenter.unregister(`${C.g_class_name}_hide`, this.node), f.MessageCenter.unregister(`${w.g_class_name}_click`, this.node)
        }
        _autoSelectAnimFunc(e, t) {
            this.node.active = !0;
            let i = null;
            if (e) {
                this.panel.setScale(h(0, 0, 1));
                let e = _().call((() => {
                    this.panel.setScale(h(g.ONE)), this.img_shield.getComponent(u).enabled = !1, this.img_shield.active = !1
                }));
                if (t) {
                    let t = _().to(.3, {
                        scale: h(g.ONE)
                    }, {
                        easing: p.backOut
                    });
                    i = _().sequence(t, e)
                } else i = e
            } else {
                this.panel.setScale(h(1, 1, 1));
                let e = _().call((() => {
                    this.panel.setScale(h(0, 0, 1)), this.img_shield.getComponent(u).enabled = !1, this.img_shield.active = !1, this.node.active = !1
                }));
                if (t) {
                    let t = _().to(.3, {
                        scale: h(0, 0, 1)
                    }, {
                        easing: p.backIn
                    });
                    i = _().sequence(t, e)
                } else i = e
            }
            i && (i.target(this.panel).start(), this.img_shield.active = !0, this.img_shield.getComponent(u).enabled = !0)
        }
        _layoutPanel(e, t, i) {
            let n = b.getInstanceGameData(null == this ? void 0 : this.node).tGiftData.getGiftCountInfoListByID(e),
                s = n.length;
            s = Math.max(1, n.length), s = Math.min(6, s);
            let a = i + 60,
                o = this._panel_scr_size.height + this._view_scr_size.height * (s - 1);
            this.panelUITransform.setContentSize(a, o), f.resMgr.adaptWidget(this.panel, !0), this.view.resetScrollVewSize(this.view.node.getComponent(r).contentSize, !0);
            let l = f.config.getCurrentLanguage() === m.zh_CN ? 0 : 1;
            1 === e && (l = 1);
            let c = {
                prefab_type: l,
                prefab_component: w,
                prefab_datas: n
            };
            this.view.bindData(c);
            let h = n.length;
            for (let e = 0; e < n.length; ++e) n[e].isSelect = !1, t === n[e].count && (h = e, n[e].isSelect = !0);
            let _ = new d(d.ZERO),
                g = h - 6 + 1;
            g > 0 && (_.y += this.view.paddingStart, _.y += g > 1 ? (h - 1) * this.view.spacing : 0, _.y += g * this._view_scr_size.height, _.y = Math.min(_.y, this.view.getMaxScrollOffset().y)), this.view.reloadView(), this.view.scrollToOffsetEx(_)
        }
        _adaptPanelPos(e) {
            let t = new g(g.ZERO),
                i = c(e.getComponent(r).contentSize);
            e.parent.getComponent(r).convertToWorldSpaceAR(e.position, t), t.y += i.height * (1 - e.getComponent(r).anchorY) - 15, t.y += this.panelUITransform.height * this.panelUITransform.anchorY;
            let n = new g(g.ZERO);
            this.panel.parent.getComponent(r).convertToNodeSpaceAR(t, n), this.panel.setPosition(n)
        }
        _onClick() {
            this.autoHide(), f.MessageCenter.send(`${e.g_class_name}_click`)
        }
        _onClickItem(t) {
            this.autoHide(!1), f.MessageCenter.send(`${e.g_class_name}_click`, t)
        }
        _onMsgHideGiftPanel() {
            this.autoHide(!1)
        }
    }).g_class_name = "GiftGoodsCount", I = t((E = P).prototype, "panel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(E.prototype, "view", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(E.prototype, "img_shield", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = E)) || z));
    n._RF.pop()
}