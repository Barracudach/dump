import * as t from "./cc.js";
import * as n from "./LobbyTools.js";
import * as r from "./MTTUnregisterController.js";

function main() {
    t._RF.push({}, "046496GyGROBp8uWpkEXZ2V", "MTTUnregisterControllerLandscape", void 0);
    const i = e("EVENT_MTT_UNREGISTER_BY_TOURID", "MTT_Unregister_By_TourId");
    e("MTTUnregisterControllerLandscape", class extends r {
        onInitializeEnded() {
            super.onInitializeEnded(), n.registerMessage(i, this.onUnregisterNotification.bind(this), this)
        }
        onUnregisterNotification(e) {
            this.model.tournamentId === e.tournamentId && this.isShowing() && this.view.updateUnregisterButtonState(!1)
        }
        onUnregisterTournament() {
            if (this._onUnregisterCallback) {
                this._onUnregisterCallback();
                const e = this.model.tournamentId;
                n.emitMessage(i, {
                    tournamentId: e
                })
            }
        }
    }), t._RF.pop()
}