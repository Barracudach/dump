import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cv.js";
import * as a from "./EditBoxValidator.js";
import * as d from "./DesignSystemInput.js";

function main() {
    var u, c, h, p;
    n._RF.push({}, "4cdfb/KFohKOKKq/8OU1es7", "ForgotPasswordQuestionField", void 0);
    const {
        ccclass: f,
        property: b
    } = r;
    e("default", (u = b(s), f((p = t((h = class extends a {
        constructor(...e) {
            super(...e), i(this, "label", p, this), this.index = -1
        }
        IsValid() {
            return this._valid
        }
        onLoad() {
            super.onLoad(), null == this.editBox && (this.editBox = this.node.getComponentInChildren(o))
        }
        getInvalidFieldNode() {
            return this.getComponentInChildren(d).node
        }
        init(e, t) {
            this.index = e, this.label.string = t, 0 == e ? this.nameI18nKey = "firstQuestionAnswer" : 1 == e && (this.nameI18nKey = "secondQuestionAnswer")
        }
        setValueFromObj(e) {
            null != l.tools.traverseObjGet(e, this.schemaKey) && this.index >= 0 && (this.value = e[this.schemaKey][this.index] || "")
        }
        addValueToObject(e) {
            let t = l.tools.traverseObjGet(e, this.schemaKey);
            null == t && (t = []), t[this.index] = this.value, l.tools.traverseObjSet(e, this.schemaKey, t)
        }
        formatServerError(e) {
            let t = l.config.getStringData("serverErrorCode" + e.code, !1, e.description || "Unknown error occured");
            return t = "<i>" + this.label.string + "</i>\n\n" + t, t
        }
    }).prototype, "label", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = h)) || c));
    n._RF.pop()
}