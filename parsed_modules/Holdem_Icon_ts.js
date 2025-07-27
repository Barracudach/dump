import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./observer.js";
import * as p from "./CommonTools.js";
import * as m from "./Holdem_Player_ts.js";
import * as f from "./cv.js";
import * as g from "./Holdem_GameConfig.js";
import * as y from "./TweenControl.js";

function main() {
    var b, _, P, v, I, D, A, C, L, T, S, w, x, H, R, z;
    o._RF.push({}, "99823tgJ0NFzKHER3VPZ1jX", "Holdem_Icon_ts", void 0);
    const {
        ccclass: k,
        property: E
    } = l, N = n(120, -80);
    t("Holdem_Icon", (b = E(s), _ = E(s), P = E(s), v = E(s), I = E(s), D = E(s), A = E(a), k(C = d((T = e((L = class extends r {
        constructor(...t) {
            super(...t), i(this, "iconNode", T, this), i(this, "background", S, this), i(this, "dealerIcon", w, this), i(this, "bbIcon", x, this), i(this, "sbIcon", H, this), i(this, "straddleIcon", R, this), i(this, "isPublic", z, this), this._tableMaxPlayer = void 0, this._tablePositionHandler = void 0, this._seatId = 0, this.moveToAction = null, this._iconNodeStartPosition = n(0, 0), this._dealerStartPosition = n(0, 0), this._straddleStartPosition = n(0, 0), this._movingAnimDestPos = null, this._destPlayer = null, this._isReplay = !1
        }
        onLoad() {}
        moveDealer(t) {
            if (t.isRotating && !f.appConfig.isLandscapeLayout) return;
            if (this.isSameDestination(t)) return;
            const e = this.dealerIcon;
            e.active = !0, null !== this.moveToAction && this.moveToAction.stop(), f.appConfig.isLandscapeLayout || p.instance.changeParentKeepPos(e, this.node);
            const i = this.getDealerPosition(t);
            this._movingAnimDestPos = i, this._destPlayer = t;
            let o = y.easeInOut(g.EASE_RATE);
            const n = c().to(.2, {
                position: new u(i.x, i.y)
            }, {
                easing: o
            });
            f.appConfig.isLandscapeLayout ? this.moveToAction = n : this.moveToAction = n.call((() => {
                this._moveDealerCallback(t)
            })), this.moveToAction.target(e).start()
        }
        _moveDealerCallback(t) {
            const e = this.dealerIcon;
            if (h(e) && h(t) && !f.appConfig.isLandscapeLayout) {
                const i = t.getDealerContainer();
                e.setParent(i), e.setSiblingIndex(0);
                const o = this.getDealerPosition(t);
                e.setPosition(new u(o.x, o.y))
            }
            this._movingAnimDestPos = null, this._destPlayer = null, this.moveToAction = null
        }
        moveStraddle(t, e) {
            let i = this.getIconPos(t, e, this.straddleIcon);
            this.moveAnimation(this.straddleIcon, i)
        }
        showStraddle(t) {
            this.straddleIcon.active = t > 0
        }
        showDealer(t, e = 0, i = 0) {
            this.dealerIcon.active = t > 0
        }
        stopDealer() {
            this.stopAnimation(this.dealerIcon)
        }
        stopAnimation(t) {
            null !== this.moveToAction && (this.moveToAction.stop(), t === this.dealerIcon && null !== this._destPlayer && this._moveDealerCallback(this._destPlayer))
        }
        moveAnimation(t, e) {
            t.active = !0, this.stopAnimation(t), this.moveToAction = c().to(.2, {
                position: new u(e.x, e.y)
            }, {
                easing: y.easeInOut(g.EASE_RATE)
            }), this.moveToAction.target(t).start()
        }
        isSameDestination(t) {
            if (f.appConfig.isLandscapeLayout) return !1;
            const e = this.getDealerPosition(t);
            return !(this._destPlayer !== t || null !== this._movingAnimDestPos && !e.equals(this._movingAnimDestPos, .1))
        }
        setDealerPosition(t) {
            if (t.isRotating && !f.appConfig.isLandscapeLayout) return;
            if (this.isSameDestination(t)) {
                if (!f.appConfig.isLandscapeLayout) return
            } else this.stopAnimation(this.dealerIcon);
            if (!f.appConfig.isLandscapeLayout) {
                let e = t.getDealerContainer();
                this.dealerIcon.setParent(e), this.dealerIcon.setSiblingIndex(0)
            }
            const e = this.getDealerPosition(t);
            this.dealerIcon.setPosition(new u(e.x, e.y))
        }
        setMaxPlayer(t) {
            this._tableMaxPlayer = t
        }
        setTableHandler(t) {
            this._tablePositionHandler = t
        }
        setReplay(t) {
            cc_mtt.vv.ConsoleLog.log("setReplay:", t), this._isReplay = t
        }
        updateDealerPos(t, e, i) {
            if (!(t <= 0))
                for (let o = 0; o < i.length; o++) {
                    const n = i[o];
                    if (n) {
                        let i = t - 1;
                        this._seatId = (i + n._seatOffset) % e;
                        break
                    }
                }
        }
        getDealerSeatId() {
            return this._seatId
        }
        getIconPos(t, e, i, o = !1) {
            let s;
            if (e != m.Self && !this._isReplay || f.appConfig.isLandscapeLayout) {
                let t = this._tablePositionHandler.getDealIconPosition(this._tableMaxPlayer, this._seatId);
                s = p.instance.convertToNodeSpace(i.parent, t)
            } else {
                let e = t;
                s = p.instance.convertToNodeSpace(i.parent, e), s = n(s.x + N.x, s.y + N.y)
            }
            return s
        }
        getDealerPosition(t) {
            let e = p.instance.convertToWorldSpace(t.node, n(0, 0)),
                i = t._layout,
                o = t._isUseCelebrityLayout;
            return this.getIconPos(e, i, this.dealerIcon, o)
        }
    }).prototype, "iconNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(L.prototype, "background", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(L.prototype, "dealerIcon", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(L.prototype, "bbIcon", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(L.prototype, "sbIcon", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(L.prototype, "straddleIcon", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(L.prototype, "isPublic", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), C = L)) || C) || C));
    o._RF.pop()
}