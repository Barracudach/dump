import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as s from "./cc.js";
import * as o from "./ListView.js";
import * as r from "./MttBlindStructureComp.js";
import * as a from "./MttBlindStructureItemComp.js";

function main() {
    var l, u, c, d, p;
    n._RF.push({}, "a9569NsK8VK76FixRbW01La", "MttStructureTabComp", void 0);
    const {
        ccclass: h,
        property: b
    } = s;
    t("MttStructureTabComp", (l = h("MttStructureTabComp"), u = b(o), l((p = i((d = class extends r {
        constructor(...t) {
            super(...t), e(this, "listView", p, this)
        }
        onActived() {}
        onDeactived() {}
        start() {
            this.listView.notifyDataSetChanged(this.blindPotList)
        }
        onLoad() {
            this.listView.init(this._bindData.bind(this)), this.listView.notifyDataSetChanged(this.blindPotList)
        }
        _bindData(t, i, e) {
            const n = t.getComponent(a),
                s = {
                    id: i.Level,
                    blindConfig: i,
                    isCurrentLevel: i.Level == this.currentLevel,
                    isStopSignUpLevel: i.Level == this.levelStopSignUp,
                    blindHand: this._blindHand,
                    levelDuration: this.levelDuration,
                    timeBank: i.TimeBank,
                    isShortDeck: this._isShortDesk
                };
            n.setInfo(s)
        }
        updateList() {
            this.listView.notifyDataSetChanged(this.blindPotList)
        }
    }).prototype, "listView", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), c = d)) || c));
    n._RF.pop()
}