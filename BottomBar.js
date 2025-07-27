import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./cv.js";
import * as c from "./LanguageSet.js";
import * as s from "./profile_player_complaint.js";

function main() {
    var p, f, b, h, d, _, L, y, m, C, A, T;
    a._RF.push({}, "a831f74sztPXa/nnOwuJoKf", "BottomBar", void 0);
    const {
        ccclass: v,
        property: N
    } = u;
    e("BottomBar", (p = N(i), f = N(o), b = N(r), h = N(r), d = N(o), v((y = t((L = class extends l {
        constructor(...e) {
            super(...e), n(this, "languageNode", y, this), n(this, "languageText", m, this), n(this, "playerComplaints_prefab", C, this), n(this, "changeLanguagePrefab", A, this), n(this, "versionLabel", T, this)
        }
        onLoad() {
            this.languageNode.active = g.appConfig.getGeneralConfig().canChangeLanguage, this.languageNode.active && g.MessageCenter.register(g.config.CHANGE_LANGUAGE, this.updateLanguageText.bind(this), this.node)
        }
        onDestroy() {
            g.MessageCenter.unregister(g.config.CHANGE_LANGUAGE, this.node)
        }
        start() {
            this.versionLabel.string = g.config.GET_CLIENT_VERSION(), this.updateLanguageText()
        }
        updateLanguageText() {
            this.languageText.string = g.config.getStringData("LanguageView_" + g.config.getCurrentLanguageDetails().code + "_button_text")
        }
        onBtnChangeLanguage() {
            g.AudioMgr.playButtonSound("button_click.mp3");
            let e = c.getSinglePrefabInst(this.changeLanguagePrefab);
            g.action.addChildToSceneOnce(e), g.action.showAction(e, g.action.eMoveActionDir.EMAD_TO_LEFT, g.action.eMoveActionType.EMAT_FADE_IN)
        }
        onBtnSupportClicked() {
            g.AudioMgr.playButtonSound("button_click.mp3"), s.show(this.playerComplaints_prefab)
        }
    }).prototype, "languageNode", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(L.prototype, "languageText", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(L.prototype, "playerComplaints_prefab", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(L.prototype, "changeLanguagePrefab", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(L.prototype, "versionLabel", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = L)) || _));
    a._RF.pop()
}