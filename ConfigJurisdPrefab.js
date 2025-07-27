import * as t from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./JurisdLoader.js";
import * as o from "./ConfigJurisdBase.js";

function main() {
    var a;
    r._RF.push({}, "8af2c8fxOBMe6L9rQthA6kR", "ConfigJurisdPrefab", void 0);
    const {
        ccclass: d,
        property: u,
        disallowMultiple: c,
        menu: f
    } = s;
    e("ConfigJurisdPrefab", d(a = c(a = f("Custom UI/Config Jurisdiction Prefab")(a = class extends o {
        constructor(...e) {
            super(...e), this.fileType = i
        }
        onLoad() {
            this.reload()
        }
        LoadPrefab(e) {
            t(e).parent = this.node
        }
        loadBundle(e) {
            let r = this;
            n.loadJurisdPrefab(e, this.filePath, ((e, i) => {
                e && r.LoadPrefab(e), r.bundle = i
            }))
        }
        clearPreview() {
            return this.node.children.length > 0 && (this.node.destroyAllChildren(), !0)
        }
    }) || a) || a) || a);
    r._RF.pop()
}