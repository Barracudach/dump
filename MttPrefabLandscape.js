import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./MttPrefabPkw.js";
import * as d from "./cv.js";
import * as g from "./GameListTupleLandscape.js";
import * as u from "./GameListTuplePkw.js";
import * as M from "./DesignSystemButtonBase.js";
import * as p from "./MttPrefab.js";
import * as m from "./borderGraphic.js";
import * as C from "./ColorSystemType.js";
import * as f from "./ThemeSystemModel.js";
import * as T from "./ColorSystemMainBtnState.js";
import * as S from "./ThemeSystemType.js";
import * as v from "./MttGameListOverviewLandscape.js";
import * as B from "./Translator.js";

function main() {
    var y, L, P, b, I, _, k, F, x;
    i._RF.push({}, "b84de4dlPJHQrAMcFh2Fcpn", "MttPrefabLandscape", void 0);
    const {
        ccclass: D,
        property: H
    } = r;
    t("default", (y = H(s), L = H(m), P = H(a), D(((x = class t extends h {
        constructor(...t) {
            super(...t), n(this, "searchMttBox", _, this), n(this, "searchMttBgBorder", k, this), n(this, "searchMttCancelBtn", F, this), this.needSelectFirstItemOnChangedPage = !0
        }
        onEnable() {
            super.onEnable(), d.resMgr.adaptWidget(this.node, !1, !1), this.scheduleOnce((() => {
                this.onClickRefresh()
            })), d.MessageCenter.register(d.Enum.MessageCenterAction.RefreshLobbyMyMtts, this.updateMyMttList.bind(this), this.node)
        }
        onDisable() {
            this.disableTicket(), this.needSelectFirstItemOnChangedPage = !0, t.notNeedSelectFirstItemOnChangePage = !1, super.onDisable(), d.MessageCenter.unregister(d.Enum.MessageCenterAction.RefreshLobbyMyMtts, this.node)
        }
        onCallMttHall(t) {
            this._mttHall.getComponent(v).setLoading(), super.onCallMttHall(t), t.propagationStopped = !0
        }
        onMovePageFromRightComplete() {
            this.onChangedPage(cc_mtt.vv.DataManager.listPageIdx, !1)
        }
        onClickRefresh() {
            d.AudioMgr.playButtonSound("button_click.mp3");
            const t = this;
            this.requestGameList((() => {
                l(t, !0) && t.refreshList()
            }), (() => {
                l(t, !0) && t.refreshList()
            })), this.startRefreshAnimatio(), this.setPage(null, !0, this.listDisplayMode)
        }
        onClickFilter() {
            d.MessageCenter.send("onMttFilterClick", super.onClickFilter.bind(this))
        }
        shouldIgnoreUpdatingMTTHall() {
            return !1
        }
        shouldHideGameListWhenShowingDetails() {
            return !1
        }
        controlHeaderUnderline(t, e) {}
        setupFilterLabel(t) {}
        setMttHallParent() {
            var t;
            this._mttHall && null != (t = this._hallScript) && t.layers && this._hallScript.layers.length >= 10 && (this._mttHall.parent = this._hallScript.layers[10])
        }
        onChangedPage(e, n = !0, i = !0) {
            var s;
            const a = cc_mtt.vv.DataManager.listPageIdx;
            super.onChangedPage(e, n, i);
            let r = null == (s = this.listScrollItem) ? void 0 : s.getComponent(o);
            if (r)
                if (r.content.children.length > 0) {
                    const e = r.content.children[0],
                        n = null == e ? void 0 : e.getComponent(g);
                    if (l(n, !0) && this.node.activeInHierarchy && !t.notNeedSelectFirstItemOnChangePage && (this.needSelectFirstItemOnChangedPage || a != cc_mtt.vv.DataManager.listPageIdx || l(this._mttHall) && !this._mttHall.activeInHierarchy || 0 == u.LastSelectedTournamentId || this.isTournamentClosed(u.LastSelectedTournamentId))) {
                        u.LastSelectedTournamentId = 0;
                        const t = cc_mtt.vv.DataManager.finishedTournamentIds.indexOf(n._tupleInfo.Detail.Id);
                        t < 0 ? n.onClickTuple() : cc_mtt.vv.DataManager.finishedTournamentIds.splice(t, 1), this.needSelectFirstItemOnChangedPage = !1
                    }
                } else {
                    var c;
                    let t = null == (c = this._mttHall) ? void 0 : c.getComponent(v);
                    t && ((u.LastSelectedTournamentId <= 0 || !l(u.lastSelectedTournamentListItem)) && t.resetMttHall(), t.setLoading(!1))
                }
        }
        showMTTHall(t, e, n) {
            this.handleMttHallResponse(t, e, n)
        }
        handleScrollViewMove() {}
        updateMyMttList() {
            if (super.updateMyMttList(), this.isMyMttListShowing() && this.listMyMTTs.length > 0) {
                if (this.listMyMTTs.findIndex((t => {
                        var e;
                        return (null == (e = t.Detail) ? void 0 : e.Id) === u.LastSelectedTournamentId
                    })) < 0) {
                    let t = this.listScrollItem.getComponent(o);
                    if (t && t.content.children.length > 0) {
                        const e = t.content.children[0],
                            n = null == e ? void 0 : e.getComponent(g);
                        l(n, !0) && this.node.activeInHierarchy && n.onClickTuple()
                    }
                }
            }
        }
        switchTicket() {
            let t = this.myTicketFilterNode.getComponent(M).isChecked;
            if (this.onlyShowTicket = t, this.listDisplayMode != p.Full) {
                const t = () => {
                    this.refreshListData(), this.onChangedPage(cc_mtt.vv.DataManager.listPageIdx, !1, !1)
                };
                this.switchToFullList(t, t)
            } else this.onChangedPage(cc_mtt.vv.DataManager.listPageIdx, !0)
        }
        disableTicket() {
            if (l(this.myTicketFilterNode)) {
                this.myTicketFilterNode.getComponent(M).isChecked && (this.myTicketFilterNode.getComponent(c).isChecked = !1)
            }
        }
        onClickCancelSearchMTT() {
            cc_mtt.vv.ConsoleLog.log("MttPrefabLandscape onClickCancelSearchMTT"), l(this.searchMttBox) && (this.searchMttBox.string = ""), this.setFilterOptionSearchName(this.searchMttBox.string), this.setSearchMttCancelBtnActive(!1)
        }
        onBeganEditSearchMTT() {
            cc_mtt.vv.ConsoleLog.log("MttPrefabLandscape onBeganEditSearchMTT"), this.highlightSearchMttBorder(!0), this.setSearchMttCancelBtnActive(!0)
        }
        onEndEditSearchMTT() {
            cc_mtt.vv.ConsoleLog.log("MttPrefabLandscape onEndEditSearchMTT"), this.setFilterOptionSearchName(this.searchMttBox.string), this.highlightSearchMttBorder(!1), this.updateCancelButton()
        }
        highlightSearchMttBorder(t) {
            if (l(this.searchMttBgBorder)) {
                let e = new f;
                e.setTheme(S.WPTODark), t ? e.setColorScheme(C.MainBtn, T.integrateMttFilterButton_Border_pressed) : e.setColorScheme(C.MainBtn, T.integrateMttFilterButton_BG_normal), this.searchMttBgBorder.setStrokesColor(e)
            }
        }
        updateCancelButton() {
            l(this.searchMttBox) && this.setSearchMttCancelBtnActive(this.searchMttBox.string && this.searchMttBox.string.length > 0)
        }
        setSearchMttCancelBtnActive(t) {
            l(this.searchMttCancelBtn) && (this.searchMttCancelBtn.active = t)
        }
        initPage() {
            super.initPage(), this.refreshLang()
        }
        refreshLang() {
            cc_mtt.vv.ConsoleLog.log("MttPrefabLandscape refreshLang"), l(this.searchMttBox) && (this.searchMttBox.placeholder = B("PKWMTT.GAMELIST.FILTER.SEARCH_TOURNAMENTS"))
        }
    }).notNeedSelectFirstItemOnChangePage = !1, _ = e((I = x).prototype, "searchMttBox", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(I.prototype, "searchMttBgBorder", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(I.prototype, "searchMttCancelBtn", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = I)) || b));
    i._RF.pop()
}