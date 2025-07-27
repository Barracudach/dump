import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";
import * as s from "./Emoticons_ts.js";
import * as r from "./GameEmoticonView.js";

function main() {
    var a, u, l, p;
    o._RF.push({}, "46f82lNSdpL44DxXj0FDopF", "GameEmoticonsLandscape", void 0);
    const {
        ccclass: f,
        property: d
    } = c;
    t("default", (a = d(i), f((p = e((l = class extends r {
        constructor(...t) {
            super(...t), n(this, "content", p, this)
        }
        init() {
            super.init(), this.content.getComponentsInChildren(s).forEach((t => {
                this.setEmoticon(t)
            }))
        }
    }).prototype, "content", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = l)) || u));
    o._RF.pop()
}