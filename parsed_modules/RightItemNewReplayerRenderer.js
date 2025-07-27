import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./AutoResizeLabel.js";
import * as d from "./ButtonTooltip.js";
import * as c from "./RecordType.js";
import * as g from "./HandsRecordsManager.js";
import * as p from "./NewReplayerCardHolder.js";
import * as b from "./Holdem_Card_ts.js";

function main() {
    var m, f, y, w, C, P, R, H, L, W, I, N, v, D, z, M, T, S, _, x, B;
    n._RF.push({}, "8d7a9RAPt9EQ75OO3QDNNo6", "RightItemNewReplayerRenderer", void 0);
    const {
        ccclass: j,
        property: A
    } = a;
    t("RightItemNewReplayerData", class {
        constructor() {
            this.myCards = [], this.winners = [], this.totalPot = 0, this.roomId = 0, this.gameId = 0, this.gameuuid_js = 0, this.index = 0, this.isChosing = !1, this.isCash = !1, this.isMtt = !1, this.dataPointInfo = null, this.mttGameMode = 0
        }
    });
    t("RightItemNewReplayerRenderer", (m = j("RightItemNewReplayerRenderer"), f = A(d), y = A(r), w = A(s), C = A(s), P = A(p), R = A(u), H = A(o), L = A(o), W = A(s), m((v = e((N = class extends l {
        constructor(...t) {
            super(...t), i(this, "buttonTooltip", v, this), i(this, "bgSprite", D, this), i(this, "bgHighlight", z, this), i(this, "circleHighlight", M, this), i(this, "cardHolder", T, this), i(this, "winnersLabel", S, this), i(this, "totalPotLabel", _, this), i(this, "totalWinnersLabel", x, this), i(this, "totalWinnersNode", B, this), this.rightPanel = null, this.data = null, this.tempCard = null, this.coinMode = 0
        }
        onLoad() {
            this.tempCard || (this.tempCard = new b)
        }
        onDestroy() {
            this.tempCard || this.tempCard.destroy()
        }
        init(t, e, i) {
            var n;
            this.data = e, this.node.active = !0, this.rightPanel = t, this.coinMode = i, this.setBg(e.index), this.setWinners(e.winners), this.setPot(e.totalPot), this.setHighlight(e.isChosing), null == (n = this.cardHolder) || n.init(), this.setCards(e.myCards)
        }
        reloadDataByRecord(t, e, i) {
            null != t && null != t.customData && (this.reloadCards(t.customData.players, e), this.setPot(t.customData.totalPot), this.reloadWinners(t.customData.players, i))
        }
        reloadCards(t, e) {
            t.forEach((t => {
                t.uid == e.toString() && this.setCards(t.cards)
            }))
        }
        getSortedWinners(t) {
            return t.sort(((t, e) => {
                const i = "number" == typeof t.winningPot,
                    n = "number" == typeof e.winningPot;
                if (i && n) {
                    if (e.winningPot !== t.winningPot) return e.winningPot - t.winningPot
                } else {
                    if (i) return -1;
                    if (n) return 1
                }
                return t.name.localeCompare(e.name)
            }))
        }
        reloadWinners(t, e) {
            let i = [];
            t.forEach((t => {
                if (t.isWinning) {
                    let n = {
                        name: t.name
                    };
                    0 == e && (n.winningPot = t.winningPot), i.push(n)
                }
            })), this.setWinners(i)
        }
        setHighlight(t) {
            h(this.bgHighlight) && (this.bgHighlight.active = t), h(this.circleHighlight) && (this.circleHighlight.active = t)
        }
        setBg(t) {
            0 != h(this.bgSprite) && (this.bgSprite.enabled = t % 2 == 0)
        }
        setCards(t) {
            var e, i;
            if (null == t || 0 == t.length) return void(null == (i = this.cardHolder) || i.hideCards());
            let n = new Array;
            t.forEach(((t, e) => {
                n.push(t)
            }));
            const r = this.data.isCash ? this.data.gameId : this.data.mttGameMode;
            null == (e = this.cardHolder) || e.setCards(r, this.data.isCash, n, !0)
        }
        setWinners(t) {
            null != t && 0 != t.length ? (1 == (t = this.getSortedWinners(t)).length ? (this.totalWinnersNode.active = !1, this.buttonTooltip.setInfoDialogText("")) : (this.totalWinnersNode.active = !0, this.totalWinnersLabel.string = "+" + t.length, this.buttonTooltip.setInfoDialogText(t.map((t => t.name)).join(","))), this.winnersLabel.setString(t[0].name)) : this.winnersLabel.string = ""
        }
        setPot(t) {
            if (0 == h(this.totalPotLabel)) return;
            if (null == t) return void(this.totalPotLabel.string = "");
            const e = g.getInstance().formatMoneyText(this.data.isCash ? c.Cash : c.Mtt, this.data.dataPointInfo, this.coinMode, t);
            this.totalPotLabel.string = e
        }
        onClick() {
            this.rightPanel.choseItem(this.data.gameuuid_js)
        }
        setCoinMode(t) {
            this.coinMode = t, this.setPot(this.data.totalPot)
        }
    }).prototype, "buttonTooltip", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(N.prototype, "bgSprite", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(N.prototype, "bgHighlight", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(N.prototype, "circleHighlight", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(N.prototype, "cardHolder", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(N.prototype, "winnersLabel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(N.prototype, "totalPotLabel", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(N.prototype, "totalWinnersLabel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(N.prototype, "totalWinnersNode", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = N)) || I));
    n._RF.pop()
}