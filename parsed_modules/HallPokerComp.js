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
import * as l from "./cc.js";
import * as M from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as T from "./i18nText.js";
import * as k from "./cv.js";
import * as L from "./CommonTools.js";
import * as w from "./MTTConnector.js";
import * as C from "./FakeMultipleGame.js";
import * as y from "./worldWebsocket.js";
import * as B from "./ImpokerHallFeature.js";
import * as N from "./LobbyHelper.js";
import * as D from "./LobbyTools.js";
import * as v from "./HallPokerController.js";
import * as _ from "./HallPokerController.js";
import * as V from "./StringUtils.js";

function main() {
    var P, F, S, I, E, G, R, A, H, O, z, U, j, K, W, x, q, Q, Z, J, X, Y, $, tt, et, it, nt, at, ot, st;
    n._RF.push({}, "ddb28mw4MtMP7CdW5T2QZy0", "HallPokerComp", void 0);
    const {
        ccclass: rt,
        property: lt
    } = l;
    t("default", (P = lt(a), F = lt(o), S = lt(a), I = lt(a), E = lt(a), G = lt(a), R = lt(o), A = lt(a), H = lt(s), O = lt(a), z = lt([r]), U = lt(a), j = lt(a), K = lt(o), rt((q = e((x = class extends c {
        constructor(...t) {
            super(...t), this.mvcView = null, i(this, "popupLoading", q, this), i(this, "hallMttDetailPrefab", Q, this), i(this, "panelCashListItem", Z, this), i(this, "panelMttRoomListItem", J, this), i(this, "panelSngRoomListItem", X, this), i(this, "panelPaceRoomListItem", Y, this), i(this, "cashGameRoomListPrefab", $, this), i(this, "banner", tt, this), i(this, "scrollViewTabButtons", et, this), i(this, "tabButtonTemplate", it, this), i(this, "sprFramesTabIcon", nt, this), this.tabButtons = new Map, i(this, "groupFilterBtn", at, this), i(this, "backBtnNode", ot, this), i(this, "mttPrefab", st, this), this.mtt = null
        }
        onLoad() {
            this.initMTT(), D.registerMessage(k.config.CHANGE_LANGUAGE, this.setLanguage.bind(this), this.node), D.registerMessage(_, this.showPopupMTT.bind(this), this.node), D.registerMessage(v, this.showHallMttDetail.bind(this), this.node), D.registerMessage("joinCashGameLobbyV2FromDeepLink", this.joinCashGameLobbyV2FromDeepLink.bind(this), this.node), D.registerMessage("showMttDetailLobbyV2FromDeepLink", this.showMttDetailLobbyV2FromDeepLink.bind(this), this.node), D.registerMessage("mttNotify", this.mttNotify.bind(this), this.node), D.registerMessage("hide_hallMttDetailView", this.hideHallMttDetailView.bind(this), this.node), D.registerMessage("preStartFakeMultipleGame", this.preStartFakeMultipleGame.bind(this), this.node), D.registerMessage(k.Enum.MessageCenterAction.NotificationShow, this.onNotificationOpen.bind(this), this.node), this.showBackBtnNode(!1), this.hideAllPanel()
        }
        start() {
            this.preStartFakeMultipleGame()
        }
        onDestroy() {
            D.unregisterMessage(k.config.CHANGE_LANGUAGE, this.node), D.unregisterMessage(_, this.node), D.unregisterMessage(v, this.node), D.unregisterMessage("joinCashGameLobbyV2FromDeepLink", this.node), D.unregisterMessage("showMttDetailLobbyV2FromDeepLink", this.node), D.unregisterMessage("mttNotify", this.node), D.unregisterMessage("hide_hallMttDetailView", this.node), D.unregisterMessage("preStartFakeMultipleGame", this.node), D.unregisterMessage(k.Enum.MessageCenterAction.NotificationShow, this.node)
        }
        setLanguage() {
            this.reloadContentOfAllTabButtons()
        }
        createTabButtons(t) {
            t.forEach((t => {
                let e = this.tabButtons.get(t);
                h(e, !0) || (e = u(this.tabButtonTemplate), e.parent = this.scrollViewTabButtons.content, this.setupTabButton(t, e), e.active = !0, this.tabButtons.set(t, e), this.reloadTabButtonContent(t))
            })), this.tabButtons.forEach(((e, i) => {
                t.includes(i) || (e.destroy(), this.tabButtons.delete(i))
            }))
        }
        hideAllPanel() {
            if (!k.appConfig.isWebApp) return;
            [this.panelCashListItem, this.panelMttRoomListItem, this.panelSngRoomListItem, this.panelPaceRoomListItem].forEach((t => {
                t && (t.active = !1)
            }))
        }
        onClickChangeTab(t) {
            D.playSoundTab(), this.tabButtons.forEach(((e, i) => {
                e == t.target && this.mvcView.onClickChangeTab(i)
            }))
        }
        setupTabButton(t, e) {}
        reloadContentOfAllTabButtons() {
            this.tabButtons.forEach(((t, e) => {
                this.reloadTabButtonContent(e)
            }))
        }
        reloadTabButtonContent(t) {
            const e = this.tabButtons.get(t);
            if (!e) return;
            let i = 0;
            switch (t.toLocaleLowerCase()) {
                case "mtt":
                    i = 1;
                    break;
                case "nlhe":
                    i = 2;
                    break;
                case "short_deck":
                    i = 3;
                    break;
                case "aof":
                    i = 4;
                    break;
                case "splash":
                    i = 5;
                    break;
                case "pace":
                    i = 6;
                    break;
                case "jack_fruit":
                    i = 7;
                    break;
                case "plo":
                    i = 8;
                    break;
                case "sng":
                    i = 9;
                    break;
                case "flash":
                    i = 10
            }
            const n = e.getChildByName("layout").getChildByName("text").getComponent(p);
            n.string = k.config.getStringData(N.getI18nKeyOfGameTypeNameByName(t)).toUpperCase(), k.appConfig.isLandscapeLayout || (n.string = n.string.replace(" ", "\n"));
            const a = ["icon"];
            k.appConfig.isLandscapeLayout || a.unshift("layout", "iconHolder");
            const o = L.instance.getComponentFromNodeStructure(e, m, ...a);
            o && (o.spriteFrame = this.sprFramesTabIcon[i])
        }
        setSelectedTabButton(t) {
            this.tabButtons.forEach(((e, i) => {
                N.setDesignBtnState(e, i == t)
            }))
        }
        initMTT() {
            k.config.HAVE_MTT && (!h(this.mtt) && this.mttPrefab && this.createMTT(), cc_mtt.vv && cc_mtt.vv.DataManager && "" == cc_mtt.vv.DataManager.token && w.instance.requestToken())
        }
        createMTT() {
            if (w.instance.initCCVV(), k.config.HAVE_MTT && !h(this.mtt)) {
                let t = this.mttPrefab;
                this.initMTTParam(t), cc_mtt.vv.DataManager.worldNetwork && cc_mtt.vv.DataManager.token == cc_mtt.vv.DataManager.worldNetwork.lastVerifyToken && cc_mtt.vv.DataManager.worldNetwork.isConnected() ? (h(this.mtt) && this.mtt.bindMessageHandler(), C.instance && !C.instance.isInitHoldem && h(this.mtt) && C.instance.preStartMttGame(this.mtt)) : b("*************** createMTT ************** : but still not init connection.... Keep old logic ......")
            }
        }
        preStartFakeMultipleGame() {
            C.instance && y.getInstance().hasVerifyToken && !C.instance.isInitHoldem && h(this.mtt) && C.instance.preStartMttGame(this.mtt), C.instance && !C.instance.isInitCash && C.instance.preStartCashGame()
        }
        hideHallMttDetailView() {
            this.mvcView.cancelRequestMttDetail()
        }
        mttNotify(t) {
            -1 != t.search("mttjs://back-normal") ? w.instance.sendMessageCenter(w.instance.config.BroadCast.MTT_TOKEN_ERROR, w.instance.config.tokenErrorMsg.BACK_NORMAL) : -1 != t.search("mttjs://back-abnormal") && w.instance.sendMessageCenter(w.instance.config.BroadCast.MTT_TOKEN_ERROR, w.instance.config.tokenErrorMsg.BACK_ABNORMAL)
        }
        initMTTParam(t) {
            w.instance.initMTTParams();
            const e = "MttPrefabContainerLayout";
            let i = this.panelMttRoomListItem.getChildByName(e);
            i || (i = new a(e), i.addComponent(g), i.getComponent(g).width = 0, i.getComponent(g).height = 0, i.addComponent(d), i.parent = this.panelMttRoomListItem);
            const n = "MttPrefabContainer";
            let o = i.getChildByName(n);
            o || (o = new a(n), o.addComponent(g), o.getComponent(g).width = 0, o.getComponent(g).height = 0, o.addComponent(d), o.parent = i, o.getComponent(d).opacity = 0, o.position = new f(5e4, 5e4, 1));
            let s = u(t);
            this.mtt = s.getComponent(B), this.mtt.dialogLayer = this.node, s.parent = o, this.mtt.registerTokenEvents(), this.mtt.init()
        }
        showPopupMTT(t) {
            this.mtt && (cc_mtt.vv.ConsoleLog.log("showPopupMTT", t.message), this.mtt.callPopUpBox(t.message, t.callback, t.title, null, null, t.key))
        }
        showHallMttDetail(t) {
            this.mvcView.loadAndShowMttTournamentDetail(t.tournamentData, t.param)
        }
        joinCashGameLobbyV2FromDeepLink(t) {
            this.mvcView.joinCashGameLobbyV2FromDeepLink(t)
        }
        showMttDetailLobbyV2FromDeepLink(t) {
            this.mvcView.showMttDetailLobbyV2FromDeepLink(t)
        }
        showLoading(t) {
            h(this.popupLoading) && (this.popupLoading.active = t)
        }
        showBanner(t) {
            h(this.banner) && (this.banner.active = t)
        }
        showLandscapeRightPanelLine(t) {}
        getMttGameOverviewNode() {
            return null
        }
        onClickBackButton() {
            D.playSoundBack(), this.mvcView.goBack()
        }
        showBackBtnNode(t) {
            this.backBtnNode && (this.backBtnNode.active = t)
        }
        updateBackTitle(t) {
            if (this.backBtnNode) {
                const e = M("backBtn/text", this.backBtnNode);
                if (!e) return;
                const i = e.getComponent(T);
                if (!i) return;
                const n = N.getI18nKeyOfGameTypeNameByName(t);
                i.flag = V.Uppercase_Words_First_Letter, "nlhe" !== t && "plo" !== t || (i.flag = V.Uppercase_All), i.setKey(n)
            }
        }
        onNotificationOpen(t) {
            this.showBackBtnNode(!t)
        }
        updateBackgroundColor(t) {}
    }).prototype, "popupLoading", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(x.prototype, "hallMttDetailPrefab", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(x.prototype, "panelCashListItem", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(x.prototype, "panelMttRoomListItem", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(x.prototype, "panelSngRoomListItem", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(x.prototype, "panelPaceRoomListItem", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(x.prototype, "cashGameRoomListPrefab", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(x.prototype, "banner", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(x.prototype, "scrollViewTabButtons", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(x.prototype, "tabButtonTemplate", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(x.prototype, "sprFramesTabIcon", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), at = e(x.prototype, "groupFilterBtn", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(x.prototype, "backBtnNode", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(x.prototype, "mttPrefab", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = x)) || W));
    n._RF.pop()
}