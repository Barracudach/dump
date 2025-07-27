import * as t from "./cc.js";
import * as n from "./MVCController.js";

function main() {
    t._RF.push({}, "879ca2p7r5HuZXaOQvcQ5MA", "MVCItemController", void 0);
    e("default", class extends n {
        getDataId() {
            return null
        }
        isSameItem(e) {
            return this.getDataId() === e
        }
        onSelected(e, t) {}
        onUpdateViewSelected() {}
    }), t._RF.pop()
}