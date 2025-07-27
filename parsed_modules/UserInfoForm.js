import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cv.js";
import * as s from "./FormView.js";
import * as d from "./FieldValidator.js";
import * as u from "./CountDownButton.js";
import * as f from "./TrackingComp.js";

function main() {
    var m, b, c, p, h, F, g, P, C, y, w, N, z, B, I, O, A, S, v, D, V, x, _, E, T, R, j, k, U, L, M, W, q, G, H, K, X, J, Q, Y, Z, $;
    n._RF.push({}, "f5fb7iem6lOSoAjjslqfXir", "UserInfoForm", void 0);
    const {
        ccclass: ee,
        property: te
    } = a;
    e("default", (m = te(r), b = te(r), c = te(r), p = te(r), h = te(r), F = te(r), g = te(r), P = te(r), C = te(r), y = te(r), w = te(r), N = te(r), z = te(r), B = te(r), I = te(r), O = te(r), A = te(r), S = te(r), v = te(r), D = te(r), ee((_ = t((x = class extends s {
        constructor(...e) {
            super(...e), i(this, "firstNameFieldPrefab", _, this), i(this, "middleNameFieldPrefab", E, this), i(this, "lastNameFieldPrefab", T, this), i(this, "cityFieldPrefab", R, this), i(this, "addressFieldPrefab", j, this), i(this, "stateFieldPrefab", k, this), i(this, "zipCodeFieldPrefab", U, this), i(this, "birthDateFieldPrefab", L, this), i(this, "genderFieldPrefab", M, this), i(this, "ssnFieldPrefab", W, this), i(this, "phoneFieldPrefab", q, this), i(this, "nationalityFieldPrefab", G, this), i(this, "countryOfBirthFieldPrefab", H, this), i(this, "taxIdFieldPrefab", K, this), i(this, "nationalIdFieldPrefab", X, this), i(this, "employerFieldPrefab", J, this), i(this, "occupationFieldPrefab", Q, this), i(this, "sourceOfIncomeFieldPrefab", Y, this), i(this, "districtFieldPrefab", Z, this), i(this, "emailFieldPrefab", $, this), this.formName = null, this.getVCodeButton = null
        }
        init(e, t = null, i = null) {
            e.formName && (this.formName = e.formName);
            let n = [],
                r = e.fields,
                a = ["firstName", "middleName", "lastName", "email", "phone", "dateOfBirth", "address", "currentAddressStreet", "city", "currentAddressCity", "state", "currentAddressState", "District", "postCode", "currentAddressPostCode", "permanentAddressStreet", "permanentAddressCity", "permanentAddressState", "permanentAddressPostCode", "lastSsnDigits", "CountryOfBirth", "placeOfBirth", "Nationality", "nationality", "TaxId", "NationalId", "nameOfEmployer", "Occupation", "occupation", "curp", "sourceOfIncome"];
            for (let e = 0; e < a.length; e++) {
                let t = r.find((t => t.name == a[e]));
                t && n.push(t)
            }
            for (let e = 0, t = n.length; e < t; e++) {
                let t = n[e],
                    i = null;
                if ("firstName" == t.name ? i = l(this.firstNameFieldPrefab).getComponent(d) : "middleName" == t.name ? i = l(this.middleNameFieldPrefab).getComponent(d) : "lastName" == t.name ? i = l(this.lastNameFieldPrefab).getComponent(d) : "dateOfBirth" == t.name ? i = l(this.birthDateFieldPrefab).getComponent(d) : "postCode" == t.name || "permanentAddressPostCode" == t.name || "currentAddressPostCode" == t.name ? i = l(this.zipCodeFieldPrefab).getComponent(d) : "city" == t.name || "permanentAddressCity" == t.name || "currentAddressCity" == t.name ? i = l(this.cityFieldPrefab).getComponent(d) : "state" == t.name || "permanentAddressState" == t.name || "currentAddressState" == t.name ? i = l(this.stateFieldPrefab).getComponent(d) : "address" == t.name || "permanentAddressStreet" == t.name || "currentAddressStreet" == t.name ? i = l(this.addressFieldPrefab).getComponent(d) : "gender" == t.name && o.appConfig.getRegistrationConfig().showGenderField ? i = l(this.genderFieldPrefab).getComponent(d) : "lastSsnDigits" == t.name && (i = l(this.ssnFieldPrefab).getComponent(d)), "email" == t.name) {
                    var s;
                    i = l(this.emailFieldPrefab).getComponent(d);
                    let e = i;
                    null != e && null != (s = e.addButton) && null != (s = s.parent) && null != (s = s.parent) && s.active && (e.addButton.parent.parent.active = !1)
                } else if ("phone" == t.name) {
                    var m;
                    i = l(this.phoneFieldPrefab).getComponent(d);
                    let e = i;
                    e.showAllCountryCodeList = !0, null != e && null != (m = e.addButton) && null != (m = m.parent) && null != (m = m.parent) && m.active && (e.addButton.parent.parent.active = !1)
                } else "lastSsnDigits" == t.name ? i = l(this.ssnFieldPrefab).getComponent(d) : "Nationality" == t.name || "nationality" == t.name ? i = l(this.nationalityFieldPrefab).getComponent(d) : "CountryOfBirth" == t.name || "placeOfBirth" == t.name ? i = l(this.countryOfBirthFieldPrefab).getComponent(d) : "TaxId" == t.name ? i = l(this.taxIdFieldPrefab).getComponent(d) : "NationalId" == t.name || "curp" == t.name ? i = l(this.nationalIdFieldPrefab).getComponent(d) : "nameOfEmployer" == t.name ? i = l(this.employerFieldPrefab).getComponent(d) : "Occupation" == t.name || "occupation" == t.name ? i = l(this.occupationFieldPrefab).getComponent(d) : "sourceOfIncome" == t.name ? i = l(this.sourceOfIncomeFieldPrefab).getComponent(d) : "District" == t.name && (i = l(this.districtFieldPrefab).getComponent(d));
                if (null != i) {
                    i.initFieldFromSchema(t), this.addFormComponent(i);
                    let e = i.node.getComponent(f);
                    e && (e.screenName = o.Enum.CurrentScreen.registrationStageTwo)
                }
                var b;
                if (!this.getVCodeButton) this.getVCodeButton = null == (b = i) ? void 0 : b.getComponentInChildren(u), this.getVCodeButton && (this.getVCodeButton.node.active = !1)
            }
            this.urlKey = t || "WEB_API_USER_INFO", this.method = i || "put", o.resMgr.adaptWidget(this.node, !0, !1)
        }
        addFormComponent(e) {
            this.addField(e), this.node.addChild(e.node)
        }
    }).prototype, "firstNameFieldPrefab", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(x.prototype, "middleNameFieldPrefab", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(x.prototype, "lastNameFieldPrefab", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(x.prototype, "cityFieldPrefab", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(x.prototype, "addressFieldPrefab", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(x.prototype, "stateFieldPrefab", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(x.prototype, "zipCodeFieldPrefab", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(x.prototype, "birthDateFieldPrefab", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(x.prototype, "genderFieldPrefab", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(x.prototype, "ssnFieldPrefab", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(x.prototype, "phoneFieldPrefab", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(x.prototype, "nationalityFieldPrefab", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(x.prototype, "countryOfBirthFieldPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(x.prototype, "taxIdFieldPrefab", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(x.prototype, "nationalIdFieldPrefab", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(x.prototype, "employerFieldPrefab", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(x.prototype, "occupationFieldPrefab", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(x.prototype, "sourceOfIncomeFieldPrefab", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(x.prototype, "districtFieldPrefab", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(x.prototype, "emailFieldPrefab", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = x)) || V));
    n._RF.pop()
}