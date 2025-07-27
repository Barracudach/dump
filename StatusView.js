import * as t from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as S from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as d from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as y from "./ThemeSystem.js";
import * as C from "./StatusController.js";
import * as p from "./cv.js";
import * as E from "./Enum.js";
import * as _ from "./HashMap.js";
import * as N from "./ColorSystemType.js";
import * as T from "./ColorSystemTypeOther.js";

function main() {
    var f, v;
    t._RF.push({}, "9e583rSx91Iio+9IMFFkAbq", "StatusView", void 0);
    const {
        ccclass: w,
        property: b
    } = i;
    let L = e("LatencyType", function(e) {
        return e[e.None = -1] = "None", e[e.Normal = 1e3] = "Normal", e[e.Slow = 3e3] = "Slow", e[e.VerySlow = 4e3] = "VerySlow", e[e.ExtremelySlow = 8e3] = "ExtremelySlow", e[e.Disconnect = -2] = "Disconnect", e
    }({}));
    class G {
        constructor() {
            this.serverUrl = "", this.serverType = [], this.latency = 0
        }
        containServerType(e) {
            for (let t = 0; t < this.serverType.length; t++) {
                if (this.serverType[t] == e) return !0
            }
            return !1
        }
        getLatencyType(e) {
            return e < 0 ? L.Disconnect : e <= L.Normal ? L.Normal : e <= L.Slow ? L.Slow : e <= L.VerySlow ? L.VerySlow : L.ExtremelySlow
        }
    }
    e("LatencyInfo", G);
    e("StatusView", w(((v = class e extends s {
        constructor(...e) {
            super(...e), this.signalCircleList = [], this.msgNode = null, this.systemTime = null, this.sessionTime = null, this.electric_text = null, this.electricBar = null, this.electricIng_img = null, this.is_loading = !1, this.batteryLevel = 100, this.mobile_signal = null, this.is_charging = !1, this.colorSettedObj = [], this.haveLatencyAsset = !1, this.connectionLatency = new _, this.loadedPrefab = null, this.loadedMiniGameStatusPrefab = null, this.statusController = null, this._cashGameStatusController = null, this._mttGamesStatusController = [], this._miniGameStatusController = null, this._lastMsgNodeActiveState = !0
        }
        init() {
            p.appConfig.getGeneralConfig().enableStatusView ? (p.resMgr.loadPrefabFromBundle("prefabs/topView", this.onPrefabLoaded.bind(this)), p.resMgr.loadPrefabFromBundle("prefabs/topViewMiniGame", this.onPrefabMiniGameLoaded.bind(this), null, !0), p.MessageCenter.register("on_change_delay", this.OnChangeDelay.bind(this), this), p.MessageCenter.register("switchSceneFinish", this.OnSceneChanged.bind(this), this)) : p.native.setMobileStatusBar(!0)
        }
        onPrefabMiniGameLoaded(e) {
            this.loadedMiniGameStatusPrefab = e
        }
        onPrefabLoaded(e) {
            this.loadedPrefab = e, p.appConfig.isLandscapeLayout || this.loadMobile(e)
        }
        loadMobile(e) {
            this.msgNode = n(e), o.addPersistRootNode(this.msgNode), this.msgNode.addComponent(a), console.log("cv.config.WIDTH：" + p.config.WIDTH + " cc.winsize.width：" + r.windowSize.width + " cc.view.getVisibleSize：" + l.getVisibleSize()), console.log("cc.view.getFrameSize().width:" + l.getFrameSize().width), p.updateWinSize(), console.log("cv.config.WIDTH：" + p.config.WIDTH + " cc.winsize.width：" + r.windowSize.width + " cc.view.getVisibleSize：" + l.getVisibleSize()), console.log("==========> this.msgNode.pos = " + this.msgNode.getPosition() + "," + r.windowSize.width + "~" + r.windowSize.height), this.msgNode.setSiblingIndex(p.Enum.ZORDER_TYPE.ZORDER_TOP), this.show(!1);
            for (var t = 0; t < 5; t++) this.signalCircleList.push(h("layout/leftNode/Image_index" + t + "/insideCircle_img", this.msgNode));
            this.systemTime = h("layout/timeNode/systime_text", this.msgNode), this.sessionTime = h("layout/timeNode/sestime_text", this.msgNode), this.electric_text = h("layout/rightNode/electric_text", this.msgNode), this.electricBar = h("layout/rightNode/statusNodes/electricBar", this.msgNode), this.electricIng_img = h("layout/rightNode/statusNodes/electricIng_img", this.msgNode), this.mobile_signal = h("layout/rightNode/statusNodes/mobile_signal", this.msgNode), this.colorSettedObj = this.msgNode.getComponentsInChildren(y);
            const i = p.native.getNotchStatus();
            1 == i ? this.systemTime = h("layout/rightNode/systime_text", this.msgNode) : 2 == i && h("layout/rightNode/statusNodes", this.msgNode).setParent(h("layout/timeNode/rightNodeHolder", this.msgNode)), this.showSystemTime(!0), p.config.GET_CLIENT_TYPE() != p.Enum.ClientType.CowboyWeb && (this.openView(), this.is_loading = !0), this.loadPingStatus()
        }
        getNodeInstance() {
            if (!this.loadedPrefab) return null;
            return n(this.loadedPrefab).getComponent(C)
        }
        getNodeMinigameInstance() {
            if (!this.loadedMiniGameStatusPrefab) return null;
            return n(this.loadedMiniGameStatusPrefab).getComponent(C)
        }
        getCashGameStatusController() {
            let e = this.getNodeInstance();
            return this._cashGameStatusController = e, this._cashGameStatusController
        }
        getMttGamesStatusController() {
            let e = this.getNodeInstance();
            return this._mttGamesStatusController.push(e), e
        }
        destroyMttGamesStatusController(e) {
            if (e)
                for (let t = 0; t < this._mttGamesStatusController.length; t++) {
                    if (this._mttGamesStatusController[t] === e) {
                        this._mttGamesStatusController.splice(t, 1);
                        break
                    }
                }
        }
        getMiniGameStatusController() {
            return null == this._miniGameStatusController && (this._miniGameStatusController = this.getNodeMinigameInstance()), this._miniGameStatusController
        }
        destroyMiniGameStatusController() {
            this._miniGameStatusController && this._miniGameStatusController.destroy(), this._miniGameStatusController = null
        }
        loadPingStatus() {
            this.msgNode && (this.statusController = this.msgNode.getComponent(C), this.statusController && this.statusController.haveAssets() ? (this.haveLatencyAsset = !0, this.statusController.showLatency(L.None)) : this.haveLatencyAsset = !1)
        }
        updateLatencyStatus(e, t, i) {
            let s = null;
            if (this.connectionLatency.has(e)) {
                s = this.connectionLatency.get(e);
                let i = !1;
                for (let e = 0; e < s.serverType.length; e++) {
                    if (s.serverType[e] == t) {
                        i = !0;
                        break
                    }
                }
                i || t == E.SeverType_None || s.serverType.push(t)
            } else s = new G, s.serverUrl = e, t != E.SeverType_None && (s.serverType = [t]), this.connectionLatency.add(e, s);
            s.latency = i, this.updatePingStatus()
        }
        updatePingStatus() {
            if (p.appConfig.isLandscapeLayout) this.connectionLatency.forEachKeyValue((e => {
                let t = e.value.getLatencyType(e.value.latency);
                if (e.value.containServerType(E.SeverType_Game) && this._cashGameStatusController && p.roomManager.getTotalRooms() > 0 && this._cashGameStatusController.showLatency(t), e.value.containServerType(E.SeverType_WebSocketType_HOLDEM_MTT) && this._mttGamesStatusController && this._mttGamesStatusController.length > 0)
                    for (let e = 0; e < this._mttGamesStatusController.length; e++) {
                        const i = this._mttGamesStatusController[e];
                        i && i.showLatency(t)
                    }
                e.value.containServerType(E.SeverType_Game) && this._miniGameStatusController && p.roomManager.getTotalRooms() > 0 && this._miniGameStatusController.showLatency(t)
            }));
            else {
                const e = p.config.getCurrentScene();
                if (p.roomManager.checkIsSceneMiniGame(e)) {
                    const e = this._miniGameStatusController;
                    this.connectionLatency.forEachKeyValue((t => {
                        const i = t.value,
                            s = i.getLatencyType(i.latency);
                        e && t.value.containServerType(E.SeverType_Game) && e.showLatency(s)
                    }))
                }
                if (!this.haveLatencyAsset) return;
                this.connectionLatency.forEachKeyValue((t => {
                    if (t.value.containServerType(E.SeverType_Game) && e == p.Enum.SCENE.GAME_SCENE || t.value.containServerType(E.SeverType_WebSocketType_HOLDEM_MTT) && e == p.Enum.SCENE.GAME_SCENE || t.value.containServerType(E.SeverType_WebSocketType_OMAHA_MTT) && e == p.Enum.SCENE.GAME_SCENE) {
                        const e = t.value.getLatencyType(t.value.latency);
                        this.showGameLatency(e)
                    }
                }))
            }
        }
        showMobileSignal(e) {
            this.mobile_signal && (this.mobile_signal.active = e)
        }
        showGameLatency(e) {
            var t;
            const i = p.config.getCurrentScene();
            if (p.roomManager.checkIsSceneMiniGame(i) && !p.appConfig.isLandscapeLayout) {
                const t = this._miniGameStatusController;
                t && t.showLatency(e)
            }
            if (!this.haveLatencyAsset) return this.statusController && this.statusController.showLatency(e), void(p.appConfig.isLandscapeLayout && p.MessageCenter.send(p.Enum.MessageCenterAction.statusLatencyUpdated, e));
            this.showMobileSignal(e == L.None), null == (t = this.statusController) || t.showLatency(e)
        }
        showLatencyStatus(e) {
            this.showGameLatency(e ? L.Normal : L.None)
        }
        onDestroy() {
            p.MessageCenter.unregister("on_change_delay", this), p.MessageCenter.unregister("switchSceneFinish", this)
        }
        openView() {
            c(this.msgNode, !0) && p.config.GET_CLIENT_TYPE() != p.Enum.ClientType.CowboyWeb && (this.msgNode.active || (this.show(!0), p.resMgr.adaptWidget(this.msgNode), this.updateValue(), o.getScheduler().schedule((function() {
                this.updateValue()
            }), this, 15)))
        }
        reset(e) {
            c(this.msgNode, !0) && p.config.GET_CLIENT_TYPE() != p.Enum.ClientType.CowboyWeb && (p.resMgr.adaptWidget(this.msgNode, !0), this.show(!0), this.showSystemTime(!0), this.showElectricImgs(!0, new g(p.config.WIDTH, p.config.HEIGHT)), this.updateValue(), e === p.Enum.SCENE.HUMANBOY_SCENE ? (this.showElectricImgs(!1), this.systemTime.setPosition(this.systemTime.position.x + 10, this.systemTime.position.y)) : e === p.Enum.SCENE.POKERMASTER_SCENE ? (this.showElectricImgs(!1), this.systemTime.setPosition(this.systemTime.position.x + 20, this.systemTime.position.y)) : e === p.Enum.SCENE.COWBOY_SCENE ? this.systemTime.setPosition(this.systemTime.position.x + 20, this.systemTime.position.y) : p.Enum.SCENE.VIDEOCOWBOY_SCENE)
        }
        show(e, t = !1) {
            c(this.msgNode, !0) && p.config.GET_CLIENT_TYPE() != p.Enum.ClientType.CowboyWeb && (this.msgNode.active = e, this._lastMsgNodeActiveState = e, this.msgNode.active && t && p.resMgr.adaptWidget(this.msgNode, !0))
        }
        showSystemTime(e, t) {
            c(this.systemTime) && (this.systemTime.active = e), c(this.sessionTime) && (this.sessionTime.active = e && t && p.appConfig.getGeneralConfig().showSessionTime), this.updateValue()
        }
        showElectricImgs(e, t) {
            if (!c(this.msgNode, !0)) return;
            let i = h("layout/rightNode", this.msgNode);
            i && (i.active = e, t && i.setPosition(i.parent.getComponent(m).convertToNodeSpaceAR(t)), p.resMgr.adaptWidget(i, !0))
        }
        updateValue() {
            if (!p.appConfig.getGeneralConfig().enableStatusView) return;
            if (!(this && this.msgNode && c(this.msgNode, !0) && this.msgNode.active)) return;
            u.isBrowser && p.config.GET_CLIENT_TYPE() == p.Enum.ClientType.H5WebPage && p.native.SYwebjsToClient('{"cmd": "1010"}'), this.getBatteryInfo();
            let e = p.StringTools.formatTime(Date.now(), p.Enum.eTimeType.Hour_Minute, !0);
            p.appConfig.getGeneralConfig().timeZone.nameAbbrev && (e += " " + p.appConfig.getGeneralConfig().timeZone.nameAbbrev), this.systemTime.getComponent(S).string = e
        }
        getBatteryInfo() {
            if (p.appConfig.getGeneralConfig().enableStatusView && c(this.msgNode, !0))
                if (this.onUpdateColors(), u.isBrowser && p.config.GET_CLIENT_TYPE() != p.Enum.ClientType.H5WebPage) {
                    let e = window.navigator;
                    if (u.OS.IOS) return;
                    e.getBattery().then(function(e) {
                        if (this.is_charging = e.charging, this.electricIng_img.active = this.is_charging, this.updateElectricNodeColor(this.is_charging), this.batteryLevel = e.level, this.batteryLevel && !(this.batteryLevel < 0)) {
                            var t = 100 * this.batteryLevel;
                            t = t >= 100 ? 100 : t, this.electric_text.getComponent(S).string = Math.floor(t) + "%", this.electricBar.getComponent(d).progress = .01 * t
                        }
                    }.bind(this))
                } else {
                    if (p.config.GET_CLIENT_TYPE() == p.Enum.ClientType.H5WebPage) {
                        let e = p.native.SYgetBatteryLevel();
                        if (null == e) return;
                        let t = JSON.parse(e);
                        this.batteryLevel = t.battery / 100, this.is_charging = t.is_charging, console.log("SYINfo ==== this.batteryLevel: = " + this.batteryLevel), console.log("SYINfo ==== this.is_charging: = " + this.is_charging), console.log("SYINfo ==== SYgetSysLanguage: = " + p.native.SYgetSysLanguage())
                    } else {
                        let e = p.native.invokeSyncFunc(p.nativeCMD.KEY_IS_BATTERY_CHARGE);
                        u.os === u.OS.IOS ? this.is_charging = "true" == e : this.is_charging = 0 != parseInt(e), this.batteryLevel = u.getBatteryLevel()
                    }
                    if (this.electricIng_img.active = this.is_charging, this.updateElectricNodeColor(this.is_charging), !this.batteryLevel || this.batteryLevel < 0) return;
                    var e = 100 * this.batteryLevel;
                    e = e >= 100 ? 100 : e, this.electric_text.getComponent(S).string = Math.floor(e) + "%", this.electricBar.getComponent(d).progress = .01 * e
                }
        }
        onUpdateColors() {
            if (this.isSceneWhiteBg())
                for (var e = 0; e < this.colorSettedObj.length; e++) this.colorSettedObj[e].setColorScheme(N.Other, T.TypoGraphyMain);
            else
                for (e = 0; e < this.colorSettedObj.length; e++) this.colorSettedObj[e].setColorScheme(N.Other, T.WhiteCreamy)
        }
        isSceneWhiteBg() {
            return p.config.getCurrentScene() == p.Enum.SCENE.LOADING_SCENE || p.config.getCurrentScene() == p.Enum.SCENE.LOGIN_SCENE || p.config.getCurrentScene() == p.Enum.SCENE.REGISTER_SCENE
        }
        updateElectricNodeColor(e) {
            let t = this.electricBar.getComponent(y);
            t && (e ? t.setColorScheme(N.Other, T.LightGreen) : this.isSceneWhiteBg() ? t.setColorScheme(N.Other, T.TypoGraphyMain) : t.setColorScheme(N.Other, T.WhiteCreamy))
        }
        updateSystemTimePos(e) {
            p.appConfig.getGeneralConfig().enableStatusView && c(this.systemTime, !0) && this.is_loading && (1 == e ? console.log(-p.config.WIDTH / 2 + 160) : !e && p.config.IS_FULLSCREEN)
        }
        OnChangeDelay() {
            let e = p.netWorkManager.connectionDelayMax;
            e < 100 ? this.setSignal(4) : e < 200 && e >= 100 ? this.setSignal(3) : e < 300 && e >= 200 ? this.setSignal(2) : this.setSignal(1)
        }
        setSignal(e) {
            if (c(this.mobile_signal, !0)) {
                this.mobile_signal.children.forEach((e => e.active = !1));
                for (var t = 0; t < e; t++) this.mobile_signal.children[t].active = !0
            }
        }
        OnSceneChanged(e) {
            e == p.Enum.SCENE.HALL_SCENE ? this.showSystemTime(!0, !0) : e == p.Enum.SCENE.GAME_SCENE || e == p.Enum.SCENE.GAME_SCENE_AOF || e == p.Enum.SCENE.JACKFRUIT_SCENE ? this.showSystemTime(!p.appConfig.getGeneralConfig().showSessionTime) : this.showSystemTime(!0), c(this.msgNode, !0) && (this.msgNode.active = !1), setTimeout((() => {
                c(this.msgNode, !0) && (this.msgNode.setSiblingIndex(-1), this.msgNode.active = this._lastMsgNodeActiveState)
            }), 200)
        }
        static getInstance() {
            return e.g_instance && e.g_instance.msgNode && c(e.g_instance.msgNode, !0) || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
    }).g_instance = void 0, f = v)) || f);
    t._RF.pop()
}