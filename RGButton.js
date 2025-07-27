import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./ResponsibleGamingView.js";
import * as d from "./cv.js";
import * as g from "./Enum.js";

function main() {
    var b, p, S, C, m, f, G, R;
    i._RF.push({}, "1192bp+3dJK17duVRV0+siy", "RGButton", void 0);
    const {
        ccclass: I,
        property: _
    } = r;
    e("RGButton", (b = _(s), p = _({
        type: o(g)
    }), S = _({
        tooltip: "This button should be shown in front of all UI in this scene?\nThis button should receive hide/show events from MessageCenter?"
    }), I((f = t((m = class extends a {
        constructor(...e) {
            super(...e), n(this, "prefab_responsibleGaming", f, this), n(this, "defaultState", G, this), n(this, "isGlobalInScene", R, this), this.initialZIndex = 0, this.initialSiblingIndex = 0
        }
        onLoad() {
            this.isRGBtnEnabled() || this.setVisible(!1)
        }
        start() {
            this.isGlobalInScene && (d.MessageCenter.register(d.Enum.MessageCenterAction.RGButtonVisible, this.setVisible.bind(this), this.node), d.MessageCenter.register(d.Enum.MessageCenterAction.RGButtonInFront, this.setInFront.bind(this), this.node))
        }
        onDestroy() {
            this.isRGBtnEnabled() && this.isGlobalInScene && d.MessageCenter && l(this.node) && (d.MessageCenter.unregister(d.Enum.MessageCenterAction.RGButtonVisible, this.node), d.MessageCenter.unregister(d.Enum.MessageCenterAction.RGButtonInFront, this.node))
        }
        setVisible(e = !0) {
            this.node.active = e
        }
        setInFront(e = !0) {
            e ? (this.initialZIndex = this.node.getComponent(u).priority, this.initialSiblingIndex = this.node.getSiblingIndex(), this.node.getComponent(u).priority = d.Enum.ZORDER_TYPE.RG_BUTTON) : (this.node.getComponent(u).priority = this.initialZIndex, this.node.setSiblingIndex(this.initialSiblingIndex))
        }
        onBtnClick() {
            d.AudioMgr.playButtonSound("button_click.mp3"), this.showRG()
        }
        showOverViewPage() {
            d.AudioMgr.playButtonSound("button_click.mp3");
            let e = c(this.prefab_responsibleGaming);
            d.action.addChildToSceneOnce(e, d.tools.getRoot(this.node)), e.setPosition(new E(E.ZERO))
        }
        showRG() {
            let e = h.getSinglePrefabInst(this.prefab_responsibleGaming);
            l(e.parent) && e.active ? e.getComponent(h).setActiveState(this.defaultState) : (e.getComponent(h).defaultState = this.defaultState, d.action.addChildToSceneOnce(e), d.action.showAction(e, d.action.eMoveActionDir.EMAD_TO_LEFT, d.action.eMoveActionType.EMAT_FADE_IN))
        }
        isRGBtnEnabled() {
            const e = d.appConfig.getModulesConfig();
            if (!e.rgStatus.rgEnabled) return !1;
            return !this.checkIfGameScene() || !!e.rgStatus.rgGameBtnEnabled
        }
        checkIfGameScene() {
            const e = d.config.getCurrentScene();
            return e == d.Enum.SCENE.GAME_SCENE || e == d.Enum.SCENE.GAME_SCENE_AOF || e == d.Enum.SCENE.COWBOY_SCENE || e == d.Enum.SCENE.VIDEOCOWBOY_SCENE || e == d.Enum.SCENE.HUMANBOY_SCENE || e == d.Enum.SCENE.POKERMASTER_SCENE || e == d.Enum.SCENE.JACKFRUIT_SCENE
        }
    }).prototype, "prefab_responsibleGaming", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(m.prototype, "defaultState", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return g.Menu
        }
    }), R = t(m.prototype, "isGlobalInScene", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), C = m)) || C));
    i._RF.pop()
}