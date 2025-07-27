import * as n from "./cc.js";
import * as i from "./cc.js";
import * as t from "./cc.js";
import * as c from "./MiniGameRulePanelBase.js";

function main() {
    var o;
    n._RF.push({}, "3149cJtA0VF+7T/hHugIz9q", "MiniGameRuleContainer", void 0);
    const {
        ccclass: s,
        property: r
    } = i;
    e("default", s(o = class extends t {
        open() {
            if (this.node.children.length <= 0) return;
            const e = this.node.children[0];
            if (e.children.length) {
                const n = e.getComponent(c);
                n && n.openView()
            }
        }
        close() {
            if (this.node.children.length <= 0) return;
            const e = this.node.children[0];
            if (e.children.length) {
                const n = e.getComponent(c);
                n && n.closeView()
            }
        }
    }) || o);
    n._RF.pop()
}