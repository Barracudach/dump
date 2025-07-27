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
import * as L from "./cc.js";
import * as M from "./cc.js";
import * as _ from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as S from "./mttconfig.js";
import * as y from "./ImpokerHall.js";
import * as b from "./HttpApiTournamentDetail.js";
import * as v from "./Pb.js";
import * as C from "./AndroidBackButton.js";
import * as D from "./WebPlatformTools.js";
import * as O from "./ScrollItem.js";
import * as A from "./GameListTuplePkw.js";
import * as I from "./Enum.js";
import * as w from "./Enum.js";
import * as P from "./Enum.js";
import * as F from "./cv.js";
import * as N from "./DesignSystemButtonBase.js";
import * as E from "./DesignSystemButtonBase.js";
import * as H from "./HelpIconHandler.js";
import * as k from "./MttHallPkw.js";
import * as B from "./HashMap.js";
import * as R from "./CrashTracing.js";
import * as G from "./CrashTracing.js";
import * as V from "./mttController.js";
import * as x from "./MttItemHelper.js";
import * as U from "./RefreshTop.js";
import * as z from "./MttHall.js";
import * as W from "./i18nText.js";
import * as K from "./CustomLocalizedLabel.js";

function main() {
    var q, Y, J, Z, j, X, Q, $, tt, et, it, st, nt, at, lt, rt, ot, ht, ct, ut, gt, pt, mt, dt, ft, Tt, Lt, Mt, _t, St, yt, bt, vt, Ct, Dt, Ot, At, It, Pt, wt, Ft;
    s._RF.push({}, "be2b7m0BoRFkJTIvrwSf8FG", "MttPrefab", void 0);
    const {
        ccclass: Et,
        property: Nt
    } = c, Ht = n({
        ALL: 0,
        LIST_ALL: 1,
        LIST_SATELLITE: 2,
        LIST_WPT: 3,
        LIST_PRIVATE: 4,
        LIST_LIVE: 5,
        LIST_SPECIAL: 6
    });
    let kt = t("ListDisplayMode", function(t) {
        return t[t.Simplified = 0] = "Simplified", t[t.Full = 1] = "Full", t
    }({}));
    t("MttPrefab", (q = Nt([a]), Y = Nt(a), J = Nt(l), Z = Nt(a), j = Nt(a), X = Nt(l), Q = Nt(a), $ = Nt(a), tt = Nt(a), et = Nt(O), it = Nt(l), st = Nt(E), nt = Nt([r]), at = Nt(E), lt = Nt(o), rt = Nt(a), ot = Nt(h), ht = Nt(a), ct = Nt(a), Et(((Ft = class t extends u {
        constructor(...t) {
            super(...t), i(this, "subHeader", pt, this), i(this, "underline", mt, this), i(this, "tuplePrefab", dt, this), i(this, "emptyMessage", ft, this), i(this, "loadingMessage", Tt, this), i(this, "mttHall", Lt, this), i(this, "_mttHall", Mt, this), i(this, "refresh", _t, this), i(this, "mttBlocker", St, this), i(this, "listScrollItem", yt, this), i(this, "filterPopup", bt, this), i(this, "filterToggle", vt, this), i(this, "wptSprite", Ct, this), i(this, "currencySwitcher", Dt, this), i(this, "scrollView", Ot, this), i(this, "filterBtn", At, this), i(this, "refreshButton", It, this), i(this, "myMTTNumber", Pt, this), i(this, "myMTTWarning", wt, this), this.currencyCheckedTooltipContentKey = "Convert_to_USD", this.currencyUnCheckTooltipContentKey = "Convert_to_original_currency", this._filterPopup = null, this._filterOption = void 0, this._filterOptionSearchName = "", this.svOffsets = new g(g.ZERO), this.listAll = [], this.listSatellite = [], this.listWPT = [], this.listFestival = [], this.listPrivate = [], this.listLiveTour = [], this.listSpecial = [], this.listFilter = [], this.listMyMTTs = [], this.listWPTG = [], this.listMyTickets = [], this._backAction = null, this.ignoreSelectFirstItem = !1, this.MTT_LastFilterOption = void 0, this.SAVE_MTT_LastFilterOption = "SAVE_LastFilterOption", this.refreshAnimNode = null, this.filterCustomMax = 0, this.filterCurrencyRateCNY = 7, this._listDisplayMode = kt.Full, this._displayLimit = 30, this.lastCallGetLevelListTime = 0, this.refreshList = () => {
                cc_mtt.vv.ConsoleLog.log("Mtt Prefab refresh list"), this.checkLastOption(), this.refreshListData(), this.onChangedPage(cc_mtt.vv.DataManager.listPageIdx, !1), p(this.refresh) && this.refresh.active && this.refresh.getComponent(U).hideRefresh(), this.stopRefreshAnimation(), F.MessageCenter.send(F.Enum.MessageCenterAction.MttLevelListRefresh)
            }, this.onHideLoading = t => {
                !t || t.length && !t.includes("getLevelList") || p(this.refresh) && this.refresh.active && this.refresh.getComponent(U).hideRefresh()
            }, this.onShowLoading = t => {}, this.closedTournamentsIds = void 0
        }
        playFilterAni(t) {
            throw new Error("Method not implemented.")
        }
        set listDisplayMode(t) {
            cc_mtt.vv.ConsoleLog.log("listDisplayMode set to", t), this._listDisplayMode = t
        }
        get listDisplayMode() {
            return this._listDisplayMode
        }
        getMTT_LastFilterOption() {
            return this.MTT_LastFilterOption || (this.MTT_LastFilterOption = this.createOption()), "" != this._filterOptionSearchName || this.MTT_LastFilterOption.showRunning || this.MTT_LastFilterOption.hideSatellites || !this.MTT_LastFilterOption.buyin.includes(0) || !this.MTT_LastFilterOption.gameType.includes(0) || 0 != this.MTT_LastFilterOption.buyinFrom || this.MTT_LastFilterOption.buyinTo != this.MTT_LastFilterOption.buyinMax ? this.MTT_LastFilterOption : this.MTT_LastFilterOption = null
        }
        createOption() {
            return {
                searchName: this.getOption("searchName").length > 0 ? this.getOption("searchName") : "",
                showRunning: "1" == F.tools.GetStringByCCFile(this.SAVE_MTT_LastFilterOption + "showRunning"),
                hideSatellites: "1" == F.tools.GetStringByCCFile(this.SAVE_MTT_LastFilterOption + "hideSatellites"),
                buyin: this.getOption("buyin").length > 0 ? this.getOption("buyin") : [0],
                buyinFrom: this.getOption("buyinFrom").length > 0 ? this.getOption("buyinFrom") : [0],
                buyinTo: this.getOption("buyinTo").length > 0 ? this.getOption("buyinTo") : [0],
                buyinMax: this.getOption("buyinMax").length > 0 ? this.getOption("buyinMax") : [0],
                gameType: this.getOption("gameType").length > 0 ? this.getOption("gameType") : [0]
            }
        }
        getOption(t) {
            let e = [],
                i = F.tools.GetStringByCCFile(this.SAVE_MTT_LastFilterOption + t);
            return i && "" != i && i.length > 0 && (e = i.split(",")), e
        }
        setMTT_LastFilterOption(t) {
            cc_mtt.vv.ConsoleLog.log("setMTT_LastFilterOption", t), t || (t = {
                searchName: "",
                showRunning: !1,
                hideSatellites: !1,
                buyin: [0],
                buyinFrom: 0,
                buyinTo: 0,
                buyinMax: 0,
                gameType: [0]
            }), this.MTT_LastFilterOption = t, this._filterOption = t, t && (this.saveOptionData(t.searchName, "searchName"), this.saveOptionData(t.gameType, "gameType"), this.saveOptionData(t.buyin, "buyin"), this.saveOptionData(t.buyinFrom, "buyinFrom"), this.saveOptionData(t.buyinTo, "buyinTo"), F.tools.SaveStringByCCFile(this.SAVE_MTT_LastFilterOption + "showRunning", t.showRunning ? "1" : ""), F.tools.SaveStringByCCFile(this.SAVE_MTT_LastFilterOption + "hideSatellites", t.hideSatellites ? "1" : ""))
        }
        saveOptionData(t, e) {
            if (t) {
                let i = F.String(t);
                F.tools.SaveStringByCCFile(this.SAVE_MTT_LastFilterOption + e, i)
            } else "searchName" != e && "buyinFrom" != e || (cc_mtt.vv.ConsoleLog.log("saveOptionData else if(option)", t), F.tools.SaveStringByCCFile(this.SAVE_MTT_LastFilterOption + e, t))
        }
        get _hallScript() {
            return m.getScene().getComponentInChildren(y)
        }
        onLoad() {
            var e;
            t.instance = this, this.currencyCheckedTooltipContentKey = "Convert_to_" + F.appConfig.getWalletConfig().defaultCurrency.type, this.initPage(), F.MessageCenter.register(F.config.CHANGE_LANGUAGE, this.refreshPage.bind(this), this.node), F.MessageCenter.register("show_loading", this.onShowLoading.bind(this), this.node), F.MessageCenter.register("hide_loading", this.onHideLoading.bind(this), this.node), F.MessageCenter.register(F.Enum.MessageCenterAction.MttListUpdated, this.updateTimeStampLateReg.bind(this), this.node), null != (e = this.refreshButton) && e.node && (this.refreshAnimNode = this.refreshButton.node.getChildByName("icon"))
        }
        onDestroy() {
            F.MessageCenter.unregister(F.config.CHANGE_LANGUAGE, this.node), F.MessageCenter.unregister("show_loading", this.node), F.MessageCenter.unregister("hide_loading", this.node), F.MessageCenter.unregister(F.Enum.MessageCenterAction.MttListUpdated, this.node)
        }
        initPage() {
            this._mttHall || (this.initScrollView(), this.showLoadingMessage(), this.initLoading(), this.createMttHall())
        }
        createMttHall() {
            if (!this._mttHall && p(this.mttHall, !0)) {
                if (this._mttHall = d(this.mttHall), !p(this._mttHall, !0)) return;
                this.setMttHallParent(), this._mttHall.setPosition(this._hallScript.position[2].position), this._mttHall.getComponent(k).setMttPrefab(this), this.updateSubHeader()
            }
        }
        stopRefreshAnimation() {
            this.refreshButton && (this.refreshButton.interactable = !0), this.refreshAnimNode && (f.stopAllByTarget(this.refreshAnimNode), this.refreshAnimNode.angle = 0)
        }
        startRefreshAnimatio() {
            this.refreshButton && (this.refreshButton.interactable = !1), this.refreshAnimNode && (this.refreshAnimNode.angle = 0, T(this.refreshAnimNode).by(1, {
                eulerAngles: new L(0, 0, 360)
            }).repeatForever().start())
        }
        updateSubHeader() {
            let t = this.findHeaderIndex("PKWMTT_LIST_TABNAME_SNG");
            this.subHeader[t] && (this.subHeader[t].active = F.appConfig.getLobbyConfig().mtt.enableSNGTournaments);
            let e = this.findHeaderIndex("PKWMTT_LIST_TABNAME_PRIVATE");
            this.subHeader[e] && (this.subHeader[e].active = F.appConfig.getLobbyConfig().mtt.enablePrivateTournaments)
        }
        findHeaderIndex(t) {
            if (null != this.subHeader && this.subHeader.length > 0) {
                let e = this.subHeader.length;
                for (let i = 0; i < e; i++) {
                    let e = this.subHeader[i].getComponentInChildren(W);
                    if (e) {
                        if (e.textKey == t) return i
                    } else {
                        let e = this.subHeader[i].getComponentInChildren(K);
                        if (e && e.dataID == t) return i
                    }
                }
            }
            return -1
        }
        setMttHallParent() {
            var t;
            this._mttHall && null != (t = this._hallScript) && t.layers && this._hallScript.layers.length >= 10 && (this._mttHall.parent = this._hallScript.layers[10])
        }
        initScrollView() {
            this.listScrollItem && (this.listScrollItem.setItemFunc(0, this.itemCallbackFunc.bind(this)), this.listScrollItem.setItemFunc(1, this.itemCallbackFunc.bind(this)))
        }
        itemCallbackFunc(t, e, i = !1) {
            let s = !1;
            if (this.currencySwitcher && this.currencySwitcher.node.active && (s = this.currencySwitcher.btnState === N.pressed), t) {
                const n = t.getComponent(A);
                n._mttPrefab = this, n.updateInfo(e, S.GAME_LEVEL_LIST_ID.MTT, null, s, i)
            }
        }
        getConvertOption() {
            let t = !1;
            return this.currencySwitcher && this.currencySwitcher.node.active && (t = this.currencySwitcher.btnState === N.pressed), t
        }
        updateTimeStampLateReg() {
            cc_mtt.vv.DataManager.GAME_LEVEL_LIST && cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments.forEach((t => {
                t && t.TimeLeftSec && (t.timeStampLateReg = x.timeLeftSecToTimeStamp(t.TimeLeftSec))
            })), this.lastCallGetLevelListTime = cc_mtt.vv.DataManager.getNow().getTime()
        }
        refreshListOnCurrencyChange() {
            const t = this.scrollView.content.children;
            for (let e = t.length - 1; e >= 0; e--) {
                const i = t[e],
                    s = i.getComponent(A)._tupleInfo;
                this.itemCallbackFunc(i, s, !0)
            }
        }
        initLoading() {
            this.refresh && this.refresh.getComponent(U) && this.refresh.getComponent(U).setRefreshListener(this.getLevelList.bind(this))
        }
        getLevelList() {
            y.instance && y.instance.getLevelList("MttPrefab initLoading", {
                ListId: S.GAME_LEVEL_LIST_ID.MTT,
                rows: this.listDisplayMode == kt.Simplified ? this._displayLimit : 0
            }, (() => {
                p(this, !0) && this.refreshList instanceof Function && this.refreshList()
            }), (() => {
                p(this, !0) && this.refreshList instanceof Function && this.refreshList()
            }), !1)
        }
        start() {
            this.node.on("callMttHall", (t => {
                this._mttHall.active || (this._hallScript.showLoading(), this.handleMttHallCalling(t.getUserData(), (() => {
                    this.setPage()
                })), t.propagationStopped = !0)
            })), this.updateCurrencySwitcher(this.currencySwitcherEnable)
        }
        handleMttHallCalling(t, e, i) {
            cc_mtt.vv.ConsoleLog.log("handleMttHallCalling:", t);
            let s = m.getScene().getComponentInChildren(y);
            const n = () => {
                null == s || s.hidLoading((() => {
                    null == s || s.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                }))
            };
            b.requestMttTournamentDetail(t, (a => {
                if (a && !a.ErrorCode) a.TournamentDetail ? this.callMttHall(a, !1, i) : (cc_mtt.vv.ConsoleLog.log("no tournamentDetail!!"), t === A.LastSelectedTournamentId && (A.LastSelectedTournamentId = 0), n());
                else {
                    let i = "ERROR_CODE_PKW." + a.ErrorCode;
                    t === A.LastSelectedTournamentId && (A.LastSelectedTournamentId = 0), null == s || s.hidLoading((() => {
                        null == s || s.callPopUpBox(i, (() => {
                            e instanceof Function && e()
                        }))
                    }))
                }
            }), (e => {
                t === A.LastSelectedTournamentId && (A.LastSelectedTournamentId = 0), cc_mtt.vv.ConsoleLog.log("onerror:handleMttHallCalling"), n()
            }))
        }
        callMttHall(t, e = !1, i) {
            let s = m.getScene().getComponentInChildren(y);
            s && (this._mttHall.getComponent(z).initMttHall(t, i), s.hidLoading((() => {
                s.controlHallBlockLayer(!0, this.name);
                let t = i && i.returnPage ? i.returnPage : this.node;
                s.movePageFromRight(this._mttHall, t, !0, e, (() => {
                    s.controlHallBlockLayer(!1, this.name), s.activeBlackScreen(!1)
                }))
            })))
        }
        onPlayButtonSound() {
            F.AudioMgr.playButtonSound("tab.mp3")
        }
        onClickPage(t, e) {
            let i = +e;
            if (this.resetFilterOption(), this.listDisplayMode != kt.Full) {
                const t = () => {
                    this.refreshListData(), this.onChangedPage(i)
                };
                this.switchToFullList(t, t)
            } else this.onChangedPage(i)
        }
        onClickPageNine() {
            this.resetFilterOption(), this.onChangedPage(8)
        }
        resetFilterOption() {
            this._filterOption = null, this.setMTT_LastFilterOption(this._filterOption), cc_mtt.vv.ConsoleLog.log("resetFilterOption this._filterOption: ", this._filterOption)
        }
        onChangedPage(t, e = !0, i = !0) {
            for (let e = 0; e < this.subHeader.length; e++)
                if (e != t) {
                    let t = this.subHeader[e];
                    if (t) {
                        let e = t.getComponent(E);
                        e && (e.btnState = N.normal, e.isChecked = !1)
                    }
                } cc_mtt.vv.DataManager.listPageIdx = t
        }
        getSubRemarkList(t) {
            let e = [];
            for (let i = 0; i < t.length; i++) {
                t[i].Detail.Desc;
                e.push(0)
            }
            return [0, e]
        }
        addSubList(t, e, i = !0) {
            let [s, n] = this.getSubRemarkList(e);
            t.setTuplePadding(s, n), t.updateList(e, i, !0)
        }
        addList(e = Ht.ALL, i = !0) {
            var s;
            t.instance = this, y.instance.resetIntervalRefresh();
            let n = (null == (s = cc_mtt.vv.DataManager.GAME_LEVEL_LIST) ? void 0 : s.MttTournaments) ?? [];
            this.listAll = [], this.listSatellite = [], this.listWPT = [], this.listFestival = [], this.listPrivate = [], this.listLiveTour = [], this.listSpecial = [], this.listMyMTTs = [], this.listWPTG = [];
            for (let t of n) t.Detail.TournamentName = cc_mtt.vv.DataManager.i18DataFromServer(t.Detail.TournamentName, t.Detail.TournamentNameI18N), t.Detail.Desc = cc_mtt.vv.DataManager.i18DataFromServer(t.Detail.Desc, t.Detail.DescI18N), F.appConfig.getWalletConfig().checkAndSetGameTableCurrency(t.Detail), t.Detail && this.listAll.push(t), (t.Detail.IsAipt || t.Detail.IsSatelliteMode) && this.listSatellite.push(t), "WPT" === t.Detail.DisplayTag && this.listWPT.push(t), (t.IsPrivate || t.Detail.Private) && this.listPrivate.push(t), t.Detail.LiveTour && this.listLiveTour.push(t), t.Detail.Special && this.listSpecial.push(t), t.Detail.currency === I.USD && this.listWPTG.push(t), t.Detail.Festival && this.listFestival.push(t), (V.selfTours.getAllRegisteredTournaments() && V.selfTours.getAllRegisteredTournaments().length && void 0 !== V.selfTours.getTournamentById(t.Detail.Id) || cc_mtt.vv.DataManager.JoinedTournaments.findIndex((e => e.TournamentId == t.Detail.Id)) >= 0) && this.listMyMTTs.push(t)
        }
        removeList(t = Ht.ALL) {
            const e = () => {
                    this.listAll = []
                },
                i = () => {
                    this.listWPT = []
                },
                s = () => {
                    this.listSatellite = [], this.listPrivate = [], this.listLiveTour = [], this.listSpecial = [], this.listMyMTTs = [], this.listWPTG = []
                };
            switch (t) {
                case Ht.LIST_ALL:
                    e();
                    break;
                case Ht.LIST_WPT:
                    i();
                    break;
                default:
                    e(), i(), s()
            }
        }
        convertStringsToNumbers(t) {
            if (t) return Object.keys(t).reduce(((e, i) => (Array.isArray(t[i]) ? e[i] = t[i].map((t => "string" != typeof t || isNaN(Number(t)) ? t : Number(t))) : "string" != typeof t[i] || isNaN(Number(t[i])) ? e[i] = t[i] : e[i] = Number(t[i]), e)), {})
        }
        setFilterOptionSearchName(t) {
            this._filterOptionSearchName = t, this.refreshList()
        }
        addFilterList(t, e = !0) {
            var i;
            y.instance.resetIntervalRefresh(), this._filterOption = t, this.setMTT_LastFilterOption(t), this.listFilter = [];
            let s = (null == (i = cc_mtt.vv.DataManager.GAME_LEVEL_LIST) ? void 0 : i.MttTournaments) ?? [],
                n = F.appConfig.getFilterDelemeterConfig();
            null != t && (t = this.convertStringsToNumbers(t));
            for (let e of s) {
                e.Detail.TournamentName = cc_mtt.vv.DataManager.i18DataFromServer(e.Detail.TournamentName, e.Detail.TournamentNameI18N), e.Detail.Desc = cc_mtt.vv.DataManager.i18DataFromServer(e.Detail.Desc, e.Detail.DescI18N), F.appConfig.getWalletConfig().checkAndSetGameTableCurrency(e.Detail);
                let i = !1;
                if (Array.isArray(t.gameType))
                    if (t.gameType.includes(0)) i = !0;
                    else
                        for (const s of t.gameType) switch (s) {
                            case 1:
                                e.Detail.GameMode == v.commonProto.MTT_GAME_MODE.NLH && (i = !0);
                                break;
                            case 2:
                                e.Detail.GameMode == v.commonProto.MTT_GAME_MODE.OMAHA && (i = !0);
                                break;
                            case 3:
                                e.Detail.GameMode == v.commonProto.MTT_GAME_MODE.SHORT_DECK && (i = !0)
                        }
                let s = !1;
                if (Array.isArray(t.buyin)) {
                    let i = e.Detail.RegFee + e.Detail.SrvFee;
                    F.appConfig.getWalletConfig().convertStringToCurrencyType(e.Detail.currency) === I.CNY && (i /= this.filterCurrencyRateCNY);
                    for (const e of t.buyin) {
                        switch (e) {
                            case 0:
                                s = !0;
                                break;
                            case 1:
                                s = 0 === i;
                                break;
                            case 2:
                                s = 0 < i && i <= n.val.microUpper;
                                break;
                            case 3:
                                s = n.val.microUpper < i && i <= n.val.lowUpper;
                                break;
                            case 4:
                                s = n.val.lowUpper < i && i <= n.val.midUpper;
                                break;
                            case 5:
                                s = n.val.midUpper < i;
                                break;
                            case 6:
                                let e = t.buyinFrom ?? 0,
                                    a = t.buyinTo ?? Number.MAX_VALUE;
                                s = e <= i && i <= a
                        }
                        if (s) break
                    }
                }
                let a = !1;
                if (t.showRunning) switch (e.Detail.Status) {
                    case v.commonProto.MTT_GAME_STATUS.STARTED:
                    case v.commonProto.MTT_GAME_STATUS.STARTED + 100:
                    case v.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                    case v.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                        a = !0
                } else a = !0;
                let l = !1;
                l = !t.hideSatellites || !e.Detail.IsSatelliteMode;
                let r = !1;
                if ("" != this._filterOptionSearchName) {
                    let t = this._filterOptionSearchName.trim();
                    t = t.toLowerCase();
                    let i = e.Detail.TournamentName.toLowerCase();
                    r = "" !== t && i.includes(t)
                } else r = !0;
                a && l && s && i && r && this.listFilter.push(e)
            }
            cc_mtt.vv.ConsoleLog.log("cc_mtt.vv.DataManager.GAME_LEVEL_LIST filterList", this.listFilter)
        }
        removeFilterList() {
            this.listFilter = []
        }
        returnToPage() {
            let t = cc_mtt.vv.DataManager.listPageIdx;
            this.onChangedPage(t, !1)
        }
        storeSvOffsets() {
            this.listScrollItem && (this.svOffsets = this.listScrollItem.node.getComponent(o).getScrollOffset())
        }
        scrollToOffsets() {
            this.listScrollItem && this.listScrollItem.node && this.listScrollItem.node.getComponent(o) && (this.listScrollItem.node.getComponent(o).scrollToOffset(this.svOffsets), this.svOffsets = new g(g.ZERO))
        }
        refreshListData() {
            -1 === cc_mtt.vv.DataManager.listPageIdx ? this.addFilterList(this._filterOption) : this.addList()
        }
        refreshPage(t = !0) {
            this.initPage(), t ? this.svOffsets = new g(g.ZERO) : this.scrollToOffsets(), this.checkLastOption(), -1 === cc_mtt.vv.DataManager.listPageIdx ? this.addFilterList(this._filterOption, t) : this._filterOption ? (this.addFilterList(this._filterOption), this.onChangedPage(-1)) : this.addList(Ht.ALL, t), this.returnToPage()
        }
        setPage(t, e = !0, i = kt.Full) {
            M.isNative && M.os === M.OS.ANDROID && C.getInstance().addBackFunction("MttPrefab", this.onBackClicked.bind(this)), cc_mtt.vv.ConsoleLog.log("MttPrefab setPage", i), this.listDisplayMode = i;
            const s = () => {
                p(this.node) ? (this.hideLoadingMessage(), this.stopRefreshAnimation(), this.refreshPage(e), t && t instanceof Function && t(), F.MessageCenter.send(w.MTTListLoadCompleted), this._hallScript && this._hallScript.blockLayer.active && this._hallScript.controlHallBlockLayer(!1, this.name)) : cc_mtt.vv.ConsoleLog.log("MttPrefab is not valid")
            };
            let n = {
                ListId: S.GAME_LEVEL_LIST_ID.MTT
            };
            switch (this.listDisplayMode) {
                case kt.Simplified:
                    n.rows = this._displayLimit
            }
            this._hallScript.getLevelList("mttList", n, s, s)
        }
        resetPage() {
            this.removeList(), this.showEmptyMessage()
        }
        showEmptyMessage() {
            var t;
            if (this.emptyMessage && (null == (t = this.loadingMessage) || !t.active)) {
                this.emptyMessage.active = !0;
                let t = this.emptyMessage.getComponentInChildren(K);
                p(t, !0) && (this.isMyMttListShowing() ? t.dataID = "GENERAL.NO_MY_MTT_GAME" : t.dataID = "GENERAL.NO_GAME");
                let e = this.emptyMessage.children[0].getChildByName("btn_playNow");
                p(e, !0) && (e.active = this.isMyMttListShowing())
            }
        }
        hideEmptyMessage() {
            this.emptyMessage && (this.emptyMessage.active = !1)
        }
        showLoadingMessage() {
            this.loadingMessage && (this.loadingMessage.active = !0)
        }
        hideLoadingMessage() {
            this.loadingMessage && (this.loadingMessage.active = !1)
        }
        onBackClicked() {
            cc_mtt.vv.BLDataManager ? this.onBackAction() : cc_mtt.vv.DataManager.webPlatform != v.commonProto.PLATFORM.TRIBAL_PIONEER ? D.instance.sendCCJS("back-normal") : this.onBackAction()
        }
        setBackAction(t) {
            this._backAction = t
        }
        onBackAction() {
            M.isNative && M.os === M.OS.ANDROID && C.getInstance().removeBackFunction("MttPrefab"), cc_mtt.vv.DataManager.init(), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node), setTimeout((() => {
                this.resetPage(), this._backAction && this._backAction instanceof Function ? this._backAction() : (this._hallScript.controlHallBlockLayer(!1, this.name), this._hallScript.getLevelList("MttPrefab onBackClicked", "", (() => {
                    this._hallScript.updateTableNum()
                }), (() => {})))
            }), 1100 * this._hallScript.pageActionSpeed)
        }
        getGameListTupleClassName() {
            return "GameListTuple"
        }
        checkLastOption() {
            this._filterOption || (this.getMTT_LastFilterOption() ? (this._filterOption = this.getMTT_LastFilterOption(), this.addList(Ht.ALL, !1)) : -1 == cc_mtt.vv.DataManager.listPageIdx && (cc_mtt.vv.DataManager.listPageIdx = 0))
        }
        switchCurrency() {
            this.refreshListOnCurrencyChange()
        }
        syncSwitchCurrencyButton(t = !1) {
            if (this.switchCurrency(), this.currencySwitcher && this.currencySwitcher.node.active) {
                let e = this.currencySwitcher.getComponent(_);
                e && (e.isChecked = t)
            }
        }
        get currencySwitcherEnable() {
            let t = !1;
            return this.currencySwitcher && this.currencySwitcher.node.active && (t = this.currencySwitcher.btnState === N.pressed), t
        }
        updateCurrencySwitcher(t) {
            var e;
            let i = null == (e = this._mttHall) ? void 0 : e.getComponent(k);
            if (i && (i.updateGameDetailsCurrency(t), i.synchSwitchCurrencyButton(t)), this.currencySwitcher) {
                let e = this.currencySwitcher.node.getComponent(H);
                e && (t ? e.setTextKey(e.tooltipTitleKey, this.currencyUnCheckTooltipContentKey) : e.setTextKey(e.tooltipTitleKey, this.currencyCheckedTooltipContentKey), e.MouseOver = !e.MouseOver, e.MouseOver = !e.MouseOver)
            }
        }
        updateClosedTournaments(t) {
            var e, i;
            (this.closedTournamentsIds || (this.closedTournamentsIds = new B), this.closedTournamentsIds.has(t)) ? null == (i = R.getInstance()) || i.traceEvent(G.MttTournamentRequestDestroyedOne, t.toString(), {}, null, !1, !0): this.closedTournamentsIds.add(t, 1, !0);
            (null == (e = this._mttHall) ? void 0 : e.getComponent(k)) && this.onChangedPage(cc_mtt.vv.DataManager.listPageIdx, !1)
        }
        isTournamentClosed(t) {
            return this.closedTournamentsIds && this.closedTournamentsIds.has(t)
        }
        isMyMttListShowing() {
            return 6 === cc_mtt.vv.DataManager.listPageIdx
        }
        requestGameList(t, e = null, i = !0) {
            let s = {
                ListId: S.GAME_LEVEL_LIST_ID.MTT
            };
            switch (this.listDisplayMode) {
                case kt.Simplified:
                    s.rows = this._displayLimit
            }
            this._hallScript.getLevelList("mttList", s, (() => {
                t && t()
            }), (() => {
                e && e()
            }), i)
        }
        onScrollEvent(t, e) {
            switch (e) {
                case P.SCROLL_BEGAN:
                    this.listDisplayMode != kt.Full && this.listScrollItem.getComponent(o).getScrollOffset().y > 0 && this.switchToFullList((() => {
                        this.refreshListData(), this.onChangedPage(cc_mtt.vv.DataManager.listPageIdx, !1, !1)
                    }))
            }
        }
        switchToFullList(t, e) {
            cc_mtt.vv.ConsoleLog.log("MttPrefab switchToFullList");
            const i = this.listDisplayMode;
            this.listDisplayMode = kt.Full;
            this.requestGameList((() => {
                t && t()
            }), (() => {
                this.listDisplayMode = i, e && e()
            }), !1)
        }
    }).instance = null, pt = e((gt = Ft).prototype, "subHeader", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), mt = e(gt.prototype, "underline", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(gt.prototype, "tuplePrefab", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(gt.prototype, "emptyMessage", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(gt.prototype, "loadingMessage", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(gt.prototype, "mttHall", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(gt.prototype, "_mttHall", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(gt.prototype, "refresh", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(gt.prototype, "mttBlocker", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(gt.prototype, "listScrollItem", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(gt.prototype, "filterPopup", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(gt.prototype, "filterToggle", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(gt.prototype, "wptSprite", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Dt = e(gt.prototype, "currencySwitcher", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(gt.prototype, "scrollView", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(gt.prototype, "filterBtn", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(gt.prototype, "refreshButton", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(gt.prototype, "myMTTNumber", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(gt.prototype, "myMTTWarning", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = gt)) || ut));
    s._RF.pop()
}