import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./gs_protocol.mjs_cjs=&original=.js";
import * as p from "./cv.js";

function main() {
    var d, u, g, m, f, h;
    o._RF.push({}, "8c9e6tQmBpKl6JMReyxN6UF", "GiftGoodsRecordItem", void 0);
    const {
        ccclass: y,
        property: _
    } = a;
    t("GiftGoodsRecordItem", (d = _(r), u = _(n), y((f = e((m = class extends c {
        constructor(...t) {
            super(...t), i(this, "img", f, this), i(this, "txt", h, this)
        }
        onLoad() {
            l.resMgr.adaptWidget(this.node, !0)
        }
        start() {}
        updateSVReuseData(t, e) {
            let i = "",
                o = e.data.info.tipId,
                r = e.data.info.tipCount,
                n = l.config.getStringData("Gift_sent"),
                a = l.StringTools.formatTime(e.data.time, l.Enum.eTimeType.Hour_Min_Sec, !0),
                c = l.config.getStringData(`Gift_category_${o}`) + (o > 1e3 ? ` <img src="gift_icon_${o}"/>` : ` x ${r}`);
            switch (e.tType) {
                case p.protocol.TipRecordType.TipRecordType_Recv:
                    i = 1 === e.data.player.identity ? `<color=#FFCD7E>${a}</color> <img src="img_icon_star"/> <color=#FFCD7E>${e.data.player.nickname} ${n} ${c}</color>` : `${a} ${e.data.player.nickname} ${n} ${c}`;
                    break;
                case p.protocol.TipRecordType.TipRecordType_Send:
                default:
                    i = `${a} ${n} ${e.data.toPlayer.nickname} ${c}`
            }
            if (this.txt.string = i, this.img.active = o > 1e3, this.img.active) {
                let t = l.resMgr.getRichTextStringSize(this.txt).width;
                this.img.getComponent(s).width = Math.min(t + 40, this.node.getComponent(s).width)
            }
        }
    }).prototype, "img", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = e(m.prototype, "txt", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = m)) || g));
    o._RF.pop()
}