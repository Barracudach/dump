import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./HoldemReplayPrefab.js";
import * as l from "./cv.js";

function main() {
    var c, u, m, p, d, f, b, h;
    r._RF.push({}, "79a1ae/bxVMNbm/m2LFkzcA", "holdemReplayPrefabLandscape", void 0);
    const {
        ccclass: y,
        property: g
    } = a;
    e("default", (c = g(n), u = g(n), m = g(n), y((f = t((d = class extends s {
        constructor(...e) {
            super(...e), i(this, "betInfo", f, this), i(this, "roomId", b, this), i(this, "createTime", h, this)
        }
        _setScalePanel() {}
        setPlayPauseIcon() {}
        resetTimeScale() {}
        customPlay(e) {
            1 == this.iconPause.active ? this.play() : e && o.resume()
        }
        setReplayInfo() {
            this.betInfo.string = "", this.roomId.string = "", this.createTime.string = "";
            let e = this._gameRoundData[0].GameRoundData;
            e && (e.bigBlind && e.smallBlind && (this.betInfo.string = e.smallBlind + " / " + e.bigBlind), e.ante && (this.betInfo.string += " (" + e.ante + ") "), e.roomId && (this.roomId.string = e.roomId), e.ActionTimeStamp && e.ActionTimeStamp[0] && (this.createTime.string = l.StringTools.formatDateTimeByCountry(e.ActionTimeStamp[0], !0, !0)))
        }
        _processPreNextHand() {
            this._isPause = !0, super._processPreNextHand()
        }
    }).prototype, "betInfo", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = t(d.prototype, "roomId", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = t(d.prototype, "createTime", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = d)) || p));
    r._RF.pop()
}