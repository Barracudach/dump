import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./cv.js";
import * as w from "./RGView.js";
import * as m from "./HashMap.js";
import * as b from "./Enum.js";

function main() {
    var f, _, v, y, A, L, M, E, T, D, S, V, C, I, R, O, H, P, W, k, x;
    n._RF.push({}, "c1134nd8/FNto1hd9Cf+QNB", "ResponsibleGamingView", void 0);
    const {
        ccclass: z,
        property: F
    } = o;
    e("ResponsibleGamingView", (f = F({
        type: [w]
    }), _ = F({
        type: s(b)
    }), v = F(a), y = F(a), A = F(a), L = F(a), M = F(a), E = F(a), T = F(a), z(((x = class e extends r {
        constructor(...e) {
            super(...e), i(this, "existingViews", V, this), i(this, "defaultState", C, this), i(this, "panelOverview", I, this), i(this, "panelExclude", R, this), i(this, "panelDepositLimits", O, this), i(this, "panelLossLimits", H, this), i(this, "panelWagerLimits", P, this), i(this, "panelPlayTimeLimit", W, this), i(this, "panelLimitHistory", k, this), this.views = new m, this.currentView = null, this.statesQueue = []
        }
        static getSinglePrefabInst(t, i) {
            let n = i;
            return n || (n = l.getScene().getComponentInChildren(u).node), e._g_prefabInst || (e._g_prefabInst = c(t)), n.getChildByUuid(e._g_prefabInst.uuid) || p(e._g_prefabInst, !0) || (e._g_prefabInst = c(t)), e._g_prefabInst
        }
        static showView(t, i, n) {
            let s = e.getSinglePrefabInst(i, n);
            return p(s.parent) && s.active ? s.getComponent(e).setActiveState(t) : (s.getComponent(e).defaultState = t, g.action.addChildToSceneOnce(s), g.action.showAction(s, g.action.eMoveActionDir.EMAD_TO_LEFT, g.action.eMoveActionType.EMAT_FADE_IN)), s
        }
        onLoad() {
            this.node.getComponent(h).priority = g.Enum.ZORDER_TYPE.RG_VIEW, g.resMgr.adaptWidget(this.node, !0), this.existingViews.forEach((e => {
                null != e && (e.init(this), this.views.has(e.state) ? d("Already exist a view with state " + e.state + "(" + b[e.state] + ")") : this.views.add(e.state, e))
            }))
        }
        onEnable() {
            this.views.forEach(((e, t) => {
                t.state != this.defaultState && (t.node.active = !1)
            })), this.statesQueue.length = 0, this.setActiveState(this.defaultState), g.MessageCenter.send("HideWebview_ShowWindows", !1)
        }
        onDisable() {
            g.MessageCenter.send("HideWebview_ShowWindows", !0)
        }
        onBtnChangeState(e, t) {
            g.AudioMgr.playButtonSound("button_click.mp3"), this.setActiveState(b[t])
        }
        setActiveState(e) {
            if (null != this.currentView && this.currentView.state == e) return;
            if (e != b.Menu && e != b.Overview && g.dataHandler.getUserData().showTouristLimited("ResponsibleGaming_tourist_msg")) return;
            let t = this.views.get(e);
            if (null == t) {
                if (t = this.createNewView(e), null == t) return void d("A new view with state " + e + "(" + b[e] + ") can not be created");
                this.node.addChild(t.node), g.resMgr.adaptWidget(t.node, !0), t.init(this), this.views.add(e, t)
            }
            this.statesQueue.push(e), this.currentView = t, this.currentView.node.getComponent(h).priority = this.statesQueue.length, e == this.defaultState ? this.currentView.node.active = !0 : g.action.showAction(this.currentView.node, g.action.eMoveActionDir.EMAD_TO_LEFT, g.action.eMoveActionType.EMAT_FADE_IN, g.action.delay_type.NORMAL)
        }
        createNewView(e) {
            let t = null;
            switch (e) {
                case b.Overview:
                    t = c(this.panelOverview).getComponent(w);
                    break;
                case b.ExcludeMe:
                    t = c(this.panelExclude).getComponent(w);
                    break;
                case b.DepositLimit:
                    t = c(this.panelDepositLimits).getComponent(w);
                    break;
                case b.LossLimit:
                    t = c(this.panelLossLimits).getComponent(w);
                    break;
                case b.WagerLimit:
                    t = c(this.panelWagerLimits).getComponent(w);
                    break;
                case b.PlayTime:
                    t = c(this.panelPlayTimeLimit).getComponent(w);
                    break;
                case b.LimitHistory:
                    t = c(this.panelLimitHistory).getComponent(w)
            }
            return t
        }
        goBack(e = !0) {
            this.statesQueue.length <= 1 ? (e && g.AudioMgr.playButtonSound("close.mp3"), this.hide()) : (e && g.AudioMgr.playButtonSound("back_button.mp3"), g.action.showAction(this.currentView.node, g.action.eMoveActionDir.EMAD_TO_RIGHT, g.action.eMoveActionType.EMAT_FADE_OUT, g.action.delay_type.NORMAL), this.statesQueue.pop(), this.currentView = this.views.get(this.statesQueue[this.statesQueue.length - 1]))
        }
        hide() {
            this.currentView = null, g.config.NEEDS_LANDSCAPE() ? this.node.removeFromParent() : g.action.showAction(this.node, g.action.eMoveActionDir.EMAD_TO_RIGHT, g.action.eMoveActionType.EMAT_FADE_OUT)
        }
    })._g_prefabInst = null, V = t((S = x).prototype, "existingViews", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), C = t(S.prototype, "defaultState", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return b.Menu
        }
    }), I = t(S.prototype, "panelOverview", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(S.prototype, "panelExclude", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(S.prototype, "panelDepositLimits", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(S.prototype, "panelLossLimits", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(S.prototype, "panelWagerLimits", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(S.prototype, "panelPlayTimeLimit", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(S.prototype, "panelLimitHistory", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = S)) || D));
    n._RF.pop()
}