import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./MttHallPkw.js";
import * as g from "./Translator.js";
import * as T from "./cv.js";
import * as m from "./ThemeSystem.js";
import * as p from "./GameListTuplePkw.js";
import * as f from "./borderGraphic.js";
import * as S from "./MttBlindPotTable.js";
import * as b from "./Pb.js";
import * as _ from "./MttBlindStructureLandscape.js";
import * as M from "./mttconfig.js";
import * as L from "./HttpApiTournamentDetail.js";
import * as I from "./HallScene.js";
import * as C from "./worldWebsocket.js";
import * as D from "./MttHallTableTwoScript.js";
import * as E from "./ColorSystemType.js";
import * as R from "./MttItemHelper.js";
import * as y from "./EventCustom.js";
import * as P from "./MttHall.js";
import * as v from "./LobbyTools.js";

function main() {
    var A, H, w, k, B, G, O, W, F, J, $, z, Y, N, U, x;
    i._RF.push({}, "e069erqSfhDNJeqJ/V6pK2u", "MttHallDetailsLandscape", void 0);
    const {
        ccclass: K,
        property: V
    } = r;
    t("default", (A = V(m), H = V(f), w = V(a), k = V(o), B = V(o), G = V(o), O = V(s), K((J = e((F = class extends c {
        constructor(...t) {
            super(...t), n(this, "topLineThemeSystem", J, this), n(this, "backgroundBorder", $, this), n(this, "notStartedLabel", z, this), n(this, "levelPanel", Y, this), n(this, "loadingBlocker", N, this), n(this, "loadingContentNode", U, this), n(this, "editBox", x, this), this._blindStructure = void 0, this.hallsceneScript = void 0, this._registeredMTTInfos = [], this._autoStartCalled = []
        }
        onLoad() {
            T.mttHallDetailsLandscape = this, super.onLoad(), this.hallsceneScript = l.getScene().getComponentInChildren(I), this.hallsceneScript && (this.hallsceneScript.updateAutoEnterTournament = this.updateAutoEnterWhenStart.bind(this), R.needReloadAutoJoinTours = !0), T.MessageCenter.register(T.Enum.MessageCenterAction.onUpdateMttRecordList, this.updateMttRealTimeRecordRes.bind(this), this.node), this.editBox && u.isMobile && this.editBox.node.on("editing-did-began", T.tools.adjustLayoutPosition.bind(this, this.editBox.node), this), v.registerMessage("RemoveTournament", this.removeJoinedTournaments.bind(this), this)
        }
        onDestroy() {
            super.onDestroy(), T.MessageCenter.unregister(T.Enum.MessageCenterAction.onUpdateMttRecordList, this.node), v.unregisterMessage("RemoveTournament", this)
        }
        updateMttRealTimeRecordRes(t) {
            var e;
            this._mttHallInfo && this.node.active && t.mttId == this._mttHallInfo.TournamentId && (null == (e = this.pageScrollViews[1]) || null == (e = e.getComponent(D)) || e.updatePlayerList(t))
        }
        setMttInfo(t = null) {
            super.setMttInfo(t);
            for (let t = 0; t < this._registeredMTTInfos.length; t++) {
                const e = this._registeredMTTInfos[t];
                if (e && e.TournamentId == this._mttHallInfo.TournamentId) {
                    this._registeredMTTInfos[t] = this._mttHallInfo;
                    break
                }
            }
        }
        autoEnterWhenStart() {}
        setSubHeaderLocalizedLabel(t, e) {}
        onEnable() {
            super.onEnable(), this.setLoading(!0);
            let t = T.appConfig.isLandscapeLayout;
            this.topLineThemeSystem.node.active = t, this.backgroundBorder.enabledStrokeColor = t, this.subHeader[0].parent.getComponent(d)._resized(), this.subHeader[0].parent.getComponent(d)._doLayout(), this.adaptWidget(), this.onChangedPage(0), this.onChangeSubHeader(0), this.setEmpty(), this.scheduleOnce((() => {
                this.onChangeSubHeader(0), this.adaptWidget(), this.setSignUpButtonLabel(!1)
            })), t || this.reinitMttHall()
        }
        onDisable() {
            super.onDisable(), this.node.dispatchEvent(new y("onHideMttDetailsPanel", !0))
        }
        adaptWidget() {
            T.resMgr.adaptWidget(this.node, !0, !1)
        }
        setLabelTitle(t, e) {
            t.string = g(e).toUpperCase(), this.topLineThemeSystem && this._mttHallInfo && this._mttHallInfo.GameMode && this.topLineThemeSystem.setColorScheme(E.Other, p.getGameModeColor(this._mttHallInfo.GameMode))
        }
        setDateTime(t, e, n, i, a) {
            let o = T.StringTools.getDateFormatByUserCountry();
            switch (this.unschedule(this.updateLateReg), this.unschedule(this.updateRunning), this._mttHallInfo.Status) {
                case b.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    if (this._mttHallInfo.PlayOnJoint <= 0) {
                        const s = cc_mtt.vv.DataManager.getNow(),
                            r = new Date(this.startingTime),
                            l = s.getFullYear() === r.getFullYear() && s.getMonth() === r.getMonth() && s.getDate() === r.getDate(),
                            u = s.getFullYear() === r.getFullYear() && s.getMonth() === r.getMonth() && s.getDate() + 1 === r.getDate();
                        let d;
                        switch (o) {
                            case T.Enum.DateTimeTypeByCountry.MM_DD_YYYY:
                                d = l ? T.StringTools.capitalizeFirstLetter(g("PKWMTT.GAMELIST.DATE.TODAY")) : u ? T.StringTools.capitalizeFirstLetter(g("PKWMTT.GAMELIST.DATE.TOMORROW")) : T.config.getStringData("Mtt_Started_at") + " " + `${e}/${n}/${t}`;
                                break;
                            case T.Enum.DateTimeTypeByCountry.YYYY_MM_DD:
                                d = l ? T.StringTools.capitalizeFirstLetter(g("PKWMTT.GAMELIST.DATE.TODAY")) : u ? T.StringTools.capitalizeFirstLetter(g("PKWMTT.GAMELIST.DATE.TOMORROW")) : T.config.getStringData("Mtt_Started_at") + " " + `${t}/${e}/${n}`;
                                break;
                            default:
                                d = l ? T.StringTools.capitalizeFirstLetter(g("PKWMTT.GAMELIST.DATE.TODAY")) : u ? T.StringTools.capitalizeFirstLetter(g("PKWMTT.GAMELIST.DATE.TOMORROW")) : T.config.getStringData("Mtt_Started_at") + " " + `${n}/${e}/${t}`
                        }
                        this.abstractLabels[2].string = d.concat(`  ${i}:${a}`)
                    }
                    break;
                case b.commonProto.MTT_GAME_STATUS.STARTED:
                case b.commonProto.MTT_GAME_STATUS.STARTED + 100:
                    this.schedule(this.updateLateReg, 1, h.REPEAT_FOREVER), this.abstractLabels[2].string = T.config.getStringData("Mtt_End_in").concat("  ", this.showRemainTime(!0, this._mttHallInfo.TimeLeftSec, !1));
                    break;
                case b.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case b.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    this.schedule(this.updateRunning, 1, h.REPEAT_FOREVER), this.abstractLabels[2].string = T.config.getStringData("Mtt_Running").concat("  ", this.showRemainTime(!0, this.gameDuration, !1))
            }
        }
        getSignUpTranslation(t) {
            return T.StringTools.convertText(super.getSignUpTranslation(t), 2)
        }
        getCurrentLevelNotStartedString() {
            return "0"
        }
        updatePageTwoLabel() {}
        updatePageTables() {}
        updateRewardLabels() {}
        updateRewardAttributes() {}
        setupBounty() {}
        onReturnClicked() {
            var t;
            null != this._blindStructure && null != this._blindStructure.node && this._blindStructure.node.active ? this._blindStructure.onBackClicked() : (T.appConfig.isLandscapeLayout || super.onReturnClicked(), this.onChangeSubHeader(0), null == (t = this.node) || null == t.dispatchEvent || t.dispatchEvent(new y("onHideMttDetailsPanel", !0)))
        }
        setNotStartedLabel(t) {
            this.notStartedLabel.node.active = t, this.levelPanel.active = !t
        }
        setBlindPotTableParent(t) {
            null != t && (t.parent = this._hallScript.layers[11], this._blindStructure = t.getComponent(S))
        }
        showBlindPotTable() {
            T.appConfig.isLandscapeLayout ? this._hallScript.movePageFromRight(this._blindPotTable, this.node, !1, !0, (() => {
                this._hallScript.controlHallBlockLayer(!1, this.name), this._hallScript.setWidget(this._blindPotTable, !0)
            })) : (this._blindPotTable.getComponent(_).slideView.show(!0, (() => {
                this._blindPotTable = null
            })), this._hallScript.controlHallBlockLayer(!1, this.name), this._hallScript.setWidget(this._blindPotTable, !0))
        }
        updateLateReg() {
            if (this._mttHallInfo && this._mttHallInfo.Status < 100 && (R.updateTimeLeftSec(this._mttHallInfo), p.lastSelectedTournamentListItem && p.lastSelectedTournamentListItem._tupleInfo)) {
                const t = p.lastSelectedTournamentListItem;
                t._tupleInfo.TimeLeftSec = this._mttHallInfo.TimeLeftSec, t.updateLateReg()
            }
            this._mttHallInfo && this._mttHallInfo.TimeLeftSec >= 0 ? this.abstractLabels[2].string = T.config.getStringData("Mtt_End_in").concat("  ", this.showRemainTime(!0, this._mttHallInfo.TimeLeftSec, !1)) : this.unschedule(this.updateLateReg)
        }
        updateRunning() {
            this._mttHallInfo && !this._mttHallInfo.PauseStatus ? this.abstractLabels[2].string = T.config.getStringData("Mtt_Running").concat("  ", this.showRemainTime(!0, ++this.gameDuration, !1)) : this.unschedule(this.updateRunning)
        }
        showRemainTime(t, e, n) {
            e = Math.max(e, 0), t && (e *= 1e3);
            let i = 6e4,
                a = 60 * i,
                o = Math.floor(e / a),
                s = Math.floor(e % a / i),
                r = Math.floor(e % a % i / 1e3);
            return this.formatTime(n, o, t, s, r)
        }
        formatTime(t, e, n, i, a) {
            const o = e.toString().padStart(2, "0"),
                s = a.toString().padStart(2, "0");
            let r;
            return t && e > 0 && (i += 60 * e), r = i.toString().padStart(2, "0"), !t && e > 0 ? `${o}:${r}:${s}` : n ? `${r}:${s}` : `${r}`
        }
        addJoinedTournaments(t, {
            joinStatus: e = 1,
            autoFeed: n = !1
        }) {
            R.addJoinedTournaments(t, {
                joinStatus: e,
                autoFeed: n
            }), R.needReloadAutoJoinTours = !0
        }
        removeJoinedTournaments(t) {
            R.removeJoinedTournaments(t), this.removeAutoJoinTours(t)
        }
        removeAutoJoinTours(t) {
            if (null != this._registeredMTTInfos && this._registeredMTTInfos.length > 0)
                for (let e = 0; e < this._registeredMTTInfos.length; e++) {
                    if (this._registeredMTTInfos[e].TournamentId == t) {
                        this._registeredMTTInfos.splice(e, 1), this._autoStartCalled.splice(e, 1);
                        break
                    }
                }
        }
        updateRegisteredTournamentDetail(t) {
            if (!R.needReloadAutoJoinTours || !C.getInstance().isConnected() || !this._registeredMTTInfos) return;
            R.needReloadAutoJoinTours = !1;
            let e = cc_mtt.vv.DataManager.JoinedTournaments || [];
            for (let t of e) t.JoinStatus > 0 && L.requestMttTournamentDetail(t.TournamentId, (e => {
                if (t.TournamentId !== p.LastSelectedTournamentId || 0 == e.ErrorCode && e.TournamentDetail || (p.LastSelectedTournamentId = 0), this._registeredMTTInfos && this._autoStartCalled)
                    if (e.ErrorCode) {
                        if (e.ErrorCode == b.commonProto.ErrorCode.Mtt_Tournament_Ended || e.ErrorCode == b.commonProto.ErrorCode.Mtt_Tournament_Canceled)
                            for (let e = 0; e < this._registeredMTTInfos.length; e++) {
                                if (this._registeredMTTInfos[e].TournamentId == t.TournamentId) {
                                    this._registeredMTTInfos.splice(e, 1), this._autoStartCalled.splice(e, 1);
                                    break
                                }
                            }
                    } else {
                        let t = e.TournamentDetail,
                            n = !1;
                        if (t && null != this._registeredMTTInfos && this._registeredMTTInfos.length > 0)
                            for (let e = 0; e < this._registeredMTTInfos.length; e++) {
                                if (this._registeredMTTInfos[e].TournamentId == t.TournamentId) {
                                    this._registeredMTTInfos[e] = t, n = !0;
                                    break
                                }
                            }
                        n || (this._registeredMTTInfos.push(e.TournamentDetail), this._autoStartCalled.push(!1))
                    }
            }), (e => {
                t.TournamentId === p.LastSelectedTournamentId && (p.LastSelectedTournamentId = 0)
            }), 5e3, {
                page: P.LOBBY
            })
        }
        updateAutoEnterWhenStart(t) {
            if (this.updateRegisteredTournamentDetail(t), null == this._registeredMTTInfos) return;
            let e, n, i = -1;
            for (let t = 0; t < this._registeredMTTInfos.length; t++) {
                const a = this._registeredMTTInfos[t];
                if (null == a) continue;
                if (this._autoStartCalled[t]) continue;
                let o = a.StartingTime;
                if (!o) continue;
                let s = (cc_mtt.vv.DataManager.getNow().getTime() - o) / 1e3;
                s < -60 || s >= -59 || R.isStartGameRequirementIsOk(a.SignupCount, a.LowerLimitPlayers, a.MultiFlightLevel) && (e && e >= o || (n = a, e = a.StartingTime, i = t))
            }
            if (i >= 0) {
                this._autoStartCalled[i] = !0;
                try {
                    T.MessageCenter.send("jumpToMtt"), this._hallScript.callGameView(n.GameMode, M.GAME_LEVEL_LIST_ID.MTT, n.TournamentId, 0, 0, !1, n.PlayOnJoint)
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.log("updateAutoEnterWhenStart fail: ", JSON.stringify(t)), this._hallScript.hidLoading()
                }
            }
        }
        initMttHall(t = null, e, n) {
            this.resetMttHall(), super.initMttHall(t, e, n), this.setLoading(!1)
        }
        setLoading(t = !0) {
            this.loadingBlocker && (this.loadingBlocker.active = t), t ? (this.abstractLabels.length && (this.abstractLabels[0].string = T.config.getStringData("Loading") + "..."), this.setEmpty(1), this.showLoadingContent(!1), this.unschedule(this.showLoadingContent), this.scheduleOnce(this.showLoadingContent, 3)) : this.scheduleOnce((() => {
                this.startingTime ? this.updateGameClock(this._timeDifference) : this.gameClockLabel && (this.gameClockLabel.string = "-")
            }))
        }
        showLoadingContent(t = !0) {
            this.loadingContentNode && (this.loadingContentNode.active = t)
        }
        setEmpty(t = 0) {
            var e, n;
            if ((null == (e = this.abstractLabels) ? void 0 : e.length) > 3) {
                for (let e = t; e < this.abstractLabels.length; e++) this.abstractLabels[e].string = "-";
                this.abstractLabels[2].string = T.config.getStringData("BonusStartDate")
            }
            if (null != (n = this.page0Label) && n.length)
                for (let t = 0; t < this.page0Label.length; t++) this.page0Label[t].string = "-";
            this.onChangedPage(0)
        }
        updateGameClock(t) {
            var e;
            super.updateGameClock(t), null != (e = this.loadingBlocker) && e.active && this.gameClockLabel && (this.gameClockLabel.string = "-")
        }
    }).prototype, "topLineThemeSystem", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(F.prototype, "backgroundBorder", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(F.prototype, "notStartedLabel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(F.prototype, "levelPanel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(F.prototype, "loadingBlocker", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(F.prototype, "loadingContentNode", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(F.prototype, "editBox", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = F)) || W));
    i._RF.pop()
}