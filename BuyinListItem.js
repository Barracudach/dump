import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./cv.js";
import * as c from "./GameSceneInstance.js";

function main() {
    var d, g, m, p, h, y, b, f, S, T;
    r._RF.push({}, "19fd7CDNVVInYfXH8UvTEHv", "BuyinListItem", void 0);
    const {
        ccclass: C,
        property: v
    } = i;
    e("BuyinListItem", (d = v(o), g = v(o), m = v(o), p = v(o), C((b = t((y = class extends l {
        constructor(...e) {
            super(...e), n(this, "yourname", b, this), n(this, "dairu", f, this), n(this, "score", S, this), n(this, "handCount", T, this)
        }
        setdata(e, t, n) {
            let r = u.dataHandler.getUserData().getRemarkData(e.playerid),
                o = null != r.sRemark && 0 != r.sRemark.length ? r.sRemark : e.playername;
            u.StringTools.setShrinkString(this.yourname.node, o), this.dairu.string = u.StringTools.numberToString(u.StringTools.clientGoldByServer(e.total_buyin));
            let i = e.HandCount || 0;
            this.handCount.string = i.toString(), e.curr_record > 0 ? this.score.string = "+" + u.StringTools.numberToString(u.StringTools.clientGoldByServer(e.curr_record)) : this.score.string = u.StringTools.numberToString(u.StringTools.clientGoldByServer(e.curr_record)), null == c.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.GetTablePlayer(e.playerid) ? (this.yourname.node.getComponent(a).color = new s(110, 110, 110), this.dairu.node.getComponent(a).color = new s(110, 110, 110), this.score.node.getComponent(a).color = new s(110, 110, 110)) : (this.yourname.node.getComponent(a).color = new s(s.WHITE), this.dairu.node.getComponent(a).color = new s(s.WHITE), this.score.node.getComponent(a).color = new s(s.WHITE))
        }
    }).prototype, "yourname", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(y.prototype, "dairu", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(y.prototype, "score", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(y.prototype, "handCount", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = y)) || h));
    r._RF.pop()
}