import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cv.js";
import * as c from "./DocumentAgreement.js";

function main() {
    var p, u, l, g, d;
    r._RF.push({}, "4a90dhXMIVDd6wC0O62m9Hp", "ResponsibleGamingLoader", void 0);
    const {
        ccclass: f,
        property: P
    } = o;
    e("ResponsibleGamingLoader", (p = P(i), f(((d = class e extends a {
        constructor(...e) {
            super(...e), n(this, "rgPopupPrefab", g, this), this.rgPopup = null
        }
        static getInstance() {
            return e._instance
        }
        onLoad() {
            e._instance = this, this.rgPopup = this.createDocViewer()
        }
        createDocViewer() {
            return s.action.addChildToScene(this, this.rgPopupPrefab, [], s.Enum.ZORDER_TYPE.ZORDER_TOP, !0).getComponent(c)
        }
        load() {
            s.dataHandler.getUserData().isLoggedIn() && !s.appConfig.isPH || this.rgPopup.init({
                ResponsibleGaming: null
            }, !0)
        }
    })._instance = null, g = t((l = d).prototype, "rgPopupPrefab", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = l)) || u));
    r._RF.pop()
}