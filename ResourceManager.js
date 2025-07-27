import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as B from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as T from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as t from "./cc.js";
import * as d from "./cc.js";
import * as R from "./cc.js";
import * as v from "./cc.js";
import * as i from "./cc.js";
import * as L from "./cc.js";
import * as y from "./cc.js";
import * as N from "./cv.js";
import * as I from "./HashMap.js";
import * as M from "./Enum.js";
import * as F from "./Enum.js";
import * as D from "./BlockAdaptWidget.js";
import * as H from "./AppConfig.js";
import * as O from "./LocalizationController.js";
import * as w from "./ColorSystemType.js";
import * as k from "./ColorSystemWeight.js";
import * as mod9 from "./ColorSystemTypeOther.js";
import * as x from "./CrashTracing.js";
import * as P from "./CrashTracing.js";
import * as W from "./TweenControl.js";
import * as U from "./SeasonalBackgrounds.js";

function main() {
    t._RF.push({}, "835bc7ARG9Pg4lpiOqUNtQr", "ResourceManager", void 0);
    const V = e("IngameSettingTexturesThemesFolder", "game/tableBgs/themes/"),
        G = e("IngameSettingTexturesFolder", "textures/inGameSettings/"),
        X = (e("IngameSettingTexturesTableBgsFolder", G + "tableBgs/"), e("IngameSettingTexturesSpecialTableBgsFolder", G + "specialTableBgs/")),
        z = e("IngameSettingTexturesFinalTableBgsFolder", G + "finalTableBgs/"),
        J = (e("IngameSettingTexturesCardBackFolder", G + "cardBack/"), e("IngameSettingTexturesCardFrontFolder", G + "cardFront/")),
        K = e("HomePokerTexturePath", "textures/pokerType"),
        j = e("IngameSettingTexturesTableBgsFolder_SNG", "textures/jsng/holdem/bg/");
    e("headInfo", class {
        constructor() {
            this.plat = null, this.url = null, this.isOB = !1
        }
    });
    const Y = e("PlusMinusHoverColorSets", [{
            Normal: (new o).fromHEX("#1E379A"),
            Hover: (new o).fromHEX("#243FAC"),
            Click: (new o).fromHEX("#1B328B")
        }, {
            Normal: (new o).fromHEX("#902222"),
            Hover: (new o).fromHEX("#AF2D2D"),
            Click: (new o).fromHEX("#7C1E1E")
        }, {
            Normal: (new o).fromHEX("#362082"),
            Hover: (new o).fromHEX("#41279A"),
            Click: (new o).fromHEX("#311C79")
        }]),
        Z = e("DichiColorSets", [{
            Click: (new o).fromHEX("#1E379A")
        }, {
            Click: (new o).fromHEX("#7C1E1E")
        }, {
            Click: (new o).fromHEX("#311C79")
        }]);
    let q = e("CleanResLevel", function(e) {
        return e[e.LEVEL_VIEW = 0] = "LEVEL_VIEW", e[e.LEVEL_SCENE = 1] = "LEVEL_SCENE", e[e.LEVEL_EXTRA_1 = 2] = "LEVEL_EXTRA_1", e[e.LEVEL_EXTRA_2 = 3] = "LEVEL_EXTRA_2", e[e.LEVEL_EXTRA_3 = 4] = "LEVEL_EXTRA_3", e[e.LEVEL_MAX = 5] = "LEVEL_MAX", e[e.LEVEL_BASE = 6] = "LEVEL_BASE", e
    }({}));
    class Q {
        constructor() {
            this.inst = null, this.path = "", this.uuid = "", this.isRemote = !1, this.cleanLevel = q.LEVEL_SCENE
        }
    }
    class ee {
        constructor() {
            this.CleanResLevel = q, this._nLoadTotalCount = 0, this._nLoadCompletedCount = 0, this._loadCallBack = null, this._vSpriteAtlasMap = new I, this._vSensitivewords = [], this._nLoadBaseResTotalCount = 0, this._nLoadBaseResCompletedCount = 0, this._vloadMap = new I, this._vloadresMap = new I, this._vDynamicResMap = [], this._vRemoteHeadInfo = [], this._vRemoteHeadResMap = new I, this.setFrame = (e, t) => {
                n(e, !0) && (e.spriteFrame && (t.insetLeft = e.spriteFrame.insetLeft, t.insetTop = e.spriteFrame.insetTop, t.insetRight = e.spriteFrame.insetRight, t.insetBottom = e.spriteFrame.insetBottom), e.spriteFrame = t)
            }, this.sng_fade_in_duration = .7, this.sng_scale_out_duration = .5, this.sng_fade_out_duration = .85, this.sng_scale_multiplier = 1.5, this.sng_floor_bg_prefix = "BG_FLOOR", this.sng_table_bg_prefix = "BG_TABLE"
        }
        static getInstance() {
            return ee._g_Instance || (ee._g_Instance = new ee), ee._g_Instance
        }
        getAssetUUID(e) {
            let t = e;
            return N.String(t._uuid)
        }
        load(e, t, o, n) {
            if (Array.isArray(e)) {
                if (e.length <= 0) return;
                a.load(e, t, ((t, a) => {
                    if (t) console.error(`${ee.g_class_name} - load array error: ${t.message||t}, paths = ${e}`);
                    else {
                        for (let t = 0; t < a.length; ++t) this._addDynamicRes(a[t], e[t], n);
                        o && o(a)
                    }
                }))
            } else {
                if (!e || void 0 === e) return;
                a.load(e, t, ((t, a) => {
                    t ? console.error(`${ee.g_class_name} - load error: ${t.message||t}, paths = ${e}`) : (this._addDynamicRes(a, e, n), o && o(a))
                }))
            }
        }
        loadDataFile(e, t = null, o = null) {
            this._loadCallBack = e, this._progressloadJson(), N.config.GET_CLIENT_TYPE() == N.Enum.ClientType.CowboyWeb ? (this._progressloadDirArray(N.resConfig._vCowboyRes), null == t || t()) : (N.appConfig.getGeneralConfig().loadOnlyResourceHallScene || (this._progressloadDirArray(N.resConfig.getSceneRes(N.Enum.SCENE.GAME_SCENE)), this._progressloadDirArray(N.resConfig.getSceneRes(N.Enum.SCENE.HALL_SCENE))), this._progressloadDirArray(N.appConfig.getGeneralConfig().resourceCommonConfig), N.appConfig.getGeneralConfig().enablePreloadHallScene ? this.preloadSceneWidthRes(N.Enum.SCENE.HALL_SCENE, t, o) : null == t || t(), N.config.GET_CLIENT_TYPE() == N.Enum.ClientType.H5WebPage && this._progressloadDirArray(N.resConfig._vCowboyResOnly))
        }
        loadResDir(e, t, o) {
            a.loadDir(e, t, ((e, t, o) => {}), ((e, t) => {
                e ? console.error(e.message || e) : (o && o(t), o = null)
            }))
        }
        loadRemote(e, t, o = q.LEVEL_SCENE) {
            let n = e.toLowerCase();
            if (n.indexOf(".js") >= 0 || n.indexOf(".ts") >= 0) {
                var a;
                let o = "WARN!!! Image url is a script: " + e;
                return null == t || t(new Error(o), null), void(null == (a = P.getInstance()) || a.traceJSException("Possible Hack", o, o, !1))
            }
            s.loadRemote(e, ((n, a) => {
                n ? console.error(`${ee.g_class_name} - loadRemote error: ${n.message||n}, url=${e}`) : this._addDynamicRes(a, e, o, !0), t && t(n, a)
            }))
        }
        _addDynamicRes(e, t, o, n = !1) {
            let a = null,
                s = this.getAssetUUID(e);
            for (let e = 0; e < this._vDynamicResMap.length; ++e)
                if (this._vDynamicResMap[e].uuid === s) {
                    a = this._vDynamicResMap[e];
                    break
                } let l = !1;
            a ? o > a.cleanLevel && (l = !0) : (l = !0, a = new Q, this._vDynamicResMap.push(a)), l && (a.inst = e, a.path = t, a.uuid = s, a.isRemote = n, a.cleanLevel = o, console.log(`${ee.g_class_name}-load DynamicRes ===> path = ${t}, level = ${o}`))
        }
        _removeDynamicRes(e) {
            let t = !1;
            N.tools.isValidNode(e.inst) && (e.inst instanceof l ? (s.releaseAsset(e.inst.texture), s.releaseAsset(e.inst)) : e.inst instanceof r ? (s.releaseAsset(e.inst.getTexture()), s.releaseAsset(e.inst)) : e.inst instanceof i ? (s.releaseAsset(e.inst), N.AudioMgr.releaseAudio(e.path)) : s.releaseAsset(e.inst), t = !0);
            let o = `path = ${e.path}, level = ${e.cleanLevel}`;
            t ? console.log(`${ee.g_class_name}-release DynamicRes ok ===> ${o}`) : console.warn(`${ee.g_class_name}-release DynamicRes failed(invalid instance) ===> ${o}`)
        }
        releaseAsset(e) {
            if (!N.tools.isValidNode(e)) return;
            let t = 0,
                o = null,
                n = this.getAssetUUID(e);
            for (let e = 0; e < this._vDynamicResMap.length; ++e)
                if (n === this._vDynamicResMap[e].uuid) {
                    t = e, o = this._vDynamicResMap[e];
                    break
                } o ? o.inst instanceof l || o.inst instanceof r ? console.warn(`${ee.g_class_name}-release hosting ==> path = ${o.path}, level = ${o.cleanLevel}`) : (this._removeDynamicRes(o), this._vDynamicResMap.splice(t, 1)) : (e instanceof l && s.releaseAsset(e.texture), e instanceof r && s.releaseAsset(e.getTexture()), s.releaseAsset(e))
        }
        get(e, t) {
            let o = a.get(e, t);
            if (!o)
                for (let t = 0; t < this._vDynamicResMap.length; ++t)
                    if (this._vDynamicResMap[t].path === e && this._vDynamicResMap[t].isRemote) {
                        o = this._vDynamicResMap[t].inst;
                        break
                    } return N.tools.isValidNode(o) || (o = null), o
        }
        getLocalFontByName(e, t) {
            t = !1 !== t;
            let o = a.get(e, d);
            return o || (o = s.assets.find((t => t.name == e))), !o && t && console.error(N.StringTools.formatC('getLocalFontByName - the local font:"%s" resource was not found', e)), o
        }
        getAsyncFontByName(e, t) {
            let o = this.getLocalFontByName(e, !1);
            o ? t(o) : a.load(e, d, ((o, n) => {
                o ? console.error(o.message || o) : (console.error(N.StringTools.formatC("getAsyncFontByName - warning: This font is loaded asynchronously - [path = %s]", e)), t(n))
            }))
        }
        loadPrefab(e, t) {
            a.load(e, g, ((e, o) => {
                e ? console.error(e.message || e) : t(o)
            }))
        }
        setButtonFrame(e, t, o, n, a) {
            let s = e.getComponent(u);
            s ? (this.getSpriteFrameAsync(t, (e => {
                s.normalSprite = e
            })), this.getSpriteFrameAsync(o, (e => {
                s.pressedSprite = e
            })), this.getSpriteFrameAsync(n, (e => {
                s.hoverSprite = e
            })), this.getSpriteFrameAsync(a, (e => {
                s.disabledSprite = e
            }))) : console.log("按钮为空！")
        }
        loadSpriteAtlas(e, t) {
            let o = o => {
                    this._vSpriteAtlasMap.add(e, o), t && t(o)
                },
                n = a.get(e, r);
            n && n.loaded ? o(n) : a.load(e, r, (function(e, t) {
                e && console.error(e.message || e), o(t)
            }))
        }
        getSpriteAtlas(e) {
            let t = this._vSpriteAtlasMap.get(e);
            if (!t) {
                let o = a.get(e, r);
                o && o.loaded && this._vSpriteAtlasMap.add(e, o), t = o
            }
            return t
        }
        releaseSpriteAtlas(e, t) {
            let o = this.getSpriteAtlas(e);
            if (o) {
                if (t) {
                    p.getDependsRecursively(o).forEach((e => s.releaseAsset(e)))
                } else s.releaseAsset(o);
                this._vSpriteAtlasMap.remove(e)
            }
        }
        getSpriteAtlasFrame(e, t) {
            let o = null,
                n = this.getSpriteAtlas(e);
            return console.log("frameName:" + t + "  atlasPath:" + e), n && (o = n.getSpriteFrame(t)), o
        }
        setDefaultCurrencySprite(e) {
            e && this.setSpriteFrame(e, N.appConfig.getWalletConfig().defaultCurrency.iconPath)
        }
        setSpriteFrame(e, t, o, s = N.Enum.ComponentType.Component_ccSprite) {
            if (!(e instanceof c && n(e, !0))) return;
            t || console.log("path:" + t), "1" == t && console.log("path:" + t), (t.includes(".png") || t.includes(".jpg")) && (t = t.substr(0, t.length - 4)), t += "/spriteFrame";
            let r = null;
            switch (s) {
                case N.Enum.ComponentType.Component_ccSprite:
                    r = e.getComponent(h);
                    break;
                case N.Enum.ComponentType.Component_ccMask:
                    r = e.getComponent(m)
            }
            if (!r) return;
            r._latestSpriteFramePath = t;
            let i = e => {
                    n(r, !0) && (r.spriteFrame && (e.insetLeft = r.spriteFrame.insetLeft, e.insetTop = r.spriteFrame.insetTop, e.insetRight = r.spriteFrame.insetRight, e.insetBottom = r.spriteFrame.insetBottom), r._latestSpriteFramePath === t && (r.spriteFrame = e, o && o(r)))
                },
                d = a.get(t, l);
            d && d.loaded ? i(d) : a.load(t, l, ((e, o) => {
                e ? console.error(e.message || e) : (i(o), this._vloadresMap.add(t, o))
            }))
        }
        getSpriteFrameSync(e) {
            return a.get(e, l)
        }
        getSpriteFrameAsync(e, t) {
            let o = this.getSpriteFrameSync(e);
            o && o.loaded ? t(o) : a.load(e + "/spriteFrame", l, ((n, a) => {
                n ? console.error(n.message || n) : (console.log(N.StringTools.formatC("getSpriteFrameAsync - warning: This resource is loaded asynchronously - [path = %s]", e)), o = a, t(o))
            }))
        }
        releaseSpriteFrame(e, t) {
            if (e)
                if (t) {
                    p.getDependsRecursively(e).forEach((e => s.releaseAsset(e)))
                } else s.releaseAsset(e)
        }
        adaptWidget(e, t, o = !0, a = !0) {
            if (!n(e, !0)) return;
            let s = !1;
            if (!(e instanceof b)) {
                let t = e.getComponent(_);
                if (s = null != e.getComponent(D), t && !s) {
                    let e = !t.enabled;
                    t.enabled = !0, t.updateAlignment(), (e || o) && (t.enabled = !1), N.config.NEEDS_LANDSCAPE() && t.alignMode == _.AlignMode.ONCE && t.alignMode == _.AlignMode.ONCE && (t.alignMode = _.AlignMode.ON_WINDOW_RESIZE)
                }
            }
            if (t && !s)
                for (let n = 0; n < e.children.length; ++n) this.adaptWidget(e.children[n], t, o, !1)
        }
        static updateWidget(e, t = !1, o) {
            if (!e) return;
            if (!(e instanceof b)) {
                let t = e.getComponent(_);
                t && (t.enabled = !0, t.alignMode = o, t.updateAlignment())
            }
            if (t)
                for (let n = 0; n < e.children.length; ++n) this.updateWidget(e.children[n], t, o)
        }
        getLabelStringSize(e, t) {
            let o = new f(f.ZERO);
            return e && (t && (e.string = t), e.updateRenderData(!0), o = e.node.getComponent(C).contentSize), o
        }
        getRichTextStringSize(e, t) {
            let o = new f(f.ZERO);
            if (e) {
                t && (e.string = t), e._updateRichText(), o = e.node.getComponent(C).contentSize
            }
            return o
        }
        createSprite(e, t) {
            let o = new c;
            return o.addComponent(h), o.getComponent(C).setContentSize(10, 10), e && e.addChild(o), t || (t = "zh_CN/common/Head_01"), this.setSpriteFrame(o, t), o
        }
        loadSpriteTextureByPlist(e, t, o) {
            t.spriteFrame = e.getSpriteFrame(o)
        }
        loadButtonTextureByPlist(e, t, o, n, a, s) {
            if (!t || !t.getComponent(u)) return void console.log("按钮为空！");
            let l = t.getComponent(u);
            N.StringTools.getArrayLength(o) > 0 && (l.normalSprite = e.getSpriteFrame(o)), N.StringTools.getArrayLength(n) > 0 && (l.pressedSprite = e.getSpriteFrame(n)), N.StringTools.getArrayLength(a) > 0 && (l.hoverSprite = e.getSpriteFrame(a)), N.StringTools.getArrayLength(s) > 0 && (l.disabledSprite = e.getSpriteFrame(s))
        }
        loadButtonTextureByPlistForPreview(e, t, o, n, a, s, l) {
            if (!(l && l.length > 0)) return void console.log("load button sprite frame for preview mode from Plist but mapping Plist not valid");
            if (!t || !t.getComponent(u)) return void console.log("按钮为空！");
            const r = e.name;
            let i = l.find((e => e.namePlist === r)),
                d = i ? i.pathPlist : "",
                g = t.getComponent(u);
            N.StringTools.getArrayLength(o) > 0 && ee.getInstance().getSpriteFrameAsync(`${d}/${o}`, (e => {
                g.normalSprite = e
            })), N.StringTools.getArrayLength(n) > 0 && ee.getInstance().getSpriteFrameAsync(`${d}/${n}`, (e => {
                g.pressedSprite = e
            })), N.StringTools.getArrayLength(a) > 0 && ee.getInstance().getSpriteFrameAsync(`${d}/${a}`, (e => {
                g.hoverSprite = e
            })), N.StringTools.getArrayLength(s) > 0 && ee.getInstance().getSpriteFrameAsync(`${d}/${s}`, (e => {
                g.disabledSprite = e
            }))
        }
        getSensitiveWords() {
            return this._vSensitivewords
        }
        createLabel(e, t, o, n) {
            let a = new c;
            return a.addComponent(S), e && e.addChild(a), a.getComponent(S).string = t, a.getComponent(S).fontSize = o, n && (a.getComponent(S).font = n), a
        }
        loadBaseResource(e) {
            if (this.loadJSONVersion(e), E.isNative) {
                let t = window;
                n(t.client_environment, !0) && N.config.SET_DEBUG_MODE(t.client_environment), n(t.client_type, !0) && N.config.SET_CLIENT_TYPE(t.client_type), N.tools.isCocosSimulator() ? this.loadJSONConfig(e) : this.loadLanguageRes(e)
            } else this.loadJSONConfig(e)
        }
        loadJSONConfig(e) {
            N.tools.loadingStatus("[WEB LOAD MEASURE]", "[ResourceManager][WEB LOAD MEASURE][LoadJSONConfig][start]"), E.isNative || N.config.setMTT(), this.loadLanguageRes(e)
        }
        loadJSONVersion(e) {
            N.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoad][LoadBaseResource][loadJSONVersion][Start]");
            this._nLoadBaseResTotalCount++, a.load("zh_CN/text/version", ((t, o) => {
                if (t) return N.tools.logObject(t.message || t), void console.error(t.message || t);
                let n = o.json.string;
                N.config.SET_CLIENT_VERSION(n.CLIENT_VERSION["-value"]), this._nLoadBaseResCompletedCount++, console.log("_loadClientTypeRes+++" + this._nLoadBaseResCompletedCount), N.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoad][LoadBaseResource][loadJSONVersion][completed]", `this._nLoadBaseResCompletedCount >= this._nLoadBaseResTotalCount : ${this._nLoadBaseResCompletedCount} >= ${this._nLoadBaseResTotalCount}`), this._nLoadBaseResCompletedCount >= this._nLoadBaseResTotalCount && e && e()
            }))
        }
        loadLanguageRes(e) {
            N.appConfig.isProd ? N.dataHandler.setServerId(N.Enum.ServerButtonType.ServerButtonType_zhenshifu) : N.dataHandler.setServerId(N.Enum.ServerButtonType.ServerButtonType_ceshifu), N.config.setSystemLanguage(), this._loadString(e), this._loadClientTypeRes(e)
        }
        _loadString(e) {
            ++this._nLoadBaseResTotalCount, a.load("zh_CN/text/countryISO2", ((e, t) => {
                e ? console.error(e.message || e) : N.countryISO2NameMap = t.json
            })), a.load("zh_CN/text/countryISO3166", ((e, t) => {
                e ? console.error(e.message || e) : N.countryISO3166 = t.json
            })), O.getInstance().loadLocStrings(N.config.getCurrentLanguage(), (() => {
                ++this._nLoadBaseResCompletedCount, console.log("_loadClientTypeRes+++" + this._nLoadBaseResCompletedCount), N.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoad][_loadString][completed]", `this._nLoadBaseResCompletedCount >= this._nLoadBaseResTotalCount : ${this._nLoadBaseResCompletedCount} >= ${this._nLoadBaseResTotalCount}`), this._nLoadBaseResCompletedCount >= this._nLoadBaseResTotalCount && e && e()
            }))
        }
        _loadClientTypeRes(e) {
            if (!N.appConfig.isPKW) return;
            let t = N.resConfig.ClientTypeRes,
                o = N.StringTools.getArrayLength(t);
            this._nLoadBaseResTotalCount += o;
            for (let n = 0; n < o; n++) this.loadResDir(t[n].path, t[n].type, (t => {
                this._nLoadBaseResCompletedCount++, console.log("_loadClientTypeRes+++" + this._nLoadBaseResCompletedCount), N.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoad][LoadBaseResource][_loadClientTypeRes][completed]", `this._nLoadBaseResCompletedCount >= this._nLoadBaseResTotalCount : ${this._nLoadBaseResCompletedCount} >= ${this._nLoadBaseResTotalCount}`), this._nLoadBaseResCompletedCount >= this._nLoadBaseResTotalCount && e && e()
            }))
        }
        _progressloadJson() {
            if (N.config.GET_CLIENT_TYPE() != N.Enum.ClientType.CowboyWeb) {
                let e = {
                    path: "zh_CN/text/sensitivewords",
                    type: "txt"
                };
                ++this._nLoadTotalCount, a.load(e.path, function(t, o) {
                    if (t) return void console.error(t.message || t);
                    let n = o.text;
                    this._vSensitivewords = n.split("\n"), this._updateLoadCompletedCount(e.path, e.type)
                }.bind(this))
            }
        }
        _progressloadDirArray(e) {
            let t = N.StringTools.getArrayLength(e);
            for (let o = 0; o < t; o++) ++this._nLoadTotalCount, this.loadResDir(e[o].path, e[o].type, (t => {
                this._updateLoadCompletedCount(e[o].path, e[o].type.name)
            }))
        }
        _progressloadSpriteAtlas(e) {
            let t = N.StringTools.getArrayLength(e);
            for (let o = 0; o < t; o++) e[o].type == r && (++this._nLoadTotalCount, this.loadSpriteAtlas(e[o].path, (t => {
                this._updateLoadCompletedCount(e[o].path, e[o].type.name)
            })))
        }
        _updateLoadCompletedCount(e, t) {
            ++this._nLoadCompletedCount, this._loadCallBack ? this._loadCallBack(this._nLoadCompletedCount, this._nLoadTotalCount, e, t) : console.error("No load callback function was set")
        }
        addRemoteHeadRes(e, t) {
            this._vRemoteHeadResMap.add(e, t)
        }
        addRemoteHeadInfo(e, t) {
            if (t)
                for (let e = 0; e < this._vRemoteHeadInfo.length; ++e) this._vRemoteHeadInfo[e].isOB && this._vRemoteHeadInfo.splice(e--, 1);
            let o = (e, t) => {
                let o = !1;
                for (let n = 0; n < this._vRemoteHeadInfo.length; ++n)
                    if (this._vRemoteHeadInfo[n].url === e.url && this._vRemoteHeadInfo[n].isOB === t) {
                        o = !0;
                        break
                    } o || this._vRemoteHeadInfo.push(e)
            };
            if (Array.isArray(e))
                for (let n = 0; n < e.length; ++n) o(e[n], t);
            else o(e, t)
        }
        removeRemoteHeadInfo(e, t) {
            let o = (e, t) => {
                for (let o = 0; o < this._vRemoteHeadInfo.length; ++o)
                    if (this._vRemoteHeadInfo[o].url === e && this._vRemoteHeadInfo[o].isOB === t) {
                        this._vRemoteHeadInfo.splice(o, 1);
                        break
                    }
            };
            if (Array.isArray(e))
                for (let n = 0; n < e.length; ++n) o(e[n], t);
            else o(e, t)
        }
        releaseRemoteHeadsRes() {
            for (let e = 0; e < this._vRemoteHeadInfo.length; ++e) {
                let t = this._vRemoteHeadInfo[e].url,
                    o = 0 === this._vRemoteHeadInfo[e].plat ? N.dataHandler.getUserData().getNewImageURL(t) : N.dataHandler.getUserData().getWpkImageURL(t);
                this._vRemoteHeadResMap.remove(o)
            }
            this._vRemoteHeadResMap.forEach(((e, t, o) => {
                this.releaseAsset(t)
            })), this._vRemoteHeadResMap.clear()
        }
        releaseDir(e) {
            a.release(e)
        }
        releaseSceneRes(e) {
            let t = N.resConfig.getSceneRes(e, !0),
                o = t.length;
            for (let e = 0; e < o; e++) switch (t[e].type) {
                case l:
                case i:
                    console.log("释放资源:" + t[e].path + " 资源类型：" + t[e].type), this.releaseDir(t[e].path);
                    break;
                case r:
                    console.log("释放资源:" + t[e].path + " 资源类型：" + t[e].type)
            }
        }
        addLoadRes(e, t) {
            this._vloadMap.add(e, t)
        }
        releaseLoadTexure() {
            this._vloadMap.forEach(((e, t, o) => {
                s.releaseAsset(t), console.log("releaseLoadTexure:::" + e)
            })), this.releaseLoadRes()
        }
        releaseLoadRes() {
            this._vloadresMap.forEach(((e, t, o) => {
                a.release(e), console.log("releaseLoadRes:::" + e)
            }))
        }
        preloadSceneWidthRes(e, t, o, n) {
            let a = e;
            N.appConfig.getGeneralConfig().isWebApp && N.config.IS_SCENE_H5(e) && (a += "H5"), N.config.NEEDS_LANDSCAPE() && !N.config.IS_SCENE_LANDSCAPE(e) && (a += "Landscape");
            const s = (new Date).getTime();
            L.preloadScene(a, ((e, t, o) => {
                null == n || n(e, t, o)
            }), (e => {
                var n;
                null == (n = P.getInstance()) || n.trace(x.SceneLoadTime, x.SceneLoadTime, {
                    LoadType: "Preload",
                    SceneName: a,
                    Message: e ? e.message || e : "",
                    Stack: e ? e.stack || e : "",
                    LoadTimeMS: (new Date).getTime() - s
                }, !1, null != e), e ? null == o || o(e) : null == t || t()
            }))
        }
        preloadScene(e) {}
        loadBetButtonFoldTheme(e, t, o = null, n = null) {
            t = this.getTableNameId(t);
            let a = V + this.getButonsThemeNumber(t) + "/bet_btn_bet";
            this.loadSprite(a, e, o, n, !N.appConfig.isLandscapeLayout)
        }
        loadBetButtonFoldHoverTheme(e, t, o = null, n = null) {
            t = this.getTableNameId(t);
            let a = V + this.getButonsThemeNumber(t) + "/bet_btn_bet_hover";
            this.loadSprite(a, e, o, n, !1)
        }
        loadBetButtonFoldClickTheme(e, t, o = null, n = null) {
            t = this.getTableNameId(t);
            let a = V + this.getButonsThemeNumber(t) + "/bet_btn_bet_click";
            this.loadSprite(a, e, o, n, !1)
        }
        setSliderHandleTheme(e, t) {
            t = this.getTableNameId(t);
            let o = V + this.getButonsThemeNumber(t) + "/slider_handle";
            this.loadSprite(o, [e], null, null, !1)
        }
        setClickThemeColors(e, t) {
            if (null == e || 0 == e.length) return;
            const o = this.getColorThemeNumber(t);
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                null != n && (n.color = Z[o].Click)
            }
        }
        setPlusMinusHoverThemeColors(e, t) {
            if (null == e || 0 == e.length) return;
            const o = this.getColorThemeNumber(t);
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                null != n && (n.color = Y[o].Hover)
            }
        }
        setPlusMinusClickThemeColors(e, t) {
            if (null == e || 0 == e.length) return;
            const o = this.getColorThemeNumber(t);
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                null != n && (n.color = Y[o].Click)
            }
        }
        setPlusMinusNormalThemeColors(e, t) {
            if (null == e || 0 == e.length) return;
            const o = this.getColorThemeNumber(t);
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                null != n && (n.color = Y[o].Normal)
            }
        }
        loadBetButtonOthersTheme(e, t, o = null, n = null) {
            t = this.getTableNameId(t);
            let a = V + this.getButonsThemeNumber(t) + "/bet_btn_bet" + this.getBetButtonOtherSpriteNameSuffix(t);
            this.loadSprite(a, e, o, n, !N.appConfig.isLandscapeLayout)
        }
        loadPreBetSprite(e, t, o, n = !0) {
            t = this.getTableNameId(t);
            let a = V + "0" + (o ? "/bet_btn_classic_prebet_active" : "/bet_btn_classic_prebet_default");
            this.loadSprite(a, [e], null, null, n)
        }
        getColorThemeNumber(e) {
            let t;
            switch (e) {
                case M.TABLE_BACK_RHOMBIC_PURPLE:
                    t = 1;
                    break;
                case M.TABLE_BACK_OVAL_JADE:
                    t = 2;
                    break;
                case M.TABLE_BACK_CLASSIC_GREEN:
                    t = 0;
                    break;
                default:
                    t = 1
            }
            return t
        }
        getButonsThemeNumber(e) {
            let t;
            switch (e) {
                case M.TABLE_BACK_RHOMBIC_PURPLE:
                    t = 1;
                    break;
                case M.TABLE_BACK_OVAL_JADE:
                    t = 2;
                    break;
                default:
                    t = 0
            }
            return t
        }
        getBetButtonOtherSpriteNameSuffix(e) {
            if (N.appConfig.isLandscapeLayout) return "";
            let t;
            switch (e) {
                case M.TABLE_BACK_RHOMBIC_PURPLE:
                    t = "_2";
                    break;
                default:
                    t = ""
            }
            return t
        }
        loadButtonsTheme(e, t, o) {
            let n, a, s = this.getTableNameId(e),
                l = w.Other,
                r = k.W400;
            switch (s) {
                case M.TABLE_BACK_RHOMBIC_PURPLE:
                    n = !1;
                    break;
                case M.TABLE_BACK_OVAL_JADE:
                    n = !0, a = $.InGameButtonMenuButton;
                    break;
                default:
                    n = !1
            }
            if (t) {
                for (let e = 0; e < t.length; e++) {
                    t[e].node.active = !n
                }
                n || this.loadCommonBtnBgSprite(e, t)
            }
            if (o)
                for (let e = 0; e < o.length; e++) {
                    const t = o[e];
                    t.node.active = n, n && t.setColor(l, r, a)
                }
        }
        getTableNameId(e) {
            let t, o = H.Instance.getGameConfig().tableList;
            if (o && o.length > 0) {
                t = o[Math.clamp(e, 0, o.length)]
            } else t = H.Instance.isWPTO ? M.TABLE_BACK_OVAL_JADE : M.TABLE_BACK_LUNAR;
            return t
        }
        loadCommonBtnBgSprite(e, t) {
            e = this.getTableNameId(e);
            let o = V + this.getThemeNumber(e) + "/empty_button_normal";
            this.loadSprite(o, t, null, null, !0)
        }
        getThemeNumber(e) {
            let t;
            switch (e) {
                case M.TABLE_BACK_RHOMBIC_PURPLE:
                    t = 1;
                    break;
                default:
                    t = 0
            }
            return t
        }
        loadSprite(e, t, o = null, a = null, r = !1) {
            e = `${e}/spriteFrame`;
            let i = function(e, s) {
                    if (e) return v("onBundleLoaded:" + e), void(a && a(e));
                    ! function(e) {
                        if (t && 0 != t.length)
                            for (let o = 0; o < t.length; o++) {
                                let a = t[o];
                                a && n(a, !0) && (a.spriteFrame = e)
                            }
                    }(s), o && o(s)
                },
                d = H.Instance.getLayoutBundleString(r),
                g = s.getBundle(d);
            g ? g.load(e, l, i) : s.loadBundle(d, (function(t, o) {
                t ? a && a(t) : o.load(e, l, i)
            }))
        }
        loadSpriteFrames(e, t = null, o = null, n = !1) {
            let a = function(e, n) {
                    if (e) return console.error("onBundleLoaded:" + e), void(o && o(e));
                    t && t(n)
                },
                r = H.Instance.getLayoutBundleString(n),
                i = s.getBundle(r);
            i ? i.load(e, l, a) : s.loadBundle(r, (function(t, n) {
                t ? o && o(t) : n.load(e, l, a)
            }))
        }
        loadAudioClip(e, t = null, o = null, n = !1) {
            let a = function(e, n) {
                    if (e) return e("onBundleLoaded:" + e), void(o && o(e));
                    t && t(n)
                },
                l = H.Instance.getLayoutBundleString(n),
                r = s.getBundle(l);
            r ? r.load(e, i, a) : s.loadBundle(l, (function(t, n) {
                t ? o && o(t) : n.load(e, i, a)
            }))
        }
        loadPrefabFromBundle(e, t = null, o = null, n = !1) {
            let a = function(n, a) {
                    n ? console.error(n.message || n) : a.load(e, g, (function(e, n) {
                        if (e) return console.error(e.message || e), void(o && o(e));
                        t && t(n)
                    }))
                },
                l = H.Instance.getLayoutBundleString(n),
                r = s.getBundle(l);
            r ? a(null, r) : s.loadBundle(l, a.bind(this))
        }
        loadJackpotButtonTheme(e, t) {
            t = N.resMgr.getTableNameId(t);
            let o = V + N.resMgr.getThemeNumber(t) + "/jackpot_button_normal";
            N.resMgr.loadSprite(o, e, null, null, !0)
        }
        updateMenuButtonBgSprite(e, t) {
            let o = V + N.resMgr.getButonsThemeNumber(e) + "/bet_btn_bet";
            N.resMgr.loadSprite(o, [t], null, null, !N.appConfig.isLandscapeLayout)
        }
        updateBackButton(e) {
            let t = N.tools.GetTableBack();
            t = N.resMgr.getTableNameId(t), N.resMgr.updateMenuButtonBgSprite(t, e)
        }
        loadCardFront(e, t, o, n, a = null, s = null) {
            return this.loadCardFrontFromRes(e, t, o, n, a, s, null)
        }
        loadCardFrontFromRes(e, t, o, n, r = null, i = null, d) {
            let g;
            g = t == F.CARD_DIAMOND ? "Rbm_" : t == F.CARD_HEART ? "Rhm_" : t == F.CARD_CLUB ? "Bcm_" : "Bhm_";
            let u, p = "",
                c = !1;
            null != d && "" != d ? p = d + `card_type_0/${g}` : (p = `zh_CN/game/dzpoker/card/card_type_${e}/${g}${o+1}`, c = !1), p += "/spriteFrame";
            let m = null;
            if (c ? (m = s.getBundle(N.appConfig.layoutUse), m && (u = m.get(p, l))) : u = a.get(p, l), u && u.loaded) {
                for (let e = 0; e < n.length; e++) this.setFrame(n[e], u);
                r && r(u)
            } else c && m ? m.load(p, l, ((e, t) => {
                if (e) i && i(e);
                else {
                    for (let e = 0; e < n.length; e++) this.setFrame(n[e], t);
                    r && r(t)
                }
            })) : a.load(p, l, ((e, t) => {
                if (e) i && i(e);
                else {
                    for (let e = 0; e < n.length; e++) this.setFrame(n[e], t);
                    r && r(t)
                }
            }))
        }
        getCardFileName(e, t, o) {
            return J + e.toString() + "/" + t + "_" + o
        }
        loadCardback(e, t, o = null, n = null) {
            let s = `zh_CN/game/dzpoker/card/card_bg/Pb_01_${e}/spriteFrame`,
                r = a.get(s, l);
            if (r && r.loaded) {
                for (let e = 0; e < t.length; e++) this.setFrame(t[e], r);
                o && o(r)
            } else a.load(s, l, ((e, a) => {
                if (e) n && n();
                else {
                    for (let e = 0; e < t.length; e++) this.setFrame(t[e], a);
                    o && o(a)
                }
            }))
        }
        getTableName(e) {
            return N.resMgr.getTableNameId(e).toString()
        }
        getTableResourceName(e) {
            let t;
            if (0 == e) {
                const o = cc_mtt.vv.DataManager.getNow(),
                    n = U.findOldestValidSeason(o);
                t = n ? `${n}` : this.getTableName(e)
            } else t = this.getTableName(e);
            return t
        }
        loadSpecialTable(e, t, o = null, n = null) {
            let a = X + "table_" + e;
            N.resMgr.loadSprite(a, t, o, n)
        }
        loadSpecialTableBackground(e, t, o = null, n = null) {
            let a = X + "table_bg_" + e;
            N.resMgr.loadSprite(a, t, o, n)
        }
        loadFinalTable(e, t, o = null, n = null) {
            let a = z + "table_" + e;
            N.resMgr.loadSprite(a, t, o, n)
        }
        loadFinalTableBackground(e, t, o = null, n = null) {
            let a = z + "table_bg_" + e;
            N.resMgr.loadSprite(a, t, o, n)
        }
        loadHomeButtonBg(e, t, o, n = null, a = null) {
            const s = t ? `${K}/tablet/bg_${e}` : `${K}/mobile/bg_${e}`;
            N.resMgr.loadSprite(s, o, n, a)
        }
        loadHomeButtonIcon(e, t, o = null, n = null) {
            const a = `${K}/ic_${e}`;
            N.resMgr.loadSprite(a, t, o, n)
        }
        loadSpriteWithAnimation_SNG(e, t, o, n, a = null, s = null) {
            let l = j + e + t;
            const r = [];
            o.forEach((e => {
                let t = R(e.node);
                t.parent = e.node.parent, t.setSiblingIndex(e.node.getSiblingIndex() + 1), t.position = e.node.position, t.scale = e.node.scale, t.getComponent(T).opacity = 0, r.push(t)
            })), N.resMgr.loadSprite(l, o, (() => {
                for (let e = 0; e < o.length; e++) {
                    const t = r[e],
                        a = o[e];
                    t.getComponent(T).opacity = a.node.getComponent(T).opacity, a.node.getComponent(T).opacity = 0, n && B(t).to(this.sng_scale_out_duration, {
                        scale: new A(t.scale.x * this.sng_scale_multiplier, t.scale.y * this.sng_scale_multiplier, 1)
                    }).start(), W.fadeOut(t, this.sng_fade_out_duration, (() => {
                        t.destroy()
                    })), W.fadeIn(a.node, this.sng_fade_in_duration)
                }
                r.length = 0, null != a && a()
            }), (() => {
                r.forEach((e => {
                    null !== e && e.destroy()
                })), r.length = 0, null != s && s()
            }))
        }
        loadFloorBackground_SNG(e, t, o, n = null, a = null) {
            if (o) this.loadSpriteWithAnimation_SNG(this.sng_floor_bg_prefix, e, t, !0, n, a);
            else {
                let o = j + this.sng_floor_bg_prefix + e;
                N.resMgr.loadSprite(o, t, n, a)
            }
        }
        loadTableBackground_SNG(e, t, o, n = null, a = null) {
            if (o) this.loadSpriteWithAnimation_SNG(this.sng_table_bg_prefix, e, t, !1, n, a);
            else {
                let o = j + this.sng_table_bg_prefix + e;
                N.resMgr.loadSprite(o, t, n, a)
            }
        }
        downloadImg(e, t, o, n = q.LEVEL_SCENE) {
            let a = this.get(e, y);
            a ? (t && (t.getComponent(h).spriteFrame = new l), t && (t.getComponent(h).spriteFrame.texture = a), o && o()) : this.loadRemote(e, ((n, a) => {
                n ? console.error(`${ee.g_class_name} - downloadImg error: ${n.message||n}, url=${e}`) : (t && (t.getComponent(h).spriteFrame = new l), t && (t.getComponent(h).spriteFrame.texture = a), o && o())
            }), n)
        }
    }
    e("ResourceManager", ee), ee.g_class_name = "ResMgr", ee._g_Instance = null, t._RF.pop()
}