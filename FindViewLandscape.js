import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as S from "./DesignSystemButtonBase.js";
import * as w from "./ListView.js";
import * as P from "./cv.js";
import * as T from "./FindItem.js";
import * as b from "./FindView.js";
import * as _ from "./HelpIconHandler.js";
import * as M from "./GameDetailRightPartManager.js";
import * as R from "./Enum.js";

function main() {
    var D, v, A, B, V, k, I, L, N, E, G, H, U, F, K, x, O, z;
    n._RF.push({}, "9f573J2o8VKm6ASD38TCjt3", "FindViewLandscape", void 0);
    const {
        ccclass: q,
        property: W
    } = r;
    e("default", (D = W(M), v = W(o), A = W(o), B = W(o), V = W(o), k = W(o), I = W(a), L = W(o), q((G = t((E = class extends b {
        constructor(...e) {
            super(...e), i(this, "gameDetailRightPartManager", G, this), i(this, "filterPopupRoot", H, this), i(this, "globalSpinRightPanel", U, this), i(this, "cashGameScrollViewRoot", F, this), i(this, "globalSpinScrollViewRoot", K, this), i(this, "topSpacing", x, this), i(this, "layout", O, this), this.temporaryHideDetailRightPart = !1, this.spacingOffsetAlignTextTab = 50, this.currencyCheckedTooltipContentKey = "Convert_to_USD", this.currencyUnCheckTooltipContentKey = "Convert_to_original_currency", this.currencySwitcherHelper = null, this.refreshAnimNode = null, this.mainNodeName = "", this.openSeatAssetPath = this.pokerPagePanelHeaderPath + "checkBoxButton/layout/openseat_text", this.PKW_GAME_TYPE = [this.GLOBAL_SPIN_NUM, 1, this.PLO_NUM, 2, this.SPLASH_NUM, this.JACKFRUIT_NUM], i(this, "quickSeatTouchPanel", z, this)
        }
        initBanner() {}
        onLoad() {
            var e;
            super.onLoad(), this.quickSeatTouchPanel.active = !1, P.MessageCenter.register("onMttFilterClick", this._onMttFilterClick.bind(this), this), this.gameDetailRightPartManager.setEmpty(), this.currencyCheckedTooltipContentKey = "Convert_to_" + P.appConfig.getWalletConfig().defaultCurrency.type, this.currencySwitcherHelper = this.currencySwitcher.node.getComponent(_), this.updateSwitchCurrencyToolTip(!1), null != (e = this.refreshButton) && e.node && (this.refreshAnimNode = this.refreshButton.node.getChildByName("refresh_icon"))
        }
        onEnable() {
            super.onEnable(), this.choseItemDefault(), this.gameDetailRightPartManager.setButtonClickCallbacks(this.joinSelectedRoom.bind(this), this.watchSelectedRoom.bind(this)), P.MessageCenter.register("noticeCurrentBoardListError", this.noticeCurrentBoardListError.bind(this), this.node), P.MessageCenter.register(P.Enum.MessageCenterAction.onSitDownSucc, this.updatePlayerCount.bind(this), this.node), P.MessageCenter.register(P.Enum.MessageCenterAction.onStandUpSucc, this.updatePlayerCount.bind(this), this.node)
        }
        onDisable() {
            super.onDisable(), P.MessageCenter.unregister("noticeCurrentBoardListError", this.node), P.MessageCenter.unregister(P.Enum.MessageCenterAction.onSitDownSucc, this.node), P.MessageCenter.unregister(P.Enum.MessageCenterAction.onStandUpSucc, this.node)
        }
        onDestroy() {
            P.MessageCenter.unregister("onMttFilterClick", this.node), super.onDestroy()
        }
        noticeCurrentBoardList() {
            super.noticeCurrentBoardList(), this.refreshButton && (this.refreshButton.interactable = !0), this.stopRefreshAnimation()
        }
        noticeCurrentBoardListError() {
            this.refreshButton && (this.refreshButton.interactable = !0), this.stopRefreshAnimation()
        }
        stopRefreshAnimation() {
            this.refreshAnimNode && (s.stopAllByTarget(this.refreshAnimNode), this.refreshAnimNode.angle = 0)
        }
        startRefreshAnimatio() {
            this.refreshAnimNode && (this.refreshAnimNode.angle = 0, l(this.refreshAnimNode).by(1, {
                angle: 360
            }).repeatForever().start())
        }
        _onMttFilterClick(e) {
            this.filterPopupRoot && (this.filterPopupRoot.active = !0, e(this.filterPopupRoot))
        }
        onMttFilterBgClicked() {
            P.AudioMgr.playButtonSound("close.mp3"), this.filterPopupRoot.active = !1
        }
        adaptWidget() {
            P.resMgr.adaptWidget(this.node, !0, !1)
        }
        updateGameFilterViewStatus() {
            this.quickSeatTouchPanel.active = !this.quickSeatTouchPanel.active
        }
        updateGameTitle(e, t) {
            return 0
        }
        updateUIBasedOnContent(e) {}
        initMTTParam(e) {
            super.initMTTParam(e), null != this.mtt && null != this.mtt.hallMask && (this.mtt.hallMask.enabled = !1), this.gameDetailRightPartManager && this._gameType == this.MTT_NUM && this.gameDetailRightPartManager.hide()
        }
        hideQuickEnterView() {
            let e = h("quick_seat_touch_panel", this.node);
            e && e.active && (P.action.removeShieldLayer(this.node, "shieldLayer-quickEnter"), e.active = !1)
        }
        initGames() {
            this._gamebuttonList = [];
            let e = this.gameType_panel.getChildByName("button_0");
            h("new_icon", e).active = !1;
            let t = P.config.isOverSeas() ? this.PKC_GAME_TYPE.length : this.PKW_GAME_TYPE.length,
                i = new c(this.gameType_panel.getComponent(u).width / t - 3, e.getComponent(u).height);
            e.getComponent(u).setContentSize(i), this.gameType_scrollView.content.getComponent(u).setContentSize(new c(i.width * t, this.gameType_scrollView.node.getComponent(u).height));
            for (let n = 0; n < t; n++) {
                let t, o = g(e);
                t = P.config.isOverSeas() ? this.PKC_GAME_TYPE[n] : this.PKW_GAME_TYPE[n], h("new_icon", o).active = 7 == t, o.name = "btn_" + t, o.on(p.EventType.CLICK, (e => {
                    var i;
                    this.setViewGametype(t, !0), P.AudioMgr.playButtonSound("tab.mp3"), t == this.MTT_NUM && P.config.HAVE_MTT ? this.onShowMttTab() : (M.selectedRoomInfo = null, this.HandleCheckMTT(!1), this.updateGameTypeDataAndView(), this.updateMyCashGames()), this.scrollView.scrollToTop(.05), this.updateFilterTogglesState(t), this.trackingGameTypeSelected(null == (i = h("layout/text", o)) || null == (i = i.getComponent(d)) ? void 0 : i.string)
                }), this), this._gamebuttonList.push(o), o.setPosition(new m(i.width / 2 + i.width * n + 1.5 * this._gamebuttonList.length, i.height / 2)), this.gameType_scrollView.content.addChild(o)
            }
            e.active = !1, this.setShowLoadingMessage(!0)
        }
        initLanguage() {
            super.initLanguage();
            let e = this._gamebuttonList.length;
            for (let t = 0; t < e; t++) {
                let e, i = h("layout/text", this._gamebuttonList[t]).getComponent(d),
                    n = h("layout/icon", this._gamebuttonList[t]).getComponent(f);
                e = P.config.isOverSeas() ? this.PKC_GAME_TYPE[t] : this.PKW_GAME_TYPE[t], e != this.MTT_NUM || P.dataHandler.getUserData().isViewWPT || (i.string = P.config.getStringData(P.StringTools.formatC("MainScene_Scene_gameType_panel_button%d_text", e)).toUpperCase()), i.node.setPosition(this.spacingOffsetAlignTextTab, i.node.position.y);
                let o = P.resMgr.getLabelStringSize(i).width;
                n.node.setPosition(-o / 2 - this.spacingOffsetAlignTextTab, n.node.position.y)
            }
        }
        updatePokerPagePanelActive() {
            if (super.updatePokerPagePanelActive(), this.topSpacing) {
                const e = this._gameType == R.GLOBAL_SPIN ? 32 : 120;
                this.topSpacing.getComponent(u).setContentSize(this.topSpacing.getComponent(u).contentSize.width, e), this.layout.updateLayout()
            }
        }
        showContentView(e) {
            super.showContentView(e);
            const t = e == this.MTT_NUM,
                i = e == this.GLOBAL_SPIN_NUM;
            this.cashGameScrollViewRoot.active = !t && !i, this.discover_panel.active = !t, this.globalSpinScrollViewRoot.active = i, this.globalSpinRightPanel.active = i, t || i ? this.gameDetailRightPartManager && this.gameDetailRightPartManager.node.activeInHierarchy && this.hideGameDetailRightPartTemporary() : this.checkAndReviveGameDetailRightPart()
        }
        hideGameDetailRightPartTemporary() {
            this.gameDetailRightPartManager.hide(), this.temporaryHideDetailRightPart = !0
        }
        checkAndReviveGameDetailRightPart() {
            this.temporaryHideDetailRightPart && !this.gameDetailRightPartManager.node.activeInHierarchy && null != M.selectedRoomInfo ? (this.gameDetailRightPartManager.show(), this.temporaryHideDetailRightPart = !1) : this.temporaryHideDetailRightPart = !1
        }
        _btnNormal(e) {
            h("Label", e).getComponent(y).opacity = 255, e.getComponent(p).interactable = !0, e.getComponent(p).enabled = !0
        }
        _btnDisabled(e) {
            h("Label", e).getComponent(y).opacity = 102, e.getComponent(p).interactable = !1, e.getComponent(p).enabled = !1
        }
        hideMttGameFilterPopup() {
            this.filterPopupRoot && (this.filterPopupRoot.active = !1), C(this.quickSeatTouchPanel) && (this.quickSeatTouchPanel.active = !1)
        }
        getBtnTextNode(e) {
            return h("Label", e)
        }
        onFilterTableBtnClicked() {
            P.AudioMgr.playButtonSound("tab.mp3"), this.updateHelpView("", !0)
        }
        refreshView(e = !0) {
            e && P.AudioMgr.playButtonSound("button_click.mp3"), this.showViewForData(), this.refreshButton && (this.refreshButton.interactable = !1), e && this.startRefreshAnimatio(), P.worldNet.requestCurrentBoardList(), this.gameDetailRightPartManager.node.active = !1, this.gameDetailRightPartManager.reset()
        }
        switchCurrency(e) {
            let t = this.currencySwitcher.btnState === S.pressed;
            super.switchCurrency(e), this.gameDetailRightPartManager.updateGameDetailsCurrency(t), this.updateSwitchCurrencyToolTip(!0)
        }
        updateSwitchCurrencyToolTip(e) {
            if (this.currencySwitcherHelper) {
                this.currencySwitcher.btnState === S.pressed ? this.currencySwitcherHelper.setTextKey(this.currencySwitcherHelper.tooltipTitleKey, this.currencyUnCheckTooltipContentKey) : this.currencySwitcherHelper.setTextKey(this.currencySwitcherHelper.tooltipTitleKey, this.currencyCheckedTooltipContentKey), !0 === e && (this.currencySwitcherHelper.MouseOver = !this.currencySwitcherHelper.MouseOver, this.currencySwitcherHelper.MouseOver = !this.currencySwitcherHelper.MouseOver)
            }
        }
        updateGameTypeDataAndView(e = !0) {
            super.updateGameTypeDataAndView(e), this._gameType != this.MTT_NUM && (null == M.selectedRoomInfo ? this.choseItemDefault() : this.choseItemCurrent(e))
        }
        choseItemDefault() {
            let e = this.scrollView.content.children[0];
            if (e && this._gameType != this.MTT_NUM) {
                let t = e.getComponent(T);
                null == t || t.onBtnItemClick(null)
            }
        }
        choseItemCurrent(e) {
            let t = this.getIndexItemByName(M.selectedRoomInfo);
            if (t >= 0) {
                let e = this.scrollView.content.children[t];
                var i;
                if (e) null == (i = e.getComponent(T)) || i.onBtnItemClick(null);
                return
            }
            if (e) return;
            let n = this.scrollView.getComponent(w);
            if (n) {
                let e = n.datas;
                if (e) {
                    let t = e.length;
                    for (let i = 0; i < t; i++)
                        if (M.selectedRoomInfo && e[i].data.room_name == M.selectedRoomInfo.room_name) {
                            let e = 1 - i / t;
                            this.scrollView.stopAutoScroll(), this.scrollView.scrollToPercentVertical(e), n.updateDisplay();
                            let a = this.getIndexItemByName(M.selectedRoomInfo);
                            if (a >= 0) {
                                let e = this.scrollView.content.children[a];
                                var o;
                                if (e) null == (o = e.getComponent(T)) || o.onBtnItemClick(null)
                            }
                            return
                        }
                }
            }
            this.choseItemDefault()
        }
        getIndexItemByName(e) {
            if (null != e) {
                let t = this.scrollView.content.children;
                for (let i = 0; i < t.length; i++) {
                    let n = t[i].getComponent(T);
                    if (n && n.msg && n.msg.room_name == e.room_name) return i
                }
            }
            return -1
        }
        saveOriginalZIndex() {}
        onCloseQuickPanelSlideView() {}
        registerQuickPanelEvents() {}
        unregisterQuickPanelEvents() {}
        joinSelectedRoom() {
            let e = this.getIndexItemByName(M.selectedRoomInfo),
                t = null;
            var i;
            (e >= 0 ? t = this.scrollView.content.children[e] : this.scrollView.content.children.length > 0 && (t = this.scrollView.content.children[0]), t) && (null == (i = t.getComponent(T)) || i.joinBtnCB(null, M.selectedRoomInfo))
        }
        watchSelectedRoom() {
            this.joinSelectedRoom()
        }
        updatePlayerCount(e) {
            var t;
            if (!e || !e.tRoomData) return;
            const i = e.tRoomData.u32GameID,
                n = e.tRoomData.u32RoomId,
                o = e.tRoomData.pkRoomParam.game_name,
                a = null == (t = e.tRoomData.kTablePlayerList) ? void 0 : t.length;
            if (e.tRoomData.isZoom()) return void this.refreshView(!1);
            let r = P.clubDataMgr.getClubData(i, n);
            r || i != P.Enum.GameId.Plo && i != P.Enum.GameId.Plo5 || (r = P.clubDataMgr.getClubDataByName(i, o), r) ? r && (r.player_count = a, this.showViewForData()) : this.refreshView(!1)
        }
    }).prototype, "gameDetailRightPartManager", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(E.prototype, "filterPopupRoot", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(E.prototype, "globalSpinRightPanel", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(E.prototype, "cashGameScrollViewRoot", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(E.prototype, "globalSpinScrollViewRoot", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(E.prototype, "topSpacing", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(E.prototype, "layout", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(E.prototype, "quickSeatTouchPanel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = E)) || N));
    n._RF.pop()
}