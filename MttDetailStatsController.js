import * as t from "./cc.js";
import * as i from "./cc.js";
import * as s from "./MVCController.js";
import * as a from "./MttDetailStatsModel.js";
import * as n from "./MttDetailStatsView.js";
import * as o from "./MttItemHelper.js";
import * as l from "./LobbyHelper.js";
import * as r from "./MttHall.js";
import * as d from "./cv.js";

function main() {
    i._RF.push({}, "780a29H3htMtLfne5S6TaBb", "MttDetailStatsController", void 0);
    e("default", class extends s {
        constructor(e, t, i, s) {
            super(n, a, i, s), this.showLoading = void 0, this.callPopup = void 0, this.showLoading = e, this.callPopup = t, this.view.showLoading = e, this.view.callPopup = t
        }
        registerPageHideCallback(e) {
            this.view.registerPageHideCallback(e)
        }
        registerPageChangedCallback(e) {
            this.view.registerPageChangedCallback(e)
        }
        init() {
            super.init(), this.model.registerHandlers(this.onModelUpdated.bind(this))
        }
        onViewEvent(e, ...t) {
            "VIEW_LOADED" === e && this.view.registerHandlers(this.hide.bind(this))
        }
        show() {
            d.appConfig.isLandscapeLayout ? t(this.view.getNode(), !0) && 0 == this.view.getNode().active && (this.view.getNode().active = !0) : l.showPanelFromRight(this.view.engineView, !0)
        }
        updateInfo(e, t, i, s = !1) {
            this.model.setData(e, t, i, s)
        }
        onModelUpdated() {
            let e = this.model.getRenderData(),
                t = {
                    ...e,
                    isBounty: o.getIsBounty(e.playerInfos.tournamentMode)
                };
            this.view.updateView(t)
        }
        hide() {
            this.view.hide()
        }
        hideImmediate() {
            l.showPanelFromRight(this.view.engineView, !1, !0)
        }
        isShowing() {
            return this.view.enable
        }
        getMttHallPageIndex(e = this.view._renderer.bodyPageView.getCurrentPageIndex()) {
            switch (e) {
                case 0:
                    return r.PLAYER;
                case 1:
                    return r.TABLE;
                default:
                    return r.PLAYER
            }
        }
    }), i._RF.pop()
}