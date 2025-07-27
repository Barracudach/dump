import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./FormatParser.js";
import * as u from "./CustomScrollViewItem.js";
import * as c from "./mttconfig.js";
import * as b from "./MTTConnector.js";
import * as d from "./StringTools.js";
import * as m from "./cv.js";
import * as h from "./ThemeSystem.js";

function main() {
    var f, g, p, L, C, v, T, S, D, y, B, R, w, _;
    o._RF.push({}, "78006Wc2L9Bo6gWfC8cCVO0", "HoldemTournamentDetailsBlindLevelRow", void 0);
    const {
        ccclass: F,
        property: z
    } = r;
    e("default", (f = z(n), g = z(l), p = z(n), L = z(n), C = z(n), v = z(l), F((D = t((S = class extends u {
        constructor(...e) {
            super(...e), i(this, "levelLabel", D, this), i(this, "resurrectIcon", y, this), i(this, "blindLabel", B, this), i(this, "anteLabel", R, this), i(this, "durationLabel", w, this), i(this, "clock", _, this)
        }
        start() {}
        setData(e) {
            super.setData(e);
            let t = e.Level,
                i = this.holdemRoom.store.currentBlindLevel,
                o = this.holdemRoom.store.MTTDetail ? this.holdemRoom.store.MTTDetail.LevelStopSignup : -1,
                n = t == i,
                l = this.holdemRoom._gameViewType == c.MTT_GAME_MODE.SHORT_DECK,
                r = this.holdemRoom.store.blindHands,
                u = (new a).fromHEX(n ? b.instance.tournamentDetailColorCode.blindLevel.highLightColor : b.instance.tournamentDetailColorCode.blindLevel.normalColor);
            this.levelLabel.string = t.toString(), this.levelLabel.node.getComponent(h).useCustomeColor(u), this.levelLabel.isBold = n, this.resurrectIcon.active = t < o, this.blindLabel.string = l ? d.ScientificNotationWithFormat(e.Ante) : d.ScientificNotationWithFormat(e.SmallBlind) + "/" + d.ScientificNotationWithFormat(e.BigBlind), this.blindLabel.node.getComponent(h).useCustomeColor(u), this.blindLabel.isBold = n, this.anteLabel.string = d.ScientificNotationWithFormat(e.Ante), this.anteLabel.node.getComponent(h).useCustomeColor(u), this.anteLabel.isBold = n;
            let f = r.toString() + " " + m.config.getStringData("hands_button");
            this.durationLabel.string = r > 0 ? f : s.RoundToDecimal(this.holdemRoom.store.blindLevelTime / 60, 1) + "m", this.durationLabel.node.getComponent(h).useCustomeColor(u), this.durationLabel.isBold = n, this.clock.active = !(r > 0)
        }
    }).prototype, "levelLabel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(S.prototype, "resurrectIcon", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(S.prototype, "blindLabel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(S.prototype, "anteLabel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(S.prototype, "durationLabel", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(S.prototype, "clock", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = S)) || T));
    o._RF.pop()
}