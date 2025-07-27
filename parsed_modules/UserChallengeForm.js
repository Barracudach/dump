import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./cv.js";
import * as r from "./FormView.js";
import * as u from "./FieldValidator.js";
import * as h from "./ChallengeQuestionField.js";

function main() {
    var m, c, d, g;
    n._RF.push({}, "39b19DcEABMwoqrHsmku1xP", "UserChallengeForm", void 0);
    const {
        ccclass: p,
        property: f
    } = i;
    e("default", (m = f(o), p((g = t((d = class extends r {
        constructor(...e) {
            super(...e), s(this, "questionFieldPrefab", g, this), this.formName = null
        }
        init(e) {
            e.formMeta.formName && (this.formName = e.formMeta.formName);
            let t = e.formMeta.fields;
            for (let s = 0, n = t.length; s < n; s++) {
                let n = t[s],
                    o = null;
                if ("firstQuestionAnswer" == n.name ? (o = l(this.questionFieldPrefab).getComponent(u), o.getComponent(h).question.nameI18nKey = "ChallengeQuestions_FirstQuestion_name") : "secondQuestionAnswer" == n.name && (o = l(this.questionFieldPrefab).getComponent(u), o.getComponent(h).question.nameI18nKey = "ChallengeQuestions_SecondQuestion_name"), null != o) {
                    o.initFieldFromSchema(n), this.addFormComponent(o);
                    let t = null;
                    e.challengeQuestions && e.challengeQuestions.length > s && (t = e.challengeQuestions[s]), o.node.getComponent(h).setQuestions(e.questions, s + 1, t)
                }
            }
            "challenge" == this.formName && (this.urlKey = "WEB_API_QUESTIONS_ANSWER", this.method = "put"), a.resMgr.adaptWidget(this.node, !0, !1)
        }
        addFormComponent(e) {
            this.addField(e), this.node.addChild(e.node)
        }
        submitForm(e, t, s, n) {
            let o = this.validate();
            this.objValues = {}, this.objValues.challengeAnswers = [];
            for (let e = 0, t = this.fields.length; e < t; e++) {
                let t = this.fields[e].node.getComponent(h),
                    s = {
                        question: t.getQuestion(),
                        answer: t.getAnswer()
                    };
                this.objValues.challengeAnswers.push(s)
            }
            return !0 === o && this.objValues.challengeAnswers[0].question.length && this.objValues.challengeAnswers[0].question == this.objValues.challengeAnswers[1].question && (o = !1, a.popUp.showMsg({
                txt: "You must select two different questions",
                msgType: a.Enum.ToastType.ToastTypeWarning
            })), !0 === o && this.objValues.challengeAnswers[0].answer.length && this.objValues.challengeAnswers[0].answer == this.objValues.challengeAnswers[1].answer && (o = !1, a.popUp.showMsg({
                txt: "Answers should not be the same",
                msgType: a.Enum.ToastType.ToastTypeWarning
            })), !0 === o && (a.http.sendRequestV2(e, this.objValues, s, n || this.showServerError.bind(this), t), !0)
        }
    }).prototype, "questionFieldPrefab", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = d)) || c));
    n._RF.pop()
}