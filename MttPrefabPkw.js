import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as M from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as v from "./MttPrefab.js";
import * as _ from "./MttPrefab.js";
import * as S from "./WebPlatformTools.js";
import * as y from "./Pb.js";
import * as P from "./ImpokerHall.js";
import * as I from "./Translator.js";
import * as b from "./HttpApiTournamentDetail.js";
import * as D from "./GameListFilter.js";
import * as L from "./cv.js";
import * as w from "./MttHallPkw.js";
import * as H from "./DesignSystemButtonBase.js";
import * as E from "./DesignSystemButtonBase.js";
import * as R from "./Enum.js";
import * as k from "./AppConfig.js";
import * as A from "./mttController.js";
import * as N from "./GameListTuplePkw.js";
import * as O from "./NodeTools.js";
import * as F from "./MttItemHelper.js";
import * as W from "./MttGameListInformer.js";
import * as B from "./CrashTracing.js";
import * as G from "./CrashTracing.js";
import * as U from "./SngEvent.js";

function main() {
    var V, x, z, K, J, q, j, Z, X, Y, Q;
    n._RF.push({}, "eb87fG6KudDCagidiVCD2yx", "MttPrefabPkw", void 0);
    const {
        ccclass: $,
        property: tt
    } = s;
    t("MttPrefabPkw", (V = tt(o), x = tt(o), z = tt(o), K = tt(l), $(((Q = class t extends _ {
        constructor(...t) {
            super(...t), this.INFORMER_TWEEN_DURATION = .5, this.tournamentIdWillShowDetail = 0, i(this, "myTicketFilterNode", j, this), i(this, "filterContainer", Z, this), i(this, "informerParent", X, this), i(this, "informerPrefab", Y, this), this.informerComp = null, this.informerTween = null, this.onlyShowTicket = !1, this._filterOpenAni = void 0, this._filterCloseAni = void 0
        }
        start() {
            this.setFilter(cc_mtt.vv.DataManager.listPageIdx), this.node.on("callMttHall", (t => {
                this.onCallMttHall(t)
            })), L.dataHandler.getUserData().isJP && (this.currencySwitcher.node.getComponent(r).isChecked = t.isJPcurrencySwitcherOn), this.updateCurrencySwitcher(this.currencySwitcherEnable), this.myTicketFilterNode && (this.myTicketFilterNode.active = L.appConfig.getUserProfileConfig().showMyTickets)
        }
        onLoad() {
            super.onLoad(), t.instance = this, cc_mtt.vv.DataManager.webPlatform == y.commonProto.PLATFORM.PKW && S.instance.sendCCJS("goto_list"), this.scrollView.content.on(o.EventType.TRANSFORM_CHANGED, this.handleScrollViewMove, this), this.setMyMTTNumber(0), L.MessageCenter.register("SelfTournaments_Changed_My_MTT_List", this.updateMyMttList.bind(this), this.node), L.MessageCenter.register("show_tournament_detail", this.showTournamentDetail.bind(this), this.node), this.listScrollItem.node.parent.on(o.EventType.SIZE_CHANGED, this.onScrollViewParentSizeChanged, this)
        }
        onEnable() {
            L.MessageCenter.register(L.Enum.MessageCenterAction.OnTournamentFilterReset, this.onFilterReset.bind(this), this.node), this.updateMyMttButton(), this.handleScrollViewMove()
        }
        onDisable() {
            L.MessageCenter.unregister(L.Enum.MessageCenterAction.OnTournamentFilterReset, this.node)
        }
        onDestroy() {
            super.onDestroy(), L.MessageCenter.unregister("SelfTournaments_Changed_My_MTT_List", this.node), L.MessageCenter.unregister("show_tournament_detail", this.node)
        }
        onCallMttHall(t) {
            this.showMTTHall(t.getUserData())
        }
        onFilterReset() {
            this.onChangedPage(0, !0), this._filterOption = null
        }
        handleScrollViewMove() {
            var t, e;
            let i = !(null != (t = this.loadingMessage) && t.active || null != (e = this.emptyMessage) && e.active),
                n = !!this.scrollView && (O.getNodeHeight(this.scrollView.content) > O.getNodeHeight(this.scrollView.node) && this.scrollView.getScrollOffset().y >= this.scrollView.getMaxScrollOffset().y);
            this.filterBtn.active = !i || !n
        }
        showTournamentDetail(t) {
            let e = null == t ? void 0 : t.tournamentId;
            if ("string" == typeof e) try {
                e = parseInt(e)
            } catch (t) {
                e = 0, a(t)
            }
            this.listAll.length ? (this.tournamentIdWillShowDetail = 0, this.scheduleOnce((() => {
                const i = this.listAll.find((t => {
                    var i;
                    return (null == t || null == (i = t.Detail) ? void 0 : i.Id) == e
                }));
                var n, o, l;
                i && (this.showMTTHall(i, !1, (() => {
                    if (!0 === t.simulateRegisterClick) {
                        const t = this._mttHall.getComponent(w);
                        h(t) && t.onSignUpClicked()
                    }
                })), null == (n = this.listScrollItem) || n.scrollToItem((t => {
                    var i;
                    return (null == t || null == (i = t.Detail) ? void 0 : i.Id) == e
                })), N.PreviousSelectedTournamentId = N.LastSelectedTournamentId, null == (o = N.lastSelectedTournamentListItem) || o.deselect(), N.LastSelectedTournamentId = e, null == (l = N.lastSelectedTournamentListItem) || l.select())
            }), .1)) : this.tournamentIdWillShowDetail = e
        }
        showMTTHall(t, e, i) {
            this.shouldIgnoreUpdatingMTTHall() || (L.appConfig.getLobbyConfig().useLobbyV2 || this._hallScript.showLoading(), this.handleMttHallResponse(t, e, i))
        }
        handleMttHallResponse(t, e, i) {
            this.handleMttHallCalling(t, (() => {
                this.setPage()
            }), null, t, e, i)
        }
        shouldIgnoreUpdatingMTTHall() {
            return h(this._mttHall) && this._mttHall.active
        }
        handleMttHallCalling(t, e, i, n, o, l) {
            let s = t.Detail;
            if (!s) return;
            let r = s.Id,
                a = s.TournamentName;
            cc_mtt.vv.ConsoleLog.log("handleMttHallCalling:", r, a, cc_mtt.vv.DataManager.currentXhrs);
            let m = c.getScene().getComponentInChildren(P);
            const d = (t, i, n = "") => {
                m.activeBlackScreen(!1);
                if (null == m || m.hidLoading((() => {
                        null == m || m.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", (() => {
                            e instanceof Function && e()
                        }), "ERROR_CODE_PKW.TITLE", null)
                    })), G.hasInstance()) {
                    const e = {
                        tournamentId: t,
                        messageError: n
                    };
                    G.getInstance().trace(B.MttIssues, i, e)
                }
            };
            if (L.appConfig.getLobbyConfig().useLobbyV2) L.MessageCenter.send("HallPokerController_SHOW_HALL_MTT_DETAIL", {
                tournamentData: t
            });
            else {
                let s = this;
                b.requestMttTournamentDetail(r, (h => {
                    if (!m || !this._mttHall) return;
                    let c = this._mttHall.getComponent(w);
                    if (c)
                        if (h && !h.ErrorCode)
                            if (h.TournamentDetail) {
                                void 0 === o && (o = !0), t && t.timeStampLateReg && (h.timeStampLateReg = t.timeStampLateReg);
                                let e = N.LastSelectedTournamentId;
                                e && e != r ? (m.hidLoading((() => {
                                    l && l instanceof Function ? l() : (m.blockLayer.active = !1, m.activeBlackScreen(!1), c.onShowAnimationEnd())
                                }), !1), c.setLoading(!1)) : (N.PreviousSelectedTournamentDetail = h, this.callMttHall(h, o, i, n, l))
                            } else r == N.LastSelectedTournamentId && (N.LastSelectedTournamentId = 0), cc_mtt.vv.ConsoleLog.log("no tournamentDetail!!"), d(r, U.RequestMttDetailDataTournamentEmpty);
                    else {
                        s && h && (h.ErrorCode == y.commonProto.ErrorCode.Mtt_Tournament_Ended || h.ErrorCode == y.commonProto.ErrorCode.Mtt_Tournament_Canceled || h.ErrorCode == y.commonProto.ErrorCode.Mtt_Tournament_Release) && s.updateClosedTournaments(r), r == N.LastSelectedTournamentId && (N.LastSelectedTournamentId = N.PreviousSelectedTournamentId, this.callMttHall(N.PreviousSelectedTournamentDetail, o, i, n, l));
                        let t = "ERROR_CODE_PKW." + h.ErrorCode,
                            c = "ERROR_CODE_PKW.TITLE";
                        31004 == h.ErrorCode && (t = {
                            Translation: t,
                            payload: t => u.formatStr(I(t), a)
                        }, c = "ERROR_CODE_PKW.TITLE_TOURNAMENT_CANCEL"), null == m || m.activeBlackScreen(!1), null == m || m.hidLoading((() => {
                            null == m || m.callPopUpBox(t, (() => {
                                e instanceof Function && e()
                            }), c)
                        }))
                    }
                }), (t => {
                    cc_mtt.vv.ConsoleLog.log("onerror:handleMttHallCalling", t), r == N.LastSelectedTournamentId && (N.LastSelectedTournamentId = 0);
                    let e = "";
                    h(t) && (e = "string" == typeof t ? t.toString() : JSON.stringify(t)), d(r, U.RequestMttDetailErrorResponse, e)
                }))
            }
        }
        callMttHall(t, e = !1, i, n, o) {
            let l = c.getScene().getComponentInChildren(P);
            l && l.hidLoading((() => {
                l.blockLayer.active = !0;
                let s = i && i.returnPage ? i.returnPage : this.node;
                this.storeSvOffsets(), l.movePageFromRight(this._mttHall, s, this.shouldHideGameListWhenShowingDetails(), e, (() => {
                    if (!h(this._mttHall)) return;
                    let e = this._mttHall.getComponent(w);
                    e && (e.initMttHall(t, i, n), e.checkAutoEnterCalled(), o && o instanceof Function ? o() : (l.blockLayer.active = !1, l.activeBlackScreen(!1), e.onShowAnimationEnd()), o && this.onMovePageFromRightComplete())
                }))
            }), !1)
        }
        onMovePageFromRightComplete() {}
        shouldHideGameListWhenShowingDetails() {
            return !1
        }
        onChangedPage(t, e = !0, i = !0) {
            var n;
            let o;
            this.setFilter(t), -1 != t && this._filterPopup && this._filterPopup.getComponent(D).resetOptions(), cc_mtt.vv.DataManager.listPageIdx != t && (N.LastSelectedTournamentId = 0);
            let l = !1;
            switch (t) {
                case -1:
                    o = this.listFilter;
                    break;
                case 0:
                    o = this.listAll;
                    break;
                case 1:
                    o = this.listWPT;
                    break;
                case 2:
                    o = this.listSpecial;
                    break;
                case 3:
                    o = this.listSatellite;
                    break;
                case 4:
                    o = this.listLiveTour;
                    break;
                case 5:
                    o = this.listPrivate;
                    break;
                case 6:
                    o = this.listMyMTTs, l = !0;
                    break;
                case 7:
                    o = this.listFestival;
                    break;
                default:
                    o = this.listAll
            }
            const s = L.appConfig.getLobbyConfig().hideRunningTournaments && !(this._filterOption && this._filterOption.showRunning) && !l;
            let r = [],
                a = !1;
            for (let t = 0; t < o.length; t++) {
                const e = o[t];
                let i = e.Detail.DisplayCurrency == R.USD && k.Instance.isPKW;
                e.prefabType = i ? 1 : 0, (e.Detail && this.isTournamentClosed(e.Detail.Id) || s && this.isTournamentRunning(e)) && r.push(t), a || (a = e.overlay)
            }
            for (let t = r.length - 1; t >= 0; t--) {
                const e = r[t];
                e >= 0 && o.splice(e, 1)
            }
            var h;
            (null != (n = this.loadingMessage) && n.active && o.length && this.hideLoadingMessage(), this.onlyShowTicket && !L.dataHandler.getUserData().isTouristUser) ? cc_mtt.vv.DataManager.updateToolList((() => {
                var t;
                o = o.filter((t => {
                    let e = F.getToolsByMttDetail("", t.Detail, t);
                    return (null == e ? void 0 : e.length) > 0
                })), null == (t = this.listScrollItem) || t.changeItemData(o, e, i)
            })): null == (h = this.listScrollItem) || h.changeItemData(o, e, i);
            cc_mtt.vv.DataManager.listPageIdx = t, this.tournamentIdWillShowDetail && (this.showTournamentDetail({
                tournamentId: this.tournamentIdWillShowDetail,
                simulateRegisterClick: !1
            }), this.tournamentIdWillShowDetail = 0), this.setScrollEnable(o), this.updateFilterIcon(this._filterOption), this.updateMyMttButton(), a && !cc_mtt.vv.DataManager.mttGameListInformerClosed && this.showInformer()
        }
        isTournamentRunning(t) {
            var e;
            const i = null == t || null == (e = t.Detail) ? void 0 : e.Status;
            return i === y.commonProto.MTT_GAME_STATUS.STOP_SIGNUP || i === y.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100
        }
        setScrollEnable(t) {
            this.scrollView && (t && t.length > 0 ? (this.scrollView.enabled = !0, this.hideEmptyMessage()) : (this.scrollView.enabled = !1, this.showEmptyMessage()))
        }
        getGameListTupleClassName() {
            return "GameListTuplePkw"
        }
        changeFilterToggleState(t) {
            h(this.filterToggle, !0) && (this.filterToggle.btnState = t ? E.pressed : E.normal)
        }
        setFilter(t) {
            this.highlightSubHeader(t)
        }
        highlightSubHeader(t) {
            if (this.subHeader)
                for (let i = 0; i < this.subHeader.length; i++) {
                    var e;
                    if (null == (e = this.subHeader[i]) || null == (e = e.children) || !e.length) continue;
                    let n = this.subHeader[i].getComponent(H);
                    if (!n) continue;
                    i === t ? (n.btnState = E.pressed, n.isChecked = !0) : (n.btnState = E.normal, n.isChecked = !1);
                    let o = this.subHeader[i].getChildByName("onSelected");
                    h(o) && (o.active = i === t)
                }
        }
        controlHeaderUnderline(t, e) {
            const i = t ? this.filterToggle.node.position.x - 26.5 : this.subHeader[e].position.x;
            m(this.underline).to(.1, {
                position: d(i, this.underline.getPosition().y, this.underline.getPosition().z)
            })
        }
        onClickFilter(t = null) {
            if (L.AudioMgr.playButtonSound("button_click.mp3"), !this._filterPopup) {
                t && t instanceof o || (t = c.getScene().getComponentInChildren(g).node);
                let e = t.getComponentInChildren(D);
                e ? this._filterPopup = e.node : (this._filterPopup = f(this.filterPopup), this._filterPopup.parent = this.parentNode), this._filterPopup.on(o.EventType.SIZE_CHANGED, this.updateFilterSize, this)
            }
            this._filterPopup.getComponent(D).setCallback(this.filterCallback.bind(this))
        }
        updateFilterSize() {
            const t = this._filterPopup.getComponent(p).height;
            this.filterContainer.getComponent(p).height = t
        }
        playFilterAni(t) {
            (this._filterOpenAni || this._filterCloseAni) && this.stopFilterTween();
            const e = this._filterPopup.getComponent(p).contentSize.height;
            cc_mtt.vv.ConsoleLog.log("filterNodeHeight: ", e), !0 === t ? (this._filterPopup.active = !0, this.filterContainer.getComponent(p).height = 0, this._filterOpenAni = m(this.filterContainer.getComponent(p)).to(.5, {
                height: e
            }).call((() => {
                cc_mtt.vv.ConsoleLog.log("filter open anim end"), this._filterOpenAni = null
            })).start()) : this._filterCloseAni = m(this.filterContainer.getComponent(p)).to(.5, {
                height: 0
            }).call((() => {
                this._filterPopup.active = !1, cc_mtt.vv.ConsoleLog.log("filter close anim end"), this._filterCloseAni = null
            })).start()
        }
        stopFilterTween() {
            this._filterOpenAni && (this._filterOpenAni.stop(), this._filterOpenAni = null), this._filterCloseAni && (this._filterCloseAni.stop(), this._filterCloseAni = null)
        }
        filterCallback(t) {
            const e = () => {
                this.addFilterList(t), this.onChangedPage(-1)
            };
            this.listDisplayMode != v.Full ? this.switchToFullList(e) : e()
        }
        updateFilterIcon(t) {
            let e = t && (!t.buyin.includes(0) || !t.buyin.includes("0") || !t.gameType.includes(0) || !t.gameType.includes("0") || 1 == t.showRunning || 1 == t.hideSatellites);
            this.changeFilterToggleState(e)
        }
        switchCurrency() {
            super.switchCurrency(), this.updateCurrencySwitcher(this.currencySwitcherEnable), t.isJPcurrencySwitcherOn = this.currencySwitcher.isChecked
        }
        updateMyMttButton() {
            var t;
            if (!h(this.myMTTNumber)) return;
            let e = (null == (t = A.selfTours.getAllRegisteredMttTournaments()) ? void 0 : t.length) || 0;
            if (!L.appConfig.isLandscapeLayout && this.listMyMTTs.length > L.appConfig.getGameConfig().gameTablesConcurrent.mtt && h(this.myMTTWarning)) {
                return this.myMTTNumber.active = !1, this.myMTTWarning.active = !0, void(this.myMTTWarning.getChildByName("cur_mtt").getComponent(T).string = e.toString())
            }
            this.myMTTNumber.active = !0, h(this.myMTTWarning) && (this.myMTTWarning.active = !1), this.setMyMTTNumber(e)
        }
        updateMyMttList() {
            var t;
            let e = (null == (t = cc_mtt.vv.DataManager.GAME_LEVEL_LIST) ? void 0 : t.MttTournaments) ?? [];
            this.listMyMTTs = [];
            for (let t of e) t.Detail.TournamentName = cc_mtt.vv.DataManager.i18DataFromServer(t.Detail.TournamentName, t.Detail.TournamentNameI18N), t.Detail.Desc = cc_mtt.vv.DataManager.i18DataFromServer(t.Detail.Desc, t.Detail.DescI18N), L.appConfig.getWalletConfig().checkAndSetGameTableCurrency(t.Detail), (void 0 !== A.selfTours.getTournamentById(t.Detail.Id) || cc_mtt.vv.DataManager.JoinedTournaments.findIndex((e => e.TournamentId === t.Detail.Id)) >= 0) && this.listMyMTTs.push(t);
            this.updateMyMttButton(), this.isMyMttListShowing() && this.onChangedPage(cc_mtt.vv.DataManager.listPageIdx)
        }
        onMyMttWarningBtnClicked() {}
        onPlayNowBtnClicked() {
            this.onChangedPage(0, !0), this.scrollPageHeaderToTopLeft()
        }
        scrollPageHeaderToTopLeft() {
            if (!L.appConfig.isLandscapeLayout) {
                let t = this.node.getChildByName("page_header_background");
                if (h(t, !0)) {
                    t.getComponentInChildren(C).scrollToLeft()
                }
            }
        }
        setMyMTTNumber(t) {
            if (h(this.myMTTNumber)) {
                let e = this.myMTTNumber.getComponent(T);
                e && (e.string = u.formatStr(I("PKWMTT.GAMELIST.LAND.MY_MTT"), t))
            }
        }
        onScrollViewParentSizeChanged() {
            this.listScrollItem.node.getComponent(M).updateAlignment()
        }
        showInformer() {
            if (h(this.informerParent) && (!h(this.informerComp) || !this.informerComp.node.active)) {
                if (cc_mtt.vv.ConsoleLog.log("MTTGameListComp activeInformer show"), !h(this.informerComp)) {
                    let t = f(this.informerPrefab);
                    t.setParent(this.informerParent), this.informerComp = t.getComponent(W), this.informerComp.setCloseCallback(this.onInformerClose.bind(this))
                }
                this.informerComp.node.setPosition(0, 0, 0), this.informerComp.show(), this.tweenInformer(!0)
            }
        }
        onInformerClose() {
            cc_mtt.vv.DataManager.mttGameListInformerClosed = !0, this.tweenInformer(!1)
        }
        tweenInformer(t) {
            this.informerTween && this.informerTween.stop(), this.informerTween = t ? m(this.informerParent.getComponent(p)).to(this.INFORMER_TWEEN_DURATION, {
                height: this.informerComp.node.getContentSize().height
            }).call((() => {
                cc_mtt.vv.ConsoleLog.log("MTTGameListComp tweenInformer show end"), this.informerTween = null
            })).start() : m(this.informerParent.getComponent(p)).to(this.INFORMER_TWEEN_DURATION, {
                height: 0
            }).call((() => {
                cc_mtt.vv.ConsoleLog.log("MTTGameListComp tweenInformer hide end"), this.informerComp.hide(), this.informerTween = null
            })).start()
        }
    }).isJPcurrencySwitcherOn = !0, Q.instance = null, j = e((q = Q).prototype, "myTicketFilterNode", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(q.prototype, "filterContainer", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(q.prototype, "informerParent", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(q.prototype, "informerPrefab", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = q)) || J));
    n._RF.pop()
}