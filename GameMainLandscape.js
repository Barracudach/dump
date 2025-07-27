import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as S from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as B from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as b from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as T from "./ThemeSystem.js";
import * as v from "./CrashTracing.js";
import * as k from "./CrashTracing.js";
import * as _ from "./PushNoticeInGame.js";
import * as w from "./GameSceneInstance.js";
import * as I from "./GameMain.js";
import * as y from "./menu.js";
import * as D from "./cv.js";
import * as R from "./GameSceneLandscape.js";
import * as P from "./SeatLandscape.js";
import * as M from "./SeatStarLandscape.js";
import * as N from "./EmojiView.js";
import * as x from "./ColorSystemType.js";
import * as A from "./ColorSystemTypeOther.js";
import * as E from "./JurisdLoader.js";
import * as G from "./SliderVerify.js";
import * as H from "./ActionButtonsHandler.js";
import * as F from "./MultipleNewReplayerWindow.js";

function main() {
    var L, V, z, O, W, U, j, Z, J, Y, q, X, K, Q, $, ee, te, ne, ie, ae, oe, se, re, le, ue, ce, he, de, me, ge, pe, be, Se, fe, Be, Ce, Te, ke, ve, _e, we, Ie, ye, De, Re, Pe;
    i._RF.push({}, "206eatalnJBJZ6mJqmXYdNL", "GameMainLandscape", void 0);
    const {
        ccclass: Me,
        property: Ne
    } = l;
    e("default", (L = Ne(a), V = Ne(a), z = Ne(o), O = Ne(s), W = Ne(o), U = Ne(o), j = Ne(a), Z = Ne(o), J = Ne(r), Y = Ne(o), q = Ne(o), X = Ne(o), K = Ne(H), Q = Ne(a), $ = Ne(a), ee = Ne(a), te = Ne(a), ne = Ne(a), ie = Ne(a), ae = Ne(o), oe = Ne(_), se = Ne(o), Me((ue = t((le = class extends I {
        constructor(...e) {
            super(...e), n(this, "jackPotButtonSprite", ue, this), n(this, "freeFill_button_sprite", ce, this), n(this, "amountInputContainer", he, this), n(this, "amountInputEditbox", de, this), n(this, "plusButton", me, this), n(this, "minusButton", ge, this), n(this, "raiseButtonImg", pe, this), n(this, "raiseButton", be, this), n(this, "raiseButtonAmountText", Se, this), n(this, "raiseText", fe, this), n(this, "betText", Be, this), n(this, "allInText", Ce, this), n(this, "actionHandler", Te, this), n(this, "backButton", ke, this), n(this, "backAllTablesButton", ve, this), n(this, "backButtonBgrHover", _e, this), n(this, "backButtonBgrClick", we, this), n(this, "backAllTablesButtonBgrHover", Ie, this), n(this, "backAllTablesButtonBgrClick", ye, this), n(this, "mainpoolBg", De, this), n(this, "pushNotice", Re, this), n(this, "tableInfoTextNode", Pe, this), this.returnToHallBtn = null, this.PATH_NODE_RETURN_HALL_BTN = "back_to_lobby_button", this._betValue = 0, this._isCustomRound = !1
        }
        onLoad() {
            super.onLoad(), this.initReturnHallBtn(), u(this.sliderBg, !0) && (this.sliderBg.active = !0, this.sliderBg.on("mouse-wheel", this.onMouseScroll, this)), D.resMgr.updateBackButton(this.backButton), D.resMgr.updateBackButton(this.backAllTablesButton);
            let e = this.tablePositions.getSeatPosition(2, 0);
            let t = new c(e.x + -94, e.y),
                n = this.addTime_button.parent.getComponent(h).convertToNodeSpaceAR(t);
            this.addTime_button.setPosition(this.addTime_button.position.x, n.y), this.bottomMenuHandler.setClickFullscreenEmojiCb(this.onClickFullscreenCb.bind(this)), this.bottomMenuHandler.setClickHandCb(this.onClickNewReplayerWindow.bind(this)), D.MessageCenter.register(D.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onMouseScroll(e) {
            const t = e.getScrollX(),
                n = e.getScrollY();
            t > 0 || n > 0 ? this.onClickChangeMinAmount(null, 1) : (t < 0 || n < 0) && this.onClickChangeMinAmount(null, 0)
        }
        onDestroy() {
            super.onDestroy(), D.MessageCenter.unregister(D.config.CHANGE_LANGUAGE, this)
        }
        onLanguageChange() {
            this.reSetSpriteFrame(this.giveUpRed.node), this.reSetSpriteFrame(this.followFill_Blue.node), this.setUserCardResultText(this.GetSelfCardType())
        }
        initReturnHallBtn() {
            let e = !D.appConfig.getGeneralConfig().multiWindowEnabled;
            this.returnToHallBtn = d(this.PATH_NODE_RETURN_HALL_BTN, this.node), this.returnToHallBtn && (this.returnToHallBtn.active = e)
        }
        isShowFaceBtn() {
            return !!D.appConfig.getGameConfig().chatTabEnabled && super.isShowFaceBtn()
        }
        checkChatAvailable() {}
        onExitToLobby() {
            let e = this.game;
            e && e.menu_Panel && e.menu_Panel.getComponent(y).onBtnExitPoker(), D.MessageCenter.send("click_btn_exit_room", this.gameDataInstance)
        }
        onbtnMenuClick(e) {
            let t = this.game;
            if (t && t.menu_Panel) {
                t.menu_Panel.active = !0, t.menu_Panel.getComponent(y).updateMenu(this.game), this.bottomMenuHandler.onClickCloseButon()
            }
            super.onbtnMenuClick(e)
        }
        updateMenu() {
            this.game.updateMenu()
        }
        getChangeCard() {
            let e = this.game;
            return e && e.menu_Panel ? e.changeCard_panel.getComponent("ChangeCard") : null
        }
        updateTimeBlink(e, t, n) {
            e.stopBlink(), e.setThankCdTime(t, n)
        }
        setDichiTextStyle(e, t, n) {}
        showSelfThinkCd(e, t) {
            super.showSelfThinkCd(e, t);
            let n = this.getSeatBySeverId(this.gameDataInstance.tRoomData.i32SelfSeat);
            (n instanceof P || n instanceof M) && n.setIconBlur(!0)
        }
        hideThankCD() {
            super.hideThankCD();
            let e = this.getSeatBySeverId(this.gameDataInstance.tRoomData.i32SelfSeat);
            (e instanceof P || e instanceof M) && e.setIconBlur(!1)
        }
        setFaceBtnEnabled(e) {}
        setFullscreenEmojiBtnEnabled(e) {
            u(this.game) && u(this.game.emoji_Panel) && this.game.emoji_Panel.getComponent(N).setAllinRestriction(this.checkAllIn())
        }
        getPokerNameTextNode() {
            return this.pokerNameText
        }
        isGameMainEvent(e) {
            return "GameMain" == e || "GameMainLandscape" == e
        }
        setTableBackgroundSprite(e, t, n) {
            this.setTableThemeSprites(t);
            const i = e.getComponent(a),
                o = "Textures/tableBgs/table_" + t;
            if (E.loadTableSpriteWithFallback(i, o, void 0, n), this.game instanceof R) {
                const e = this.game.game_table_background.getComponent(a),
                    i = "Textures/tableBgs/table_bg_" + t;
                E.loadTableSpriteWithFallback(e, i, void 0, n)
            }
            D.resMgr.updateBackButton(this.backButton), D.resMgr.updateBackButton(this.backAllTablesButton), this.updateTableSpriteEffect()
        }
        getBetButtonOthersSprites() {
            return [this.followFill_Blue, this.raiseButtonImg]
        }
        setTableThemeSprites(e) {
            super.setTableThemeSprites(e), D.resMgr.loadJackpotButtonTheme([this.jackPotButtonSprite], e), D.resMgr.loadBetButtonFoldHoverTheme(this.actionHandler.mouseOverBetButtonsSprites.concat([this.backAllTablesButtonBgrHover, this.backButtonBgrHover]), e), D.resMgr.loadBetButtonFoldClickTheme(this.actionHandler.mouseClickBetButtonsSprites.concat([this.backAllTablesButtonBgrClick, this.backButtonBgrClick]), e), D.resMgr.setPlusMinusHoverThemeColors(this.actionHandler.mouseOverPlusMinusButtonsColors, e), D.resMgr.setPlusMinusClickThemeColors(this.actionHandler.mouseClickPlusMinusButtonsColors, e), D.resMgr.setPlusMinusNormalThemeColors(this.actionHandler.mouseNormalPlusMinusButtonsColors, e), D.resMgr.setClickThemeColors(this.actionHandler.mouseClickOtherBetButtonsColors, e), D.resMgr.setSliderHandleTheme(this.actionHandler.sliderHandleSprite, e)
        }
        setTableBackgroundSize(e) {}
        createEffectSprite() {
            return D.resMgr.createSprite(this.seatPanel)
        }
        setFollowFillText(e, t = !1) {
            super.setFollowFillText(e);
            let n = e <= 0 && !t;
            this.raiseText.active = !n, this.betText.active = n, this.allInText.active = !1
        }
        clearPkSelfCardRotation(e) {}
        getCardScale() {
            return 1
        }
        onClickRaiseButton() {
            k.SetTrackAttributesToSpan(v.CashGameActions, {
                userClick: !0,
                action: this._betValue,
                type: "desktop_raise_button"
            });
            let e = D.StringTools.serverGoldByClient(this._betValue);
            var t;
            e > 0 ? (null == (t = k.getInstance()) || t.startSpan(v.CashGameRaise, "onClickRaiseButton", {
                amount: e
            }), this.OnRaise(e, !0)) : this.CheckCard()
        }
        setBetButtonsInteractableAfterRealActionTurn() {}
        showCardFunTips() {}
        hideDichiButtonIfInvalid(e, t) {}
        isEqualSliderBetMaximum(e) {
            return !0
        }
        setBetButtonEnable(e, t, n, i) {
            let a = t.getComponent(T);
            a && a.setColorScheme(x.Other, n ? A.WhiteCreamy_100 : A.BlackGrey), e.interactable = n
        }
        convertUiIndexToBetButonIndex(e) {
            switch (e) {
                case 0:
                    return 1;
                case 1:
                    return 2;
                case 2:
                    return 3;
                case 3:
                    return 0;
                default:
                    return e
            }
        }
        setRaiseToAllin(e) {
            this.setBetAmount(D.StringTools.serverGoldToShowNumber(e)), this.raiseButton.active = !0, this.allInText.active = !0, this.raiseText.active = this.betText.active = !1
        }
        showRaiseButton(e) {
            this.raiseButton.active = e
        }
        setBetBtnsVisible(e) {
            if (super.setBetBtnsVisible(e), this.plusButton.active = e, this.minusButton.active = e, this.amountInputContainer.active = e, e) {
                let e = this.gameDataInstance.tGameData.m_u32MiniRaise,
                    t = this.gameDataInstance.tGameData.m_u32StakeNow - e > 0;
                this.raiseButton.active = t, t ? this.setBetAmount(D.StringTools.serverGoldToShowNumber(e)) : this.amountInputContainer.active = !1
            } else this.raiseButton.active = !1
        }
        onDichiButtonSetValue(e) {
            this.setBetAmount(e)
        }
        onSliderSetValue(e) {
            this.setBetAmount(D.StringTools.clientGoldByServer(e), !1, !0)
        }
        setBetAmount(e, t = !0, n = !1) {
            this._betValue = e, this._isCustomRound = n;
            const i = n ? this.gameDataInstance.tRoomData.getDataPointValueCustomRound(e, D.currencyManager.defaultRoundDecimal) : this.gameDataInstance.tRoomData.getDataPointValue(e);
            if (this.amountInputEditbox.string = i, this.raiseButtonAmountText.string = i, t) {
                let e = this.gameDataInstance.tGameData.m_u32MiniRaise,
                    t = this.gameDataInstance.tGameData.m_u32StakeNow - e,
                    n = D.StringTools.serverGoldByClient(D.StringTools.showStringToNumber(this.gameDataInstance.tRoomData.getChipAmountFromDataPoint(this.amountInputEditbox.string).toString())),
                    i = t > 0 ? (n - e) / t : 1;
                this.freeSlider.progress = i, this.freeSlider.slideEvents[1].emit([this.freeSlider])
            }
        }
        getSliderPercent() {
            return this.freeSlider.progress
        }
        getMaxPercent() {
            return 1
        }
        setSliderTextAmount(e) {
            let t = this.gameDataInstance.tGameData.m_u32MiniRaise,
                n = t + e * (this.gameDataInstance.tGameData.m_u32StakeNow - t);
            this.setBetAmount(D.StringTools.clientGoldByServer(n), !1, !0)
        }
        getFreeSliderPercent(e, t, n) {
            return Math.round(1e4 * e) / 100
        }
        onClickChangeMinAmount(e, t) {
            let n = 0 == t,
                i = D.StringTools.serverGoldByClient(this._betValue),
                a = this.gameDataInstance.tGameData.m_u32MiniRaise,
                o = this.gameDataInstance.tGameData.m_u32StakeNow,
                s = this.gameDataInstance.tRoomData.pkTableStates.sb_amount;
            if (0 == s && (s = this.gameDataInstance.tRoomData.pkTableStates.bb_amount), 0 == s) {
                let {
                    sb: e
                } = D.config.getBlinds(this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum - 1);
                s = Math.floor(D.StringTools.serverGoldByClient(e))
            }
            n ? (i -= s, i < a && (i = a)) : (i += s, i > o && (i = o)), this.setBetAmount(D.StringTools.clientGoldByServer(i), !0, !0), this.sliderEvent(null, null)
        }
        initPos() {
            let e = this.tablePositions.node.getComponent(h).convertToWorldSpaceAR(new c(c.ZERO)),
                t = this.mainpool.parent.getComponent(h).convertToNodeSpaceAR(e);
            this.mainpool.setPosition(new c(t.x, t.y + 52))
        }
        onEditBoxBetAmountTextChanged() {
            let e = this.gameDataInstance.tRoomData.getChipAmountFromDataPoint(this.amountInputEditbox.string).toString();
            if (".0" == e.substr(e.length - 2, 2)) return;
            let t = D.StringTools.serverGoldByClient(D.StringTools.showStringToNumber(e));
            if (isNaN(t)) return;
            let n = this.gameDataInstance.tGameData.m_u32StakeNow,
                i = this.gameDataInstance.tGameData.m_u32MiniRaise,
                a = t >= i,
                o = t > n;
            t = Math.min(t, n), t = Math.max(t, i), this.setBetAmount(D.StringTools.clientGoldByServer(t)), this.amountInputEditbox.string = this.gameDataInstance.tRoomData.removeDataPoint(this.amountInputEditbox.string), a && (m.isBrowser || o) && (this.amountInputEditbox.blur(), this.scheduleOnce((() => {
                this.amountInputEditbox.focus()
            }))), this.sliderEvent(null, null)
        }
        setSpriteFrameForShopButton() {}
        setSliderBg(e) {}
        setFreeSliderProgress(e) {}
        setFreeSliderNodeOpacity(e) {}
        setFreeSliderNodeAcive(e) {}
        setFreeSliderTextNodeAcive(e) {
            this.freeSliderText.node.active && (this.freeSliderText.node.active = !1)
        }
        setFreeSliderTextBgNodeAcive(e) {
            this.freeSliderText_bg.active && (this.freeSliderText_bg.active = !1)
        }
        setFreeSliderPercentImgNodeAcive(e) {}
        onsliderHandDown(e) {
            this.onclickSliderDown = !0, this.sliderEvent(e, null)
        }
        onsliderHandUp(e) {
            this.onclickSliderDown && (this.onclickSliderDown = !1)
        }
        onsliderHandCancel(e) {
            this.onclickSliderDown && (this.onclickSliderDown = !1)
        }
        onSliderDownEventResetSlider() {
            return !1
        }
        setSliderAllinZIndex() {}
        setSliderAllInPosition() {
            let e = this.getSeatBySeverId(this.gameDataInstance.tRoomData.i32SelfSeat);
            e && (this.sliderAllin.setParent(e.node), this.sliderAllin.setPosition(g(c.ZERO)))
        }
        generateChipLevels() {
            super.generateChipLevels(), this.ChipsLevel.length > 0 && 0 == this.ChipsLevel[0] && this.ChipsLevel.splice(0, 1)
        }
        onChangeTables(e) {
            var t, n;
            w.isInvalidRoomMultiWindow(e, null == this ? void 0 : this.node) || (this.m_bIsInit = !1, null != (t = this.gameSceneInstance) && null != (t = t.room) && t.isNeedCheckOutCashGame() && (null == (n = this.game.menu_Panel) || null == (n = n.getComponent(y)) || n.sureToSettlement()))
        }
        initPublicCardPos() {
            this.ResetPublicCardNode()
        }
        initPublicCardSize(e) {
            super.initPublicCardSize(e)
        }
        setWindowTitleCallback(e) {
            this.windowTitleUpdatedCallback = e
        }
        setTableName() {
            if (super.setTableName(), D.appConfig.getGeneralConfig().multiWindowEnabled) {
                var e;
                let t = null == (e = D.roomManager.getGameScene(this.gameSceneInstance.room.getCurrentGameID(), this.gameSceneInstance.room.getCurrentRoomID())) ? void 0 : e.windowID,
                    n = D.StringTools.clientGoldByServer(this.gameDataInstance.tRoomData.pkRoomParam.rule_ante_amount),
                    i = "";
                if (this.gameDataInstance.tRoomData.pkRoomParam.game_mode == D.Enum.CreateGameMode.CreateGame_Mode_Normal) {
                    if (i = D.config.getblindString(this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum - 1), this.gameDataInstance.tRoomData.pkRoomParam.rule_switch_force_straddle) {
                        let e = i.split("/"),
                            t = Number(e[1]),
                            n = D.numFix.times(Number(t), 2);
                        i = D.StringTools.formatC("%s/%s", i, n.toString())
                    }
                    n && (i += D.StringTools.formatC("(%f)", D.StringTools.numberToShowNumber(n)))
                } else this.gameDataInstance.tRoomData.pkRoomParam.game_mode == D.Enum.CreateGameMode.CreateGame_Mode_Short && (i = D.StringTools.numberToShowString(n));
                let a = this.getPokerNameTextNode().getComponent(r).string + " - " + i + " - " + this.gameTypeText.string;
                this._windowTitle = a, p.setWindowTitle(t, a), this.windowTitleUpdatedCallback && this.windowTitleUpdatedCallback()
            }
        }
        getPkStartLocalPosition(e) {
            let t = e.getComponent(h).convertToWorldSpaceAR(g(c.ZERO));
            return this.node.getComponent(h).convertToNodeSpaceAR(t)
        }
        showRoleInfo(e) {
            D.appConfig.getGameConfig().enableInGamePlayerStats && (this.bottomMenuHandler.onClickCloseButon(), super.showRoleInfo(e))
        }
        showObRoleInfo(e) {
            super.showObRoleInfo(e), this.bottomMenuHandler.onClickCloseButon()
        }
        setPanelInfoPosition() {}
        addChildAniNode(e) {
            var t;
            null != (t = this.gameSceneInstance) && t.gameNode ? this.gameSceneInstance.gameNode.addChild(e) : this.seatPanel.addChild(e), e.setSiblingIndex(D.Enum.ZORDER_TYPE.ZORDER_5)
        }
        getLocalFont() {
            return this.buttonCheckText.getComponent(r).font
        }
        getAnimContainerNode() {
            var e;
            return null != (e = this.gameSceneInstance) && e.gameNode ? this.gameSceneInstance.gameNode : this.seatPanel
        }
        convertToAnimContainerSpaceAR(e, t) {
            return e
        }
        updateForceShowCardPositions() {}
        updateDealUiPositions() {}
        setCurrentTimeButtonActive(e) {}
        setAddTimeIcon(e) {}
        getOtherFoldAnimTargetPosition() {
            let e = this.mainpool.getComponent(h).convertToWorldSpaceAR(new c(0, 0));
            return this.seatPanel.getComponent(h).convertToNodeSpaceAR(e)
        }
        setShortPaiSprite(e) {}
        setMangZhuText(e) {
            this.mangZhu_text.node.active = !1
        }
        selectSelfSeat(e) {
            this.card_panel.parent = e.selfCardPanel
        }
        unSelectSelfSeat(e) {
            this.card_panel.parent = this.node
        }
        getOffsetCardPanelMask() {
            return new c(0, -280)
        }
        setActiveMainPoolBg(e) {
            u(this.mainpoolBg) && (this.mainpoolBg.active = e)
        }
        checkLabelTruncatedAndLogToNR(e) {
            var t;
            if (!u(e, !0) || !e.node.activeInHierarchy || e.overflow != r.Overflow.CLAMP) return;
            const n = b(null == (t = e._assemblerData) ? void 0 : t.context, e.string),
                i = e.node.getComponent(h).width;
            if (n > i + 1) {
                var a;
                const t = {
                    compName: e.node.name,
                    string: e.string,
                    overflow: e.overflow,
                    allWidth: n,
                    labelWidth: i
                };
                null == (a = k.getInstance()) || a.traceEvent(v.CashGameIssues, "TextTruncatedWithoutExpected", t)
            }
        }
        updateCoinModeValue() {
            super.updateCoinModeValue(), this.setBetAmount(this._betValue, !0, this._isCustomRound)
        }
        onClickFullscreenCb(e) {
            var t;
            e && (null == (t = e.getComponentInChildren(N)) || t.showUi())
        }
        setDynamicConfig() {
            super.setDynamicConfig();
            const e = this.isShowFullscreenEmojiBtn();
            this.bottomMenuHandler.updateFullscreenEmojiState(e)
        }
        showNoticeMsg(e) {
            this.pushNotice.addPushNotice(e, !1)
        }
        setPushNoticeType(e) {
            this.pushNotice.setPushType(this.getPushNoticeType(e))
        }
        getActionBtnColorNodes() {
            return [this.giveUpRed.node, this.preBetFold.node, this.followFill_Blue.node, this.preBetCheck.node, this.dichi_button0.node, this.dichi_button1.node, this.dichi_button2.node, this.dichi_button3.node, this.dichi_button4.node, this.raiseButtonImg.node]
        }
        _calculationMidPoint(e, t, n) {
            const i = Math.abs(Math.atan2(n.y - t.y, n.x - t.x)) * (180 / Math.PI),
                a = Math.abs(i - 90) < 20,
                o = Math.abs(i - 90) > 45;
            return a || o ? o && Math.abs(i - 90) > 60 && (e /= 3) : e *= 10, a ? new S(e, 0) : new S(0, e)
        }
        _onMsgNeedSliderVerify(e) {
            if (w.isInvalidRoomMultiWindow(e.gameData, null == this ? void 0 : this.node)) return;
            let t = () => {
                this.game.sliderVerify_panel.autoShow((() => {
                    D.gameNet.RequestSitdown(e.msg.roomId, e.msg.seatId)
                }), !0, this.gameDataInstance.tRoomData.u32GameID)
            };
            this.game && this.game.sliderVerify_panel ? t() : this.createSliderVerify(t)
        }
        createSliderVerify(e) {
            let t = f.getBundle(D.appConfig.layoutUse);
            t ? this.onBundleSliderVerifyLoaded(null, t, e) : f.loadBundle(D.appConfig.layoutUse, ((t, n) => {
                this.onBundleSliderVerifyLoaded(t, n, e)
            }))
        }
        onBundleSliderVerifyLoaded(e, t, n) {
            e ? B(e.message || e) : t.load("prefabs/SliderVerifyLandscape", C, function(e, t) {
                e ? B(e.message || e) : (this.game.sliderVerify_panel = G.initSingleInst(t, this.game.node, D.Enum.ZORDER_TYPE.ZORDER_TOP), n())
            }.bind(this))
        }
        setEnableWaitingPlayerText(e) {
            super.setEnableWaitingPlayerText(e), u(this.tableInfoTextNode) && (this.waitForStart_img.active ? this.tableInfoTextNode.active = !0 : this.tableInfoTextNode.active = !1)
        }
        onClickNewReplayerWindow() {
            F.initNewReplayerWindowByGameMain(this)
        }
    }).prototype, "jackPotButtonSprite", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t(le.prototype, "freeFill_button_sprite", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(le.prototype, "amountInputContainer", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(le.prototype, "amountInputEditbox", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(le.prototype, "plusButton", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(le.prototype, "minusButton", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(le.prototype, "raiseButtonImg", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t(le.prototype, "raiseButton", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = t(le.prototype, "raiseButtonAmountText", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(le.prototype, "raiseText", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Be = t(le.prototype, "betText", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = t(le.prototype, "allInText", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Te = t(le.prototype, "actionHandler", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = t(le.prototype, "backButton", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = t(le.prototype, "backAllTablesButton", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = t(le.prototype, "backButtonBgrHover", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = t(le.prototype, "backButtonBgrClick", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(le.prototype, "backAllTablesButtonBgrHover", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(le.prototype, "backAllTablesButtonBgrClick", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = t(le.prototype, "mainpoolBg", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Re = t(le.prototype, "pushNotice", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = t(le.prototype, "tableInfoTextNode", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = le)) || re));
    i._RF.pop()
}