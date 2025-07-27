import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./Tools.js";
import * as c from "./cv.js";
import * as u from "./CollapsibleToggle.js";

function main() {
    var p, b, d, T, x, f, m, C, L;
    s._RF.push({}, "d773aggtDZOeKPbK6LFsgHb", "CollapsibleLabel", void 0);
    const {
        ccclass: w,
        property: y
    } = o;
    t("default", (p = y(n), b = y(l), d = y(u), w((f = i((x = class extends h {
        constructor(...t) {
            super(...t), e(this, "label", f, this), e(this, "collapsibleButton", m, this), e(this, "collapsibleToggle", C, this), e(this, "maxLineCount", L, this), this.lineHeight = 0, this.isCollapsed = !1, this.totalHeight = 0, this.animTime = .2, this.animTween = null, this.originText = "", this.originFont = void 0, this.needReloading = !1, this.newText = "", this.fitParent = !1
        }
        onLoad() {
            this.collapsibleButton.node.on("click", this.onBtnClick, this)
        }
        onEnable() {
            this.needReloading && (this.setText(this.newText, this.fitParent), this.needReloading = !1, this.newText = "")
        }
        start() {
            const t = this.originText;
            this.originText = "", this.setText(t, this.fitParent)
        }
        setText(t, i = !1) {
            return t === this.originText && this.originFont === this.label.font ? (this.needReloading = !1, void(this.newText = "")) : this.enabledInHierarchy ? (this.originText = t, this.originFont = this.label.font, this.lineHeight = Math.max(this.label.fontSize, this.label.lineHeight), t ? (this.label.string = t, this.totalHeight = c.resMgr.getRichTextStringSize(this.label).height, this.isCollapsed = this.label.getLineCount() > this.maxLineCount, this.isCollapsed ? (this.node.parent.getComponent(a).height = this.lineHeight * this.maxLineCount, this.ellipsisLabel()) : i && (this.node.parent.getComponent(a).height = this.totalHeight), this.collapsibleButton.node.active = this.isCollapsed, this.collapsibleToggle.setState(this.isCollapsed, 0), void g.forceUpdateLayout(this.collapsibleToggle.node.parent, !0)) : (this.label.string = "", this.isCollapsed = !1, void(this.collapsibleButton.node.active = !1))) : (this.needReloading = !0, this.newText = t, void(this.fitParent = i))
        }
        increaseText(t) {
            return this.label.string = this.originText.slice(0, t), c.resMgr.getRichTextStringSize(this.label).height <= this.lineHeight * this.maxLineCount + 24
        }
        ellipsisLabel() {
            c.appConfig.isLandscapeLayout || this.scheduleOnce(function() {
                let t = 0;
                for (; this.increaseText(t) && t < this.originText.length;) t += 5, t > this.originText.length && (t = this.originText.length);
                this.label.string = this.originText.slice(0, t - 5 - 3) + "..."
            }.bind(this), 0)
        }
        onBtnClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), this.isCollapsed = !this.isCollapsed;
            let t = this.isCollapsed ? this.lineHeight * this.maxLineCount : this.totalHeight;
            this.startTween(this.node.parent, {
                height: t
            }), this.isCollapsed ? this.ellipsisLabel() : this.label.string = this.originText, this.collapsibleToggle.setState(this.isCollapsed, this.animTime)
        }
        startTween(t, i, e = this.animTime) {
            return this.animTween && this.animTween.stop(), this.animTween = r(t).to(e, i).start(), this.animTween
        }
    }).prototype, "label", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = i(x.prototype, "collapsibleButton", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(x.prototype, "collapsibleToggle", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = i(x.prototype, "maxLineCount", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 3
        }
    }), T = x)) || T));
    s._RF.pop()
}