import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./mttconfig.js";
import * as l from "./GameTypeIcon.js";
import * as p from "./cv.js";

function main() {
    var m, g, f, y, h, b, _, d, T, I, F;
    a._RF.push({}, "3bb0eY8sThIj4NbfkZkpLQb", "GameFeatureItemHandler", void 0);
    const {
        ccclass: v,
        property: D
    } = o;
    e("GameFeatureItemHandler", (m = v("GameFeatureItemHandler"), g = D(l), f = D(n), y = D(n), h = D(r), m((d = t((_ = class extends c {
        constructor(...e) {
            super(...e), i(this, "gameTypeIcon", d, this), i(this, "gameTypeName", T, this), i(this, "gameTypeDesc", I, this), i(this, "hyperLink", F, this)
        }
        updateView(e, t, i = !1) {
            e ? (this.node.active = !0, this.setGameFeatureItem(t, i)) : this.node.active = !1
        }
        setGameFeatureItem(e, t = !1) {
            this.gameTypeIcon.setIcon(e, 0), this.gameTypeName.string = p.config.getStringData("game_feature_title_" + e, !1, "game_feature_title_" + e), this.gameTypeDesc.string = p.config.getStringData("game_feature_desc_" + e, !1, "game_feature_desc_" + e), this.hyperLink.active = t
        }
        onClick() {
            const e = u.SERVER_URL_HTTP_PREFIX + "://" + this.gameTypeIcon.gameType;
            s.openURL(e)
        }
    }).prototype, "gameTypeIcon", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), T = t(_.prototype, "gameTypeName", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(_.prototype, "gameTypeDesc", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(_.prototype, "hyperLink", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = _)) || b));
    a._RF.pop()
}