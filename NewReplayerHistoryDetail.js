import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./NewReplayerDetailColumn.js";
import * as f from "./cv.js";
import * as b from "./NewReplayerTableStake.js";
import * as y from "./RecordType.js";
import * as g from "./AutoSizeByChildrenHeight.js";
import * as m from "./CommonTools.js";
import * as C from "./GameMain.js";

function main() {
    var P, v, G, w, R, D, B, N, A, S, z, H, M, I, k, L, _, T, E, U, x, V, F;
    n._RF.push({}, "4e27c8uQFxECa2P5c+yTJfA", "NewReplayerHistoryDetail", void 0);
    const {
        ccclass: j,
        property: J
    } = r;
    t("NewReplayerHistoryDetail", (P = j("NewReplayerHistoryDetail"), v = J(o), G = J(a), w = J(o), R = J(a), D = J(a), B = J(b), N = J(b), A = J(b), S = J(b), z = J(a), P((I = e((M = class extends s {
        constructor(...t) {
            super(...t), i(this, "historyDetailColumnPrefab", I, this), i(this, "roundParent", k, this), i(this, "playerActionPrefab", L, this), i(this, "lineNode", _, this), i(this, "fakeBg", T, this), this.actionNodePool = null, this.maxPoolSize = 100, i(this, "anteGroup", E, this), i(this, "sbGroup", U, this), i(this, "bbGroup", x, this), i(this, "strGroup", V, this), i(this, "topInfo", F, this), this.autoSizeByChildrenHeight = null, this.data = null, this.coinConvertData = {
                recordType: y.Cash,
                dataPointInfo: null,
                coinMode: 0
            }, this.game = null
        }
        onLoad() {
            this.autoSizeByChildrenHeight = this.roundParent.getComponent(g), f.MessageCenter.register("onShownCardsByRevealHand", this.onShownCardsByRevealHand.bind(this), this.node)
        }
        onDestroy() {
            var t;
            null == (t = this.actionNodePool) || t.clear(), f.MessageCenter.unregister("onShownCardsByRevealHand", this.node)
        }
        getNodeHeight() {
            return (this.topInfo ? this.topInfo.getComponent(l).height : 0) + (this.roundParent ? this.roundParent.getComponent(l).height : 0)
        }
        preloadNodes() {
            this.actionNodePool = new u;
            for (let t = 0; t < this.maxPoolSize; t++) {
                const t = h(this.playerActionPrefab);
                this.actionNodePool.put(t)
            }
        }
        switchAnonymousMode(t) {
            for (let e = 0; e < this.roundParent.children.length; e++) {
                const i = this.roundParent.children[e].getComponent(p);
                i && i.switchAnonymousMode(t)
            }
        }
        getActionPool() {
            return this.actionNodePool
        }
        ensureRounds(t) {
            const e = f.appConfig.isLandscapeLayout ? 5 : 4;
            for (; t.length < e;) t.push(null)
        }
        init(t, e, i, n, o = null) {
            var a;
            if (null == t) return void console.error("NewReplayerHistoryDetail init data is null");
            this.game = o, this.data = t, this.coinConvertData.recordType = e, this.coinConvertData.dataPointInfo = i, this.coinConvertData.coinMode = n;
            const r = t.gameId;
            let s = t.neReplayerBetRounds;
            if (!f.appConfig.isLandscapeLayout) {
                if (s = t.neReplayerBetRounds.map((t => ({
                        ...t
                    }))), s.length >= 2) {
                    s = [{
                        ...s[0],
                        newReplayerActions: [...s[0].newReplayerActions, ...s[1].newReplayerActions],
                        totalPot: s[0].totalPot || 0,
                        allAnte: s[0].allAnte || 0,
                        blinds: s[0].blinds || 0
                    }, ...s.slice(2)]
                }
                t.ante ? this.setAnte(t.ante, this.coinConvertData) : this.anteGroup && (this.anteGroup.node.active = !1), t.sb ? this.setSB(t.sb, this.coinConvertData) : this.sbGroup && (this.sbGroup.node.active = !1), t.bb ? this.setBB(t.bb, this.coinConvertData) : this.bbGroup && (this.bbGroup.node.active = !1);
                let e = !1;
                if (this.game instanceof C) {
                    const t = this.game.gameDataInstance;
                    e = t.tRoomData.pkRoomParam.game_mode == f.Enum.CreateGameMode.CreateGame_Mode_Normal && t.tRoomData.pkRoomParam.rule_switch_force_straddle > 0
                }
                e && t.straddle ? this.setStraddle(t.straddle, this.coinConvertData) : this.strGroup && (this.strGroup.node.active = !1)
            }
            this.getComponent(c).opacity = 0, this.fakeBg && (this.fakeBg.active = !0), null == this.actionNodePool && this.preloadNodes(), this.roundParent.destroyAllChildren(), this.ensureRounds(s), s.forEach(((t, e) => {
                var i, n = h(this.historyDetailColumnPrefab);
                this.roundParent.addChild(n), null == (i = n.getComponent(p)) || i.init(t, e, r, this.coinConvertData, this.getActionPool()), this.createLines()
            })), m.instance.updateAlignments(this.roundParent, !0, !1), m.instance.updateLayouts(this.node, !0, !0), null == (a = this.autoSizeByChildrenHeight) || a.updateHeight(), this.fakeBg && (this.fakeBg.active = !1), this.getComponent(c).opacity = 255
        }
        createLines() {
            if (this.lineNode && f.appConfig.isLandscapeLayout) {
                var t = h(this.lineNode);
                t.active = !0, this.roundParent.addChild(t)
            }
        }
        setAnte(t, e) {
            this.anteGroup && this.anteGroup.setBetValue(t, e)
        }
        setSB(t, e) {
            this.sbGroup && this.sbGroup.setBetValue(t, e)
        }
        setBB(t, e) {
            this.bbGroup && this.bbGroup.setBetValue(t, e)
        }
        setStraddle(t, e) {
            this.strGroup && this.strGroup.setBetValue(t, e)
        }
        setCoinMode(t) {
            this.roundParent.children.forEach((e => {
                if (d(e)) {
                    const i = e.getComponent(p);
                    d(i) && i.setCoinMode(t)
                }
            }));
            [this.anteGroup, this.sbGroup, this.bbGroup, this.strGroup].forEach((e => {
                d(e) && e.isActive() && e.setCoinMode(t)
            }))
        }
        onShownCardsByRevealHand(t) {
            var e, i;
            this.data && (null == (e = this.data) ? void 0 : e.replayUUID) === (null == (i = t.customDetailData) ? void 0 : i.replayUUID) && this.roundParent.children.forEach((t => {
                if (d(t)) {
                    const e = t.getComponent(p);
                    d(e) && e.onShownCardsByRevealHand()
                }
            }))
        }
    }).prototype, "historyDetailColumnPrefab", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(M.prototype, "roundParent", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(M.prototype, "playerActionPrefab", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(M.prototype, "lineNode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(M.prototype, "fakeBg", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(M.prototype, "anteGroup", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(M.prototype, "sbGroup", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(M.prototype, "bbGroup", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(M.prototype, "strGroup", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(M.prototype, "topInfo", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = M)) || H));
    n._RF.pop()
}