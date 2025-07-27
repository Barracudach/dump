import * as n from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./FontSystemInfo.js";

function main() {
    var o;
    e._RF.push({}, "3b68e/d9ndAdY+g//YpSkCV", "FontSystemForRichText", void 0);
    const {
        ccclass: c,
        requireComponent: r,
        menu: h
    } = n;
    t("default", c(o = r(s)(o = h("Design System/Font System for RichText")(o = class extends i {
        constructor(...t) {
            super(...t), this.editorFocus = !1, this.richText = null
        }
        applyFont(t = !1) {
            null == this.richText && (this.richText = this.getComponent(s)), super.applyFont()
        }
        getFontAndApply(t) {
            this.richText && (this.richText.useSystemFont = !1, this.richText.font = t, this.richText.fontSize = this.fontSize)
        }
    }) || o) || o) || o);
    e._RF.pop()
}