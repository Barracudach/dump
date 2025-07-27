import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cv.js";
import * as u from "./PopUpItem.js";

function main() {
    var d, f, h, b, m, g;
    n._RF.push({}, "12b04mmo8tGT4XQKLgaVg1l", "PopUpList", void 0);
    const {
        ccclass: P,
        property: y
    } = a;
    t("default", (d = y(i), f = y(l), P((m = e((b = class extends s {
        constructor(...t) {
            super(...t), o(this, "popUpItemPrefab", m, this), o(this, "contentNode", g, this), this.popUpItems = [], this.callback = void 0
        }
        setItems(t, e) {
            for (let o = 0; o < t.length; o++) {
                let n = c(this.popUpItemPrefab).getComponent(u);
                this.popUpItems.push(n), this.contentNode.addChild(n.node), n.setValue(t[o]), n.setCallback(this.optionSelected.bind(this)), e && e == t[o] && n.select()
            }
        }
        doLayout() {
            p.resMgr.adaptWidget(this.node, !0)
        }
        setCallback(t) {
            this.callback = t
        }
        optionSelected(t, e) {
            let o = t.node.parent.getComponent(r);
            null != o && o.allowSwitchOff && (o.allowSwitchOff = !1), null != this.callback && this.callback(t, e)
        }
    }).prototype, "popUpItemPrefab", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(b.prototype, "contentNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = b)) || h));
    n._RF.pop()
}