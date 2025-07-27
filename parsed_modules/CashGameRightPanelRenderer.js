import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cv.js";
import * as d from "./FormatParser.js";
import * as g from "./GameFeatureItemHandler.js";
import * as y from "./GameTypeIcon.js";
import * as f from "./FlashRoomKindItem.js";

function main() {
    var F, G, P, T, w, C, S, D, z, B, L, _, v, R, V, x, I, k, H, M, A, K, $, q, N, O, U, E, j, J, Q, W, X, Y, Z, ee, te, ae, ie, ne, le, re, se, oe, ue, he, be, ce, me, pe, de, ge, ye, fe, Fe, Ge, Pe;
    i._RF.push({}, "81f49p1sRFKxJ+wFSDV79IO", "CashGameRightPanelRenderer", void 0);
    const {
        ccclass: Te,
        property: we
    } = b;
    e("CashGameRightPanelRenderer", (F = Te("CashGameRightPanelRenderer"), G = we(n), P = we(n), T = we(l), w = we(r), C = we(r), S = we(r), D = we(s), z = we(s), B = we(s), L = we(s), _ = we(s), v = we(s), R = we(o), V = we([u]), x = we(s), I = we(g), k = we(g), H = we(g), M = we(g), A = we(s), K = we(s), $ = we(s), q = we(s), N = we(s), O = we(h), U = we(r), E = we(r), F((Q = t((J = class extends c {
        constructor(...e) {
            super(...e), this.mvcView = null, a(this, "layoutContainer", Q, this), a(this, "layoutGameType", W, this), a(this, "widgetScrollView", X, this), a(this, "nodeGameFeature", Y, this), a(this, "nodeCashGameDetails", Z, this), a(this, "nodeFlashGameDetails", ee, this), a(this, "labelTotalPlayer", te, this), a(this, "labelTotalTables", ae, this), a(this, "labelCurrencies", ie, this), a(this, "labelGameDescription", ne, this), a(this, "labelTableMax", le, this), a(this, "labelBlind", re, this), a(this, "iconGameSprite", se, this), a(this, "spriteGameList", oe, this), a(this, "nameLabel", ue, this), a(this, "gameFeatureBombPot", he, this), a(this, "gameFeatureBigAnte", be, this), a(this, "gameFeatureHasSquid", ce, this), a(this, "gameFeatureHasPace", me, this), a(this, "labelFlashTotalPlayer", pe, this), a(this, "labelFlashCurrency", de, this), a(this, "labelFlashTotalTable", ge, this), a(this, "labelFlashBlind", ye, this), a(this, "labelFlashGameSpeed", fe, this), a(this, "flashPlayerCount", Fe, this), a(this, "nodeFlashPlayerCount", Ge, this), a(this, "nodeFlashPlayerCountPadding", Pe, this)
        }
        onBtnClickBanner() {
            console.error("CheckingGame onBtnClickBanner")
        }
        render(e) {
            this.setGameType(e.data.tabName), this.setGameFeatures(e.data.hasBombPot, e.data.hasBigAnte, e.data.hasSquid, e.data.hasPace), e.data.hasPace ? (this.nodeCashGameDetails.active = !1, this.nodeFlashGameDetails.active = !0, this.nodeFlashPlayerCount.active = !0, this.nodeFlashPlayerCountPadding.active = !0, this.renderFlashGameDetails(e)) : (this.nodeCashGameDetails.active = !0, this.nodeFlashGameDetails.active = !1, this.nodeFlashPlayerCount.active = !1, this.nodeFlashPlayerCountPadding.active = !1, this.setTotalPlayers(e.data.totalPlayers), this.setCurrencies(e.data.currencyTypes), this.setTotalTables(e.data.totalTables), this.setTableMaxes(e.data.tableMaxes), this.setBuyInRange(e.data.minStake, e.data.maxStake), this.updateUILayout())
        }
        setCurrencies(e) {
            this.labelCurrencies.string = e.toString()
        }
        setBuyInRange(e, t) {
            this.labelBlind.string = "$" + d.ThousandPointFormat(e) + " - $" + d.ThousandPointFormat(t)
        }
        setGameDescription(e = "") {
            e ? (this.labelGameDescription.node.active = !0, this.labelGameDescription.string = e) : (this.labelGameDescription.string = "", this.labelGameDescription.node.active = !1)
        }
        setTableMaxes(e) {
            this.labelTableMax.string = `${e.toString()} ${p.config.getStringData("Players_text")}`
        }
        setTotalTables(e) {
            this.labelTotalTables.string = d.ThousandPointFormat(e)
        }
        setTotalPlayers(e) {
            this.labelTotalPlayer.string = d.ThousandPointFormat(e)
        }
        setGameFeatures(e, t, a, i) {
            const n = !e && !t && !a;
            this.nodeGameFeature.active = !n, this.gameFeatureBombPot.updateView(e, y.BOMB_POT, !1), this.gameFeatureBigAnte.updateView(t, y.BIG_ANTE, !1), this.gameFeatureHasSquid.updateView(a, y.SQUID, !1), this.gameFeatureHasPace.updateView(i, y.PACE, !1)
        }
        setGameType(e) {
            switch (this.labelGameDescription.node.active = !1, e) {
                case "nlhe":
                    this.iconGameSprite.spriteFrame = this.spriteGameList[0], this.nameLabel.string = p.config.getStringData("DataView_gameType_button_0");
                    break;
                case "plo":
                    this.iconGameSprite.spriteFrame = this.spriteGameList[1], this.nameLabel.string = p.config.getStringData("DataView_gameType_button_8");
                    break;
                case "short_deck":
                    this.iconGameSprite.spriteFrame = this.spriteGameList[2], this.nameLabel.string = p.config.getStringData("DataView_gameType_button_1");
                    break;
                case "flash":
                    this.iconGameSprite.spriteFrame = this.spriteGameList[3], this.nameLabel.string = p.config.getStringData("HOME.FLASH"), this.setGameDescription(p.config.getStringData("lobby_right_panel_flash_description"))
            }
        }
        renderFlashGameDetails(e) {
            this.setGameType(e.data.tabName), this.nodeGameFeature.active = !1, this.labelFlashTotalPlayer.string = d.ThousandPointFormat(e.data.totalPlayers), this.labelFlashCurrency.string = e.data.currencyTypes.toString(), this.labelFlashTotalTable.string = d.ThousandPointFormat(e.data.totalTables), this.labelFlashBlind.string = "$" + d.ThousandPointFormat(e.data.minStake) + " - $" + d.ThousandPointFormat(e.data.maxStake), this.setFlashGameKind(e.data.tableMaxes), this.nodeGameFeature.getComponent(n).updateLayout(), this.updateUILayout()
        }
        updateUILayout() {
            this.layoutGameType.updateLayout(), this.layoutContainer.updateLayout(), this.widgetScrollView.top = this.layoutGameType.node.getContentSize().height + this.nodeFlashPlayerCountPadding.getContentSize().height, this.widgetScrollView.bottom = 0, this.widgetScrollView.updateAlignment()
        }
        setFlashGameKind(e) {
            const t = this.nodeFlashPlayerCount.children;
            for (let e = t.length - 1; e >= 0; e--) {
                const a = t[e];
                "TableKindTitle" !== a.name && (a.removeFromParent(), a.destroy())
            }
            for (let t = 0; t < e.length; t++) {
                const a = m(this.flashPlayerCount);
                a.parent = this.nodeFlashPlayerCount;
                a.getComponent(f).setData(e[t])
            }
        }
    }).prototype, "layoutContainer", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(J.prototype, "layoutGameType", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(J.prototype, "widgetScrollView", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(J.prototype, "nodeGameFeature", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(J.prototype, "nodeCashGameDetails", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(J.prototype, "nodeFlashGameDetails", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(J.prototype, "labelTotalPlayer", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(J.prototype, "labelTotalTables", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(J.prototype, "labelCurrencies", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(J.prototype, "labelGameDescription", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t(J.prototype, "labelTableMax", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(J.prototype, "labelBlind", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(J.prototype, "iconGameSprite", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(J.prototype, "spriteGameList", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ue = t(J.prototype, "nameLabel", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(J.prototype, "gameFeatureBombPot", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t(J.prototype, "gameFeatureBigAnte", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t(J.prototype, "gameFeatureHasSquid", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(J.prototype, "gameFeatureHasPace", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(J.prototype, "labelFlashTotalPlayer", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(J.prototype, "labelFlashCurrency", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(J.prototype, "labelFlashTotalTable", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(J.prototype, "labelFlashBlind", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(J.prototype, "labelFlashGameSpeed", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = t(J.prototype, "flashPlayerCount", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = t(J.prototype, "nodeFlashPlayerCount", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = t(J.prototype, "nodeFlashPlayerCountPadding", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = J)) || j));
    i._RF.pop()
}