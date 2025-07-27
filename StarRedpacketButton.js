import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as R from "./cv.js";
import * as m from "./GameSceneInstance.js";
import * as g from "./RedGoldMove.js";
import * as k from "./StarRedpacketOpenView.js";
import * as f from "./StarRedpacketTips.js";
import * as S from "./StarRedpacketView.js";

function main() {
    var b, T, w, v, M, O, C, G, V, y, D, E, I, B, A, N;
    a._RF.push({}, "e05fbV08YRHzJ0hxOFFXIa0", "StarRedpacketButton", void 0);
    const {
        ccclass: z,
        property: x
    } = o;
    e("default", (b = x(n), T = x(r), w = x(s), v = x(s), M = x(s), O = x(s), C = m("GameDataInstance"), z((y = t((V = class extends p {
        constructor(...e) {
            super(...e), i(this, "time_text", y, this), i(this, "bg_time", D, this), i(this, "StarRedpacketView_prefab", E, this), i(this, "StarRedpacketOpenView_prefab", I, this), i(this, "StarRedpacketTips_prefab", B, this), i(this, "RedGoldMove_prefab", A, this), this._time = 0, this._starRedpacket = null, this._starRedpacketOpen = null, this._starRedpacketTips = null, this._redGoldMove = null, i(this, "gameDataInstance", N, this)
        }
        onLoad() {
            this._initRedGoldMove(), this._initStarRedpacket(), this._initStarRedpacketOpen(), this._initStarRedpacketTips(), R.MessageCenter.register("star_redpacket_result", this.onStarRedpacketResult.bind(this), this.node), d.on(c.EVENT_HIDE, this.OnAppEnterBackground, this), d.on(c.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        onDestroy() {
            l.getScheduler().unschedule(this.updataTime, this), R.MessageCenter.unregister("star_redpacket_result", this.node), d.off(c.EVENT_HIDE, this.OnAppEnterBackground, this), d.off(c.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        _initRedGoldMove() {
            let e = l.getScene();
            this._redGoldMove = e.getChildByName("redGoldMove"), null == this._redGoldMove && (this._redGoldMove = h(this.RedGoldMove_prefab), this._redGoldMove.name = "redGoldMove", e.addChild(this._redGoldMove))
        }
        _initStarRedpacket() {
            let e = l.getScene();
            this._starRedpacket = e.getChildByName("starRedpacket"), null == this._starRedpacket && (this._starRedpacket = h(this.StarRedpacketView_prefab), this._starRedpacket.name = "starRedpacket", e.addChild(this._starRedpacket)), this._starRedpacket.getComponent(S).hideView()
        }
        _initStarRedpacketOpen() {
            let e = l.getScene();
            this._starRedpacketOpen = e.getChildByName("starRedpacketOpen"), null == this._starRedpacketOpen && (this._starRedpacketOpen = h(this.StarRedpacketOpenView_prefab), this._starRedpacketOpen.name = "starRedpacketOpen", e.addChild(this._starRedpacketOpen)), this._starRedpacketOpen.getComponent(k).hideView()
        }
        _initStarRedpacketTips() {
            let e = l.getScene();
            this._starRedpacketTips = e.getChildByName("starRedpacketTips"), null == this._starRedpacketTips && (this._starRedpacketTips = h(this.StarRedpacketTips_prefab), this._starRedpacketTips.name = "starRedpacketTips", e.addChild(this._starRedpacketTips)), this._starRedpacketTips.active = !1
        }
        updateView() {
            this._starRedpacket.getComponent(S).updateView();
            let e = Math.floor((new Date).getTime() / 1e3);
            this._time = this.gameDataInstance.tRoomData.starRedpacketInfo.left_time - e, this.bg_time.active = this._time > 0, this.updataTime(0), this._time > 0 && (l.getScheduler().unschedule(this.updataTime, this), l.getScheduler().schedule(this.updataTime, this, 1))
        }
        runGoldMoveAction(e, t, i) {
            let a = e.getParent().getComponent(u).convertToWorldSpaceAR(e.getPosition()),
                n = t.getParent().getComponent(u).convertToWorldSpaceAR(t.getPosition()),
                r = new _(40, 40, 0);
            this._redGoldMove.getComponent(g).runGoldMoveAction(a, n, .8, .1, r, i)
        }
        updataTime(e) {
            if (this._time >= 0) {
                let e = Math.floor(this._time / 3600),
                    t = Math.floor(this._time % 3600 / 60),
                    i = Math.floor(this._time % 60),
                    a = R.StringTools.formatC("%02d:%02d:%02d", e, t, i);
                this.time_text.string = a, this._time -= 1
            } else l.getScheduler().unschedule(this.updataTime, this), this.time_text.string = "", this.bg_time.active = !1
        }
        onBtnEvent() {
            R.AudioMgr.playButtonSound("button_click"), this._starRedpacket.getComponent(S).showView()
        }
        onStarRedpacketResult(e) {
            if (e.amount > 0) this._starRedpacketOpen.getComponent(k).showView(e);
            else if (1 != this.gameDataInstance.tRoomData.identity && 2 != this.gameDataInstance.tRoomData.identity) {
                let e = R.config.getStringData("StarRedpacket_tips_label");
                this._starRedpacketTips.getComponent(f).show(e)
            }
            this._starRedpacket.getComponent(S).isShowView() && (R.gameNet.requestGetLuckStarSeatDrawList(), e.amount > 0 && R.gameNet.requestGetSelfLuckStarSeatResultList())
        }
        OnAppEnterBackground() {}
        OnAppEnterForeground() {
            this.updateView()
        }
    }).prototype, "time_text", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(V.prototype, "bg_time", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(V.prototype, "StarRedpacketView_prefab", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(V.prototype, "StarRedpacketOpenView_prefab", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(V.prototype, "StarRedpacketTips_prefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(V.prototype, "RedGoldMove_prefab", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(V.prototype, "gameDataInstance", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = V)) || G));
    a._RF.pop()
}