import * as n from "./cc.js";
import * as t from "./MVCModel.js";
import * as i from "./MVCController.js";
import * as s from "./MTTUnregisterView.js";

function main() {
    n._RF.push({}, "617acZ9P5BH+bbkib3af9xz", "MTTUnregisterController", void 0);
    class r extends t {
        constructor(...e) {
            super(...e), this.tournamentId = 0
        }
    }
    e("MTTUnregisterModel", r);
    e("MTTUnregisterController", class extends i {
        constructor(e) {
            super(s, r, e), this._onUnregisterCallback = null, this._onCancelCallback = null
        }
        onInitializeEnded() {
            this.view.onUnregisterBtnClicked = this.onUnregisterTournament.bind(this), this.view.onCancelBtnClicked = this.onCancel.bind(this)
        }
        show(e, n, t) {
            this.model.tournamentId = e, this._onUnregisterCallback = n, this._onCancelCallback = t, this.view.updateView(this.model), this.view.show()
        }
        hide() {
            this.view.hide()
        }
        isShowing() {
            return this.view.isShowing
        }
        onUnregisterTournament() {
            this._onUnregisterCallback && this._onUnregisterCallback()
        }
        onCancel() {
            this.view.hide(this._onCancelCallback)
        }
    }), n._RF.pop()
}