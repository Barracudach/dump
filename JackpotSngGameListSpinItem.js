import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as r from "./JackpotSngGameListItem.js";
import * as u from "./FormatParser.js";
import * as h from "./cv.js";
import * as p from "./DoubleClickHandler.js";

function main() {
    var d, k, g, m, f, C, b, S, D, v;
    n._RF.push({}, "f8b5daov79Gh6LTs7uYQu/t", "JackpotSngGameListSpinItem", void 0);
    const {
        ccclass: y,
        property: L
    } = a;
    var _ = function(t) {
            return t[t.Green = 0] = "Green", t[t.Blue = 1] = "Blue", t[t.Purple = 2] = "Purple", t
        }(_ || {}),
        A = function(t) {
            return t[t.Show = 0] = "Show", t[t.First_Spin = 1] = "First_Spin", t[t.Next_Spin = 2] = "Next_Spin", t
        }(A || {});
    t("default", (d = L(s), k = L(l), g = L([o]), m = L(o), y((b = i((C = class extends r {
        constructor(...t) {
            super(...t), e(this, "ticket", b, this), e(this, "spinAnim", S, this), e(this, "digits", D, this), e(this, "selectedIcon", v, this), this.isDoubleCick = !1, this.isDoubleClickTracking = !1, this.doubleClickHandler = null, this.customOnClick = null, this._playedAnimationBeforeStarting = []
        }
        init() {
            super.init(), this.playSpinnerAnim(A.Show)
        }
        onLoad() {
            if (h.appConfig.isLandscapeLayout && !this.customOnClick) {
                this.doubleClickHandler = this.node.addComponent(p);
                let t = new c;
                return t.target = this.node, t.component = "JackpotSngGameListSpinItem", t.handler = "onDoubleClick", void this.doubleClickHandler.doubleClickEvents.push(t)
            }
        }
        start() {
            this._playedAnimationBeforeStarting.forEach((t => {
                this.playSpinnerAnim(t)
            }))
        }
        setSelected(t) {
            null !== this.selectedIcon && void 0 !== this.selectedIcon && (this.selectedIcon.active = t)
        }
        onDoubleClick() {
            var t;
            h.appConfig.isLandscapeLayout && (this.isDoubleCick = !0, this.customOnClick ? null == (t = this.customOnClick) || t.call(this) : super.onClick())
        }
        setData(t, i = !0, e = !1, n = null) {
            var s;
            this.customOnClick = n;
            const l = !this.data,
                o = null == (s = this.data) ? void 0 : s.Jackpot;
            super.setData(t), t.Detail.RegFee <= 5 ? this.setBackground(_.Green) : t.Detail.RegFee <= 15 ? this.setBackground(_.Blue) : this.setBackground(_.Purple), this.setBuyIn(t.Detail.RegFee), this.setTicket(i), (t.Jackpot != o || e) && (this.setSpinner(t.Jackpot), this.playSpinnerAnim(l ? A.First_Spin : A.Next_Spin))
        }
        setTicket(t = !0) {
            if (t)
                if (h.dataHandler.getUserData().isTouristUser) this.ticket.node.parent.active = !1;
                else {
                    const t = cc_mtt.vv.DataManager.getSignUpToolsByRegFee(this.data.Detail.RegFee);
                    0 == t.length ? this.ticket.node.parent.active = !1 : (this.ticket.node.parent.active = !0, this.ticket.string = t.length.toString())
                }
            else this.ticket.node.parent.active = !1
        }
        setSpinner(t) {
            let [i] = u.addStartPadding([Math.floor(Math.min(9999999, t))], 7, "0");
            for (let t = 0; t < i.length; t++) {
                const e = this.digits[t];
                if (t < i.length - 1) {
                    e.children[1].getComponent(s).string = i[t]
                } else {
                    const n = e.children[1].getComponent(s),
                        l = e.children[2].getComponent(s);
                    n.string = i[t], l.string = ((+i[t] + 1) % 10).toString()
                }
            }
        }
        playSpinnerAnim(t) {
            const i = this.spinAnim.clips[t];
            this.spinAnim.play(i.name), this._playedAnimationBeforeStarting.includes(t) || this._playedAnimationBeforeStarting.push(t)
        }
        checkDoubleClick() {
            if (this.isDoubleClickTracking = !1, this.isDoubleCick) return this.isDoubleCick = !1, void this.unschedule(this.checkDoubleClick);
            const t = this.gameListPage;
            null != t && t.updateRightPanel()
        }
        onClick() {
            var t;
            if (h.appConfig.isLandscapeLayout && !this.customOnClick) {
                const t = this.gameListPage;
                if (null == t) return;
                return t.onClickItem(this), void(this.isDoubleClickTracking || (this.isDoubleClickTracking = !0, this.scheduleOnce(this.checkDoubleClick, this.doubleClickHandler.GetMaxTimeMiliSeconds() / 1e3)))
            }
            this.customOnClick ? null == (t = this.customOnClick) || t.call(this) : super.onClick()
        }
    }).prototype, "ticket", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = i(C.prototype, "spinAnim", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = i(C.prototype, "digits", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = i(C.prototype, "selectedIcon", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = C)) || f));
    n._RF.pop()
}