import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./FormView.js";
import * as d from "./ForgotPasswordQuestionField.js";
import * as h from "./cv.js";

function main() {
    var f, u, c, p, v, w, g, y, b, m;
    s._RF.push({}, "f6232AtzJ1Ofq9jJmoi0bfl", "ForgotPasswordVerifyForm", void 0);
    const {
        ccclass: A,
        property: F
    } = o;
    e("default", (f = F(r), u = F(n), c = F({
        type: r,
        tooltip: "Node showed/hidden when field is invalid/valid"
    }), p = F({
        type: r,
        tooltip: "Node hidden/showed when field is invalid/valid"
    }), A((g = i((w = class extends a {
        constructor(...e) {
            super(...e), t(this, "questionsParent", g, this), t(this, "questionFieldPrefab", y, this), t(this, "invalidShow", b, this), t(this, "invalidHide", m, this), this._areAllQuestionsAnswered = void 0
        }
        get areAllQuestionsAnswered() {
            return this._areAllQuestionsAnswered
        }
        set areAllQuestionsAnswered(e) {
            this._areAllQuestionsAnswered != e && (this._areAllQuestionsAnswered = e, this.showOrHideInvalid(!this._areAllQuestionsAnswered))
        }
        onLoad() {
            super.onLoad()
        }
        update(e) {
            if (this.fields) {
                let e = !0;
                for (let i of this.fields)
                    if (i instanceof d && 0 == i.valid) {
                        e = !1;
                        break
                    } this.areAllQuestionsAnswered = e
            }
        }
        showOrHideInvalid(e) {
            if (this.invalidHide) {
                let i = this.invalidHide.length;
                for (let t = 0; t < i; t++) {
                    let i = this.invalidHide[t];
                    null != i && (i.active = !e)
                }
            }
            if (this.invalidShow) {
                let i = this.invalidShow.length;
                for (let t = 0; t < i; t++) {
                    let i = this.invalidShow[t];
                    null != i && (i.active = e)
                }
            }
        }
        init(e) {
            if (this.removeAllQuestions(), null == e || 0 == e.length) this.questionsParent.active = !1;
            else {
                this.questionsParent.active = !0;
                for (let i = 0, t = e.length; i < t; i++) {
                    let t = l(this.questionFieldPrefab).getComponent(d);
                    t.init(i, e[i]), this.addField(t), this.questionsParent.addChild(t.node)
                }
                h.resMgr.adaptWidget(this.questionsParent, !0, !1)
            }
        }
        removeAllQuestions() {
            for (; this.fields.length > 0;) {
                let e = this.fields.pop();
                if (!(e instanceof d)) {
                    this.addField(e);
                    break
                }
                e.node.destroy()
            }
        }
        isValidationCodeError(e) {
            if (e) {
                if ("10000021" == h.httpHandler.getResponseCode(e)) return !0;
                if (null != e.payload && "object" == typeof e.payload) {
                    let i = e.payload,
                        t = Object.keys(i);
                    if (t.length > 0 && t[0].toLowerCase() == h.appConfig.getFormsConfig().verificationCode.key.toLowerCase()) return !0
                }
            }
            return !1
        }
        showServerError(e) {
            let i = this.getServerError(e),
                t = null;
            i[1] >= 0 && i[1] < this.fields.length && (t = this.fields[i[1]]), this.showMsg({
                txt: i[0],
                msgType: h.Enum.ToastType.ToastTypeWarning
            }, t)
        }
        findFieldWithError(e) {
            let i = Object.keys(e);
            for (let t = 0, s = i.length; t < s; t++) {
                let s = i[t].split("."),
                    r = 0;
                "$" == s[r] && r++;
                for (let n = 0, o = this.fields.length; n < o; n++)
                    if (this.fields[n].schemaKey == s[r]) {
                        if (!(this.fields[n] instanceof d && s.length - 1 > r)) return [this.fields[n].formatServerError(e[i[t]][0]), n];
                        {
                            let o = this.fields[n],
                                l = parseInt(s[r + 1]);
                            if (o.index == l) return [this.fields[n].formatServerError(e[i[t]][0]), n]
                        }
                    }
            }
            return [null, -1]
        }
        showMsg(e, i) {
            h.popUp.showMsg(e), null == i && this.fields.forEach((e => e.showInvalidEffectsOnServerError()))
        }
        haveQuestions() {
            return this.questionsParent.active
        }
    }).prototype, "questionsParent", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(w.prototype, "questionFieldPrefab", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = i(w.prototype, "invalidShow", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), m = i(w.prototype, "invalidHide", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = w)) || v));
    s._RF.pop()
}