import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./cv.js";
import * as m from "./GameSceneInstance.js";

function main() {
    var p, I, b, C, S, f;
    n._RF.push({}, "0cfb4pt4nJBf5m/LnjXUa19", "DanmuItem", void 0);
    const {
        ccclass: D,
        property: R
    } = i;
    e("default", (p = R(r), I = m("GameDataInstance"), D((S = t((C = class extends s {
        constructor(...e) {
            super(...e), a(this, "label", S, this), this._BarrageId = void 0, a(this, "gameDataInstance", f, this), this.labelNodeUIRendere = null
        }
        onLoad() {
            this.labelNodeUIRendere = this.label.node.getComponent(o), h.MessageCenter.register("updateCdStatus", this.updateCdStatus.bind(this), this.node)
        }
        start() {
            let e = l("button", this.node);
            e.on(d.EventType.TOUCH_START, (e => {
                this.isGameStarSeat() && (this.labelNodeUIRendere.color = u(120, 121, 129))
            })), e.on(d.EventType.TOUCH_END, (e => {
                this.isGameStarSeat() && (this.labelNodeUIRendere.color = new c(c.WHITE)), this.danmuItemClick(null)
            })), e.on(d.EventType.TOUCH_CANCEL, (e => {
                this.isGameStarSeat() && (this.labelNodeUIRendere.color = new c(c.WHITE))
            }))
        }
        onDestroy() {
            h.MessageCenter.unregister("updateCdStatus", this.node)
        }
        updateSVReuseData(e, t) {
            t.length <= 0 || t.length - 1 < e || (this._BarrageId = t[e].BarrageId, this.label.string = t[e].content, h.config.IS_FULLSCREEN && (this.label.node.getComponent(g).left = 67, h.resMgr.adaptWidget(this.node, !0)), this.initLanguage())
        }
        updateItemData(e) {
            e && (this._BarrageId = e.BarrageId, this.label.string = e.content, this.label.node.getComponent(g).left = 46, h.resMgr.adaptWidget(this.node, !0))
        }
        initLanguage() {}
        danmuItemClick(e) {
            h.MessageCenter.send("danmuItemClick", this._BarrageId)
        }
        updateCdStatus(e) {
            this.labelNodeUIRendere.color = new c(e ? c.GRAY : c.WHITE)
        }
        isGameStarSeat() {
            return this.gameDataInstance.tRoomData.u32GameID == h.Enum.GameId.StarSeat
        }
    }).prototype, "label", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(C.prototype, "gameDataInstance", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = C)) || b));
    n._RF.pop()
}