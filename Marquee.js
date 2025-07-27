import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as A from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as q from "./Pb.js";
import * as M from "./Translator.js";
import * as G from "./commonProto.mjs_cjs=&original=.js";
import * as P from "./CommonTools.js";

function main() {
    var b, g, _, C, E, L;
    r._RF.push({}, "2443ebq7YhO+oldHsGiAXbb", "Marquee", void 0);
    const {
        ccclass: d,
        property: f
    } = s;
    e("Marquee", (b = f(a), g = f(n), d((E = t((C = class extends i {
        constructor(...e) {
            super(...e), o(this, "marqueeLabel", E, this), o(this, "marqueeLabelParent", L, this), this._marqueeMsg = [], this.marqueeLabelPool = new u, this.marqueeLabelNodes = []
        }
        onDestroy() {
            this.marqueeLabelPool.clear()
        }
        start() {
            this.node.active = !1
        }
        checkMarqueeGame(e) {
            switch (e) {
                case q.commonProto.GAME_CATEGORY.GUESS_CARD:
                    return M("GAME_CATEGORY.GUESS_CARD");
                case q.commonProto.GAME_CATEGORY.GEN_PP:
                    return M("GAME_CATEGORY.GEN_PP");
                case q.commonProto.GAME_CATEGORY.LOOP_PP:
                    return M("GAME_CATEGORY.LOOP_PP");
                case q.commonProto.GAME_CATEGORY.SNG:
                    return M("GAME_CATEGORY.SNG");
                case q.commonProto.GAME_CATEGORY.SNG_AOF:
                    return M("GAME_CATEGORY.SNG_AOF");
                case q.commonProto.GAME_CATEGORY.MTT:
                    return M("GAME_CATEGORY.MTT");
                case q.commonProto.GAME_CATEGORY.BLACK_JACK:
                    return M("GAME_CATEGORY.BLACK_JACK");
                case q.commonProto.GAME_CATEGORY.COW_BOY:
                    return M("GAME_CATEGORY.COWBOY");
                default:
                    return "game"
            }
        }
        getMsgContent(e) {
            let t = "";
            return e instanceof P.commonProto.Broadcast_Message_Push_Carousel ? t = e.Body : (t = e.Format.replace("%name%", e.Nickname), t = t.replace("%game%", this.checkMarqueeGame(e.Category)), t = t.replace("%coin%", e.Amount ? e.Amount.toString() : ""), t = t.replace("%tool%", e.ToolName ? e.ToolName : "")), t
        }
        showMarquee(e) {
            let t = this.getMsgContent(e);
            this.showMarqueeStr(t)
        }
        showMarqueeStr(e) {
            if (this._marqueeMsg.push(e), !this.node.active) {
                this.node.active = !0;
                let e = this.node.getComponent(l);
                e && e.updateAlignment(), this.doMarqueeAction()
            }
        }
        processMarqueeInfo() {
            let e = this._marqueeMsg.shift();
            cc_mtt.vv.ConsoleLog.log("marquee Msg to show: ", e.length, e);
            let t = e.length > 8 ? .2 * (e.length - 8) + 8 : 8,
                o = [];
            if (e.length > 80)
                for (; e.length > 0;) o.push(e.substr(0, 80)), e = e.substr(80);
            else o.push(e);
            for (let e, t = 0; t < o.length; t++) this.marqueeLabelPool.size() > 0 ? e = this.marqueeLabelPool.get() : (e = c(this.marqueeLabel.node), e.active = !0), e.parent = this.marqueeLabelParent, e.getComponent(a).string = o[t], G.instance.updateRenderData(e.getComponent(a), !0), this.marqueeLabelNodes.push(e);
            return this.marqueeLabelParent.getComponent(m).updateLayout(), t
        }
        clearMarqueeLabel() {
            this.marqueeLabelPool.clear()
        }
        recycleMarqueeLabel() {
            for (; this.marqueeLabelNodes.length > 0;) this.marqueeLabelPool.put(this.marqueeLabelNodes.pop())
        }
        doMarqueeAction() {
            let e = this.processMarqueeInfo(),
                t = this.marqueeLabelParent.getComponent(h);
            if (!t) return;
            let o = this.marqueeLabelParent.parent.getComponent(h),
                r = t.width + o.width / 2;
            A(this.marqueeLabelParent).set({
                position: p(r, this.marqueeLabelParent.position.y)
            }).to(e, {
                position: p(-r, this.marqueeLabelParent.position.y)
            }).call((() => {
                this.recycleMarqueeLabel(), this._marqueeMsg.length > 0 ? this.doMarqueeAction() : (this.clearMarqueeLabel(), this.marqueeLabelParent.parent.active = !1)
            })).start()
        }
    }).prototype, "marqueeLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(C.prototype, "marqueeLabelParent", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = C)) || _));
    r._RF.pop()
}