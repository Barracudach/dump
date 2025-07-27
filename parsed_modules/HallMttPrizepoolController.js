import * as t from "./cc.js";
import * as i from "./MttItemHelper.js";
import * as l from "./MVCController.js";
import * as o from "./HallMttPrizepoolModel.js";
import * as r from "./HallMttPrizepoolModel.js";
import * as s from "./HallMttPrizepoolView.js";
import * as n from "./MttItemPrizepoolController.js";
import * as a from "./HallPokerController.js";

function main() {
    t._RF.push({}, "b1628v5bx5EWZJdOg1JXg/J", "HallMttPrizepoolController", void 0);
    e("default", class extends l {
        constructor(e, t) {
            super(s, r, e, t), this._onPageHide = null, this.itemsController = [], this.view.onClickButtonBack = this.hide.bind(this)
        }
        registerPageShowCallback(e) {
            this.view.registerOnShowCallback(e)
        }
        registerPageHideCallback(e) {
            this.view.registerOnHideCallback(e)
        }
        show() {
            this.view.show()
        }
        updateDisplayCurrency() {
            var e;
            if (!1 !== Boolean(this.model.data)) {
                this.model.data.convertCurrency = a.isMTTJPcurrencySwitcherOn, null == (e = this.view) || e.setPrizePool(this.model);
                for (let e = 0; e < this.itemsController.length; e++) this.itemsController[e].updateDisplayCurrency()
            }
        }
        updateInfo(e, t, l, r, s = !1) {
            let n = new o;
            i.getTools(t, (t => {
                var o, c;
                n.prizeList = i.tidyUpTableList(l, e, t), n.isAutoRefresh = s, n.prizePool = i.getPrizePool(r), n.currencyRate = r.CurrencyRate, n.displayCurrency = l.DisplayCurrency, n.currency = r.Detail.currency, n.convertCurrency = a.isMTTJPcurrencySwitcherOn, null == (o = this.model) || o.setData(n, l, r), null == (c = this.view) || c.updateView(this.model), this.createItems(n.prizeList)
            }))
        }
        createItems(e) {
            this.itemsController = [];
            for (let i = 0; i < e.length; i++) {
                var t;
                let l = null == (t = this.view) ? void 0 : t.createItem(),
                    r = new n(l);
                r.init(), r.show(e[i], i, this.model), this.itemsController.push(r)
            }
        }
        hideImmediate() {
            this.view.hideImmediately()
        }
        hide() {
            this.view.hide()
        }
        isShowing() {
            return this.view.isShowing()
        }
        showPanel(e) {
            this.view.getNode().active = e
        }
    }), t._RF.pop()
}