import * as t from "./cc.js";
import * as r from "./SubfilterController.js";
import * as l from "./SubfilterController.js";

function main() {
    t._RF.push({}, "e00b5SxTwVHqrviFk+m17fM", "MTTSubfilterController", void 0);
    const i = e("MTTSubfilterSplitSymbol", "||");
    e("default", class extends r {
        isSoleSubfilter(e) {
            return e == l || "all" == e.toLowerCase()
        }
        setDefaultCurrentSubfilter(e) {
            let t = null == e ? void 0 : e.toLowerCase().split(i),
                r = [];
            this.model.subfilters.forEach((e => {
                t.find((t => {
                    var r;
                    return (null == (r = e.name) ? void 0 : r.toLowerCase()) === t
                })) && r.push(e.name)
            })), this.model.currentSubfilter = r.length > 0 ? r.join(i) : this.model.subfilters[0].name, cc_mtt.vv.ConsoleLog.log("setDefaultCurrentSubfilter", this.model.currentSubfilter)
        }
        selectSubFilter(e) {
            var t;
            cc_mtt.vv.ConsoleLog.log("MTTSubfilterController start", this.model.currentSubfilter), this.isSoleSubfilter(e) || 0 == (null == (t = this.model) || null == (t = t.currentSubfilter) ? void 0 : t.length) || !this.isSoleSubfilter(e) && this.isSoleSubfilter(this.model.currentSubfilter) ? this.model.currentSubfilter = e : this.isSelectingSubfilter(e) ? (this.deselectSubFilter(e), "" == this.model.currentSubfilter && (this.model.currentSubfilter = this.model.subfilters[0].name)) : this.model.currentSubfilter += i + e, cc_mtt.vv.DataManager.mttGameListLastSubfilter = this.model.currentSubfilter, cc_mtt.vv.ConsoleLog.log("MTTSubfilterController", this.model.currentSubfilter), this.view.updateView(this.model)
        }
        getCurrentSubfilterList() {
            return this.model.currentSubfilter.split(i)
        }
        isSelectingSubfilter(e) {
            return this.getCurrentSubfilterList().findIndex((t => t.toLowerCase() == e.toLowerCase())) > -1
        }
        deselectSubFilter(e) {
            if (this.isSelectingSubfilter(e)) {
                let t = this.getCurrentSubfilterList(),
                    r = t.findIndex((t => t.toLowerCase() == e.toLowerCase()));
                r > -1 && (t.splice(r, 1), this.model.currentSubfilter = t.join(i))
            }
        }
    }), t._RF.pop()
}