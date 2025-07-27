import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as s from "./CardLandscape.js";
import * as o from "./Enum.js";
import * as c from "./cv.js";

function main() {
    var h, d, u, p, C, P, f;
    r._RF.push({}, "3cf9b64wflNi6kNdEPvKDCA", "NewReplayerDetailCard", void 0);
    const {
        ccclass: y,
        property: g
    } = n;
    e("NewReplayerDetailCard", (h = y("NewReplayerDetailCard"), d = g(i), u = g(i), h((P = t((C = class extends s {
        constructor(...e) {
            super(...e), this.resPath = "zh_CN/game/dzpoker/cardHistory", this.landscapePath = "landscape", this.mobilePath = "mobile", a(this, "nlheCardSize", P, this), a(this, "ploCardSize", f, this)
        }
        getGameIDByGameInstance() {
            return this.getGameID()
        }
        setGameID(e) {
            var t, a;
            (super.setGameID(e), e != o.Plo && e != o.Plo5) ? null == (t = this.node.getComponent(l)) || t.setContentSize(this.nlheCardSize.x, this.nlheCardSize.y): null == (a = this.node.getComponent(l)) || a.setContentSize(this.ploCardSize.x, this.ploCardSize.y)
        }
        get layoutPath() {
            return c.appConfig.isLandscapeLayout ? this.landscapePath : this.mobilePath
        }
        getRelativeCardFolderPath() {
            let e = "NLHE";
            switch (this.getGameIDByGameInstance()) {
                case o.Plo:
                case o.Plo5:
                    e = "PLO";
                    break;
                default:
                    e = "NLHE"
            }
            return e
        }
        getCardFrontResPath(e) {
            return `${this.resPath}/${this.layoutPath}/${this.getRelativeCardFolderPath()}/card_face/`
        }
        getCardBgResPath(e) {
            return `${this.resPath}/${this.layoutPath}/${this.getRelativeCardFolderPath()}/card_back/Pb_01_0`
        }
    }).prototype, "nlheCardSize", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(C.prototype, "ploCardSize", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = C)) || p));
    r._RF.pop()
}