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
import * as B from "./cc.js";
import * as P from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as v from "./ThemeSystemForGradient.js";
import * as f from "./CurrencyValue.js";
import * as C from "./cv.js";
import * as _ from "./mttconfig.js";
import * as M from "./Pb.js";
import * as I from "./LobbyTools.js";
import * as S from "./HallMttPrizepoolRender.js";
import * as w from "./MttBlindStructureComp.js";
import * as T from "./MTTDetailInfoComp.js";
import * as k from "./MttHallDetailPayoutComp.js";
import * as L from "./MttDetailStatsPlayer.js";
import * as G from "./MttDetailStatsTable.js";
import * as H from "./MttHallDetailFeederComp.js";
import * as D from "./ColorsystemLobbyV2.js";
import * as z from "./FakeMultipleGame.js";
import * as F from "./AutoResizeLabel.js";
import * as V from "./MttHallDetailEventListComp.js";

function main() {
    var O, A, U, E, N, R, W, x, Y, K, j, Z, q, J, Q, X, $, tt, et, it, nt, at, rt, ot, lt, st, ut, ct, ht, dt, pt, gt, bt, mt, yt, Bt, Pt, vt, ft, Ct, _t, Mt, It, St, wt, Tt, kt, Lt, Gt, Ht, Dt, zt;
    n._RF.push({}, "925eenAHwZNapSxR2/xwmEu", "HallMttDetailRenderer", void 0);
    const {
        ccclass: Ft,
        property: Vt
    } = c;
    class Ot {
        constructor() {
            this._bannerGradientMap = {}, this._bannerGradientMap[M.commonProto.MttBanner.Banner_None] = [D.HallMttDetail_Header_Left, D.HallMttDetail_Header_Right], this._bannerGradientMap[M.commonProto.MttBanner.Series] = [D.ListItem_Mtt_Title_Series_Gradient1, D.ListItem_Mtt_Title_Series_Gradient2], this._bannerGradientMap[M.commonProto.MttBanner.Live] = [D.ListItem_Mtt_Title_Live_Gradient1, D.ListItem_Mtt_Title_Live_Gradient2], this._bannerGradientMap[M.commonProto.MttBanner.Satellite] = [D.ListItem_Mtt_Title_Satellite_Gradient1, D.ListItem_Mtt_Title_Satellite_Gradient2], this._bannerGradientMap[M.commonProto.MttBanner.Special] = [D.ListItem_Mtt_Title_Special_Gradient1, D.ListItem_Mtt_Title_Special_Gradient2], this._bannerGradientMap[M.commonProto.MttBanner.PKO] = [D.ListItem_Mtt_Title_PKO_Gradient1, D.ListItem_Mtt_Title_PKO_Gradient2], this._bannerGradientMap[M.commonProto.MttBanner.Over10k] = [D.ListItem_Mtt_Title_OverTenThousand_Gradient1, D.ListItem_Mtt_Title_OverTenThousand_Gradient2], this._bannerGradientMap[M.commonProto.MttBanner.Other] = [D.ListItem_Mtt_Title_Other_Gradient1, D.ListItem_Mtt_Title_Other_Gradient2]
        }
        hasType(t) {
            return !!this._bannerGradientMap[t]
        }
        getBannerGradient(t) {
            return this._bannerGradientMap[t] || this._bannerGradientMap[M.commonProto.MttBanner.Banner_None]
        }
    }
    t("HallMttDetailHeaderGradientMap", Ot);
    t("default", (O = Vt(v), A = Vt(a), U = Vt([r]), E = Vt(a), N = Vt([r]), R = Vt(o), W = Vt(F), x = Vt([o]), Y = Vt([o]), K = Vt(o), j = Vt(T), Z = Vt(w), q = Vt(k), J = Vt(S), Q = Vt(L), X = Vt(G), $ = Vt(H), tt = Vt(H), et = Vt(l), it = Vt(s), nt = Vt(u), at = Vt(o), rt = Vt(o), ot = Vt(u), lt = Vt(l), Ft((ct = e((ut = class extends h {
        constructor(...t) {
            super(...t), this.mvcView = null, i(this, "titleBgGradient", ct, this), i(this, "titleBgSprite", ht, this), i(this, "titleBgSpriteFrames", dt, this), i(this, "titleIconSprite", pt, this), i(this, "titleIconSpriteFrames", gt, this), i(this, "tabBg", bt, this), i(this, "titleLabel", mt, this), i(this, "tabs", yt, this), i(this, "tabPages", Bt, this), i(this, "tabPageIndicator", Pt, this), i(this, "infoPage", vt, this), i(this, "blindStructurePage", ft, this), i(this, "payoutPage", Ct, this), i(this, "prizePoolPage", _t, this), i(this, "playerPage", Mt, this), i(this, "tablePage", It, this), i(this, "multiflightFeederComp", St, this), i(this, "satelliteFeederComp", wt, this), i(this, "signUpButton", Tt, this), i(this, "signUpButtonLabel", kt, this), i(this, "buyInPopupPrefab", Lt, this), this.buyInPopup = null, i(this, "mttPopupsParent", Gt, this), i(this, "loadingBlocker", Ht, this), i(this, "eventListPagePrefab", Dt, this), i(this, "overlayButton", zt, this), this.model = void 0, this._eventListPage = null, this._headerGradientMap = null, this._onClickOverlayButtonCallback = null, this._tabPageIndicatorTween = null, this.currentTabPageIndex = 0, this.opacityLoadingBlocker = null
        }
        get headerGradientMap() {
            return this._headerGradientMap || (this._headerGradientMap = new Ot), this._headerGradientMap
        }
        onLoad() {
            this.opacityLoadingBlocker = this.loadingBlocker.getComponent(d)
        }
        start() {
            this.handleMttPlayerTableEvent()
        }
        onEnable() {
            C.MessageCenter.register("hide_hallMttDetailView", this.hideHallMttDetailView.bind(this), this.node), C.MessageCenter.register("updateFindViewHallScene", this.onUpdateWidget.bind(this), this.node), C.MessageCenter.register("haveTopBarShowChanged", this.updateMultiTableUI.bind(this), this.node), C.MessageCenter.register(C.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this.node)
        }
        onDisable() {
            C.MessageCenter.unregister("hide_hallMttDetailView", this.node), C.MessageCenter.unregister("updateFindViewHallScene", this.node), C.MessageCenter.unregister("haveTopBarShowChanged", this.node), C.MessageCenter.unregister(C.config.CHANGE_LANGUAGE, this.node)
        }
        onUpdateWidget() {
            C.resMgr.adaptWidget(this.node, !0, !1)
        }
        updateMultiTableUI() {
            var t, e;
            let i = z.haveTopBarShow;
            if (!z.instance) return;
            let n = i ? z.instance.OFFSET_Y_TO_MOVE + z.instance.getOffsetYAreaToMove() : 0;
            const a = null == (t = this.titleBgSprite) ? void 0 : t.getComponent(p),
                r = null == (e = this.titleBgGradient) ? void 0 : e.getComponent(p);
            a && (a.top = -n, a.updateAlignment()), r && (r.top = -n, r.updateAlignment())
        }
        hideHallMttDetailView() {
            var t;
            null == (t = this.mvcView) || t.hideHallMttDetailView()
        }
        show(t) {
            this.render(t)
        }
        render(t) {
            this.model = t, this.updateMultiTableUI(), this.updateHeaderBg(), this.updateHeaderIcon(), this.setRoomName()
        }
        updateDisplayCurrency() {}
        setRoomName() {
            var t;
            const e = this.titleLabel.getComponent(p);
            e.right = null != (t = this.titleIconSprite) && t.node.active ? 285 : 24, e.updateAlignment(), this.titleLabel.setString(cc_mtt.vv.DataManager.i18DataFromServer(this.model.detailData.TournamentName, this.model.detailData.TournamentNameI18N), !0)
        }
        delayShowOpacityLoading() {
            this.opacityLoadingBlocker.opacity = 255
        }
        setLoading(t = !0) {
            this.loadingBlocker && (this.loadingBlocker.active = t, t && (this.unschedule(this.delayShowOpacityLoading), this.opacityLoadingBlocker.opacity = 0, this.scheduleOnce(this.delayShowOpacityLoading, .5)))
        }
        setCurrencyValue(t, e) {
            let i = t.getComponent(f);
            if (i) {
                const t = !1;
                i.updateVal(e, this.model.detailData.currency, t, this.model.detailData.DisplayCurrency)
            } else t.string = e
        }
        onClickButtonBack() {
            var t;
            I.playSoundBack(), null == (t = this.mvcView) || null == t.onClickButtonBack || t.onClickButtonBack(), C.authenticator.showDelayedPromo()
        }
        onClickButtonEntries() {
            var t;
            I.playSoundClick(), null == (t = this.mvcView) || null == t.onClickButtonEntries || t.onClickButtonEntries(!0)
        }
        onClickButtonPlayers() {
            var t;
            I.playSoundClick(), null == (t = this.mvcView) || null == t.onClickButtonPlayers || t.onClickButtonPlayers()
        }
        onClickButtonTables() {
            var t;
            I.playSoundClick(), null == (t = this.mvcView) || null == t.onClickButtonTables || t.onClickButtonTables()
        }
        onClickButtonPrizepool() {
            var t;
            I.playSoundClick(), null == (t = this.mvcView) || null == t.onClickButtonPrizepool || t.onClickButtonPrizepool()
        }
        onClickButtonPayout() {
            var t;
            I.playSoundClick(), null == (t = this.mvcView) || null == t.onClickButtonPayout || t.onClickButtonPayout()
        }
        onClickButtonDetail() {
            var t;
            I.playSoundClick(), null == (t = this.mvcView) || null == t.onClickButtonDetail || t.onClickButtonDetail()
        }
        onClickButtonStructure() {
            var t;
            I.playSoundClick(), null == (t = this.mvcView) || null == t.onClickButtonStructure || t.onClickButtonStructure()
        }
        onClickButtonShowFullDescription() {
            var t;
            I.playSoundClick(), null == (t = this.mvcView) || null == t.onClickButtonShowFullDescription || t.onClickButtonShowFullDescription()
        }
        onClickButtonAction() {
            var t;
            I.playSoundClick(), null == (t = this.mvcView) || null == t.onClickButtonAction || t.onClickButtonAction()
        }
        getSignUpButton() {
            return this.signUpButton
        }
        getSignUpPopup() {
            var t;
            null == this.buyInPopup && (this.buyInPopup = g(this.buyInPopupPrefab), this.buyInPopup.parent = (null == (t = this.node.parent) ? void 0 : t.parent) || this.node, this.buyInPopup.active = !1);
            return this.buyInPopup
        }
        getSignUpButtonLabel() {
            return this.signUpButtonLabel
        }
        isActive() {
            return this.node.active
        }
        getMttPopupsParent() {
            return this.mttPopupsParent
        }
        handleMttPlayerTableEvent() {
            this.node.off(_.mttPlayerTableEvent), this.node.on(_.mttPlayerTableEvent, (t => {
                var e;
                const i = t.getUserData();
                t.propagationStopped = !0, null == (e = this.mvcView) || null == e.onClickPlayerTableItem || e.onClickPlayerTableItem((null == i ? void 0 : i.tableId) || 0, (null == i ? void 0 : i.playerId) || 0)
            }))
        }
        onClickTab(t, e) {
            const i = +e;
            this.currentTabPageIndex != i && this.switchTab(i)
        }
        updateTabPageIndicator() {
            var t, e;
            this.tabPageIndicator.getComponent(b).width = (null == (t = this.tabs.find((t => t.active))) ? void 0 : t.getComponent(b).width) || 0;
            const i = this.tabs[this.currentTabPageIndex];
            if (!i) return;
            const n = i.parent.convertToWorldSpaceAR(i.position),
                a = this.tabPageIndicator.parent.convertToNodeSpaceAR(n);
            null == (e = this._tabPageIndicatorTween) || e.stop(), this._tabPageIndicatorTween = new m(this.tabPageIndicator).to(.1, {
                position: new y(a.x, this.tabPageIndicator.position.y, this.tabPageIndicator.position.z)
            }).start()
        }
        setTabActive(t, e) {
            var i;
            const n = this.tabs[t];
            n && (n.active = e, null == (i = n.parent.getComponent(B)) || i.updateLayout(!0), e || this.currentTabPageIndex != t ? this.updateTabPageIndicator() : this.switchTab(0))
        }
        switchTab(t) {
            var e;
            this.currentTabPageIndex = t;
            for (let e = 0; e < this.tabPages.length; e++) this.tabPages[e].active = e == t;
            this.updateTabPageIndicator(), null == (e = this.mvcView) || null == e.onTabSwitched || e.onTabSwitched(t)
        }
        getEventListPage() {
            return this._eventListPage || (this._eventListPage = g(this.eventListPagePrefab), this._eventListPage.parent = this.mttPopupsParent), this._eventListPage
        }
        setHeaderBg(t) {
            this.titleBgSprite && this.titleBgSpriteFrames[t] && (this.titleBgSprite.node.active = !0, this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[t])
        }
        updateHeaderBg() {
            const t = this.model.detailData;
            let e = this.model.data.bannerType;
            switch (this.titleBgGradient.node.active = !1, this.titleBgSprite.node.active = !1, this.tabBg.active = !0, !0) {
                case t.WPTDailyAsia:
                    return void this.setHeaderBg(4);
                case t.DailyPrime:
                    return void this.setHeaderBg(5);
                case t.BountyRumble:
                    return void this.setHeaderBg(6);
                case t.OneShot:
                    return void this.setHeaderBg(7);
                case t.HyperDash:
                    return void this.setHeaderBg(8);
                case t.WeeklyGoldenBounty:
                    return void this.setHeaderBg(9);
                case t.WPTMysteryMillion:
                    return void this.setHeaderBg(10);
                case t.CrazyFreeroll:
                    return void this.setHeaderBg(11)
            }
            switch (e) {
                case M.commonProto.MttBanner.CNYBanner:
                    this.setHeaderBg(0);
                    break;
                case M.commonProto.MttBanner.BountyBanner:
                    this.setHeaderBg(1);
                    break;
                case M.commonProto.MttBanner.WeeklyGoldenBanner:
                    this.setHeaderBg(2);
                    break;
                case M.commonProto.MttBanner.WPTBanner:
                    this.setHeaderBg(3);
                    break;
                default:
                    this.titleBgGradient.node.active = !0;
                    const t = this.headerGradientMap.getBannerGradient(e);
                    this.titleBgGradient.colorSchemeLobbyV2 = t[0], this.titleBgGradient.toColorSchemeLobbyV2 = t[1], this.titleBgGradient.applyTheme(), this.tabBg.active = this.headerGradientMap.hasType(e) && e != M.commonProto.MttBanner.Banner_None
            }
        }
        setHeaderIcon(t) {
            this.titleIconSprite && this.titleIconSpriteFrames[t] && (this.titleIconSprite.node.active = !0, this.titleIconSprite.spriteFrame = this.titleIconSpriteFrames[t])
        }
        updateHeaderIcon() {
            const t = this.model.detailData;
            let e = this.model.data.iconType;
            switch (this.titleIconSprite.node.active = !1, !0) {
                case t.WPTDailyAsia:
                    return void this.setHeaderIcon(4);
                case t.DailyPrime:
                    return void this.setHeaderIcon(5);
                case t.BountyRumble:
                    return void this.setHeaderIcon(6);
                case t.OneShot:
                    return void this.setHeaderIcon(7);
                case t.HyperDash:
                    return void this.setHeaderIcon(8);
                case t.WeeklyGoldenBounty:
                    return void this.setHeaderIcon(9);
                case t.WPTMysteryMillion:
                    return void this.setHeaderIcon(10);
                case t.CrazyFreeroll:
                    return void this.setHeaderIcon(11)
            }
            switch (e) {
                case M.commonProto.MttIcon.CNYIcon:
                    this.setHeaderIcon(0);
                    break;
                case M.commonProto.MttIcon.BountyIcon:
                    this.setHeaderIcon(1);
                    break;
                case M.commonProto.MttIcon.WeeklyGoldenIcon:
                    this.setHeaderIcon(2);
                    break;
                case M.commonProto.MttIcon.WPTIcon:
                    this.setHeaderIcon(3)
            }
        }
        getMainPageScrollView() {
            var t;
            return null == (t = this.tabPages[0]) ? void 0 : t.getComponent(P)
        }
        onClickOverlayButton() {
            this._onClickOverlayButtonCallback && this._onClickOverlayButtonCallback(), this.onToggleOverlayButton(!1, null)
        }
        onToggleOverlayButton(t, e = null) {
            this._onClickOverlayButtonCallback = e, this.overlayButton.node.active = t
        }
        onLanguageChange() {
            var t, e, i, n, a, r, o, l;
            null == (t = this.infoPage) || t.onLanguageChange(), null == (e = this.blindStructurePage) || e.onLanguageChange(), null == (i = this.payoutPage) || i.onLanguageChange(), null == (n = this.prizePoolPage) || n.onLanguageChange(), null == (a = this.playerPage) || a.onLanguageChange(), null == (r = this.satelliteFeederComp) || r.onLanguageChange(), null == (o = this.multiflightFeederComp) || o.onLanguageChange(), null == (l = this._eventListPage) || l.getComponent(V).onLanguageChange()
        }
    }).prototype, "titleBgGradient", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(ut.prototype, "titleBgSprite", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(ut.prototype, "titleBgSpriteFrames", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), pt = e(ut.prototype, "titleIconSprite", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(ut.prototype, "titleIconSpriteFrames", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), bt = e(ut.prototype, "tabBg", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(ut.prototype, "titleLabel", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(ut.prototype, "tabs", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Bt = e(ut.prototype, "tabPages", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Pt = e(ut.prototype, "tabPageIndicator", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(ut.prototype, "infoPage", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ut.prototype, "blindStructurePage", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(ut.prototype, "payoutPage", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(ut.prototype, "prizePoolPage", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(ut.prototype, "playerPage", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(ut.prototype, "tablePage", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ut.prototype, "multiflightFeederComp", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(ut.prototype, "satelliteFeederComp", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(ut.prototype, "signUpButton", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(ut.prototype, "signUpButtonLabel", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(ut.prototype, "buyInPopupPrefab", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(ut.prototype, "mttPopupsParent", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(ut.prototype, "loadingBlocker", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(ut.prototype, "eventListPagePrefab", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(ut.prototype, "overlayButton", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = ut)) || st));
    n._RF.pop()
}