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
import * as S from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as L from "./md5.mjs_cjs=&original=.js";
import * as A from "./cv.js";
import * as m from "./mttController.js";
import * as E from "./ConnectionTracing.js";
import * as w from "./NativeEvent.js";
import * as C from "./BranchSDKHandler.js";
import * as U from "./AppsflyerSDKHandler.js";
import * as v from "./LobbyTools.js";
import * as D from "./AnalyticsHandler.js";
import * as P from "./CommonModuleDeps.js";
import * as y from "./WepAppMessageManager.js";
import * as T from "./Helpers2.js";
import * as R from "./LoginController.js";
import * as M from "./MessageBroker.js";
import * as b from "./LoginView.js";
import * as N from "./Poco.js";
import * as O from "./Poco.js";
import * as I from "./CrashTracing.js";
import * as H from "./WebviewHelperData.js";

function main() {
    var F, k, B, W, x, V, G, j;
    s._RF.push({}, "be4a9xJ2uZM74FlQSJfawv6", "HotUpdate", void 0);
    var q = function(e) {
        return e[e.AutoLogin = 0] = "AutoLogin", e[e.TouristLogin = 1] = "TouristLogin", e[e.NormalLogin = 2] = "NormalLogin", e
    }(q || {});
    const {
        ccclass: Y,
        property: J,
        executionOrder: K
    } = n;
    e("HotUpdate", (F = K(-1), k = J(o), B = J(a), Y(W = F(((j = class e extends r {
        constructor(...e) {
            super(...e), i(this, "loadingPrefab", V, this), i(this, "manifestUrl", G, this), this._updating = !1, this._canRetry = !1, this._storagePath = "", this.versionCompareHandle = null, this._am = null, this._updateListener = null, this._checkListener = null, this._failCount = 0, this._nowVersion = null, this._isCheckHotVersion = !1, this._hasNewVersion = !1, this._hotupdatePath = "blackjack-remote-asset", this._logoMovPlayFinshed = !1, this._resLoadCompleted = !1, this._retryCount = 0, this._hotUpdateEnabled = !0, this._error_updating = !1, this._parallelLoginRequestCompleted = !1, this._parallelLoginSuccess = !1, this._parallelLoginResponse = void 0, this._parallelLoginResponseCode = void 0, this.loginType = q.NormalLogin, this._isDataEmpty = void 0, this._showDownloadBigUpdateManually = void 0, this.isNoInternetPopupShown = !1, this.hotUpdateResponse = null, this.getDynamicProxiesTries = 2, this._isServerConfigUpdated = !1
        }
        _getBytesString(e) {
            return e / 1024 >= 1024 ? (e / 1048576).toFixed(1) + "M" : (e / 1024).toFixed(1) + "KB"
        }
        checkCb(e) {
            var t;
            switch (l("Code: " + e.getEventCode()), e.getEventCode()) {
                case d.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    L.SwitchLoadingView.updateAppLoadingInfo("No version file found, skip hot update.");
                    break;
                case d.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case d.EventAssetsManager.ERROR_PARSE_MANIFEST:
                case d.EventAssetsManager.ALREADY_UP_TO_DATE:
                    break;
                case d.EventAssetsManager.NEW_VERSION_FOUND:
                    L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_findVersionfileTips")), L.SwitchLoadingView.updateByteProgressBar(0), this._hasNewVersion = !0;
                    break;
                default:
                    return
            }
            null == (t = this._am) || t.setEventCallback(null), this._checkListener = null, this._updating = !1, this._hasNewVersion ? this._logoMovPlayFinshed && this.hotUpdate() : this.gotoLoadRes()
        }
        updateCb(t) {
            var i = !1,
                s = !1;
            switch (t.getEventCode()) {
                case d.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    l("in hotupdate updateCb() ERROR_NO_LOCAL_MANIFEST "), L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_noVersionfileTips")), s = !0;
                    break;
                case d.EventAssetsManager.UPDATE_PROGRESSION:
                    l("in hotupdate updateCb() UPDATE_PROGRESSION ");
                    const o = t.getPercent(),
                        a = "number" != typeof o || isNaN(o) ? 0 : o,
                        n = Math.ceil(100 * a);
                    if (L.SwitchLoadingView.updateByteProgressPercent(n + "%"), L.SwitchLoadingView.updateByteProgressBar(o), t.getTotalBytes() > 0) {
                        this._getBytesString(t.getDownloadedBytes()), this._getBytesString(t.getTotalBytes());
                        L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_updatingVersionTips"))
                    }
                    t.getMessage();
                    break;
                case d.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case d.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    l("in hotupdate updateCb() ERROR_PARSE_MANIFEST ERROR_DOWNLOAD_MANIFEST "), s = !0;
                    break;
                case d.EventAssetsManager.ALREADY_UP_TO_DATE:
                    l("in hotupdate updateCb() ALREADY_UP_TO_DATE "), s = !0, p.restart();
                    break;
                case d.EventAssetsManager.UPDATE_FINISHED:
                    l("in hotupdate updateCb() UPDATE_FINISHED "), i = !0;
                    break;
                case d.EventAssetsManager.UPDATE_FAILED:
                    if (l("in hotupdate updateCb() UPDATE_FAILED "), L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_updateFileTips") + t.getMessage()), this._error_updating) {
                        this.restartTheApp();
                        break
                    }
                    this._updating = !1, this._canRetry = !0, this.retry();
                    break;
                case d.EventAssetsManager.ERROR_UPDATING:
                    if (L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_updateErrorTips") + ", " + t.getMessage()), l("Resource update error: " + t.getAssetId() + ", " + t.getMessage()), this.has429StatusCode(t)) {
                        l("Resource update error: 429 Too Many Requests"), g.localStorage.setItem(e.ShouldLimitMaxHotUpdateTaskKey, "true"), this.restartTheApp();
                        break
                    }
                    this._error_updating = !0, this._updating = !1, this._canRetry = !0, this.retry();
                    break;
                case d.EventAssetsManager.ERROR_DECOMPRESS:
                    l("in hotupdate updateCb() ERROR_DECOMPRESS ")
            }
            if (s && (this._am.setEventCallback(null), this._updateListener = null, this._updating = !1), i) {
                this._am.setEventCallback(null), this._updateListener = null;
                var o = d.fileUtils.getSearchPaths(),
                    a = this._am.getLocalManifest().getSearchPaths();
                l(JSON.stringify(a)), Array.prototype.unshift.apply(o, a), g.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(o)), d.fileUtils.setSearchPaths(o), g.isNative && this.createLastVersionIfNotExist(), this.hardRestartTheApp()
            }
        }
        restartTheApp() {
            this.scheduleOnce((() => {
                p.restart()
            }), 0)
        }
        terminateTheApp() {
            p.end()
        }
        hardRestartTheApp() {
            E.hardRestart()
        }
        retry() {
            if (!this._updating && this._canRetry) {
                if (this._canRetry = !1, this._retryCount++, this._retryCount > 1) return void L.SwitchLoadingView.showRetryPanel(L.config.getStringData("ErrorToast33"));
                L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_retryTips")), this._am.downloadFailedAssets()
            }
        }
        checkUpdate() {
            if (!this._updating) {
                var e;
                if (l("checkUpdate getState:" + this._am.getState()), l("native.AssetsManager.State.UNINITED:" + d.AssetsManager.State.UNINITED), this._am.getState() === d.AssetsManager.State.UNINITED) this._am.loadLocalManifest(null == (e = this.manifestUrl) ? void 0 : e.nativeUrl), this._am.setDomainOverride(L.config.getStringData("APP_UPDATE_DOWNLOAD", !0));
                this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded() && (this._am.setEventCallback(this.checkCb.bind(this)), this._isCheckHotVersion = !0, this._am.checkUpdate(), this._updating = !0)
            }
        }
        hotUpdate() {
            if (this._am && !this._updating) {
                if (this._am.setEventCallback(this.updateCb.bind(this)), this._am.getState() === d.AssetsManager.State.UNINITED) {
                    var e, t = null == (e = this.manifestUrl) ? void 0 : e.nativeUrl;
                    this._am.loadLocalManifest(t), this._am.setDomainOverride(L.config.getStringData("APP_UPDATE_DOWNLOAD", !0))
                }
                this._failCount = 0, this._am.update(), L.SwitchLoadingView.updateByteProgressBar(0), this._updating = !0
            }
        }
        responseGetHotUpdateUrl(t) {
            var i;
            if (this.dynamicDownloadURL(t), !g.isNative || !this.manifestUrl) return;
            L.httpHandler.onGetHotUpdateUrl(t, this.modifyAppLoadUrlForManifestFile.bind(this), null == (i = this.manifestUrl) ? void 0 : i.nativeUrl) ? e.AutoUpdateEnabled && g.isNative && (g.os === g.OS.OSX || g.os === g.OS.WINDOWS || g.os === g.OS.ANDROID) && L.dataHandler.getUserData().download_url.includes("AutoUpdate") ? this.triggerAutoUpdate(t) : L.netWorkManager.OnHttplogin() : this.startCheckUpdate()
        }
        dynamicDownloadURL(e) {
            if (this.hotUpdateResponse = e, e.update.downloadUrl) {
                const t = L.config.getStringData("APP_UPDATE_DOWNLOAD", !0).replace(/\/+$/, "");
                e.update.downloadUrl = e.update.downloadUrl.replace(/^(https?:\/\/)([^\/:]+)(:\d+)?/i, (() => t)), E.updatePackageDomain(t.replace(/^https?:\/\//, ""))
            }
        }
        triggerAutoUpdate(e) {
            console.log(`responseGetHotUpdateUrl value: ${JSON.stringify(e)}`), L.MessageCenter.register("auto-update-progress", this.onAutoUpdateProgress.bind(this), this.node), L.MessageCenter.register("auto-update-updated", this.onAutoUpdateFinished.bind(this), this.node), L.MessageCenter.register("auto-update-error", this.onAutoUpdateError.bind(this), this.node), E.checkAutoUpdate(L.dataHandler.getUserData().download_url), this.onAutoUpdateProgress("0")
        }
        showNoInternetPopUp(e) {
            const t = L.config.getStringData(e),
                i = L.config.getStringData("Hotupdate_noNetwork"),
                s = L.config.getStringData("Hotupdate_tryAgainBtn"),
                o = L.config.getStringData("Hotupdate_tryAgainBtn");
            "" == t || "" == i || "" == s || "" == o || this.isNoInternetPopupShown || (this.isNoInternetPopupShown = !0, L.popUp.showMsg({
                title: L.config.getStringData(e),
                txt: L.config.getStringData("Hotupdate_noNetwork"),
                isTwoBtn: !0,
                sureCallback: () => {
                    this.isNoInternetPopupShown = !1, this.restartTheApp()
                },
                cancelCallback: () => {
                    this.isNoInternetPopupShown = !1, this.terminateTheApp()
                },
                sureLabel: L.config.getStringData("Hotupdate_tryAgainBtn"),
                cancelLabel: L.config.getStringData("App_Exit_Popup_Close_App_Button_Text"),
                showAboveLoadingView: !0
            }))
        }
        onAutoUpdateProgress(e) {
            if (!h(this) || !h(this.node)) return;
            let t = Number(e);
            console.log(`HotUpdate.onAutoUpdateProgress: ${t}`), L.SwitchLoadingView.updateByteProgressBar(t / 100), L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_updatingVersionTips")), L.SwitchLoadingView.updateByteProgressPercent(t + "%")
        }
        onAutoUpdateFinished(e) {
            h(this) && h(this.node) && console.log(`HotUpdate.onAutoUpdateFinished: ${e}`)
        }
        onAutoUpdateError(e) {
            if (h(this) && h(this.node)) {
                if (console.log(`HotUpdate.onAutoUpdateError: ${e}`), "FailToDownload" == e) {
                    if (1 == L.server.nextProxy("APP_UPDATE_DOWNLOAD", !1)[0]) return void this.responseGetHotUpdateUrl(this.hotUpdateResponse);
                    L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("ErrorToast33"))
                }
                "PermissionsRequired" != e ? L.SwitchLoadingView.showRetryPanel(L.config.getStringData("ErrorToast33")) : this._showDownloadBigUpdateManually = !0
            }
        }
        update() {
            this._showDownloadBigUpdateManually && (this._showDownloadBigUpdateManually = !1, L.netWorkManager.OnHttplogin())
        }
        onGetHotUpdateUrlFailed(e) {
            L.SwitchLoadingView.updateByteProgressBar(0), L.SwitchLoadingView.showRetryPanel(L.config.getStringData("Hotupdate_Get_URL_Failed"))
        }
        requestHotupdateUrl() {
            l("in hotupdate requestHotupdateUrl()");
            let e = "";
            g.isNative && (L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_checkUpdateingTips")), L.appConfig.isProd ? L.dataHandler.setServerId(L.Enum.ServerButtonType.ServerButtonType_zhenshifu) : L.dataHandler.setServerId(L.Enum.ServerButtonType.ServerButtonType_ceshifu));
            let t = 1,
                i = !1;
            g.os == g.OS.IOS ? i = L.native.isWideScreen() : L.config.IS_WIDESCREEN && (i = !0), i ? t = 0 : L.config.IS_FULLSCREEN && (t = 2);
            let s = {
                clientType: L.config.GET_CLIENT_TYPE(),
                user_id: L.tools.GetStringByCCFile("user_id") ? L.tools.GetStringByCCFile("user_id") : 0,
                version: L.config.GET_BIG_VERSION(),
                deviceType: g.isNative ? g.os : "web",
                DevicePixelType: t
            };
            e += L.http.getUpdateCheckURL(), l("request url sent: " + e + " requestObj: " + JSON.stringify(s));
            let o = L.httpHandler.requestHotupdateUrl(e, s, this.responseGetHotUpdateUrl.bind(this), this.onGetHotUpdateUrlFailed.bind(this));
            l("  responsed result : " + JSON.stringify(o)), g.isNative && "no_wifi" == o && this.showNoInternetPopUp("ErrorToast0")
        }
        onLoad() {
            console.log("[WEB LOAD MEASURE] Running as an exported build or outside Cocos Creator."), console.timeLog("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoad]"), c.ENABLE_WEBGL_ANTIALIAS = !0, L.initBaseClass(), this.initModules(), L.appConfig.isWebApp && (u.enabledCssRotate = !1, window.dispatchEvent(new Event("resize")), T.getInstance().init(), R.getInstance().init()), L.native.setPortrait(!0, !0, !0, {
                disableCssRotation: L.appConfig.isWebApp
            }), L.native.setAutoRotate(!1), L.config.adaptScreen(this.node), L.resMgr.adaptWidget(this.node, !0, !1), L.config.setCurrentScene(L.Enum.SCENE.HOTUPDATE_SCENE), this.registerMsg(), L.config.addErrorEvent(), g.isBrowser && (L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoad][initWebLocation][start]"), L.native.initWebLocation(), L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoad][initWebLocation][finish]")), L.setLoadingPrefab(this.loadingPrefab), P.readQueryParams(), L.init(), L.domainMgr.initLoginServer(), L.updateWinSize(), L.config.SET_DISPLAYSTATS(), this.setStartNumber();
            try {
                L.CacheUtils.initCache()
            } catch (e) {
                console.log("CacheUtils initCache failed.")
            }
            L.appConfig.isLandscapeLayout && p.on("window_close", this.onWindowClose.bind(this), this), L.tools.SaveStringByCCFile("last_gameType", "1"), U.saveLastSelectedTabToFile(L.appConfig.isLandscapeLayout ? "nlhe" : ""), E.registerOrientationChangedEvent(), L.appConfig.isWebApp && S.on("canvas-resize", (() => {
                const e = f.getScene();
                if (L.config.reInitSize(), !L.roomManager.checkIsSceneMiniGame(e.name)) {
                    const t = e.getComponentInChildren(_);
                    L.config.adaptScreen(t.node)
                }
                L.resMgr.adaptWidget(e, !0, !1)
            })), L.appConfig.enablePocoSDK && setTimeout((() => {
                L.pocoManager = new b
            }), 3e3), L.SwitchLoadingView.show("", !1, !1, !0), this.getDynamicProxies()
        }
        getDynamicProxies() {
            this.getDynamicProxiesTries--;
            const e = L.config.getStringData("CMS_DYNAMIC_PROXY", !0) + "?" + I.getCMSConfigParams();
            L.http.sendRequestV2(e, {}, this.onGetDynamicProxiesSuccess.bind(this), this.onGetDynamicProxiesFail.bind(this), L.http.HttpRequestType.GET, null, !1, !1, !1, null, !0, !0)
        }
        onGetDynamicProxiesSuccess(e) {
            null != e && null != e.config && null != e.config.proxies && "object" == typeof e.config.proxies && (L.server.dynamicProxies = e.config.proxies, e.config.env = L.appConfig.envName, L.tools.SaveStringByCCFile("CDN_proxies", JSON.stringify(e.config))), L.appConfigServer.getConfigFromServer()
        }
        onGetDynamicProxiesFail(e) {
            if (this.getDynamicProxiesTries > 0) this.getDynamicProxies();
            else {
                if (L.server.nextProxy("CMS_DYNAMIC_PROXY", !1)[0]) this.getDynamicProxiesTries = 2, this.getDynamicProxies();
                else {
                    let e = L.tools.GetStringByCCFile("CDN_proxies");
                    if (null != e && "" != e) {
                        let t = L.tryParseJSON(e);
                        null != t && (t.env == L.appConfig.envName ? L.server.dynamicProxies = t.proxies : L.tools.RemoveStringByCCFile("CDN_proxies"))
                    }
                    L.appConfigServer.getConfigFromServer()
                }
            }
        }
        onFinishUpdateServerConfig() {
            this._isServerConfigUpdated || (this.loadResAndStartSession(), this._isServerConfigUpdated = !0)
        }
        loadResAndStartSession() {
            if (L.resMgr.loadBaseResource(this.toStart.bind(this)), L.appConfig.isWebApp) {
                var e;
                L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][onLoad][preloadSceneWidthRes][HallScene]"), L.resMgr.preloadSceneWidthRes(L.Enum.SCENE.HALL_SCENE, (() => {
                    L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][FINISHED][preloadSceneWidthRes][HallScene]")
                }), (() => {})), P.connectToWebApp(y.Poker);
                window.location !== (null == (e = window.parent) ? void 0 : e.location) || this.tryParallelLoginRequest()
            }
            L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoad][LoadBaseResource]"), m.hasInstance() && m.getInstance().startSession()
        }
        onWindowClose(e) {
            1 == e && L.showAppExitPopup(!1)
        }
        setStartNumber() {
            let e = L.tools.GetStringByCCFile("startNumber"),
                t = L.Number(e) + 1;
            L.tools.SaveStringByCCFile("startNumber", t.toString())
        }
        registerMsg() {
            L.MessageCenter.register("responseFailed_get_resource_url", this.noNetwork.bind(this), this.node), L.MessageCenter.register("responseFailed_noNetwork", this.showNoInternetPopUp.bind(this), this.node), L.MessageCenter.register(L.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccess.bind(this), this.node), L.MessageCenter.register(L.Enum.MessageCenterAction.OnLoginSuccessActionsReq, this.onLoginSuccess.bind(this), this.node), L.MessageCenter.register("gotoloadres", this.gotoLoadRes.bind(this), this.node), L.MessageCenter.register(L.Enum.MessageCenterAction.webAppReceiveAuth, this.onWebAppReceiveAuth.bind(this), this.node), L.MessageCenter.register("retryButtonClicked", this.hardRestartTheApp.bind(this), this.node), L.MessageCenter.register(L.Enum.MessageCenterAction.FinishUpdateServerConfig, this.onFinishUpdateServerConfig.bind(this), this.node)
        }
        onLoginSuccess(e) {
            null != e ? this.onFailedLogin(e) : (L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoginSuccess] ... Switch to HallScene"), L.SwitchLoadingView.show(L.config.getStringData("Loading"), !1, !0, !1), w.getInstance().BranchSDKLogin(L.dataHandler.getUserData().getUserIdS().toString()), C.getInstance().AppsflyerSDKLogin(L.dataHandler.getUserData().getUserIdS().toString()), this.switchScene(L.Enum.SCENE.HALL_SCENE))
        }
        noNetwork(e) {
            this._logoMovPlayFinshed && L.SwitchLoadingView.updateAppLoadingInfo(e)
        }
        fairplayCallback() {
            this._logoMovPlayFinshed = !0, this._hasNewVersion ? this.hotUpdate() : this.checkIfReadyToLogin()
        }
        toStart() {
            l("in hotupdate toStart()"), A.init(), v.getInstance().sendEvent(L.Enum.CurrentScreen.ApplicationStarted, L.Enum.segmentEvent.ApplicationStarted), L.domainMgr.init_server_file_path(), L.config.initDeviceModel(), L.appConfig.isWebApp ? this.forceShowContent() : this.startLoadingAnimation(), L.appConfig.isWebApp || L.security.locationMonitor.getLocationDetails((() => {
                L.dynamicPromoController.init()
            }))
        }
        forceShowContent() {
            L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][forceShowContent]"), L.SwitchLoadingView.updateAppVersionText(), this.fairplayCallback(), this.checkAndStartHotUpdate()
        }
        checkAndStartHotUpdate() {
            return !g.isNative || g.os !== g.OS.WINDOWS && g.os !== g.OS.OSX || setTimeout((() => {
                f.hideMainLoadingWindow()
            }), 750), g.isNative ? g.os == g.OS.ANDROID && "boolean" == typeof window.is_emu && window.is_emu && !L.native.IsSimulator() ? (l("can not proceed hot update on simulator"), void L.TP.showMsg(L.config.getStringData("Run_On_Mobile_Warning"), L.Enum.ButtonStyle.GOLD_BUTTON, (() => {
                p.end()
            }))) : (this._storagePath = (d.fileUtils ? d.fileUtils.getWritablePath() : "/") + this._hotupdatePath, void(h(window.client_environment, !0) || L.tools.isCocosSimulator() ? this._hotUpdateEnabled ? this.requestHotupdateUrl() : this.gotoLoadRes() : l("原生环境main.js未配置client_environment环境变量!!!!!"))) : (g.isBrowser || window.is_emu || !this._hotUpdateEnabled || this.requestHotupdateUrl(), void this.gotoLoadRes())
        }
        startCheckUpdate() {
            l("in startCheckUpdate");
            var t = this;
            if (this.versionCompareHandle = function(e, i) {
                    t._isCheckHotVersion && (t._nowVersion = i), console.log("JS Custom Version Compare: version A is " + e + ", version B is " + i);
                    for (var s = e.split("."), o = i.split("."), a = 0; a < s.length; ++a) {
                        var n = parseInt(s[a]),
                            r = parseInt(o[a] || "0");
                        if (n !== r) return n - r
                    }
                    return o.length > s.length ? -1 : 0
                }, this._am = new d.AssetsManager("", this._storagePath, this.versionCompareHandle), this._am.setVerifyCallback((function(e, t) {
                    if (l("Hot update files: " + e), ".manifest" == e.substr(e.length - 9, 9)) return l("Hot update files 99999999: " + e), !0;
                    let i = "";
                    d.fileUtils.isFileExist(e) ? i = H(new Uint8Array(d.fileUtils.getDataFromFile(e))) : l(e + "  file does not exist");
                    t.compressed;
                    var s = t.md5;
                    t.path, t.size;
                    return l(e + "md5Value ==" + i + "  expectedMD5 ==" + s), i == s
                })), g.os === g.OS.ANDROID && this._am.setMaxConcurrentTask(10), "true" === g.localStorage.getItem(e.ShouldLimitMaxHotUpdateTaskKey) && (l("setMaxConcurrentTask to " + e.MaxHotUpdateTask), this._am.setMaxConcurrentTask(e.MaxHotUpdateTask), g.localStorage.removeItem(e.ShouldLimitMaxHotUpdateTaskKey)), L.SwitchLoadingView.updateByteProgressBar(0), this.hadDifferentEnvironment()) return l("Environment is changed, delete all cached resources and restart the app"), this.clearCachedResources(), void this.hardRestartTheApp();
            this.checkBigVersion() ? this.gotoLoadRes() : this.checkUpdate()
        }
        checkBigVersion() {
            var e;
            if (!h(window.big_version, !0)) return l("big_version is invallid"), !1;
            l("window.big_version:" + window.big_version);
            let t, i = !1,
                s = this;
            if (t = window.big_version, s._am.loadLocalManifest(null == (e = s.manifestUrl) ? void 0 : e.nativeUrl), s._am.setDomainOverride(L.config.getStringData("APP_UPDATE_DOWNLOAD", !0)), l("self._storagePath :" + s._storagePath), d.fileUtils.isFileExist(s._storagePath + "/version.txt")) {
                l("The version.txt file is detected");
                let e = d.fileUtils.getStringFromFile(s._storagePath + "/version.txt");
                l("last version：" + e + "current version：" + t), s.versionCompareHandle(t, e) > 0 ? (l("Now for the new major version, delete all cached resources"), this.clearCachedResources(), i = !0) : l("This is not a new major version, please continue to check whether there is a hot update")
            } else l("No version.txt file detected");
            return i
        }
        hadDifferentEnvironment() {
            let e = this._storagePath + "/environment.txt";
            if (d.fileUtils.isFileExist(e)) {
                let t = d.fileUtils.getStringFromFile(e);
                if (window.client_environment != t) return !0
            }
            return !1
        }
        clearCachedResources() {
            d.fileUtils.isDirectoryExist(this._storagePath) && (l("Cache file detected"), L.SwitchLoadingView.updateAppLoadingInfo("Cache file detected"), d.fileUtils.removeDirectory(this._storagePath + "/")), d.fileUtils.isDirectoryExist(this._storagePath + "_temp") && (l("Temporary cache file detected"), d.fileUtils.removeDirectory(this._storagePath + "_temp/"))
        }
        createLastVersionIfNotExist() {
            d.fileUtils.isDirectoryExist(this._storagePath) || (d.fileUtils.createDirectory(this._storagePath), l("writeLastVersion::Create a folder first"));
            let e = this._storagePath + "/version.txt";
            h(window.big_version, !0) && !d.fileUtils.isFileExist(e) && (l("writeLastVersion::::==>" + window.big_version), d.fileUtils.writeStringToFile(window.big_version, e));
            let t = this._storagePath + "/environment.txt";
            h(window.client_environment, !0) && !d.fileUtils.isFileExist(t) && (l("writeLastEnvironment::::==>" + window.client_environment), d.fileUtils.writeStringToFile("" + window.client_environment, t))
        }
        writeLastVersion() {
            d.fileUtils.isDirectoryExist(this._storagePath) || (d.fileUtils.createDirectory(this._storagePath), l("writeLastVersion::Create a folder first")), h(window.big_version, !0) && (l("writeLastVersion::::==>" + window.big_version), d.fileUtils.writeStringToFile(window.big_version, this._storagePath + "/version.txt")), h(window.client_environment, !0) && (l("writeLastEnvironment::::==>" + window.client_environment), d.fileUtils.writeStringToFile("" + window.client_environment, this._storagePath + "/environment.txt")), l("this._storagePath: " + this._storagePath)
        }
        gotoLoadingScene() {
            L.tools.init(), g.isNative && this.writeLastVersion();
            let e = L.Enum.SCENE.LOADING_SCENE;
            L.resMgr.preloadSceneWidthRes(e, (() => {
                const t = (new Date).getTime();
                f.loadScene(e, ((i, s) => {
                    var o;
                    null == (o = N.getInstance()) || o.trace(O.SceneLoadTime, O.SceneLoadTime, {
                        LoadType: "Load",
                        SceneName: e,
                        Message: i ? i.message || i : "",
                        Stack: i ? i.stack || i : "",
                        LoadTimeMS: (new Date).getTime() - t
                    }, !1, null != i)
                }))
            }))
        }
        gotoLoadRes() {
            if (l("in gotoLoadRes"), L.tools.init(), g.isNative) {
                this.writeLastVersion();
                let e = d.fileUtils ? d.fileUtils.getWritablePath() : "/";
                l(" writePath:" + e), L.native.SetWriteblePath(e)
            } else g.isBrowser;
            L.config.GET_CLIENT_TYPE() == L.Enum.ClientType.H5WebPage && (L.native.SYwebjsToClient('{"cmd":"1001"}'), L.native.SYwebjsToClient('{"cmd":"1002"}'), L.native.SYwebjsToClient('{"cmd":"1004"}'), g.os == g.OS.ANDROID && L.native.SYwebjsToClient('{"cmd": "1005", op: 0}'), g.os == g.OS.IOS && L.native.SYwebjsToClient('{"cmd": "1014"}'), L.native.SYwebjsToClient('{"cmd": "1011"}'), L.native.SYwebjsToClient('{"cmd": "1010"}'), L.native.SYwebjsToClient('{"cmd": "1013", "op": 0}')), L.appConfig.isWebApp || this.tryParallelLoginRequest(), L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][gotoLoadRes][start loadDataFile]"), L.resMgr.loadDataFile(this._onLoadingProgress.bind(this), null, (() => {
                this.restartTheApp()
            }))
        }
        _onLoadingProgress(e, t, i, s) {
            l(L.StringTools.format("load res success - path:{0}, type:{1}, completedCount:{2}, totalCount:{3}", i, s, e, t)), L.tools.loadingStatus("[WEB LOAD MEASURE]", L.StringTools.format("load res success - path:{0}, type:{1}, completedCount:{2}, totalCount:{3}", i, s, e, t));
            let o = Math.ceil(e / (t + 1) * 100);
            if (o = o > 100 ? 100 : o, L.config.GET_CLIENT_TYPE(), L.Enum.ClientType.H5WebPage, this._logoMovPlayFinshed) {
                let e = o / 100;
                L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_Loading_resource")), L.SwitchLoadingView.updateByteProgressBar(e), L.SwitchLoadingView.updateByteProgressPercent(100 * e + "%"), l("Update Progress... #######################")
            }
            e >= t && (L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][_onLoadingProgress][finished loadDataFile]"), this._resLoadCompleted = !0, this.checkIfReadyToLogin(), L.appConfig.isWebApp && !this._parallelLoginRequestCompleted && R.getInstance().sendGetLoggedInUserData())
        }
        onDestroy() {
            this._updateListener && (this._am.setEventCallback(null), this._updateListener = null), L.MessageCenter.unregister("auto-update-progress", this.node), L.MessageCenter.unregister("auto-update-updated", this.node), L.MessageCenter.unregister("auto-update-error", this.node), L.MessageCenter.unregister("responseFailed_get_resource_url", this.node), L.MessageCenter.unregister("responseFailed_noNetwork", this.node), L.MessageCenter.unregister(L.Enum.MessageCenterAction.OnLoginSuccess, this.node), L.MessageCenter.unregister(L.Enum.MessageCenterAction.OnLoginSuccessActionsReq, this.node), L.MessageCenter.unregister("gotoloadres", this.node), L.MessageCenter.unregister("retryButtonClicked", this.node), L.MessageCenter.unregister(L.Enum.MessageCenterAction.FinishUpdateServerConfig, this.node), L.appConfig.isLandscapeLayout && p.off("window_close", this.onWindowClose, this), L.MessageCenter.unregister(L.Enum.MessageCenterAction.webAppReceiveAuth, this.node)
        }
        modifyAppLoadUrlForManifestFile(e, t) {
            if (l("in hotupdate modifyAppLoadUrlForManifestFile()"), l("newAppHotUpdateUrl: " + e + "  localManifestPath: " + t), d.fileUtils.isFileExist(this._storagePath + "/project.manifest")) {
                l("There is a downloaded manifest file"), l("StoragePath for remote asset1 : ", this._storagePath);
                let t = d.fileUtils.getStringFromFile(this._storagePath + "/project.manifest"),
                    i = JSON.parse(t);
                i.packageUrl = e, i.remoteManifestUrl = e + "project.manifest", i.remoteVersionUrl = e + "version.manifest";
                let s = JSON.stringify(i),
                    o = d.fileUtils.writeStringToFile(s, this._storagePath + "/project.manifest");
                l("Written Status : " + o + " write path: " + this._storagePath + "/project.manifest")
            } else {
                l("StoragePath for remote asset2 : ", this._storagePath), l("No manifest file downloaded", e, t), l("11111111:" + t);
                let i = d.fileUtils.getStringFromFile(t),
                    s = JSON.parse(i);
                l("3333333"), s.packageUrl = e, s.remoteManifestUrl = s.packageUrl + "project.manifest", s.remoteVersionUrl = s.packageUrl + "version.manifest";
                let o = JSON.stringify(s);
                d.fileUtils.isDirectoryExist(this._storagePath) || d.fileUtils.createDirectory(this._storagePath);
                let a = d.fileUtils.writeStringToFile(o, this._storagePath + "/project.manifest");
                l("this Written Status : ", this._storagePath), l("Written Status : ", a)
            }
        }
        clearHotFileCache() {
            d.fileUtils.isDirectoryExist(this._storagePath + "_temp") && (d.fileUtils.removeDirectory(this._storagePath + "_temp/"), l("Temporary folder exists")), d.fileUtils.isDirectoryExist(this._storagePath + "_temp") ? l("Temporary folder not cleaned") : l("Temporary folder cleaned")
        }
        tryParallelLoginRequest() {
            if (L.appConfig.isWebApp && this._parallelLoginRequestCompleted) return;
            let e = L.appConfig.isWebApp ? null : L.dataHandler.getUserData().loadLoginDataFromFile();
            this._isDataEmpty = null == e || !e.username || "" == e.username;
            let t = L.Number(L.tools.GetStringByCCFile("is_tourist_login")),
                i = null == e || !e.username || "" == e.username || !e.passwd || "" == e.passwd;
            if (L.appConfig.getLoginConfig().guestAutoLogin && this._isDataEmpty || t) return this.loginType = q.TouristLogin, void L.httpHandler.requestTouristLogin(this.onParallelLoginSuccess.bind(this), this.onParallelLoginFailed.bind(this), !1);
            if (i) this._parallelLoginRequestCompleted = !0;
            else {
                this.loginType = q.AutoLogin;
                const t = {
                    loginMode: e.loginMode,
                    userName: e.username,
                    password: e.passwd
                };
                L.httpHandler.requestLogin(t, this.onParallelLoginSuccess.bind(this), this.onParallelLoginFailed.bind(this), !1)
            }
        }
        onParallelLoginSuccess(e, t = 0) {
            this._parallelLoginRequestCompleted = !0, this._parallelLoginSuccess = !0, this._parallelLoginResponse = e, this.loginType === q.AutoLogin && (this._parallelLoginResponseCode = t), this.checkIfReadyToLogin()
        }
        onParallelLoginFailed(e) {
            this._parallelLoginRequestCompleted = !0, this._parallelLoginSuccess = !1, this._parallelLoginResponse = e, this.checkIfReadyToLogin()
        }
        checkIfReadyToLogin() {
            if (this.preloadFinished()) switch (L.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][checkIfReadyToLogin][call req to login]"), this.loginType) {
                case q.AutoLogin:
                    this._parallelLoginSuccess ? this.onUserNameLoginSuccess(this._parallelLoginResponse, this._parallelLoginResponseCode) : this.onFailedLogin(this._parallelLoginResponse);
                    break;
                case q.TouristLogin:
                    this._parallelLoginSuccess ? L.httpHandler.onTouristLoginSuccess(this._parallelLoginResponse) : L.appConfig.isWebApp ? T.getInstance().onTouristLoginFailed(this._parallelLoginResponse) : L.httpHandler.onTouristLoginFail(this._parallelLoginResponse);
                    break;
                default:
                    if (L.appConfig.isWebApp) {
                        T.getInstance().switchToLoginOrRegistrationScene();
                        break
                    }
                    L.authenticator.logOutAndDoGuestLogin()
            }
        }
        onUserNameLoginSuccess(e, t) {
            if (210 == t) this.onFailedLogin(e);
            else {
                let t = L.httpHandler.getResponseCode(e);
                null != t && "0" != t ? this.onFailedLogin(e) : M.checkLegalDocPostLogin(e)
            }
        }
        onFailedLogin(e) {
            L.appConfig.isWebApp ? T.getInstance().switchToLoginOrRegistrationScene() : L.authenticator.logOutAndDoGuestLogin()
        }
        has429StatusCode(e) {
            if (null == e) return !1;
            let t = e.getMessage();
            return null != t && t.includes("(429)")
        }
        initModules() {
            D.init()
        }
        onWebAppReceiveAuth(e) {
            this.loginType = e.isGuest ? q.TouristLogin : q.AutoLogin, this.onParallelLoginSuccess(e.value)
        }
        switchScene(e) {
            this.preloadFinished() && L.action.switchScene(e)
        }
        preloadFinished() {
            return this._resLoadCompleted && this._parallelLoginRequestCompleted && this._logoMovPlayFinshed
        }
        startLoadingAnimation() {
            L.SwitchLoadingView.updateAppLoadingInfo(L.config.getStringData("Hotupdate_Loading_resource")), L.SwitchLoadingView.updateAppVersionText();
            const e = L.appConfig.isLandscapeLayout ? 0 : 4e3;
            setTimeout((() => {
                this.checkAndStartHotUpdate(), this.fairplayCallback()
            }), e)
        }
    }).ShouldLimitMaxHotUpdateTaskKey = "ShouldLimitMaxHotUpdateTask", j.MaxHotUpdateTask = 5, j.AutoUpdateEnabled = !0, j.LOGIN_ERROR_DATA = null, V = t((x = j).prototype, "loadingPrefab", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(x.prototype, "manifestUrl", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = x)) || W) || W));
    s._RF.pop()
}