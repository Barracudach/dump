import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./ThemeSystem.js";
import * as h from "./AppConfig.js";
import * as d from "./cv.js";
import * as b from "./ColorSystemType.js";
import * as g from "./ColorSystemTypeOther.js";

function main() {
    var f, m, y, v, S, C, w, T, _, M, P, z, I, L, k, B;
    n._RF.push({}, "bf1d0Fm3yJDvrNeRwikzEKv", "MiniGamePopupItem", void 0);
    const {
        ccclass: A,
        property: D
    } = o;
    e("default", (f = D(p), m = D(l), y = D(l), v = D(l), S = D(l), C = D(a), w = D(r), A((M = t((_ = class extends s {
        constructor(...e) {
            super(...e), i(this, "iconLevel", M, this), i(this, "lblAvatar", P, this), i(this, "lblName", z, this), i(this, "lblMinBet", I, this), i(this, "lblTotalPlayer", L, this), i(this, "btnPlay", k, this), i(this, "giftBoxIcon", B, this), this._data = void 0, this.lastScreenWidth = void 0, this.levelDisplay = {
                1: "L",
                2: "M",
                3: "H"
            }
        }
        start() {
            this.btnPlay.node.on("click", (() => {
                d.MessageCenter.send(d.Enum.MessageCenterAction.OnListviewItemSelected, this._data)
            }), this)
        }
        updateSVReuseData(e, t, i) {
            t.length <= 0 || t.length - 1 < e || (this._data = t[e], this.updateUI(this._data))
        }
        updateUI(e) {
            var t;
            null == (t = this.iconLevel) || t.setColorScheme(b.Other, 1 == e.deskType ? g.Green_50 : 2 == e.deskType ? g.Game_Bomb : g.Red_50), this.lblName.string = d.config.getStringData(d.StringTools.formatC("desk_level_%d", e.deskType)), this.lblAvatar.string = this.levelDisplay[e.deskType], this.lblMinBet.string = "" + e.AmountLevel[0] / 100, this.lblTotalPlayer.string = e.playerNum.toString(), h.Instance.isLandscapeLayout || this.adaptWidgets(), this.giftBoxIcon.active = d.appConfig.getGameConfig().miniGameConfig.showRedEnvelop
        }
        onPlayeEvent(e) {
            this.btnPlay.node.on("click", (() => {
                d.MessageCenter.send(d.Enum.MessageCenterAction.OnListviewItemSelected, this._data)
            }), this)
        }
        adaptWidgets() {
            this.lastScreenWidth != u.getVisibleSize().width && (d.resMgr.adaptWidget(this.node, !0, !1), this.lastScreenWidth = u.getVisibleSize().width, this.node.getComponent(c).width = this.lastScreenWidth)
        }
    }).prototype, "iconLevel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(_.prototype, "lblAvatar", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(_.prototype, "lblName", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(_.prototype, "lblMinBet", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(_.prototype, "lblTotalPlayer", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(_.prototype, "btnPlay", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(_.prototype, "giftBoxIcon", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = _)) || T));
    n._RF.pop()
}