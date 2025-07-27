import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./MttItemHelper.js";
import * as p from "./MttGameItemController.js";
import * as d from "./LobbyHelper.js";
import * as y from "./LobbyTools.js";
import * as T from "./Translator.js";
import * as m from "./ScrollViewWithSlider.js";
import * as v from "./AutoResizeLabel.js";

function main() {
    var E, b, g, f, L, _, w, S, C, k, D;
    n._RF.push({}, "28556hMLoxAK5Bg2sJrjeTI", "MttHallDetailEventListComp", void 0);
    const {
        ccclass: H,
        property: M
    } = o;
    let V = t("DisplayEventType", function(t) {
        return t[t.NA = 0] = "NA", t[t.Satellite = 1] = "Satellite", t[t.Feeder = 2] = "Feeder", t[t.TargetEvent = 3] = "TargetEvent", t
    }({}));
    t("MttHallDetailEventPageComp", (E = H("MttHallDetailEventPageComp"), b = M(v), g = M(l), f = M(a), L = M(s), E((S = e((w = class extends r {
        constructor(...t) {
            super(...t), i(this, "tournamentName", S, this), i(this, "displayEventTypeLabel", C, this), i(this, "scrollView", k, this), i(this, "itemPrefab", D, this), this._data = null, this._displayEventType = V.NA, this._onHide = null, this._isShowing = void 0, this.callbackOnClick = void 0
        }
        get displayEventType() {
            return this._displayEventType
        }
        onLoad() {}
        registerPageHideCallback(t) {
            this._onHide = t
        }
        show() {
            d.showPanelFromRight(this.node, !0, !0), this._isShowing = !0;
            const t = this.scrollView.node.parent.getComponent(m);
            c(t) && (this.scrollView.scrollToTop(), t.adjustScrollbarAsContentSize())
        }
        hide() {
            var t;
            d.showPanelFromRight(this.node, !1), this._isShowing = !1, null == (t = this._onHide) || t.call(this), this._displayEventType = V.NA
        }
        hideImmediately() {
            var t;
            d.showPanelFromRight(this.node, !1, !0), this._isShowing = !1, null == (t = this._onHide) || t.call(this), this._displayEventType = V.NA
        }
        isShowing() {
            return this._isShowing
        }
        render(t) {
            this._data = t, this._displayEventType = t.displayEventType, this.setTournamentName(t.tournamentName), this.setDisplayEventType(t.displayEventType), this.setMttList(t.mttList)
        }
        setTournamentName(t) {
            var e;
            null == (e = this.tournamentName) || e.setString(t)
        }
        setDisplayEventType(t) {
            let e = "";
            switch (t) {
                case V.Satellite:
                    e = T("MTT_HALL.EVENT_LIST.SATELLITE");
                    break;
                case V.Feeder:
                    e = T("MTT_HALL.EVENT_LIST.FEEDER");
                    break;
                case V.TargetEvent:
                    e = T("MTT_HALL.EVENT_LIST.TARGET_EVENT")
            }
            this.displayEventTypeLabel.string = e
        }
        convertData(t) {
            return t.map((t => u.convertMttTournamentInfoToMttLobbyItem(t)))
        }
        setMttList(t) {
            const e = this.convertData(t).concat();
            cc_mtt.vv.ConsoleLog.log("MttHallDetailEventPageComp render Events", e), e.forEach(((t, e) => {
                if (this.scrollView.content.children.length <= e) {
                    h(this.itemPrefab).parent = this.scrollView.content
                }
                const i = this.scrollView.content.children[e];
                i.active = !0, t.hidePin = !0, this.updateItem(i, t, e)
            }))
        }
        updateItem(t, e, i) {
            let n = new p(void 0, t, void 0);
            n.setCustomOnClick(this.callbackOnClick), n.init(), n.updateItemDataWhenScrolling(e)
        }
        setCallbackOnClick(t) {
            this.callbackOnClick = t
        }
        reset() {
            c(this) && (this._data = null, this.scrollView.content.children.forEach((t => {
                t.active = !1
            })))
        }
        onClickButtonBack() {
            y.playSoundBack(), this.hide()
        }
        onLanguageChange() {
            this.setDisplayEventType(this._displayEventType)
        }
    }).prototype, "tournamentName", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(w.prototype, "displayEventTypeLabel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(w.prototype, "scrollView", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(w.prototype, "itemPrefab", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = w)) || _));
    n._RF.pop()
}