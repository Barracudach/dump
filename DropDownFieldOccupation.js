import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./SelectView.js";
import * as s from "./TooltipsManager.js";
import * as r from "./FormValidator.js";
import * as c from "./cv.js";
import * as u from "./DropDownField.js";

function main() {
    var p, d, h, b, T, v, J, f;
    o._RF.push({}, "12e16zA1TdM7aBhqk2JduFe", "DropDownFieldOccupation", void 0);
    const {
        ccclass: D,
        property: x
    } = n;
    t("default", (p = x(u), d = x(l), h = x(l), D((v = i((T = class extends u {
        constructor(...t) {
            super(...t), e(this, "occupationJobTitle", v, this), e(this, "bgDisableOccupationJobTitle", J, this), e(this, "buttonForActiveJobTitle", f, this), this.listOfOccupationJobTitleData = []
        }
        onEnable() {
            super.onEnable(), this.sortUniqueData(a.sortMethod(this.dropDownItemList))
        }
        onValueSelected(t) {
            var i;
            if (this.value !== t && (null != (i = this.occupationJobTitle) && null != (i = i.editBox) && i.textLabel.node.active && (this.occupationJobTitle.editBox.textLabel.string = "", this.occupationJobTitle.editBox.textLabel.node.active = !1, this.occupationJobTitle.editBox.placeholderLabel.node.active = !0), this.occupationJobTitle)) {
                this.bgDisableOccupationJobTitle.active = !1, this.buttonForActiveJobTitle.active = !0;
                let i = parseInt(t);
                this.occupationJobTitle.dropDownItemList = this.listOfOccupationJobTitleData[i], this.occupationJobTitle.dropDownItemList.forEach((t => {
                    t.selected = void 0
                }))
            }
            super.onValueSelected(t)
        }
        sortUniqueData(t) {
            var i;
            if (0 != (null == (i = this.listOfOccupationJobTitleData) ? void 0 : i.length)) return;
            let e = t.filter(((t, i, e) => (t.text = c.config.getStringData(t.i18nKey, !1, t.text), e.indexOf(e.find((i => {
                var e, o;
                return (null == i || null == (e = i.text) ? void 0 : e.split("-")[0].trim()) === (null == t || null == (o = t.text) ? void 0 : o.split("-")[0].trim())
            }))) === i)));
            this.listOfOccupationJobTitleData = [], this.dropDownItemList = [], this.dropDownItemList = JSON.parse(JSON.stringify(e)), this.dropDownItemList.forEach(((i, e) => {
                i.text = i.text.split("-")[0].trim(), i.id = e, i.i18nKey = null;
                const o = t.filter((t => {
                    if (i.text == t.text.split("-")[0].trim()) {
                        let i = t.text.split("-");
                        return i.length > 1 ? t.text = i[1].trim() : t.text = i[0].trim(), t
                    }
                }));
                o.length > 0 && this.listOfOccupationJobTitleData.push(o.slice())
            }))
        }
        onTextChanged() {
            super.onTextChanged(), s.hideAllTooltips()
        }
        doValidate() {
            let t = super.doValidate();
            return !0 !== t ? t : (null == (i = this.occupationJobTitle) || i.doValidate(), !(this.occupationJobTitle && (this._valid = this.occupationJobTitle.valid, !0 !== this._valid || !this.occupationJobTitle.editBox.textLabel.node.active)) || (this._valid = !1, this._error = this.occupationJobTitle.error, "" == this._error && (this._error = c.config.getStringData("ErrorValidRequired").replace("%s", this.occupationJobTitle.formValidatorField.name)), this._error));
            var i
        }
        getInvalidFieldNode() {
            let t = this.node,
                i = r.validateField(this);
            return !0 !== i ? this.onMouseEventNode && (t = this.onMouseEventNode) : this.occupationJobTitle && (i = r.validate([this.occupationJobTitle]), !0 === i && this.occupationJobTitle.editBox.textLabel.node.active ? this.onMouseEventNode && (t = this.onMouseEventNode) : t = this.occupationJobTitle.node), t
        }
        clearBindTooltips() {
            var t;
            super.clearBindTooltips(), null == (t = this.occupationJobTitle) || t.clearBindTooltips()
        }
        setBindTooltips(t, i) {
            var e;
            super.setBindTooltips(t, i), null == (e = this.occupationJobTitle) || e.setBindTooltips(t, i)
        }
        setForm(t, i) {
            var e;
            super.setForm(t, i), null == (e = this.occupationJobTitle) || e.setForm(t, i)
        }
        clear() {
            this.value = "", this.occupationJobTitle && (this.occupationJobTitle.value = "")
        }
        addValueToObject(t) {
            t[this.schemaKey] = this.occupationJobTitle.value
        }
    }).prototype, "occupationJobTitle", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = i(T.prototype, "bgDisableOccupationJobTitle", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = i(T.prototype, "buttonForActiveJobTitle", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = T)) || b));
    o._RF.pop()
}