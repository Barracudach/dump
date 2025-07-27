import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./Holdem_Basic_Item.js";
import * as l from "./ResourcesLoader.js";
import * as u from "./AttackIcons_ts.js";

function main() {
    var p, _, f, d;
    n._RF.push({}, "672b5Y2joxIxrrfhBFMUa5p", "AttackList_ts", void 0);
    const {
        ccclass: A,
        property: I
    } = o;
    t("default", (p = I(i), A((d = e((f = class extends c {
        constructor(...t) {
            super(...t), s(this, "attackList", d, this), this._playerSetting = null
        }
        init() {
            let t = l.RES_PATH.PREFAB.COMMON.ATTACK_ICON;
            l.instance.loadRes(t, r, null, ((t, e) => {
                for (const t in u.ATTACK_ICON_ANIMATION) {
                    let s = a(e),
                        n = s.getComponent(u);
                    s.parent = this.attackList, n.setHoldemRoom(this.holdemRoom), n._playerSetting = this._playerSetting, n.setIcon(u.ATTACK_ICON_ANIMATION[t])
                }
            }))
        }
    }).prototype, "attackList", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = f)) || _));
    n._RF.pop()
}