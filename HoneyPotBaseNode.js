import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";

function main() {
    var d;
    e._RF.push({}, "6adc4bPZsdP/KRrW2HPdOsO", "HoneyPotBaseNode", void 0);
    const {
        ccclass: g
    } = h;
    t("default", g(d = class extends i {
        constructor(...t) {
            super(...t), this.DESIGN_RESOLUTION_DEFAULT_MOBILE = s(2436, 1125), this.DESIGN_RESOLUTION_DEFAULT_LANDSCAPE = s(2340, 1536), this._isModifiedUI = !1, this._tableKey = null, this.widgetParams = {
                left: void 0,
                right: void 0,
                top: void 0,
                bottom: void 0,
                horizontal: void 0,
                vertical: void 0
            }
        }
        onDestroy() {
            l.MessageCenter.unregister("Honeypot_modify_UI", this), l.MessageCenter.unregister("Honeypot_restore_UI", this)
        }
        init(t) {
            this.initialize(t), this.onInitialized()
        }
        onInitialized() {
            this._tableKey = this.getKey(), this._tableKey && (l.MessageCenter.send("Honeypot_register", {
                key: this._tableKey,
                honeyPotItem: this
            }), l.MessageCenter.register("Honeypot_modify_UI", this.onModifyUI.bind(this), this), l.MessageCenter.register("Honeypot_restore_UI", this.onRestoreUI.bind(this), this))
        }
        setKey(t) {
            this._tableKey || (this._tableKey = t)
        }
        onModifyUI(t) {
            t && t.key === this._tableKey && !this._isModifiedUI && (this._isModifiedUI = !0, this.modify())
        }
        onRestoreUI(t) {
            t && this._tableKey === t.key && this._isModifiedUI && (this._isModifiedUI = !1, this.restore())
        }
        forceModifyUI() {
            this._isModifiedUI || (this._isModifiedUI = !0, this.modify())
        }
        getCashGameKey() {
            let t = this.node;
            for (; t;) {
                const e = t.getComponent("GameMain");
                if (e) return e;
                t = t.parent
            }
            return console.log("[HoneyPot Bug] Not found GameMain in parent nodes!"), null
        }
        pixelToPercent(t) {
            const e = n.getScene().getComponentInChildren(o);
            if (e.designResolution.width > 0 && e.designResolution.height > 0) return new r(t.x / e.designResolution.width, t.y / e.designResolution.height);
            const i = l.appConfig.isLandscapeLayout ? this.DESIGN_RESOLUTION_DEFAULT_LANDSCAPE : this.DESIGN_RESOLUTION_DEFAULT_MOBILE;
            return new r(t.x / i.width, t.y / i.height)
        }
        widthPixelToPercent(t) {
            const e = n.getScene().getComponentInChildren(o);
            if (e.designResolution.width > 0) return t / e.designResolution.width;
            return t / (l.appConfig.isLandscapeLayout ? this.DESIGN_RESOLUTION_DEFAULT_LANDSCAPE.width : this.DESIGN_RESOLUTION_DEFAULT_MOBILE.width)
        }
        heightPixelToPercent(t) {
            const e = n.getScene().getComponentInChildren(o);
            if (e.designResolution.height > 0) return t / e.designResolution.height;
            return t / (l.appConfig.isLandscapeLayout, this.DESIGN_RESOLUTION_DEFAULT_LANDSCAPE.height)
        }
        backupWidget() {
            const t = this.node.getComponent(a);
            t && t.enabled && (t.isAlignLeft && null == this.widgetParams.left && (this.widgetParams.left = t.left), t.isAlignRight && null == this.widgetParams.right && (this.widgetParams.right = t.right), t.isAlignHorizontalCenter && null == this.widgetParams.horizontal && (this.widgetParams.horizontal = t.horizontalCenter), t.isAlignTop && null == this.widgetParams.top && (this.widgetParams.top = t.top), t.isAlignBottom && null == this.widgetParams.bottom && (this.widgetParams.bottom = t.bottom), t.isAlignVerticalCenter && null == this.widgetParams.vertical && (this.widgetParams.vertical = t.verticalCenter))
        }
        restoreWidget() {
            let t = !1;
            const e = this.node.getComponent(a);
            return e && e.enabled && (null != this.widgetParams.left && (e.left = this.widgetParams.left, e.isAlignLeft = !0, t = !0), null != this.widgetParams.right && (e.right = this.widgetParams.right, e.isAlignRight = !0, t = !0), null != this.widgetParams.top && (e.top = this.widgetParams.top, e.isAlignTop = !0, t = !0), null != this.widgetParams.bottom && (e.bottom = this.widgetParams.bottom, e.isAlignBottom = !0, t = !0), null != this.widgetParams.horizontal && (e.horizontalCenter = this.widgetParams.horizontal, e.isAlignHorizontalCenter = !0, t = !0), null != this.widgetParams.vertical && (e.verticalCenter = this.widgetParams.vertical, e.isAlignVerticalCenter = !0, t = !0), t && e.updateAlignment()), t
        }
    }) || d);
    e._RF.pop()
}