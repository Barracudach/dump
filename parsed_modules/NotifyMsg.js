import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./NotifyMsgBase.js";
import * as f from "./JurisdLoader.js";

function main() {
    var c, h;
    i._RF.push({}, "91203lV1+NJjL8hq9Ogb70c", "NotifyMsg", void 0);
    const {
        ccclass: p,
        property: l
    } = o;
    t("default", p("NotifyMsg")(((h = class t extends d {
        static getInstance() {
            return t.g_instance || (t.g_instance = new t, t.g_instance.init()), t.g_instance
        }
        show(i, o) {
            null != i && "" != i && (this == t.g_instance ? this.notifyComp ? this.notifyComp.show(i, o) : this.prefabLoadedCallback = () => this.notifyComp.show(i, o) : super.show(i, o))
        }
        init() {
            f.loadPrefab("", !1, this.prefabPath, this.prefabLoaded.bind(this), (t => {
                s("NotifyMsg could not load prefab from `" + this.prefabPath + "`: ", t)
            }))
        }
        prefabLoaded(t, i) {
            var o;
            e(t) ? (this.prefab = t, this.notifyNode = n(this.prefab), a.addPersistRootNode(this.notifyNode), this.notifyNode.addComponent(r), this.notifyComp = this.notifyNode.getComponent(d), null == (o = this.prefabLoadedCallback) || o.call(this)) : s("NotifyMsg invalid prefab")
        }
    }).g_instance = void 0, c = h)) || c);
    i._RF.pop()
}