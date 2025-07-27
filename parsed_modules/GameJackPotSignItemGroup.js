import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./GameJackPotSignItemComponent.js";
import * as p from "./JackpotData.js";

function main() {
    var m, g, d, u, h, l, S, k;
    o._RF.push({}, "43d52FkXAxPsJ5JiJVXBCkB", "GameJackPotSignItemGroup", void 0);
    const {
        ccclass: C,
        property: f
    } = i;
    t("GameJackPotSignItemGroup", (m = f(a), g = f(s), d = f([s]), C((l = e((h = class extends r {
        constructor(...t) {
            super(...t), n(this, "background_node", l, this), n(this, "gameJackPotSignItemComponentEarthScript", S, this), n(this, "gameJackPotSignItemComponentMarsScripts", k, this)
        }
        setdata(t) {
            this.gameJackPotSignItemComponentMarsScripts.forEach((t => {
                t.node.active = !1
            }));
            const e = t.filter((t => t.type === p.Earth)),
                n = t.filter((t => t.type === p.Mars));
            this.gameJackPotSignItemComponentEarthScript.setdata(e[0]);
            for (let t = 0; t < n.length; t++) this.gameJackPotSignItemComponentMarsScripts[t].node.active = !0, this.gameJackPotSignItemComponentMarsScripts[t].setdata(n[t])
        }
        toggleBackground(t) {
            this.background_node.active = t, this.background_node.addOrGetComponent(c).height = this.node.addOrGetComponent(c).height
        }
        onLoad() {
            this.node.on(a.EventType.SIZE_CHANGED, this._onSizeChanged.bind(this))
        }
        _onSizeChanged() {
            this.background_node.addOrGetComponent(c).height = this.node.addOrGetComponent(c).height
        }
    }).prototype, "background_node", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(h.prototype, "gameJackPotSignItemComponentEarthScript", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(h.prototype, "gameJackPotSignItemComponentMarsScripts", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), u = h)) || u));
    o._RF.pop()
}