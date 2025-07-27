import * as t from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";

function main() {
    var i;
    t._RF.push({}, "48ea2QIrM9OP6eUjsxc8fZV", "NestableScrollView_Inner_ts", void 0);
    const {
        ccclass: l,
        property: u
    } = o;
    e("NestableScrollView_Inner_ts", l(i = class extends n {
        constructor(...e) {
            super(...e), this.m_OuterScrollView = null
        }
        setOuterScrollView(e) {
            this.m_OuterScrollView = e
        }
        _onTouchMoved(e, t) {
            if (!this.enabledInHierarchy || !this._content) return;
            if (this._hasNestedViewGroup(e, t)) return;
            const n = e.touch;
            if (this.m_OuterScrollView.isDifferentBetweenSettingAndPlan(this) || this._handleMoveLogic(n), !this.cancelInnerEvents) return;
            const o = new s,
                i = new s,
                l = n.getUILocation(o);
            if (l.subtract(n.getUIStartLocation(i)), l.length() > 7 && !this._touchMoved && e.target !== this.node) {
                const t = new c(e.getTouches(), e.bubbles, r.EventType.TOUCH_CANCEL);
                t.touch = e.touch, t.simulate = !0, e.target.dispatchEvent(t), this._touchMoved = !0
            }
            this._stopPropagationIfTargetIsMe(e)
        }
    }) || i);
    t._RF.pop()
}