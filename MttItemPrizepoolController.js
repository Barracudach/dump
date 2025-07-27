import * as e from "./cc.js";
import * as o from "./MVCController.js";
import * as r from "./MttItemPrizepoolModel.js";
import * as l from "./MttItemPrizepoolModel.js";
import * as n from "./MttItemPrizepoolView.js";

function main() {
    e._RF.push({}, "bf118HFgh9FKb3h4bYo72++", "MttItemPrizepoolController", void 0);
    t("default", class extends o {
        constructor(t, e) {
            super(n, l, t, e)
        }
        show(t, e, o) {
            var l, n;
            let i = new r;
            Object.assign(i, t), null == (l = this.model) || l.setData(e, i, o), null == (n = this.view) || n.updateView(this.model)
        }
        updateDisplayCurrency() {
            var t;
            null == (t = this.view) || t.updateDisplayCurrency(this.model)
        }
    }), e._RF.pop()
}