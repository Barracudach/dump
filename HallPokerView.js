import * as e from "./cc.js";
import * as o from "./MVCView.js";
import * as i from "./HallPokerComp.js";
import * as n from "./cv.js";

function main() {
    e._RF.push({}, "2e8bcx/U8lLBIJ6GscLJbDV", "HallPokerView", void 0);
    const a = t("HallViewEvent", {
        go_back_poker_type: "go_back_poker_type"
    });
    t("HallPokerView", class extends o {
        constructor(...t) {
            super(...t), this.comp = void 0, this.onClickChangeTab = null, this.joinCashGameLobbyV2FromDeepLink = null, this.showMttDetailLobbyV2FromDeepLink = null, this.loadAndShowMttTournamentDetail = null, this.cancelRequestMttDetail = null
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(i), this.comp.mvcView = this
        }
        initView(t) {
            var e;
            null == (e = this.comp) || e.createTabButtons(t.tabs)
        }
        geLobbyTabViewEngine(t, e, o = null, i = !1) {
            var n, a, l, c;
            return 1 == t ? i ? (null == (a = this.comp) || !a.panelPaceRoomListItem || null != (l = this.comp) && l.panelPaceRoomListItem.active || (this.comp.panelPaceRoomListItem.active = !0), null == (c = this.comp) ? void 0 : c.panelPaceRoomListItem) : null == (n = this.comp) ? void 0 : n.panelCashListItem : "mtt" == o ? null == this ? void 0 : this.comp.panelMttRoomListItem : "sng" == o ? null == this ? void 0 : this.comp.panelSngRoomListItem : void 0
        }
        getCashRoomListViewEngine() {
            return null == this ? void 0 : this.comp.cashGameRoomListPrefab
        }
        updateOnChangeTab(t) {
            var e, o, i;
            null == (e = this.comp) || e.setSelectedTabButton(t), null == (o = this.comp) || o.updateBackTitle("mtt" === t ? "tourney" : t), null == (i = this.comp) || i.updateBackgroundColor(t)
        }
        updateShowBanner(t) {
            var e;
            null == (e = this.comp) || e.showBanner(t)
        }
        updateShowLandscapeRightPanelLine(t) {
            var e;
            null == (e = this.comp) || e.showLandscapeRightPanelLine(t)
        }
        showLoading(t) {
            var e;
            return null == (e = this.comp) ? void 0 : e.showLoading(t)
        }
        getMttGameOverviewNode() {
            var t;
            return null == (t = this.comp) ? void 0 : t.getMttGameOverviewNode()
        }
        setActive(t) {
            this.comp && (this.comp.node.active = t)
        }
        goBack() {
            this.emitEvent(a.go_back_poker_type)
        }
        showComponent(t) {
            var e;
            n.action.showAction(null == (e = this.comp) ? void 0 : e.node, n.action.eMoveActionDir.EMAD_TO_LEFT, n.action.eMoveActionType.EMAT_FADE_IN, n.action.delay_type.INSTANT, null, ((e, o) => {
                null == t || t()
            }), 0, !0)
        }
        hideComponent(t) {
            var e;
            n.action.showAction(null == (e = this.comp) ? void 0 : e.node, n.action.eMoveActionDir.EMAD_TO_RIGHT, n.action.eMoveActionType.EMAT_FADE_OUT, n.action.delay_type.NORMAL, null, ((e, o) => {
                this.comp && (this.comp.node.active = !1), null == t || t()
            }))
        }
        showBackBtn(t) {
            this.comp.showBackBtnNode(t)
        }
    }), e._RF.pop()
}