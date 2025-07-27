import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as u from "./EditBoxValidator.js";
import * as l from "./FieldValidator.js";
import * as a from "./SelectView.js";

function main() {
    var c, h, d, b, f, p, g, q;
    s._RF.push({}, "340d2t+b6hFCZB8fw5troQc", "ChallengeQuestionField", void 0);
    const {
        ccclass: v,
        property: V
    } = r;
    e("default", (c = V(l), h = V(n), d = V(o), v((p = t((f = class extends u {
        constructor(...e) {
            super(...e), i(this, "question", p, this), i(this, "questionNumber", g, this), i(this, "selectViewPrefab", q, this), this.questions = []
        }
        setQuestions(e, t, i) {
            this.questionNumber.string = t.toString(), this.questions = e, i && (this.question.value = i)
        }
        onSelectQuestion() {
            a.showPrefab({
                items: a.stringsToItems(this.questions, this.getQuestion()),
                valueSelected: this.getQuestion(),
                onValueSelected: this.onQuestionSelected.bind(this),
                titleKey: "ChallengeQuestions_SelectQuestion_Title"
            }, this.selectViewPrefab)
        }
        onQuestionSelected(e) {
            this.question.value = e, this.question.doValidate()
        }
        getQuestion() {
            return this.question.value
        }
        getAnswer() {
            return this.value
        }
        clear() {
            this.question.value = "", this.value = ""
        }
        doValidate() {
            let e = super.doValidate();
            return this.question.doValidate(), this._valid = this.question.valid, !0 !== this._valid ? (this._error = this.question.error, this._error) : !0 === e || e
        }
        setValueFromObj(e) {}
    }).prototype, "question", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(f.prototype, "questionNumber", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(f.prototype, "selectViewPrefab", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = f)) || b));
    s._RF.pop()
}