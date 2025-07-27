import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./LocalizationController.js";
import * as p from "./LocalizationEvents.js";
import * as d from "./CommonScriptsDependencies.js";
import * as b from "./StringUtils.js";
import * as f from "./cv.js";

function main() {
    var h, L, C, g, m, D, z, I, y, v, _;
    a._RF.push({}, "964c40ZvMNLN6EeLfJ4ozB1", "CustomLocalizedLabel", void 0);
    const {
        ccclass: x,
        property: S,
        executeInEditMode: E,
        playOnFocus: U,
        disallowMultiple: A,
        menu: O
    } = n;
    e("CustomLocalizedLabel", (h = O("Custom UI/CustomLocalizedLabel"), L = S(o), C = S(s), g = S(s), m = S(r), x(D = A(D = h((I = t((z = class extends l {
        constructor(...e) {
            super(...e), i(this, "_dataID", I, this), i(this, "forceUpperCase", y, this), i(this, "forceCamelCase", v, this), i(this, "label", _, this), this.prefix = "", this.suffix = ""
        }
        set dataID(e) {
            e != this._dataID && (this._dataID = e, this.updateLabel())
        }
        get dataID() {
            return this._dataID
        }
        setPrefixAndSuffix(e, t, i = !0) {
            "string" != typeof e && (e = ""), "string" != typeof t && (t = ""), this.prefix = e, this.suffix = t, i && this.updateLabel()
        }
        onLoad() {
            this.fetchRender(!1)
        }
        onEnable() {
            this.updateLabel(), u.getObserver().subscribe(p.CHANGE_LANGUAGE, this.updateLabel, this)
        }
        onDisable() {
            u.getObserver().unsubscribe(p.CHANGE_LANGUAGE, this.updateLabel, this)
        }
        fetchRender(e = !0) {
            this.label || (this.label = this.getComponent(r)), this.label && e && this.updateLabel()
        }
        updateLabel() {
            if (!this.label || !this.dataID) return void c("Failed to update localized label, label component OR dataID is invalid!", this.dataID);
            if (!d.isInit()) return void c("CommonScriptsDependencies not initialized CustomLocalizedLabel::updateLabel " + this.dataID);
            let e = u.getInstance().getTranslatedString(this.dataID, d.getDeps().getUserLanguage());
            e = this.prefix + e + this.suffix, this.forceCamelCase ? e = f.StringTools.capitalizeTheFirstLetterOfEachWord(e) : this.forceUpperCase && (e = b.toString(e).toUpperCase()), this.label.string = e, this.node.emit("label_string_updated")
        }
    }).prototype, "_dataID", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), t(z.prototype, "dataID", [S], Object.getOwnPropertyDescriptor(z.prototype, "dataID"), z.prototype), y = t(z.prototype, "forceUpperCase", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), v = t(z.prototype, "forceCamelCase", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), _ = t(z.prototype, "label", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = z)) || D) || D) || D));
    a._RF.pop()
}