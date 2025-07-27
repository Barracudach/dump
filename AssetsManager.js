import * as t from "./cc.js";
import * as g from "./cc.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./Translator.js";
import * as m from "./ResourcesLoader.js";
import * as p from "./MTTConnector.js";
import * as v from "./MultipleGame.js";
import * as f from "./ImpokerHall.js";
import * as I from "./cv.js";
import * as h from "./DataManager.js";
import * as b from "./AudioEngine.js";
import * as L from "./CrashTracing.js";
import * as C from "./CrashTracing.js";

function main() {
    var A, _;
    a._RF.push({}, "3de8a9b6kBNBoC56Y/Kw7MV", "AssetsManager", void 0);
    const {
        ccclass: y
    } = g;
    e("AssetsManager", y(((_ = class e {
        static init() {
            this.loadNecessaryResource()
        }
        static loadNecessaryResource() {
            for (let a = 0; a < m.instance.neccessaryPrefabPath.length; a++) e.loadRes(m.instance.neccessaryPrefabPath[a], t, ((e, t) => {
                e ? cc_mtt.vv.ConsoleLog.error("loadNecessaryResource", e, m.instance.neccessaryPrefabPath[a]) : cc_mtt.vv.ConsoleLog.log("loadNecessaryResource", m.instance.neccessaryPrefabPath[a])
            }))
        }
        static isValidUrl(e) {
            return e && "" != e && !e.endsWith("/")
        }
        static releaseWebImage(e) {
            m.instance.ReleaseRes(e)
        }
        static texture_InitWithData(e, a, t, o, r) {
            const n = new Uint8Array(e),
                s = new d({
                    _data: n,
                    _compressed: r,
                    width: t,
                    height: o,
                    format: a
                });
            let l = new i;
            return l.image = s, l
        }
    }).currentPopup = void 0, _.loaders = {}, _.tracedURL = [], _.popupParent = null, _.loadRes = (e, a, t, o = !0) => {
        m.instance.loadRes(e, a, null, t, o)
    }, _.tryShowMoreCoinBox = e => {
        h.userData.Gold < h.moreCoin && _.showDialogBox("WEBVIEW.TOP_UP", "GAME.INSUFFICIENT_BALANCE", !1, [{
            type: 0,
            text: "MESSAGE_DIALOG_BLOCKER.OK",
            callback: () => {
                _.loadScene("hall")
            }
        }])
    }, _.showQuitRoomBox = e => {
        let a = {
            Translation: "GAME.QUIT_DIALOG",
            isTranslated: !0,
            resultArrayForTranslated: e => u(e).split("|")
        };
        _.showDialogBox("", a, !0, [{
            type: 0,
            text: "",
            callback: e
        }])
    }, _.showDialogBox = (e, a, t, o, r = _.popupParent, n = null, s = "") => {
        if (v.instance) {
            var l, c;
            if (I.appConfig.getGeneralConfig().multiWindowEnabled) return void(null == (c = f.instance.dialogController) || c.showDialogBox(e, a, t, o, f.instance.dialogLayer, n, s));
            null == (l = v.instance.dialogController) || l.showDialogBox(e, a, t, o, v.instance.dialogLayer, n, s)
        } else {
            if (null == f.instance || null == f.instance.dialogController) return;
            f.instance.dialogController.showDialogBox(e, a, t, o, f.instance.dialogLayer, n, s)
        }
    }, _.loadPopup = (e, a, l = !1, c = _.popupParent) => {
        _.loadRes(e, t, ((t, i) => {
            if (!t && o(i)) {
                if (l) return;
                let t = r(i);
                o(c) || (c = n.getScene().getComponentInChildren(s).node), o(t) && o(c) ? (t.parent = c, a && a(t)) : cc_mtt.vv.ConsoleLog.error("invalid popup", e, o(c))
            } else cc_mtt.vv.ConsoleLog.error("invalid prefab", e)
        }))
    }, _.hideAllDialog = () => {
        if (cc_mtt.vv.ConsoleLog.log("AssetsManager close all popup"), cc_mtt.vv.DataManager.popUps && cc_mtt.vv.DataManager.popUps.length > 0) {
            for (let e of cc_mtt.vv.DataManager.popUps) e instanceof l && e.destroy();
            cc_mtt.vv.DataManager.popUps = []
        }
    }, _.getAvatarUrl = (e, a) => {
        if (e && "" !== e) {
            a.isThumbnails = !a.hasOwnProperty("isThumbnails") || a.isThumbnails, a.system = !!a.hasOwnProperty("system") && a.system, a.total = !!a.hasOwnProperty("total") && a.total, a.timestamp = a.hasOwnProperty("timestamp") ? a.timestamp : null;
            let t = "";
            return -1 == e.toString().indexOf("http://") && -1 == e.toString().indexOf("https://") || (t = e.toString(), t = t.replace(/\/+\//g, "/").replace(":/", "://")), t
        }
        return ""
    }, _.loadImageAction = (e, a, t, r, n, s = 4, l = null, i = null, g = !0) => {
        if ((null == e ? void 0 : e.currentWebImageUrl) == a)
            if (e && o(e))
                if (l) {
                    if (cc_mtt.vv.ConsoleLog.log("AssetsManager.loadWebImage error!\nurl: " + a + "\nerror: "), cc_mtt.vv.ConsoleLog.log(l), s > 0) {
                        let o = s < 5 ? 5 - s : 1;
                        cc_mtt.vv.ConsoleLog.log("AssetsManager.loadWebImage Retry", o), e.scheduleOnce((function() {
                            _.loadWebImage(e, a, t, r, n, s - 1)
                        }), o)
                    }
                    _.onErrorWebImage(e, t, n, g, l)
                } else if (i && o(i)) try {
            let t = e.webImageUrl;
            if (cc_mtt.vv.ConsoleLog.log("AssetsManager.loadWebImage image size:" + a + " " + i.width + "x" + i.height), m.instance.RetainRes(a), r) r(i);
            else {
                const a = new c;
                a.texture = i, e.spriteFrame = a
            }
            e.webImageUrl = a, cc_mtt.vv.AssetsManager.releaseWebImage(t)
        } catch (l) {
            cc_mtt.vv.ConsoleLog.log("trycatch AssetsManager.loadWebImage error!\nurl: " + a + "\nerror: "), cc_mtt.vv.ConsoleLog.log(l), -1 == _.tracedURL.indexOf(a) && (_.tracedURL.push(a), cc_mtt.vv.ConsoleLog.trace("trycatch AssetsManager.loadWebImage trace"), cc_mtt.vv.ConsoleLog.log("AssetsManager.tracedURL", _.tracedURL)), _.onErrorWebImage(e, t, n, g, l)
        } else cc_mtt.vv.ConsoleLog.log("AssetsManager.loadWebImage tex is invalid " + a), _.onErrorWebImage(e, t, n, g, l);
        else cc_mtt.vv.ConsoleLog.log("AssetsManager.loadWebImage sprite is invalid " + a), _.onErrorWebImage(e, t, n, g, l);
        else cc_mtt.vv.ConsoleLog.log("AssetsManager.loadWebImage url expired " + a), _.onErrorWebImage(e, t, n, g, l)
    }, _.loadImage = (e, a, t, r, n, s = 4) => {
        if (!_.isValidUrl(a)) return n && n(new Error("loadImage Invalid URL:" + a)), !1;
        if (e && o(e) && !a.endsWith("/")) {
            if (e.unscheduleAllCallbacks(), e.webImageUrl == a) {
                if (r) {
                    let a = null;
                    e && e.spriteFrame && (a = e.spriteFrame.texture), r(a)
                }
                return !0
            }
            e.currentWebImageUrl = a, _.loadRes(a, i, ((o, l) => {
                _.loadImageAction(e, a, t, r, n, s, o, l)
            }))
        }
        return !1
    }, _.loadWebImage = (e, a, t, r, n, s = 4, l = !0) => {
        if (!_.isValidUrl(a)) return n && n(new Error("loadWebImage Invalid URL:" + a)), !1;
        if (e && o(e)) {
            if (e.unscheduleAllCallbacks(), e.currentWebImageUrl = a, a) return m.instance.loadWebImage(a, ((o, s) => {
                _.loadImageAction(e, a, t, r, n, 0, o, s, l)
            }), s), !0;
            _.onErrorWebImage(e, t, n, l, new Error("Empty url"))
        }
        return !1
    }, _.onErrorWebImage = (e, a, t, r = !0, n = null) => {
        r && o(a) && o(e) && (e.spriteFrame = a, _.releaseWebImage(e.webImageUrl), e.webImageUrl = ""), t && t(n)
    }, _.loadResAudio = (e, a = !1, t = 1, o) => {
        _.loadRes(e, null, ((e, r) => {
            if (e) cc_mtt.vv.ConsoleLog.error(e);
            else {
                let e = I.AudioMgr.executePlay(r, a, t);
                o && b.setFinishCallback(e, o)
            }
        }))
    }, _.loadResSoundEffect = (e, a = !1, t) => {
        _.loadRes(e, null, ((e, o) => {
            if (e) cc_mtt.vv.ConsoleLog.error(e);
            else {
                let e = I.AudioMgr.executePlayEffect(o, a);
                t && b.setFinishCallback(e, t)
            }
        }))
    }, _.loadScene = (e, a) => {
        p.instance.loadScene(e, a)
    }, _.actualLoadScene = (e, a) => {
        const t = (new Date).getTime();
        n.loadScene(e, ((e, o) => {
            var r;
            null == (r = C.getInstance()) || r.trace(L.SceneLoadTime, L.SceneLoadTime, {
                LoadType: "Load",
                SceneName: o.name,
                Message: e ? e.message || e : "",
                Stack: e ? e.stack || e : "",
                LoadTimeMS: (new Date).getTime() - t
            }, !1, null != e), a && a instanceof Function && a()
        }))
    }, A = _)) || A);
    a._RF.pop()
}