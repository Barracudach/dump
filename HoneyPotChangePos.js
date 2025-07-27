import * as o from "./cc.js";
import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./HoneyPotBaseNode.js";

function main() {
    var n;
    e._RF.push({}, "96290fixQ9EH7y62lQlvrhe", "HoneyPotChangePos", void 0);
    const {
        ccclass: l
    } = o;
    t("default", l(n = class extends s {
        constructor(...t) {
            super(...t), this.pos = void 0, this.moveX = void 0, this.moveY = void 0
        }
        initialize(t) {
            t && (t.moveX && 0 != t.moveX && (this.moveX = t.moveX), t.moveY && 0 != t.moveY && (this.moveY = t.moveY)), this.pos = this.node.position, this.backupWidget()
        }
        getKey() {
            return this.getCashGameKey()
        }
        modify() {
            this._updateAlignment()
        }
        restore() {
            this.restoreWidget() || null == this.pos || (this.node.position = this.pos)
        }
        _updateAlignment() {
            if (null == this.moveX && null == this.moveY) return;
            const t = this.node.getComponent(i);
            if (t && t.enabled) {
                if (null != this.moveX) {
                    const e = this.widthPixelToPercent(this.moveX);
                    t.isAlignLeft && t.isAlignRight ? (t.left = t.left + (t.isAbsoluteLeft ? this.moveX : e) / 2, t.right = t.right - (t.isAbsoluteRight ? this.moveX : e) / 2) : t.isAlignLeft ? t.left = t.left + (t.isAbsoluteLeft ? this.moveX : e) : t.isAlignRight && (t.right = t.right - (t.isAbsoluteRight ? this.moveX : e)), t.isAlignHorizontalCenter && (t.horizontalCenter = t.horizontalCenter - (t.isAbsoluteHorizontalCenter ? this.moveX : e))
                }
                if (null != this.moveY) {
                    const e = this.heightPixelToPercent(this.moveY);
                    t.isAlignTop && t.isAlignBottom ? (t.top = t.top - (t.isAbsoluteTop ? this.moveY : e) / 2, t.bottom = t.bottom + (t.isAbsoluteBottom ? this.moveY : e) / 2) : t.isAlignTop ? t.top = t.top - (t.isAbsoluteTop ? this.moveY : e) : t.isAlignBottom && (t.bottom = t.bottom + (t.isAbsoluteBottom ? this.moveY : e)), t.isAlignVerticalCenter && (t.verticalCenter = t.verticalCenter + (t.isAbsoluteVerticalCenter ? this.moveY : e))
                }
                t.updateAlignment()
            } else {
                const t = this.node.getPosition();
                null != this.moveX && (t.x += this.moveX), null != this.moveY && (t.y += this.moveY), this.node.position = t
            }
        }
    }) || n);
    e._RF.pop()
}