import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as k from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as f from "./mttconfig.js";
import * as b from "./httpApis.js";
import * as g from "./JackpotRecordRow.js";
import * as R from "./JackpotSetRow.js";
import * as P from "./FormatParser.js";
import * as C from "./AndroidBackButton.js";
import * as j from "./Translator.js";

function main() {
    var m, S, w, J, y, I, A, L, T, z, O, v, E, _, N, D, G, M, F, B, V, q, K, x, H, U, W, Q, X, Y, Z, $, tt, et, ot, nt;
    n._RF.push({}, "49040+MxepD7rW/U7jOGk+4", "JackpotInfo", void 0);
    const {
        ccclass: it,
        property: at
    } = c;
    t("default", (m = at(i), S = at(a), w = at(r), J = at(l), y = at(a), I = at(r), A = at(l), L = at(a), T = at(r), z = at(l), O = at(a), v = at(a), E = at(r), _ = at(r), N = at(a), D = at(r), G = at(r), it((B = e((F = class extends p {
        constructor(...t) {
            super(...t), o(this, "jackpotInfoPageView", B, this), o(this, "togglePanel", V, this), o(this, "totalJackpotLabel1", q, this), o(this, "rankJackpotPrefab", K, this), o(this, "rankJackpotContainer", x, this), o(this, "totalJackpotLabel2", H, this), o(this, "jackpotSetPrefab", U, this), o(this, "jackpotSetContainer", W, this), o(this, "jackpotSetNote", Q, this), o(this, "jackpotRecordPrefab", X, this), o(this, "jackpotRecordPage", Y, this), o(this, "jackpotTopRecordContainer", Z, this), o(this, "topPlayerLabel", $, this), o(this, "jackpotRecordLabel", tt, this), o(this, "jackpotRecordContainer", et, this), o(this, "numOfRecordLabel", ot, this), o(this, "noRecordLabel", nt, this), this.showingSpeedInSecond = .1, this.hidingSpeedInSecond = .1, this._jackpotInfoStartPosition = null, this._jackpotInfoStopPosition = null
        }
        onLoad() {
            this.node.active = !1
        }
        updateJackpotInfo(t) {
            let e = P.ThousandPointFormat(P.DisplayGold(t.totalJackpot, 2));
            this.totalJackpotLabel1.string = e;
            let o = t.jackpotPts.sort(((t, e) => t.point - e.point));
            this.rankJackpotContainer.destroyAllChildren(), this.rankJackpotContainer.removeAllChildren();
            for (const t of o) {
                let e = s(this.rankJackpotPrefab);
                e.name = t.point.toString(), e.parent = this.rankJackpotContainer, e.children[0].getComponent(r).string = (Math.round(100 * t.jackpot) / 100).toString(), e.children[1].children[1].getComponent(r).string = (Math.round(10 * t.point) / 10).toString()
            }
            this.totalJackpotLabel2.string = e;
            let n = t.jackpotSets.sort(((t, e) => e.Point - t.Point));
            this.jackpotSetContainer.destroyAllChildren(), this.jackpotSetContainer.removeAllChildren();
            let i = 0,
                a = 0;
            for (const t of n) {
                if (t.Ratio < 1) {
                    let e = s(this.jackpotSetPrefab);
                    e.name = t.Point.toString(), e.parent = this.jackpotSetContainer;
                    let o = t.Point < i ? u.formatStr(j("GAME.JACKPOT_INFO.SETTING.RANGE"), t.Point, i - 1) : u.formatStr(j("GAME.JACKPOT_INFO.SETTING.ABOVE"), t.Point),
                        n = Math.round(100 * t.Ratio).toString() + "+";
                    e.getComponent(R).updateRow(o, n), e.getComponent(R).updateRowColor(a), i = t.Point
                } else {
                    let e = 2;
                    this.jackpotSetNote.string = u.formatStr(j("GAME.JACKPOT_INFO.NOTE"), t.Point, i - 1, t.Ratio, e, t.Ratio * e)
                }
                a++
            }
        }
        updateJackpotRecord(t, e) {
            if (this.jackpotRecordLabel.string = u.formatStr(j("GAME.JACKPOT_RECORD.TITLE.LEVEL"), t), e.length > 0) {
                this.jackpotRecordPage.active = !0, this.noRecordLabel.node.active = !1;
                let t = e.sort(((t, e) => e.taken - t.taken));
                this.jackpotTopRecordContainer.destroyAllChildren(), this.jackpotTopRecordContainer.removeAllChildren(), this.topPlayerLabel.string = u.formatStr(j("GAME.JACKPOT_RECORD.TITLE.NAME"), t[0].nickName, P.DisplayGold(t[0].taken, 2).toString());
                let o = s(this.jackpotRecordPrefab);
                o.getComponent(f.JackpotRecordRow).updateRow(t[0]), o.getComponent(f.JackpotRecordRow).updateRowColor(0), o.parent = this.jackpotTopRecordContainer;
                let n = e.sort(((t, e) => {
                    let o = new Date(t.created),
                        n = new Date(e.created);
                    return n > o ? 1 : n < o ? -1 : 0
                }));
                this.jackpotRecordContainer.destroyAllChildren(), this.jackpotRecordContainer.removeAllChildren();
                let i = 0;
                for (const t of n) {
                    let e = s(this.jackpotRecordPrefab);
                    e.getComponent(g).updateRow(t), e.getComponent(g).updateRowColor(i), e.parent = this.jackpotRecordContainer, i++
                }
                this.numOfRecordLabel.node.active = e.length >= 20
            } else this.jackpotRecordPage.active = !1, this.noRecordLabel.node.active = !0;
            this.jackpotInfoPageView.scrollToPage(0, .5)
        }
        requestJackpotInfo(t) {
            require(f.PineappleGame)._pineappleNetwork.requestJackpotInfo(), b.requestJackpotRecord(t, (e => {
                this.updateJackpotRecord(t, e)
            }))
        }
        onClose() {
            this._jackpotInfoStartPosition && this._jackpotInfoStopPosition && this.node.position.equals(this._jackpotInfoStopPosition.position) && h(this.node).sequence(h().to(this.hidingSpeedInSecond, {
                position: this._jackpotInfoStartPosition.position
            }), h().call((() => {
                this.node.position = this._jackpotInfoStartPosition.position, this.node.active = !1, d.isNative && d.os === d.OS.ANDROID && C.getInstance().removeBackFunction(f.JackpotInfo)
            }))).start()
        }
        onPageIndicatorToggle(t, e) {
            this.jackpotInfoPageView.scrollToPage(+e, .5)
        }
        onPageScroll(t) {
            let e = this.togglePanel.children[t.getCurrentPageIndex()].getComponent(k);
            e.interactable && (e.isChecked = !0)
        }
    }).prototype, "jackpotInfoPageView", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(F.prototype, "togglePanel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(F.prototype, "totalJackpotLabel1", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(F.prototype, "rankJackpotPrefab", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(F.prototype, "rankJackpotContainer", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(F.prototype, "totalJackpotLabel2", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(F.prototype, "jackpotSetPrefab", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(F.prototype, "jackpotSetContainer", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(F.prototype, "jackpotSetNote", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(F.prototype, "jackpotRecordPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(F.prototype, "jackpotRecordPage", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(F.prototype, "jackpotTopRecordContainer", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(F.prototype, "topPlayerLabel", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(F.prototype, "jackpotRecordLabel", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(F.prototype, "jackpotRecordContainer", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(F.prototype, "numOfRecordLabel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(F.prototype, "noRecordLabel", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = F)) || M));
    n._RF.pop()
}