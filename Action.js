import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as N from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as M from "./cc.js";
import * as D from "./cc.js";
import * as w from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as t from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as L from "./cc.js";
import * as i from "./cc.js";
import * as T from "./cc.js";
import * as y from "./GeoComplyErrorPopup.js";
import * as I from "./cv.js";
import * as O from "./AppConfig.js";
import * as R from "./activityData.js";
import * as P from "./CrashTracing.js";
import * as b from "./CrashTracing.js";
import * as F from "./BlockAdaptWidget.js";
import * as G from "./FullscreenController.js";
import * as H from "./CircleSprite.js";
import * as V from "./HashMap.js";
import * as x from "./JurisdLoader.js";
import * as W from "./TimeTrack.js";
import * as B from "./AudioEngine.js";

function main() {
    n._RF.push({}, "7feb2+ajx9JUaT+xmLYC5QB", "Action", void 0);
    var k = function(e) {
            return e[e.EMAD_NONE = 0] = "EMAD_NONE", e[e.EMAD_TO_LEFT = 1] = "EMAD_TO_LEFT", e[e.EMAD_TO_RIGHT = 2] = "EMAD_TO_RIGHT", e
        }(k || {}),
        U = function(e) {
            return e[e.EMAT_NONE = 0] = "EMAT_NONE", e[e.EMAT_FADE_IN = 1] = "EMAT_FADE_IN", e[e.EMAT_FADE_OUT = 2] = "EMAT_FADE_OUT", e
        }(U || {});
    class q {
        constructor() {
            this._vActViewDeque = [], this.eMoveActionDir = k, this.eMoveActionType = U, this.WIDTH = 0, this.HEIGHT = 0, this.acNodeMap = new V, this.moveToArg = {
                TO_LEFT: {
                    ENTER: {
                        isShow: !0,
                        startPos: new t(this.WIDTH, 0),
                        endPos: new t(0, 0)
                    },
                    OUT: {
                        isShow: !1,
                        startPos: new t(0, 0),
                        endPos: new t(-this.WIDTH, 0)
                    }
                },
                TO_RIGHT: {
                    ENTER: {
                        isShow: !0,
                        startPos: new t(-this.WIDTH, 0),
                        endPos: new t(0, 0)
                    },
                    OUT: {
                        isShow: !1,
                        startPos: new t(0, 0),
                        endPos: new t(this.WIDTH, 0)
                    }
                }
            }, this.delay_type = {
                INSTANT: 0,
                FAST: .1,
                NORMAL: .2,
                SLOW: .3,
                VERYSLOW: .4
            }
        }
        static getInstance() {
            return q.g_instance || (q.g_instance = new q), q.g_instance
        }
        getDelay(e) {
            let n = this.delay_type[e];
            return void 0 === n && (n = this.delay_type.SLOW), n
        }
        moveToAction(e, n, t, a, c, r, l, E = null) {
            if (void 0 === e || void 0 === n || void 0 === t) return void console.log("==> moveToAction is Error");
            let d = this.moveToArg[n][t];
            d.node = e, a = null == a ? d.type : a, c = null == c ? d.startPos : c, r = null == r ? d.endPos : r;
            let h = this.getDelay(a);
            d.node.setPosition(c);
            let u = null;
            this.createShieldLayer(i.getScene().getComponentInChildren(o).node, "shieldLayer-moveToAction");
            let g = s().call((() => {
                this.removeShieldLayer(i.getScene().getComponentInChildren(o).node, "shieldLayer-moveToAction"), E && E.target(e).start()
            }));
            if (void 0 !== d.isShow)
                if (d.isShow) d.node.active = !0;
                else {
                    let e = () => {
                        d.node.active = !1
                    };
                    u = s().call(e)
                } this.acNodeMap.add(e, 1);
            let p = s().to(h, {
                position: r
            });
            u ? s(d.node).sequence(p, u, g).start() : s(d.node).sequence(p, g).start()
        }
        preSwitchScene(e, n) {
            if (I.appConfig.getGeneralConfig().multiWindowEnabled) return;
            let t = I.config.getCurrentScene();
            if (e === t) return;
            let i = e;
            I.resMgr.preloadSceneWidthRes(i, (() => {
                I.action.switchScene(e, n, !0)
            }), (e => {
                I.action.removeShieldLayer(null, "shieldLayer-switchScene")
            }))
        }
        switchScene(e, n, t, s, l = "", E = !1) {
            let d = I.config.getCurrentScene();
            if (e === d && !I.appConfig.getGeneralConfig().multiWindowEnabled && !E) return;
            if (I.appConfig.getGeneralConfig().enableCheckLoadAppServerConfig && e == I.Enum.SCENE.HALL_SCENE && !I.appConfigServer.isFinishedLoadAppConfig) return void setTimeout((() => {
                this.switchScene(e, n, t, s, l, E)
            }), 100);
            const h = i.getScene();
            I.appConfig.isLandscapeLayout || I.roomManager.checkIsSceneMiniGame(d) && I.SwitchLoadingView.switchToPotrait(), e == I.Enum.SCENE.HALL_SCENE && d != I.Enum.SCENE.HOTUPDATE_SCENE && d != I.Enum.SCENE.LOGIN_SCENE && d != I.Enum.SCENE.LOADING_SCENE && d != I.Enum.SCENE.ROOM_SCENE && I.dataHandler.getActivityData().haveAvatar(!1, R.CustomAvatar);
            let u = I.config.IS_SCENE_LANDSCAPE(d),
                g = I.config.IS_SCENE_LANDSCAPE(e),
                p = I.config.IS_SCENE_CSS_ROTATE(d),
                S = I.config.IS_SCENE_CSS_ROTATE(e);
            if ((u || g || S != p) && !I.appConfig.getGeneralConfig().multiWindowEnabled) {
                h && a(h, !0) && (I.roomManager.checkIsSceneMiniGame(e) || (h.getComponentInChildren(o).node.getComponent(c).opacity = 0));
                const t = !I.appConfig.isWebApp && !I.appConfig.isLandscapeLayout;
                if (t && r.once("window-resize", (() => {
                        I.StatusView.show(!0), this.continueLoadingNewScene(e, d, l, s, n)
                    }), this), (u || S != p) && I.native.setPortrait(!1, !0, !0, {
                        disableCssRotation: !S
                    }), (g || 1 == I.config.NEEDS_LANDSCAPE()) && (I.native.setLandscape(), I.roomManager.checkIsSceneMiniGame(e) && (a(h, !0) && I.SwitchLoadingView.resetLoadingNode(h.getComponentInChildren(o).node, -1), I.SwitchLoadingView.switchToLandscape())), t) return
            }
            this.continueLoadingNewScene(e, d, l, s, n)
        }
        continueLoadingNewScene(e, n, t, s, a) {
            let r = e;
            if (I.appConfig.isWebApp && I.config.IS_SCENE_H5(e) && (r += "H5"), 1 != I.config.NEEDS_LANDSCAPE() || I.config.IS_SCENE_LANDSCAPE(e) && !I.config.IS_SCENE_CASINO_NEED_SEPARATE_LANDSCAPE(e) || (r += "Landscape"), I.appConfig.isWebApp && n == I.Enum.SCENE.HALL_SCENE && I.roomManager.checkWebGameSceneToApplyFullscreen(e) && (G.getInstance().sendApplyFullScreenForWebApp(!0), I.miniGamePopupManager.processClose(), I.tools.visiblePopupCount > 0 && I.popUp.hidePopup()), I.appConfig.getGeneralConfig().multiWindowEnabled) {
                if (this.removeShieldLayer(null, "shieldLayer-switchScene"), e === I.Enum.SCENE.GAME_SCENE || e === I.Enum.SCENE.WEBVIEW_SCENE || e === I.Enum.SCENE.CARIBBEAN_POKER_SCENE) return void I.createWindow(r, t, (function(e) {
                    e && (I.popUp.createGamePopup(e), y.getInstance().createGamePopup(e), null == s || s(e))
                }));
                if (I.roomManager.checkIsSceneMiniGame(e)) return void I.createWindow(e, "", (function(e) {
                    e && (I.config.NEEDS_LANDSCAPE() && I.popUp.createGamePopup(e), I.miniGamePopupManager.createGamePopup(e), null == s || s(e))
                }));
                if (e == I.Enum.SCENE.HALL_SCENE && -1 != i.getScene().name.indexOf(I.Enum.SCENE.HALL_SCENE)) return
            }
            I.StringTools.clearArray(this._vActViewDeque), this.acNodeMap.clear(), H.clean(), I.MessageCenter.send("switchSceneBegan", e), this.preloadJursAssetBeforeChangeScenes(r, e, (() => {
                const t = (new Date).getTime();
                let s = !1;
                I.appConfig.isLandscapeLayout || I.appConfig.isWebApp || (I.roomManager.checkIsSceneMiniGame(e) || e === I.Enum.SCENE.HALL_SCENE.toString()) && (s = !0);
                const l = () => {
                    i.loadScene(r, ((i, s) => {
                        var l;
                        null == (l = P.getInstance()) || l.trace(b.SceneLoadTime, b.SceneLoadTime, {
                            LoadType: "Load",
                            SceneName: r,
                            Message: i ? i.message || i : "",
                            Stack: i ? i.stack || i : "",
                            LoadTimeMS: (new Date).getTime() - t
                        }, !1, null != i), this.removeShieldLayer(null, "shieldLayer-switchScene"), i || (I.config.setCurrentScene(e), s.autoReleaseAssets = I.appConfig.isWebApp || I.appConfig.needAutoReleaseAssetsMiniGame && I.roomManager.checkIsSceneMiniGame(e) && !I.appConfig.getGeneralConfig().multiWindowEnabled, s.getComponentInChildren(o).node.getComponent(c).opacity = 255, L.garbageCollect(), B.stopAll(), I.firstLoad && I.appConfig.isLandscapeLayout || I.StatusView.reset(e), I.firstLoad || (I.LoadingView.reset(), I.TP.reset(), I.TT.reset(), I.pushNotice.reset(), I.appConfig.isLandscapeLayout || I.StatusView.showLatencyStatus(e == I.Enum.SCENE.GAME_SCENE)), a && a(s), I.MessageCenter.send("switchSceneFinish", e), (e !== I.Enum.SCENE.GAME_SCENE.toString() && e !== I.Enum.SCENE.HALL_SCENE.toString() && !I.roomManager.checkIsSceneMiniGame(e) && e !== I.Enum.SCENE.CARIBBEAN_POKER_SCENE.toString() || !1 === I.appConfig.getGeneralConfig().showLoadingOnUserDataFetch && e === I.Enum.SCENE.HALL_SCENE.toString()) && I.SwitchLoadingView.hide(), I.roomManager.checkWebGameSceneToApplyFullscreen(n) && e === I.Enum.SCENE.HALL_SCENE.toString() && G.getInstance().sendApplyFullScreenForWebApp(!1))
                    }))
                };
                s ? setTimeout((() => {
                    l()
                }), 200) : l()
            }))
        }
        preloadJursAssetBeforeChangeScenes(e, n, t) {
            const i = O.Instance.getGeneralConfig().assetsNeedPreloadBeforeLoadScene.get(n),
                o = I.config.getCurrentScene();
            if (!(o === I.Enum.SCENE.GAME_SCENE && n === I.Enum.SCENE.HALL_SCENE) && i && i.length) {
                o === I.Enum.SCENE.GAME_SCENE && n === I.Enum.SCENE.HALL_SCENE && W.start("preloadJursAssetBeforeChangeScenes");
                const e = new Map;
                i.forEach((n => {
                    e.has(n.bundleName) ? e.get(n.bundleName).push(n.filePath) : e.set(n.bundleName, [n.filePath])
                }));
                let s = e.size;
                e.forEach(((e, n) => {
                    x.preloadAssetsFromBundle(n, e, (e => {
                        if (s--, s <= 0) {
                            const e = W.end("preloadJursAssetBeforeChangeScenes");
                            var n;
                            if (e > 3e3) null == (n = P.getInstance()) || n.traceEvent(b.CashGameIssues, "preloadJursAssetBeforeChangeScenes_Slow", {
                                preloadTime: e
                            });
                            null == t || t()
                        }
                    }))
                }))
            } else null == t || t()
        }
        showAction(e, n, t, a = I.action.delay_type.NORMAL, c = null, r = null, g = 0, p = !1, S, A, C) {
            if (!(e || e instanceof l)) return;
            E.stopAllByTarget(e), this.acNodeMap.add(e, 1);
            for (let n = 0; n < this._vActViewDeque.length; ++n) e !== this._vActViewDeque[n] || this._vActViewDeque.splice(n, 1);
            switch (t) {
                case U.EMAT_FADE_IN:
                    this._vActViewDeque.unshift(e), e.emit(I.Enum.CustomEvent.ActionShowStart);
                    break;
                case U.EMAT_FADE_OUT:
                    n === k.EMAD_TO_LEFT && this._vActViewDeque.push(e), e.emit(I.Enum.CustomEvent.ActionHideStart)
            }
            e.active = !0, I.resMgr.adaptWidget(e);
            const m = e.getComponent(F);
            !m && p && e.addComponent(F);
            let _ = e.getPosition(),
                f = new d(0, 0),
                T = new d(0, 0),
                N = I.config.NEEDS_LANDSCAPE() ? e.getComponent(h).contentSize.width : u.getVisibleSize().width,
                w = t === this.eMoveActionType.EMAT_FADE_IN ? 1 : 0,
                L = t === this.eMoveActionType.EMAT_FADE_IN ? 0 : -1;
            switch (n) {
                case this.eMoveActionDir.EMAD_NONE:
                    f = _, T = _;
                    break;
                case this.eMoveActionDir.EMAD_TO_LEFT:
                    S ? (f.x = _.x, T.x = A.x) : (f.x = _.x + w * N, T.x = _.x + L * N), f.y = _.y, T.y = _.y;
                    break;
                case this.eMoveActionDir.EMAD_TO_RIGHT:
                    S ? (f.x = _.x, T.x = C.x) : (f.x = _.x - w * N, T.x = _.x - L * N), f.y = _.y, T.y = _.y
            }
            e.setPosition(f);
            let v = s(e).to(a, {
                position: T
            });
            const M = () => {
                t === this.eMoveActionType.EMAT_FADE_OUT ? (e.active = !1, S || e.setPosition(_), e.emit(I.Enum.CustomEvent.ActionHideFinish)) : t === this.eMoveActionType.EMAT_FADE_IN && e.emit(I.Enum.CustomEvent.ActionShowFinish);
                e.position.x;
                this.removeShieldLayer(i.getScene().getComponentInChildren(o).node, `shieldLayer-showAction_${e.name}`), r && r instanceof Function && r(e, t), m || e.removeComponent(F)
            };
            let D = s(e).call(M);
            this.createShieldLayer(i.getScene().getComponentInChildren(o).node, `shieldLayer-showAction_${e.name}`), a == I.action.delay_type.INSTANT ? (e.setPosition(T), M()) : s(e).sequence(v, s(e).delay(g), D).start(), c && c instanceof Function && c(e, t)
        }
        removeShowActionShieldLayer(e) {
            a(e, !0) && this.removeShieldLayer(i.getScene().getComponentInChildren(o).node, `shieldLayer-showAction_${e.name}`)
        }
        createShieldLayer(e, n, s, r, E, m) {
            e = a(e, !0) ? e : i.getScene().getComponentInChildren(o).node, n = I.String(n).length <= 0 ? "shieldLayer-default" : n, s = s || I.Enum.ZORDER_TYPE.ZORDER_LOADING, r = r || g.BLACK, E = E || 0;
            let _ = e => {
                    e && (e.node.getComponent(D).color = r, e.node.getComponent(c).opacity = E)
                },
                f = e.getChildByName(n);
            if (f) {
                f.setSiblingIndex(s);
                let e = f.getComponent(C);
                _(e)
            } else {
                f = new l, f.name = n;
                var T = f.addComponent(h);
                f.addComponent(c), T.setContentSize(new p(u.getVisibleSize())), T.setAnchorPoint(new t(.5, .5)), e.addChild(f), e.setSiblingIndex(s);
                var N = e.getComponent(h);
                let i = N.width,
                    o = N.height;
                i <= 0 && (i = u.getVisibleSize().width), o <= 0 && (o = u.getVisibleSize().height);
                let E = new d((T.anchorX - N.anchorX) * i, (T.anchorY - N.anchorY) * o);
                f.setPosition(E), f.on(l.EventType.TOUCH_END, (t => {
                    console.log(`shieldLayer click - name:${n}, parentName:${e.name}, event:${t.type}`), t.propagationStopped = !0, "function" == typeof m && m(t)
                })), r instanceof g && S.load("zh_CN/internal/image/default_sprite_splash/spriteFrame", A, ((e, t) => {
                    if (e) return void console.log(e.message || e);
                    if (!a(f, !0)) return void console.log(`shieldLayer ${n} was destroyed`);
                    let i = f.addComponent(C);
                    i.sizeMode = C.SizeMode.CUSTOM, i.spriteFrame = t, _(i)
                }))
            }
            return f
        }
        removeShieldLayer(e, n) {
            e = e || i.getScene().getComponentInChildren(o).node, n = I.String(n).length <= 0 ? "shieldLayer-default" : n;
            let t = e.getChildByName(n);
            t instanceof l && t.removeFromParent()
        }
        getCurShowView() {
            let e = null;
            return this._vActViewDeque.length > 0 && (e = this._vActViewDeque[0]), e
        }
        getLastShowView() {
            let e = null;
            return this._vActViewDeque.length > 1 && (e = this._vActViewDeque[this._vActViewDeque.length - 1]), e
        }
        showActionBoth(e, n, t, i = I.action.delay_type.NORMAL, o = null, s = null, a = null, c = null, r = 0) {
            switch (e) {
                case k.EMAD_NONE:
                    break;
                case k.EMAD_TO_LEFT:
                    this.showActionBothLeft(n, t, i, o, s, a, c, r);
                    break;
                case k.EMAD_TO_RIGHT:
                    this.showActionBothRight(n, t, i, o, s, a, c, r)
            }
        }
        showActionBothLeft(e, n, t = I.action.delay_type.NORMAL, i = null, o = null, s = null, a = null, c = 0) {
            this.showAction(e, this.eMoveActionDir.EMAD_TO_LEFT, this.eMoveActionType.EMAT_FADE_IN, t, i, o, c), this.showAction(n, this.eMoveActionDir.EMAD_TO_LEFT, this.eMoveActionType.EMAT_FADE_OUT, t, s, a, c)
        }
        showActionBothRight(e, n, t = I.action.delay_type.NORMAL, i = null, o = null, s = null, a = null, c = 0) {
            this.showAction(e, this.eMoveActionDir.EMAD_TO_RIGHT, this.eMoveActionType.EMAT_FADE_IN, t, i, o, c), this.showAction(n, this.eMoveActionDir.EMAD_TO_RIGHT, this.eMoveActionType.EMAT_FADE_OUT, t, s, a, c)
        }
        addChildToSceneOnce(e, n) {
            let t = !1;
            if (n || (n = i.getScene().getComponentInChildren(o).node), e instanceof l && !n.getChildByUuid(e.uuid) && !a(e.parent, !0)) {
                n.addChild(e), e.setPosition(u.getVisibleSize().width / 2, u.getVisibleSize().height / 2), t = !0;
                for (let n = 0; n < this._vActViewDeque.length; ++n) e !== this._vActViewDeque[n] || this._vActViewDeque.splice(n, 1);
                this._vActViewDeque.unshift(e)
            }
            return t
        }
        addChildToScene(e, n, t, s, a, c, r) {
            s = s || I.Enum.ZORDER_TYPE.ZORDER_2, a = 1 == a;
            let l = m(n),
                E = (c ?? i).getScene().getComponentInChildren(o).node;
            !c && r && (E = r), E.addChild(l), E.setSiblingIndex(I.Enum.ZORDER_TYPE.ZORDER_low);
            for (let e = 0; e < t.length; e++) _(t[e], l).getComponent(f).target = E;
            return a ? (I.resMgr.adaptWidget(l, !0), l.active = !1, l.setSiblingIndex(s)) : e.scheduleOnce(function(e) {
                l.active = !1, l.setSiblingIndex(s)
            }.bind(e, l, s), 0), l
        }
        showNodeOnLowestZIndex(e, n, t) {
            t = null != t ? t : I.Enum.ZORDER_TYPE.ZORDER_0, n.active = !0, n.setSiblingIndex(I.Enum.ZORDER_TYPE.ZORDER_low), e.scheduleOnce(function(e) {
                n.active = !1, n.setSiblingIndex(t)
            }.bind(e, n, t), 0)
        }
        setText(e, n, t, i, o) {
            i = 1 == i, o = 1 == o;
            let s = _(n, e),
                a = I.config.getStringData(t);
            if (i) s.getComponent(T).placeholder = a;
            else if (o) {
                let e = s.getComponent(N).fontSize;
                s.removeComponent(N), s.addComponent(w), s.getComponent(w).fontSize = e, s.getComponent(w).lineHeight = 0, I.StringTools.setRichTextString(s, a)
            } else s.getComponent(N).string = a
        }
        listenEditboxLimitNum(e) {
            L.os != L.OS.IOS || L.isBrowser || e instanceof T && e.node.on(T.EventType.TEXT_CHANGED, (() => {
                let n = e.string,
                    t = n.length;
                if (t <= 0) return;
                let i = "";
                for (let e = 0; e < t; e++) {
                    let t = n.charAt(e);
                    t >= "0" && t <= "9" && (i += t)
                }
                e.string = i
            }), this)
        }
        setButtonActiveFalse(e) {
            if (!(e instanceof v)) return;
            e._onTouchCancel(), e.node.active = !1
        }
        showPrefabUnique(e, n, t, s, a, c = I.action.delay_type.NORMAL, r = null, l = null, E = 0) {
            if (null == e) return void M("[Action] => showPrefab() Warning: prefab parameter is null!");
            let d = s || i.getScene().getComponentInChildren(o).node,
                h = d.getChildByName(e.name);
            return null == h && (h = m(e), this.addChildToSceneOnce(h, d)), void 0 === a || isNaN(a) || h.setSiblingIndex(a), this.showAction(h, n, t, c, r, l, E), h
        }
        addNodeForAcMap(e) {
            (e || e instanceof l) && this.acNodeMap.add(e, 1)
        }
        setAcMapHide() {
            this.acNodeMap.forEach(((e, n, t) => {
                (e || e instanceof l) && e.active && (e.active = !1)
            }))
        }
    }
    e("Action", q), q.g_instance = null, n._RF.pop()
}