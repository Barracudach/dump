import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cv.js";
import * as l from "./ResourceManager.js";

function main() {
    var f, h, y, d, m, g, F, R, b, D, S, L;
    a._RF.push({}, "e7ecbA5dyRPJIKu8q0/qSf+", "LazyLoadResource", void 0);
    const {
        ccclass: z,
        property: v,
        menu: C
    } = s, T = "[LazyLoadResource]";
    var M = function(e) {
        return e[e.SpriteFrame = 0] = "SpriteFrame", e[e.Font = 1] = "Font", e
    }(M || {});
    let $ = e("ResourceData", (f = z("ResourceData"), h = v(o), y = v({
        type: n(M)
    }), f((g = t((m = class {
        constructor() {
            r(this, "path", g, this), r(this, "assetType", F, this)
        }
    }).prototype, "path", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), F = t(m.prototype, "assetType", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return M.SpriteFrame
        }
    }), d = m)) || d));
    e("default", (R = C(`Custom UI/${T}`), b = v([$]), z(D = R((L = t((S = class extends i {
        constructor(...e) {
            super(...e), r(this, "resourceData", L, this), this.mapType = {
                [M.SpriteFrame]: c,
                [M.Font]: u
            }
        }
        start() {
            this.resourceData.forEach((e => {
                if (e && e.path) {
                    console.log(T, `[Start] load ${e.path}`);
                    const t = this.mapType[e.assetType];
                    l.getInstance().loadResDir(e.path, t, (() => {
                        console.log(T, `[Finished] loadResDir .... ${e.path}, type: ${t.name}`), t == u && p.MessageCenter.send("onFontResLoaded")
                    }))
                }
            }))
        }
    }).prototype, "resourceData", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), D = S)) || D) || D));
    a._RF.pop()
}