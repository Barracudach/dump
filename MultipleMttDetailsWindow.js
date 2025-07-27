import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./MttHall.js";
import * as h from "./ResourcesLoader.js";
import * as m from "./cv.js";
import * as D from "./MttDetailWindowController.js";
import * as W from "./MttDetailsSceneLandscape.js";
import * as f from "./Translator.js";

function main() {
    var p, g, C, L, M, _;
    n._RF.push({}, "5f08dBZxGJAU5mt3J7D62I6", "MultipleMttDetailsWindow", void 0);
    const {
        ccclass: T,
        property: b
    } = o;
    t("MultipleMttDetailsWindow", (p = T("MultipleMttDetailsWindow"), g = b(s), p(((_ = class t extends a {
        constructor(...t) {
            super(...t), i(this, "mttDetails_prefab", M, this), this.mttDetailsNode = null, this.sceneName = "MttDetailsSceneLandscape", this.windowsList = new Map, this.isWindowCreatedProcess = !1
        }
        static get instance() {
            return t._instance
        }
        onLoad() {
            t._instance = this, d.on(l.EVENT_WINDOW_CLOSE, this.onWindowClose.bind(this), this)
        }
        onDestroy() {
            d.off(l.EVENT_WINDOW_CLOSE, this.onWindowClose, this)
        }
        getLimitWindows() {
            return m.appConfig.getGameConfig().maxTournamentDetailWindows
        }
        getWindowScene(t) {
            return this.windowsList.has(t) ? this.windowsList.get(t) : null
        }
        clearWindowsList() {
            this.windowsList.clear()
        }
        static getTournamentId(t, e) {
            return r(t) && r(t.Detail) ? t.Detail.Id : r(e) ? e.TournamentId : 0
        }
        isValidToCreateWindow(e, i, n) {
            const s = e > 0 ? e : t.getTournamentId(i, n);
            return s > 0 && !this.windowsList.has(s) && !this.isWindowCreatedProcess && this.windowsList.size < this.getLimitWindows()
        }
        isWindowOpened(t) {
            return this.windowsList.has(t)
        }
        isMttDetailsWindowScene(t) {
            if (r(t)) {
                return Array.from(this.windowsList.entries()).some((([e, i]) => i.getScene().uuid === t.uuid))
            }
            return !1
        }
        static initMttDetailsWindowByTourId(e) {
            t.initMttDetailsWindowProcess(e, null, null)
        }
        static initMttDetailsWindowByTourData(e, i) {
            const n = t.getTournamentId(e, i);
            t.initMttDetailsWindowProcess(n, e, i)
        }
        static initMttDetailsWindowProcess(e, i, n) {
            if (r(t._instance)) t._instance.show(e, i, n);
            else if (m.appConfig.getGeneralConfig().multiWindowEnabled) {
                const s = new c;
                s.addComponent(t), s.name = "multiple_mtt_details_window", s.setParent(u.instance.getHallScene().node);
                s.getComponent(t).show(e, i, n)
            } else h.instance.loadRes(h.RES_PATH.PREFAB.HALL.MULTIPLE_MTT_DETAILS, s, null, ((s, o) => {
                const a = w(o);
                u.instance.getHallScene().node.addChild(a);
                a.getComponent(t).show(e, i, n)
            }))
        }
        show(t, e, i) {
            if (m.appConfig.getGeneralConfig().multiWindowEnabled)
                if (this.isValidToCreateWindow(t, e, i)) this.createWindow(t, e, i);
                else if (this.isWindowOpened(t)) {
                const e = this.windowsList.get(t);
                null == e || e.focusWindow()
            } else this.windowsList.size >= this.getLimitWindows() && m.popUp.showMsg({
                txt: m.StringTools.formatC(f("MTT_DetailsWindow_MaxMessage"), this.getLimitWindows()),
                sureLabel: f("OKAY")
            });
            else this.showOnBrowser(t, e, i)
        }
        showOnBrowser(t, e, i) {
            if (r(this.mttDetailsNode) && (this.mttDetailsNode.destroy(), this.mttDetailsNode = null), !r(this.mttDetailsNode) && r(this.mttDetails_prefab)) {
                this.mttDetailsNode = w(this.mttDetails_prefab);
                u.instance.getHallScene().bottomView.parent.addChild(this.mttDetailsNode)
            }
            r(this.mttDetailsNode) && (this.mttDetailsNode.active = !0, this.mttDetailsNode.setSiblingIndex(this.mttDetailsNode.parent.children.length - 1), this.bindData(t, e, i, this.mttDetailsNode))
        }
        bindData(t, e, i, n) {
            const s = new D(n, t);
            s.init(), e && i && s.loadByDatas(e, i), s.reload()
        }
        createWindow(e, i, n) {
            this.isWindowCreatedProcess = !0, m.createWindow(this.sceneName, "", (function(s) {
                t.instance.addWindowScene(s, e, i, n);
                let o = s.windowID;
                m.focusWindow(o)
            }), !1, !0)
        }
        addWindowScene(t, e, i, n) {
            this.isWindowCreatedProcess = !1;
            const s = t.getComponentInChildren(W);
            null == s || s.updateData(t, e, i, n), this.bindData(e, i, n, s.getWindowNode()), this.windowsList.set(e, s)
        }
        onWindowClose(t) {
            if (m.appConfig.getGeneralConfig().multiWindowEnabled)
                for (const [e, i] of this.windowsList.entries())
                    if (i.getScene().windowID === t) {
                        this.removeWindow(e, t);
                        break
                    }
        }
        removeWindow(t, e) {
            this.windowsList.delete(t), m.MessageCenter.send(m.Enum.MessageCenterAction.WindowRemoved, e), m.closeWindow(e)
        }
    })._instance = null, M = e((L = _).prototype, "mttDetails_prefab", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = L)) || C));
    n._RF.pop()
}