import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./DesignSystemButtonBase.js";
import * as c from "./DesignSystemButtonBase.js";
import * as m from "./DesignSystemRegularButton.js";
import * as y from "./ThemeSystem.js";
import * as p from "./FormatParser.js";
import * as b from "./CurrencyValue.js";
import * as B from "./cv.js";
import * as d from "./TableInfoManager.js";
import * as g from "./TableSeat.js";
import * as f from "./TableSeat.js";
import * as C from "./ColorSystemType.js";

function main() {
    var I, S, T, _, k, v, w, L, N, j, D, E, x, z, P, F, M, R, V;
    i._RF.push({}, "91358qwccZJhZWe3ZAavuvU", "GameDetailRightPartManager", void 0);
    const {
        ccclass: A,
        property: G
    } = r;
    t("default", (I = G(a), S = G(a), T = G(m), _ = G(m), k = G(o), v = G(y), w = G(b), L = G(b), A(((V = class extends l {
        constructor(...t) {
            super(...t), n(this, "gameType", D, this), n(this, "roomName", E, this), n(this, "joinBtn", x, this), n(this, "watchBtn", z, this), n(this, "tableInfoNode", P, this), n(this, "sideBarThemeSystem", F, this), n(this, "minBuyInLb", M, this), n(this, "maxBuyInLb", R, this), this._joinBtnClickCB = null, this._watchBtnClickCB = null, this._clickedEmptySeatId = 0
        }
        onLoad() {
            s.on(g, this._onEmptySeatClicked, this)
        }
        setButtonClickCallbacks(t, e) {
            this._joinBtnClickCB = t, this._watchBtnClickCB = e
        }
        setData(t) {
            this.gameType.string = t.gameType, this.roomName.string = t.roomName;
            let e = this.tableInfoNode.getComponent(d);
            e.setData(t.players, t.playerCountMax), e.generate(), this.sideBarThemeSystem.setColorScheme(C.Other, t.sideBarColorThemSystem), this.minBuyInLb.updateVal(p.ThousandPointFormat(t.minBuyIn), t.currency), this.maxBuyInLb.updateVal(p.ThousandPointFormat(t.maxBuyIn), t.currency), this.joinBtn.node.active = t.joinAble, this.watchBtn.node.active = !t.joinAble
        }
        setJoinBtnCB(t) {
            this._joinBtnClickCB = t
        }
        setWatchBtnCB(t) {
            this._watchBtnClickCB = t
        }
        onBtnJoinClick(t) {
            var e;
            null == (e = this._joinBtnClickCB) || e.call(this, this._clickedEmptySeatId)
        }
        onBtnWatchClick(t) {
            var e;
            null == (e = this._watchBtnClickCB) || e.call(this)
        }
        hide() {
            this.node.active = !1
        }
        show(t) {
            t && (this.gameType.string = t), this.node.active = !0
        }
        enableBtn(t) {
            t.btnState = c.normal, t.node.getComponent(u).interactable = !0
        }
        reset() {
            this.gameType.string = null, this.roomName.string = null, this.tableInfoNode.getComponent(d).reset(), this.enableBtn(this.joinBtn), this._clickedEmptySeatId = 0
        }
        _onEmptySeatClicked(t, e) {
            let n = this.tableInfoNode.getComponent(d).getTableSeats();
            for (let a = 0; a < n.length; ++a) {
                var i;
                let o = n[a];
                if (!o) continue;
                let r = null == (i = o.getComponent(f)) ? void 0 : i.getSeatId(),
                    l = o.getComponent(h);
                l && l.btnState != c.disabled && (l.btnState = r != t || e ? c.normal : c.pressed)
            }
            this._clickedEmptySeatId = e ? 0 : t
        }
        updateGameDetailsCurrency(t = !1) {
            this.minBuyInLb.shouldConvert = t, this.maxBuyInLb.shouldConvert = t
        }
        setEmpty(t = !1) {
            this.gameType && (this.gameType.string = t ? B.config.getStringData("Loading") + "..." : "-"), this.minBuyInLb && (this.minBuyInLb.string = "-"), this.maxBuyInLb && (this.maxBuyInLb.string = "-"), this.roomName && (this.roomName.string = "-")
        }
    }).selectedRoomInfo = null, D = e((j = V).prototype, "gameType", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(j.prototype, "roomName", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(j.prototype, "joinBtn", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(j.prototype, "watchBtn", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(j.prototype, "tableInfoNode", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(j.prototype, "sideBarThemeSystem", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(j.prototype, "minBuyInLb", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(j.prototype, "maxBuyInLb", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = j)) || N));
    i._RF.pop()
}