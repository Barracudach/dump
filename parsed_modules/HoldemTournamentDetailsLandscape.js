import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./HoldemTournamentDetails.js";
import * as f from "./AndroidBackButton.js";
import * as b from "./cv.js";
import * as P from "./ButtonTextWithHightlight.js";
import * as T from "./CurrencyValue.js";
import * as C from "./FormatParser.js";
import * as S from "./GameListTuplePkw.js";
import * as L from "./CrashTracing.js";
import * as y from "./CrashTracing.js";
import * as D from "./DataManager.js";

function main() {
    var v, w, V, k, I, _, B, E, R, M, N, x, G, O;
    n._RF.push({}, "f1ab2psV3xPR5ddvIS5FoKh", "HoldemTournamentDetailsLandscape", void 0);
    const {
        ccclass: A,
        property: H
    } = a;
    t("default", (v = H(o), w = H(o), V = H(o), k = H(T), I = H(T), _ = H(l), A((R = e((E = class extends p {
        constructor(...t) {
            super(...t), i(this, "nextLevel", R, this), i(this, "runningClockLabel", M, this), i(this, "tournamentTitle", N, this), i(this, "prizePoolCurrencyValue", x, this), i(this, "bountyPoolCurrencyValue", G, this), i(this, "editBox", O, this), this._originalRight = void 0, this.tournamentDetail = void 0, this.scrollReported = !1, this._gameDuration = 0
        }
        onLoad() {
            let t = this.tournamentDetailPage.getComponent(s);
            null != t ? (b.appConfig.isLandscapeLayout || this.setUpWidgetForMobile(t), this._originalRight = t.left, super.onLoad(), this.infoBtn.node.on(r.EventType.MOUSE_ENTER, this.showInfoBubble, this), this.infoBtn.node.on(r.EventType.MOUSE_LEAVE, this.hideInfoBubble, this), this.editBox && u.isMobile && this.editBox.node.on("editing-did-began", b.tools.adjustLayoutPosition.bind(this, this.editBox.node), this), b.appConfig.isLandscapeLayout && (this.rankingPage.rankingScrollView && b.tools.setScrollViewElasticThreshold(this.rankingPage.rankingScrollView, 300), this.rankingPage.scrollItem && b.tools.setScrollViewElasticThreshold(this.rankingPage.scrollItem.getComponent(c), 300), this.rewardPage.rewardScrollView && b.tools.setScrollViewElasticThreshold(this.rewardPage.rewardScrollView, 300), this.tablePage.tablePageView && b.tools.setScrollViewElasticThreshold(this.tablePage.tablePageView, 300), this.tablePage.scrollItem && b.tools.setScrollViewElasticThreshold(this.tablePage.scrollItem.getComponent(c), 300), this.blindLevelPage.blindScrollView && b.tools.setScrollViewElasticThreshold(this.blindLevelPage.blindScrollView, 300), this.blindLevelPage.scrollItem && b.tools.setScrollViewElasticThreshold(this.blindLevelPage.scrollItem.getComponent(c), 300))) : super.onLoad()
        }
        adaptWidget() {
            b.resMgr.adaptWidget(this.node, !0, !1)
        }
        setTournamentName(t) {
            this.tournamentTitle.string = D.i18DataFromServer(t.TournamentName, t.TournamentNameI18N), this.tournamentDetail = t
        }
        updateCurrentLevel(t) {
            super.updateCurrentLevel(t);
            let e = t + 1;
            e - 1 < this.holdemRoom.store.rbcList.length ? this.nextLevel.string = e.toString() : this.nextLevel.string = "-"
        }
        resetPanelPosition() {
            this.tournamentDetailPage.setPosition(0, this.tournamentDetailPage.position.y)
        }
        show() {
            var t;
            cc_mtt.vv.ConsoleLog.log("HoldemTournamentDetails show"), u.isNative && u.os === u.OS.ANDROID && f.getInstance().addBackFunction("HoldemTournamentDetails", this.onBackButtonClick.bind(this)), this.node.active = !0, null == (t = h.instance.ActionManager.getActionByTag(this.ACTION_TAG_OPEN_CLOSE, this.tournamentDetailPage)) || t.stop(), d(this.tournamentDetailPage).to(this.pageMoveDuration, {
                position: new g(this.tournamentDetailPage.getComponent(m).width + this.getLeftEdgeGap(), this.tournamentDetailPage.position.y, 1)
            }).call((() => {
                this.updatePagesWidget()
            })).tag(this.ACTION_TAG_OPEN_CLOSE).start(), this.node.on(r.EventType.TOUCH_END, this.onBackButtonClick.bind(this)), null == this.currentPage && this.scheduleOnce((() => {
                this.onPageTabClicked(null, "0")
            }), this.pageMoveDuration), this.startClock(), this.holdemRoom.isGlobalSpinGameMode() && (this.updateUIForSNGMode(), this.updateSNGData()), this.scheduleOnce((() => {
                this.refreshDashGenerator(this.prizeCircleLabel.node), this.refreshDashGenerator(this.bountyPoolLabel.node), this.refreshDashGenerator(this.prizePoolLabel.node)
            }), 0)
        }
        close() {
            super.close(), this.stopClock()
        }
        stopClock() {
            this.unschedule(this.runningClock)
        }
        startClock() {
            this.unschedule(this.runningClock), this.schedule(this.runningClock, 1)
        }
        runningClock() {
            this.isTimerCounting(!1) && (this._gameDuration++, this.updateRunningClock())
        }
        updateRunningClock() {
            let t = this._gameDuration,
                e = b.StringTools.countTime(t, b.Enum.eTimeType.Hh_Mm) || "0h:0m";
            null != e && (this.runningClockLabel.string = b.StringTools.formatC(b.config.getStringData("running_for"), e.split(":")[0].match(/\d+/)[0], e.split(":")[1].match(/\d+/)[0]))
        }
        togglePanelButton(t, e, i = !0) {
            let n = t.target.children[1];
            n && (n.active = e);
            let o = t.target.children[0];
            if (o) {
                let t = o.getComponent(P);
                t && (e ? t.updateTextTheme() : t.onMouseLeave(!0))
            }
        }
        getLeftEdgeGap() {
            return this._originalRight
        }
        showTabPage(t, e = !1) {
            super.showTabPage(t)
        }
        closeTabPage(t, e = !1) {
            super.closeTabPage(t)
        }
        onClickSameTab(t, e) {}
        updatePrizePool(t) {
            this.prizePoolCurrencyValue.updateVal(C.ThousandPointFormat(t), this.getCurrency(), null, this.getDisplayCurrency()), this.prizePoolCurrencyValue.node.emit("label_string_updated")
        }
        updateBountyPool(t) {
            this.bountyPoolCurrencyValue.updateVal(C.ThousandPointFormat(t), this.getCurrency(), null, this.getDisplayCurrency()), this.bountyPoolCurrencyValue.node.emit("label_string_updated")
        }
        setUpWidgetForMobile(t) {
            t.isAlignLeft = !0, t.left = 0, t.isAlignRight = !0, t.right = 0, t.isAlignBottom = !0, t.bottom = 0, t.isAlignTop = !0, t.top = 184
        }
        updateLateRegTimer(t) {
            super.updateLateRegTimer(t), this.tournamentDetail && (b.mttHallDetailsLandscape && b.mttHallDetailsLandscape._mttHallInfo && this.tournamentDetail.TournamentId == b.mttHallDetailsLandscape._mttHallInfo.TournamentId && (b.mttHallDetailsLandscape._mttHallInfo.TimeLeftSec = t), S.lastSelectedTournamentListItem && S.lastSelectedTournamentListItem._tupleInfo && this.tournamentDetail.TournamentId == S.LastSelectedTournamentId && (S.lastSelectedTournamentListItem._tupleInfo.TimeLeftSec = t))
        }
        onScrollEvent(t, e) {
            let i = t.getScrollOffset(),
                n = t.getMaxScrollOffset(),
                o = t.node.getComponent(m).height;
            t.vertical && i.y > n.y + o && this.triggerScrollIssue(t)
        }
        triggerScrollIssue(t) {
            if (L.hasInstance() && !this.scrollReported) {
                this.scrollReported = !0;
                let e = {
                    scrollValue: t.getScrollOffset().y,
                    scrollMaxValue: t.getMaxScrollOffset().y,
                    scrollContentPosition: t.getContentPosition().y,
                    scrollisScrolling: t.isScrolling(),
                    scrollisAutoScrolling: t.isAutoScrolling()
                };
                L.getInstance().trace(y.ScrollView, "ScrollViewOffLimit", e)
            }
        }
        updateUIForSNGMode() {
            this.stack_info.active = !1, this.controlPanel[2].node.active = !1, this.detailPanel.active = !1, this.rankingPage.searchBox.active = !1, this.detailPanelSNG.active = !0
        }
        updatePagesWidget() {
            let t = this.pagesMask.node.getComponent(s);
            t && (t.top = this.holdemRoom.isGlobalSpinGameMode() ? 685 : 876, t.updateAlignment())
        }
        updateSNGData() {
            var t;
            this.tournamentTitle.string = null == (t = this.holdemRoom) || null == (t = t.store) ? void 0 : t.tournamentRoomName, super.updateSNGData()
        }
        updateRealTimeRecord(t, e) {
            super.updateRealTimeRecord(t, e), this._gameDuration = t.Duration, this.updateRunningClock()
        }
        refreshDashGenerator(t) {
            t.active = !1, t.active = !0
        }
    }).prototype, "nextLevel", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(E.prototype, "runningClockLabel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(E.prototype, "tournamentTitle", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(E.prototype, "prizePoolCurrencyValue", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(E.prototype, "bountyPoolCurrencyValue", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(E.prototype, "editBox", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = E)) || B));
    n._RF.pop()
}