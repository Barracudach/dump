import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as m from "./ImpokerHall.js";
import * as y from "./AgentWithdrawRecordPage.js";
import * as S from "./LoadingBlocker.js";
import * as _ from "./CommonTools.js";
import * as P from "./TweenControl.js";

function main() {
    var C, D, k, b, L, v, N, U, w, O;
    i._RF.push({}, "576dcChpTxBEoI5kFKSL3Bc", "DateSelectionPopUp", void 0);
    const {
        ccclass: T,
        property: E
    } = s;
    t("DateSelectionPopUp", (C = E(n), D = E(n), k = E([a]), b = E(n), T((N = e((v = class extends l {
        constructor(...t) {
            super(...t), o(this, "blockLayer", N, this), o(this, "popUp", U, this), o(this, "date", w, this), o(this, "popUpParent", O, this), this._hallScript = null, this._actionSpeed = .2, this._optionalDays = []
        }
        onLoad() {
            this.popUp.scale = new c(1e-4, 1e-4, 1e-4), this._hallScript = _.instance.getParentScene(r, this.node).getComponentInChildren(m);
            let t = this.date[2].content.children;
            for (let e = 28; e < 31; e++) this._optionalDays.push(t[e]);
            this.updateYears();
            for (let t of this.date) t.node.on(a.EventType.SCROLL_ENDED, (() => {
                this.onScrollEnd(t)
            }));
            this.date[1].node.on(a.EventType.SCROLL_ENDED, (() => {
                this.updateDays()
            }))
        }
        start() {}
        zoomIn() {
            P.fade(this.blockLayer, this._actionSpeed, 128), P.scaleTo(this.popUp, this._actionSpeed, h(c.ONE), p.backOut, (() => {
                this._hallScript.controlHallBlockLayer(!1, this.name)
            }))
        }
        zoomOut() {
            P.fadeOut(this.blockLayer, this._actionSpeed), P.scaleTo(this.popUp, this._actionSpeed, h(c.ZERO), p.backIn, (() => {
                this.resetPopUp(), this.node.active = !1, this._hallScript.controlHallBlockLayer(!1, this.name)
            }))
        }
        getN(t) {
            return Math.round(t.getScrollOffset().y / t.content.children[0].getComponent(d).height)
        }
        getNPos(t, e) {
            return new c(t.content.position.x, e * t.content.children[0].getComponent(d).height)
        }
        onScrollEnd(t) {
            let e = this.getN(t),
                o = this.getNPos(t, e);
            P.moveTo(t.content, .05, o)
        }
        updateYears() {
            let t = cc_mtt.vv.DataManager.getNow().getFullYear() - 2019;
            for (let e = 0; e < t; e++) {
                let t = u(this.date[0].content.children[0]);
                t.getComponent(g).string = (2020 + e).toString(), t.parent = this.date[0].content
            }
            this.date[0].content.getComponent(f).updateLayout()
        }
        updateDays() {
            let t = this.getN(this.date[1]),
                e = this.getN(this.date[2]),
                o = 30;
            switch (t + 1) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    for (let t of this._optionalDays) t.active = !0;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    this._optionalDays[2].active = !1, o--;
                    break;
                case 2:
                    let t = 2019 + this.getN(this.date[0]);
                    if (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) this._optionalDays[1].active = !1, this._optionalDays[2].active = !1, o -= 2;
                    else {
                        for (let t of this._optionalDays) t.active = !1;
                        o -= 3
                    }
            }
            this.date[2].content.getComponent(f).updateLayout();
            let i = this.getNPos(this.date[2], Math.min(e, o));
            P.moveTo(this.date[2].content, .05, i)
        }
        setPopUp() {
            this._hallScript || (this._hallScript = _.instance.getParentScene(r, this.node).getComponentInChildren(m)), this._hallScript.controlHallBlockLayer(!0, this.name), this.node.active = !0;
            let t = cc_mtt.vv.DataManager.getNow();
            this.date[0].setContentPosition(this.getNPos(this.date[0], t.getFullYear() - 2019)), this.date[1].setContentPosition(this.getNPos(this.date[1], t.getMonth())), this.date[2].setContentPosition(this.getNPos(this.date[2], t.getDate() - 1)), this.zoomIn()
        }
        resetPopUp() {}
        getPopUpTime() {
            return [this.getN(this.date[0]) + 2019, this.getN(this.date[1]) + 1, this.getN(this.date[2]) + 1]
        }
        onOkClicked() {
            S.show("DateSelectionPopUp onOkClicked"), this._hallScript.showLoading();
            let t = this.popUpParent.getComponent(y),
                e = this.getPopUpTime();
            t.dateButtonLabel.string = `${e[0]}-${e[1]}-${e[2]}`, t.filter(new Date(e[0], e[1] - 1, e[2])), this._hallScript.hidLoading((() => {
                this.zoomOut()
            })), S.hide("DateSelectionPopUp onOkClicked")
        }
        onCancelClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this.zoomOut()
        }
    }).prototype, "blockLayer", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(v.prototype, "popUp", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(v.prototype, "date", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), O = e(v.prototype, "popUpParent", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = v)) || L));
    i._RF.pop()
}