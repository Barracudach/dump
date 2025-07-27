import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cv.js";

function main() {
    let l;
    e("MiniGameCommonDef", void 0), t._RF.push({}, "a3635GURQBOI6gulqKsn3M3", "define", void 0),
        function(e) {
            let t = function(e) {
                return e[e.GST_SCREEN_NORMAL = 0] = "GST_SCREEN_NORMAL", e[e.GST_SCREEN_BROAD = 1] = "GST_SCREEN_BROAD", e[e.GST_SCREEN_NARROW = 2] = "GST_SCREEN_NARROW", e
            }({});
            e.eGameboyScreenType = t;
            let l = function(e) {
                return e[e.GAB_STYLE_NONE = 0] = "GAB_STYLE_NONE", e[e.GAB_STYLE_NORMAL = 1] = "GAB_STYLE_NORMAL", e[e.GAB_STYLE_ADVANCE = 2] = "GAB_STYLE_ADVANCE", e[e.GAB_STYLE_ADVANCE_USING = 3] = "GAB_STYLE_ADVANCE_USING", e
            }({});
            e.eGameboyAutoBtnStyle = l;
            let S = function(e) {
                return e[e.GWS_NONE = 0] = "GWS_NONE", e[e.GWS_IMG = 1] = "GWS_IMG", e[e.GWS_TXT = 2] = "GWS_TXT", e[e.GWS_AUTO = 3] = "GWS_AUTO", e
            }({});
            e.eGameboyWayOutStyle = S;
            e.tGameNodeScale = class {
                constructor(e, t, i = !1) {
                    this.node = null, this.scale = n(o.ZERO), this.isFixLayout = !1, this.node = e, this.scale = "number" == typeof t ? n(t, t, t) : t, this.isFixLayout = i
                }
            }, e.getAnimClipSpeedByDuring = function(e, t) {
                let n = e.speed;
                if (t > 0) {
                    n = e.sample * e.duration / i.getFrameRate() / t
                }
                return n
            }, e.getNumberFixedDown = function(e, t = 1, n = !0) {
                return n && (e = r.StringTools.clientGoldByServer(e)), r.StringTools.toFixed(e, t, r.StringTools.RoundingMode.ROUND_DOWN)
            }, e.getNumberFixedUp = function(e, t = 1, n = !0) {
                return n && (e = r.StringTools.clientGoldByServer(e)), r.StringTools.toFixed(e, t, r.StringTools.RoundingMode.ROUND_UP)
            }, e.getNumberFixedHalfUp = function(e, t = 1, n = !0) {
                return n && (e = r.StringTools.clientGoldByServer(e)), r.StringTools.toFixed(e, t, r.StringTools.RoundingMode.ROUND_HALF_UP)
            }, e.disinteBetAmounts = function(e, t) {
                let n = [],
                    o = Math.ceil(e);
                if (r.StringTools.getArrayLength(t) > 0) {
                    let e = 10;
                    for (; --e >= 0 && o > 0;)
                        for (let e = t.length - 1; e >= 0; --e) {
                            let i = t[e];
                            if (o >= i) {
                                o -= i, n.push(i);
                                break
                            }
                        }
                }
                if (n.length <= 0 || o > 0 && n.length < 10) {
                    let e = 0,
                        t = 0;
                    for (let n = 0; n < o; ++n)
                        if (e = 5 * Math.pow(2, n) * 100, o / e <= 1) {
                            t = n - 1;
                            break
                        } for (let e = t; e >= 0; --e) {
                        let t = 5 * Math.pow(2, e) * 100;
                        if (o >= t && (o -= t, n.push(t), n.length >= 10)) break
                    }
                    if (o > 0 && n.length < 10) {
                        let e = 10 - n.length,
                            t = 100;
                        for (let i = 0; i < e && (o -= t, n.push(t), !(o <= 0)); ++i);
                    }
                }
                return n
            }
        }(l || (l = e("MiniGameCommonDef", {}))), t._RF.pop()
}