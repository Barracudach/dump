import * as t from "./cc.js";
import * as r from "./cc.js";
import * as n from "./MttGameListOverviewCompLandscape.js";
import * as i from "./HallMttDetailView.js";

function main() {
    var a;
    t._RF.push({}, "3466d9SIIpNs5/n25XLp49R", "MttGameOverviewViewLandscape", void 0);
    const {
        ccclass: s,
        property: l
    } = r;
    e("MttGameOverviewViewLandscape", s("MttGameOverviewViewLandscape")(a = class extends i {
        constructor(...e) {
            super(...e), this.renderer = void 0, this.onClickSignup = null, this.onClickMttLobby = null
        }
        onAttachedEngineView(e) {
            this.renderer = e.getComponent(n), this.renderer.mvcView = this
        }
        updateView(e) {
            var t;
            null == (t = this.renderer) || t._render(e.tournamentData, e.detailData, e.data)
        }
        updateDisplayCurrency() {
            var e;
            null == (e = this.renderer) || e.updateDisplayCurrency()
        }
        getCurLevelLabel() {
            var e;
            return null == (e = this.getRender()) ? void 0 : e.currentLevelValue
        }
        setGameClockLabel(e) {}
        getRender() {
            return this.renderer
        }
        getRoomStatusString() {
            var e;
            return null == (e = this.getRender()) || null == (e = e.statusValue) ? void 0 : e.string
        }
        getDateInfoString() {
            var e;
            return null == (e = this.getRender()) || null == (e = e.statusValue) ? void 0 : e.string
        }
        switchTab(e) {}
        onToggleOverlayButton(e, t = null) {}
        reset() {
            var e;
            null == (e = this.renderer) || e.reset()
        }
        show() {
            var e;
            null != (e = this.renderer) && e.node && (this.renderer.node.active = !0)
        }
        hide() {
            var e;
            null != (e = this.renderer) && e.node && (this.renderer.node.active = !1)
        }
        getUnregisterPopup() {
            var e;
            return null == (e = this.renderer) ? void 0 : e.getUnregisterPopup()
        }
        setLoading(e) {
            var t;
            null == (t = this.renderer) || t.setLoading(e)
        }
        setSignUpButtonColor(e) {
            var t;
            null == (t = this.renderer) || t.setSignUpButtonColor(e)
        }
    }) || a);
    t._RF.pop()
}