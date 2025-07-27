import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as b from "./observer.js";
import * as p from "./FormatParser.js";
import * as m from "./Pb.js";
import * as g from "./cv.js";

function main() {
    var y, f, L, d, C, _, w, v, N, P, M, A, z, D, G;
    n._RF.push({}, "488df+ZlvtNNKkEnz+t0ibK", "Holdem_PlayerInfo_ts", void 0);
    const {
        ccclass: E,
        property: H
    } = l;
    e("Holdem_PlayerInfo", (y = H(o), f = H(o), L = H(a), d = H([r]), C = H(a), _ = H(s), E(w = b((N = t((v = class extends c {
        constructor(...e) {
            super(...e), this._coin = 0, i(this, "nameLabel", N, this), i(this, "coinLabel", P, this), i(this, "userId", M, this), this.avatar = "", this.bbValue = 1, this.anteValue = 1, this.coinMode = 0, this.tableCurrency = null, this.gameMode = null, this._allowShowingName = !0, i(this, "bg", A, this), i(this, "bgFrame", z, this), i(this, "coinContainer", D, this), i(this, "coinButton", G, this)
        }
        get coin() {
            return this._coin
        }
        set coin(e) {
            if (this._coin = e, this.coinLabel) {
                const t = this.gameMode == m.commonProto.MTT_GAME_MODE.SHORT_DECK;
                this.coinLabel.string = p.getDataPointValue(e, t ? this.anteValue : this.bbValue, this.coinMode, t)
            }
        }
        get username() {
            return this.nameLabel ? this.nameLabel.string : ""
        }
        set username(e) {
            this.nameLabel && (this.nameLabel.string = e)
        }
        setCoinActive(e) {
            this.coinLabel && (this.coinLabel.node.active = e)
        }
        onLoad() {
            g.MessageCenter.register(g.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onDestroy() {
            g.MessageCenter.unregister(g.config.CHANGE_LANGUAGE, this)
        }
        onLanguageChange() {
            this.coin = this._coin
        }
        showName(e) {
            this._allowShowingName = e, this.nameLabel.node.active = e
        }
        showNameIfAllowed(e) {
            this.nameLabel.node.active = this._allowShowingName && e
        }
        setTableCurrency(e) {
            this.tableCurrency = e
        }
        setGameMode(e) {
            this.gameMode = e
        }
        setCoinContainerActive(e) {
            u(this.coinContainer) && (this.coinContainer.active = e)
        }
        isShowingName() {
            return !(!u(this.nameLabel) || !u(this.nameLabel.node)) && this.nameLabel.node.activeInHierarchy
        }
        setGrayNameAndChipsText(e) {
            e ? (u(this.nameLabel) && (this.nameLabel.getComponent(h).opacity = 230), u(this.coinLabel) && (this.coinLabel.getComponent(h).opacity = 153)) : (u(this.nameLabel) && (this.nameLabel.getComponent(h).opacity = 255), u(this.coinLabel) && (this.coinLabel.getComponent(h).opacity = 255))
        }
    }).prototype, "nameLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(v.prototype, "coinLabel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(v.prototype, "userId", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), t(v.prototype, "coin", [H], Object.getOwnPropertyDescriptor(v.prototype, "coin"), v.prototype), t(v.prototype, "username", [H], Object.getOwnPropertyDescriptor(v.prototype, "username"), v.prototype), A = t(v.prototype, "bg", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(v.prototype, "bgFrame", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), D = t(v.prototype, "coinContainer", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(v.prototype, "coinButton", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = v)) || w) || w));
    n._RF.pop()
}