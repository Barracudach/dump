import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cv.js";

function main() {
    var o, c, l, a, s, u;
    n._RF.push({}, "d79e7c04p5AQ4suygyUORQ6", "JackfruitObMan", void 0);
    const {
        ccclass: b,
        property: p
    } = cc._decorator;
    t("JackfruitObMan", (o = p(cc.Label), c = p(cc.Label), b((a = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "label", s, this), e(this, "obworld", u, this)
        }
        start() {
            console.log(this.node.x)
        }
        setdata(t) {
            this.label.string = i.StringTools.formatC("（%d/%d）", t.onlineNum, t.totalNum), this.obworld.string = i.config.getStringData("curentTime_curentTime_panel_obWord_text")
        }
    }, s = r(a.prototype, "label", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = r(a.prototype, "obworld", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = a)) || l));
    n._RF.pop()
}