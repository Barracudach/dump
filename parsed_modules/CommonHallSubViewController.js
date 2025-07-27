import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as u from "./FakeMultipleGame.js";
import * as d from "./Enum.js";

function main() {
    var c, p, g, h;
    n._RF.push({}, "fa3aeM53mBMDoAir8elp/Z6", "CommonHallSubViewController", void 0);
    const {
        ccclass: f,
        property: C
    } = a;
    e("default", (c = C(s), f((h = t((g = class extends o {
        constructor(...e) {
            super(...e), i(this, "widget", h, this), this.topOffset = 0
        }
        onLoad() {
            var e;
            l.appConfig.isLandscapeLayout || (null == this.widget && (this.widget = this.node.getComponent(s)), this.topOffset = (null == (e = this.widget) ? void 0 : e.top) ?? 0)
        }
        onEnable() {
            l.MessageCenter.register("onAdaptedScreen", this.adjustView.bind(this), this), l.MessageCenter.register(d.OnUserDataChanged, this.OnUserDataChanged.bind(this), this), this.adjustView(!0, !1)
        }
        onDisable() {
            l.MessageCenter.unregister("onAdaptedScreen", this), l.MessageCenter.unregister(d.OnUserDataChanged, this)
        }
        OnUserDataChanged() {}
        adjustView(e, t = !0) {
            var i, n;
            if (l.appConfig.isLandscapeLayout || !r(this.node, !0) || null == this.widget || !e) return;
            const s = u.haveTopBarShow,
                a = (null == (i = u.instance) ? void 0 : i.getTopBarOffsetYToMove()) ?? 0,
                o = (null == (n = u.instance) ? void 0 : n.getOffsetYAreaToMove()) ?? 0,
                d = s ? a : o;
            this.widget.top = this.topOffset + d, t && this.widget.updateAlignment()
        }
    }).prototype, "widget", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = g)) || p));
    n._RF.pop()
}