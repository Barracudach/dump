import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./ScrollItem.js";
import * as h from "./mttconfig.js";
import * as m from "./StringTools.js";
import * as d from "./FormatParser.js";
import * as f from "./CustomLocalizedLabel.js";
import * as S from "./MttItemHelper.js";
import * as g from "./Translator.js";
import * as p from "./TournamentInfoPanelDetailPrizeRow.js";
import * as T from "./Pb.js";

function main() {
    var b, y, z, M, P, I, k, D, x, B, v, w, C, N, L, E, R, F, V, $, A, _, O, W, G, K, H, U, j, J, Z, q, Q, X, Y;
    n._RF.push({}, "733ddAKhABOHZ8a3P0mLGha", "TournamentInfoPanelDetail", void 0);
    const {
        ccclass: tt,
        property: et
    } = l;
    t("TournamentInfoPanelDetail", (b = tt("TournamentInfoPanelDetail"), y = et(u), z = et(o), M = et(r), P = et(r), I = et(r), k = et(f), D = et(r), x = et(f), B = et(r), v = et(r), w = et(r), C = et(r), N = et(r), L = et(r), E = et(r), R = et(r), b(($ = e((V = class extends a {
        constructor(...t) {
            super(...t), i(this, "scrollItem", $, this), i(this, "touchNode", A, this), i(this, "totalPrize", _, this), i(this, "firstPrize", O, this), i(this, "nextPrize", W, this), i(this, "currentBlindLevel", G, this), i(this, "currentBlindCountDown", K, this), i(this, "lateRegTime", H, this), i(this, "currentBlind", U, this), i(this, "nextBlind", j, this), i(this, "playerNum", J, this), i(this, "prizeCircle", Z, this), i(this, "myRank", q, this), i(this, "minStack", Q, this), i(this, "avgStack", X, this), i(this, "maxStack", Y, this), this.holdemStore = void 0, this.minStackValue = void 0, this.avgStackValue = void 0, this.maxStackValue = void 0
        }
        onLoad() {
            this.touchNode.on(o.EventType.MOUSE_MOVE, this.onMouseMove, this), this.scrollItem.setItemFunc(0, ((t, e) => {
                t.getComponent(p).setInfo(e, this.holdemStore)
            }))
        }
        onMouseMove(t) {
            const e = this.node.getComponent(s),
                i = t.getUILocation(),
                n = new c;
            e.convertToNodeSpaceAR(new c(i.x, i.y, 0), n);
            this.checkInNode(n) || (this.node.active = !1)
        }
        checkInNode(t) {
            let e = this.node.getComponent(s);
            const i = e.contentSize,
                n = e.anchorPoint,
                o = -i.width * n.x,
                r = i.width * (1 - n.x),
                l = -i.height * n.y,
                a = i.height * (1 - n.y);
            return t.x >= o && t.x <= r && t.y >= l && t.y <= a
        }
        setTotalPrize(t) {
            if (!this.holdemStore || !this.holdemStore.MTTDetail) return;
            const e = d.ExchangeCurrency_ScientificNotation(t, this.holdemStore.exchangeRate, this.holdemStore.displayCurrency, this.holdemStore.displayCurrency, 2, !0);
            this.totalPrize.string = e
        }
        setFirstPrize(t, e) {
            e && ("" == t ? t = g("PKWMTT.GAMELIST.TICKET") : t += "+T"), this.firstPrize.string = t
        }
        setNextPrize(t, e) {
            e && ("" == t ? t = g("PKWMTT.GAMELIST.TICKET") : t += "+T"), this.nextPrize.string = t
        }
        setLevel(t) {
            if (this.currentBlindLevel.setPrefixAndSuffix("", ` ${t}`), !this.holdemStore || !this.holdemStore.MTTDetail) return;
            const e = this.holdemStore.node,
                i = e._gameViewType == h.MTT_GAME_MODE.SHORT_DECK;
            if (t - 1 < e.store.rbcList.length) {
                let n = e.store.rbcList[t - 1];
                this.currentBlind.string = i ? m.ScientificNotationWithFormat(n.Ante) : m.ScientificNotationWithFormat(n.SmallBlind) + " | " + m.ScientificNotationWithFormat(n.BigBlind) + " (" + m.ScientificNotationWithFormat(n.Ante) + ")"
            } else this.currentBlind.string = "-";
            const n = t + 1;
            if (n - 1 < e.store.rbcList.length) {
                const t = e.store.rbcList[n - 1];
                this.nextBlind.string = i ? m.ScientificNotationWithFormat(t.Ante) : m.ScientificNotationWithFormat(t.SmallBlind) + " | " + m.ScientificNotationWithFormat(t.BigBlind) + " (" + m.ScientificNotationWithFormat(t.Ante) + ")"
            } else this.nextBlind.string = "-"
        }
        setLevelTime(t) {
            this.currentBlindCountDown.string = t
        }
        setLateRegSec(t) {
            const {
                hr: e,
                min: i,
                sec: n
            } = S.splitSecond(t), o = e > 0 ? `${e}${g("TIME.HOUR")} ${i}${g("TIME.MINUTE")}` : `${i}${g("TIME.MINUTE")} ${n}${g("TIME.SECOND")}`;
            this.lateRegTime.setPrefixAndSuffix("", ` ${o}`), this.lateRegTime.node.active = t > 0
        }
        setPlayNum(t) {
            if (!this.holdemStore || !this.holdemStore.MTTDetail) return;
            const e = this.holdemStore.MTTDetail.MultiFlightLevel > 0 ? this.holdemStore.MTTDetail.MFJoinedCount : this.holdemStore.MTTDetail.JoinedCount;
            this.playerNum.string = `${t}/${e}`
        }
        setPrizeCircle(t) {
            this.prizeCircle.string = `${t}`
        }
        setMyRank(t) {
            let e = "th";
            1 == t && (e = "st"), 2 == t && (e = "nd"), 3 == t && (e = "rd"), this.myRank.string = `${t}${e}`
        }
        setStacks(t, e, i) {
            this.minStackValue = t, this.avgStackValue = e, this.maxStackValue = i, this.updateStacksInfo()
        }
        updateStacksInfo() {
            if (!this.holdemStore || !this.holdemStore.MTTDetail) return;
            const t = this.holdemStore.getGameMode() == T.commonProto.MTT_GAME_MODE.SHORT_DECK,
                e = t ? this.holdemStore.ante : this.holdemStore.calcBigBlind;
            this.minStack.string = d.getDataPointValue(this.minStackValue, e, this.holdemStore.node.coinMode, t), this.avgStack.string = d.getDataPointValue(this.avgStackValue, e, this.holdemStore.node.coinMode, t), this.maxStack.string = d.getDataPointValue(this.maxStackValue, e, this.holdemStore.node.coinMode, t)
        }
        setPrizeList(t) {
            if (!this.holdemStore || !this.holdemStore.MTTDetail) return;
            let e = [];
            Object.entries(t).forEach((([t, i]) => {
                e.push({
                    rank: parseInt(t),
                    money: i.money,
                    proportion: i.proportion,
                    tool: i.tool
                })
            })), this.scrollItem.changeItemData(e, !1)
        }
        onChangedBBGameplaySetting() {
            this.updateStacksInfo()
        }
    }).prototype, "scrollItem", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(V.prototype, "touchNode", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(V.prototype, "totalPrize", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(V.prototype, "firstPrize", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(V.prototype, "nextPrize", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(V.prototype, "currentBlindLevel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(V.prototype, "currentBlindCountDown", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(V.prototype, "lateRegTime", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(V.prototype, "currentBlind", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(V.prototype, "nextBlind", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(V.prototype, "playerNum", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(V.prototype, "prizeCircle", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(V.prototype, "myRank", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(V.prototype, "minStack", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(V.prototype, "avgStack", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(V.prototype, "maxStack", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = V)) || F));
    n._RF.pop()
}