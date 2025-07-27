import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as g from "./cv.js";
import * as h from "./HallScene.js";
import * as S from "./SelfView.js";
import * as B from "./MultipleGameLandscape.js";
import * as k from "./SelfViewLandscape.js";
import * as m from "./DesignSystemRegularButton.js";
import * as y from "./DesignSystemButtonBase.js";
import * as w from "./ResourcesLoader.js";
import * as L from "./SliderVerify.js";

function main() {
    var b, _, V, C;
    n._RF.push({}, "4a6a87cYlpAZp5rpPgsyWY8", "HallSceneLandscape", void 0);
    const {
        ccclass: P,
        property: A
    } = s;
    e("default", (b = A(i), P((C = t((V = class extends h {
        constructor(...e) {
            super(...e), o(this, "goldViewLandscape", C, this), this.sliderVerify_panel = null, this.multipleGameNode = null
        }
        onLoad() {
            if (super.onLoad(), g.isDesktopBuild() && g.appConfig.getGeneralConfig().multiWindowEnabled) {
                const e = this.menuSideBarBtns.indexOf(this.sportsBookBtn);
                e >= 0 && this.menuSideBarBtns.splice(e, 1)
            }
            a.on("window_close", this.onWindowClose.bind(this), this)
        }
        start() {
            super.start(), this.scheduleOnce((() => {
                l.preloadScene("WebViewSceneLandscape", (function() {}))
            }), .5)
        }
        adaptScreen() {
            g.config.adaptScreen(this.node), g.resMgr.adaptWidget(this.node, !0, !1)
        }
        onDestroy() {
            super.onDestroy(), a.off("window_close", this.onWindowClose, this)
        }
        onWindowClose(e) {
            1 == e && g.showAppExitPopup()
        }
        initMultipleGame(e, t, o) {
            w.instance.loadRes(w.RES_PATH.PREFAB.HALL.MULTIPLE_GAME, r, null, ((e, n) => {
                this.multipleGameNode = d(n), this.node.addChild(this.multipleGameNode);
                const i = this.multipleGameNode.getComponent(B);
                null == i || i.initMTTGame(t, o), null == i || i.updateRoomIndex()
            }))
        }
        onBtnSportsBookClicked(e, t) {
            g.isDesktopBuild() && g.appConfig.getGeneralConfig().multiWindowEnabled ? (this.sportsBookBtn.getComponent(m).btnState = y.normal, t || g.AudioMgr.playButtonSound("hall_bottom_button.mp3"), this.checkSecuritySportsBook(this.openSportsBook.bind(this, e), null, !0)) : super.onBtnSportsBookClicked(e)
        }
        openSportsBook(e) {
            g.httpHandler.requestPlayerLocks((() => {
                const e = g.dataHandler.getUserData().isSportsBookLocked;
                if (!1 !== e) {
                    let t = !0 === e ? "WorldServerError_Block_SportsBook_Player_Locked" : e;
                    this.showSportsBookPlayerLockedPopup(g.config.getStringData(t), g.config.getStringData("Attention"), !1)
                } else g.webviewRoomManager.openSportsBook()
            }))
        }
        onBtnSelfClick(e) {
            super.onBtnSelfClick(e), this.selfView.getComponent(S).focusOnAccount()
        }
        onBtnKeFuClick(e) {
            this.setMenuSideBarBtnState(e.target), super.onBtnKeFuClick(e)
        }
        initGoldView() {
            this.goldView = this.goldViewLandscape
        }
        betaFeedback() {
            g.AudioMgr.playButtonSound("button_click.mp3"), g.popUp.showMsg({
                txt: "感谢您测试桌面应用程序的 Beta 版。如果您发现 Beta 版的错误，请在此处报告desktopfeedback@a5labs.co",
                isTwoBtn: !0,
                sureCallback: () => {
                    p.openURL("mailto:desktopfeedback@a5labs.co")
                }
            })
        }
        getBottomMenuHeight() {
            return 0
        }
        onShowEditAvatar() {
            g.AudioMgr.playButtonSound("hall_bottom_button.mp3"), this.swithView(this.selfView, this.selfBtn), g.config.getLog(), this.selfView.getComponent(k).performButtonAction(20)
        }
        registerMttEvents() {}
        onBackFromInviteFriend() {}
        checkAndCallPromoPopups() {}
        onGetPlayerLocks() {
            super.onGetPlayerLocks();
            const e = g.dataHandler.getUserData().isSportsBookLocked;
            if (!1 !== e && g.webviewRoomManager.hasAnySportsBookRoom() && g.isDesktopBuild() && g.appConfig.getGeneralConfig().multiWindowEnabled) {
                let t = !0 === e ? "WorldServerError_Block_SportsBook_Player_Locked" : e;
                this.showSportsBookPlayerLockedPopup(g.config.getStringData(t), g.config.getStringData("Attention"), !1)
            }
        }
        enableTopAppLogo() {}
        disableTopAppLogo() {}
        _onMsgNeedSliderVerify() {
            c(this.sliderVerify_panel) ? this.sliderVerify_panel.autoShow((() => {})) : this.createSliderVerify()
        }
        createSliderVerify() {
            let e = u.getBundle(g.appConfig.layoutUse);
            e ? this.onBundleSliderVerifyLoaded(null, e) : u.loadBundle(g.appConfig.layoutUse, this.onBundleSliderVerifyLoaded.bind(this))
        }
        onBundleSliderVerifyLoaded(e, t) {
            e ? f(e.message || e) : t.load("prefabs/SliderVerifyLandscape", r, function(e, t) {
                e ? f(e.message || e) : (this.sliderVerify_panel = L.initSingleInst(t, this.node, g.Enum.ZORDER_TYPE.ZORDER_TOP), this.sliderVerify_panel.autoShow((() => {})))
            }.bind(this))
        }
    }).prototype, "goldViewLandscape", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = V)) || _));
    n._RF.pop()
}