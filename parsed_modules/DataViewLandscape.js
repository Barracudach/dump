import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as b from "./cv.js";
import * as g from "./DataView.js";
import * as c from "./DataView.js";
import * as d from "./PairPopupPanel.js";
import * as h from "./PairPopupPanel.js";

function main() {
    var _, f, m, T, B, S, x, P, v, y, C, D, w, N, H, E, I, V, M, L;
    i._RF.push({}, "c7665TifTVIT4kwAWwCgrF8", "DataViewLandscape", void 0);
    const {
        ccclass: z,
        property: F
    } = r;
    t("DataViewLandscape", (_ = F(n), f = F(n), m = F(n), T = F(n), B = F(n), S = F(n), x = F(a), P = F(d), v = F(a), z((D = e((C = class extends g {
        constructor(...t) {
            super(...t), o(this, "gameTypeBtnSelectedColor", D, this), o(this, "gameTypeBtnNormalColor", w, this), o(this, "infoBoxTextNormalColor", N, this), o(this, "statBarNormalColor", H, this), o(this, "statBarFullColor", E, this), o(this, "statBarTextNormalColor", I, this), o(this, "bb100HelpIcon", V, this), o(this, "bb100Popup", M, this), o(this, "bb100TriangleNode", L, this), this._BB100HandNodePath = "box/item5/layout/BB100Hand", this._cachedData = null
        }
        start() {
            super.start(), this._infoBoxTextNormalColor = this.infoBoxTextNormalColor
        }
        _registerBb100HelpIconEvent() {
            var t, e;
            null == (t = this.bb100HelpIcon) || t.on(a.EventType.MOUSE_ENTER, this._onBb100MouseOver, this), null == (e = this.bb100HelpIcon) || e.on(a.EventType.MOUSE_LEAVE, this._onBb100MouseLeave, this)
        }
        _unRegisterBb100HelpIconEvent() {
            var t, e;
            l(this.bb100HelpIcon, !0) && (null == (t = this.bb100HelpIcon) || t.off(a.EventType.MOUSE_ENTER, this._onBb100MouseOver, this), null == (e = this.bb100HelpIcon) || e.off(a.EventType.MOUSE_LEAVE, this._onBb100MouseLeave, this))
        }
        _onBb100MouseOver() {
            let t = this.bb100TriangleNode.getPosition();
            t.x = this.bb100HelpIcon.position.x, this.bb100TriangleNode.setPosition(t), this.bb100Popup.node.active = !0;
            let e = this.bb100Popup.node.getParent();
            if (e.uuid != this.node.uuid) {
                let t = e.getComponent(s).convertToWorldSpaceAR(this.bb100Popup.node.getPosition());
                this.bb100Popup.node.setParent(this.node), this.bb100Popup.node.setPosition(this.node.getComponent(s).convertToNodeSpaceAR(t))
            }
        }
        _onBb100MouseLeave() {
            this.bb100Popup.node.active = !1
        }
        adaptWidgets() {
            b.resMgr.adaptWidget(this.node, !0, !1)
        }
        _setDataViewTabLabelString(t, e, o) {
            o == c.DataView_MTT ? e.string = b.config.getStringData("DataView_gameType_panel_button_Tournament_text") : e.string = t.toLocaleUpperCase()
        }
        _setBaseInfoBoxData(t, e, o, i, n) {
            u("box/item1/totalPoker_txt", t).getComponent(p).string = e.Total_end_room_count.toString(), u("box/item2/totalHand_txt", t).getComponent(p).string = e.Total_hand_card_count.toString();
            let a = i > 0 ? "+" : "";
            this._updateInfoBoxColor(u("box/item3/averageFight_txt", t), i), u("box/item3/averageFight_txt", t).getComponent(p).string = a + b.StringTools.numberToShowString(b.numFix.roundWithNaNHandling(b.StringTools.clientGoldByServer(i), 2)), u("box/item4/averageBring_txt", t).getComponent(p).string = b.StringTools.numberToShowString(b.numFix.roundWithNaNHandling(b.StringTools.clientGoldByServer(o), 2)), this._setBb100PopupPanel(e);
            let r = b.dataHandler.getUserData().u32CardType >= 2;
            a = n > 0 ? "+" : "", this._updateInfoBoxColor(u("box/item6/fight100Hand_txt", t), n), u("box/item6/fight100Hand_txt", t).getComponent(p).string = r ? a + b.StringTools.numberToShowString(b.numFix.roundWithNaNHandling(b.StringTools.clientGoldByServer(n), 2)) : "-"
        }
        _setBb100PopupPanel(t) {
            if (this.bb100Popup.removeAllPairs(), this.gameType == c.DataView_DZPK_SHORT ? this.bb100Popup.addPair(b.config.getStringData("Cell4"), b.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_ante_txt"), h.title) : this.bb100Popup.addPair(b.config.getStringData("ToastMessage4"), b.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_damang_txt"), h.title), t && t.Bb100s && t.Bb100s.length > 0)
                for (let e = 0; e < t.Bb100s.length; e++) {
                    let o = t.Bb100s[e].bb_100.toString(),
                        i = b.StringTools.clientGoldByServer(t.Bb100s[e].bb_value).toString();
                    this.bb100Popup.addPair(o, i, h.key)
                } else this.bb100Popup.addPair(b.config.getStringData("DataView_no_data"), b.config.getStringData("DataView_no_data"), h.key);
            this._cachedData = t
        }
    }).prototype, "gameTypeBtnSelectedColor", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(C.prototype, "gameTypeBtnNormalColor", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(C.prototype, "infoBoxTextNormalColor", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(C.prototype, "statBarNormalColor", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(C.prototype, "statBarFullColor", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(C.prototype, "statBarTextNormalColor", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(C.prototype, "bb100HelpIcon", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(C.prototype, "bb100Popup", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(C.prototype, "bb100TriangleNode", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = C)) || y));
    i._RF.pop()
}