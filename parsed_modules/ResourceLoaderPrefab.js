import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./ResourcesLoader.js";

function main() {
    var u, l, p, f;
    t._RF.push({}, "2f474CjrntCUZKb8qWswje3", "ResourceLoaderPrefab", void 0);
    const {
        ccclass: d,
        property: b
    } = i;
    e("ResourceLoaderPrefab", (u = b(o), d((f = r((p = class extends c {
        constructor(...e) {
            super(...e), s(this, "prefab", f, this), this.resourceList = void 0
        }
        onLoad() {
            this.resourceList = n.getDependsRecursively(this.prefab), a.instance.RetainResArray(this.resourceList)
        }
        onDestroy() {
            a.instance.ReleaseResArray(this.resourceList)
        }
    }).prototype, "prefab", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = p)) || l));
    t._RF.pop()
}