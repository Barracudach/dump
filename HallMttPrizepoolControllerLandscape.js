import * as e from "./cc.js";
import * as r from "./LobbyTools.js";
import * as l from "./MttItemHelper.js";
import * as o from "./MVCController.js";
import * as n from "./HallMttPrizepoolModel.js";
import * as i from "./HallMttPrizepoolModel.js";
import * as s from "./HallMttPrizepoolView.js";
import * as c from "./MttItemPrizepoolController.js";

function main() {
    e._RF.push({}, "dcc81Q7OZBDSY+TZNcNrrKR", "HallMttPrizepoolControllerLandscape", void 0);
    t("default", class extends o {
        constructor(t, e) {
            super(s, i, t, e), this.itemsController = []
        }
        updateDisplayCurrency() {
            var t;
            if (!1 !== Boolean(this.model.data)) {
                this.model.data.convertCurrency = r.isMTTJPcurrencySwitcherOn, null == (t = this.view) || t.setPrizePool(this.model);
                for (let t = 0; t < this.itemsController.length; t++) this.itemsController[t].updateDisplayCurrency()
            }
        }
        updateInfo(t, e, o, i, s = !1) {
            let c = new n;
            l.getTools(e, (e => {
                var n, a;
                c.prizeList = l.tidyUpTableList(o, t, e), c.isAutoRefresh = s, c.prizePool = l.getPrizePool(i), c.currencyRate = i.CurrencyRate, c.displayCurrency = i.DisplayCurrency, c.currency = i.Detail.currency, c.convertCurrency = r.isMTTJPcurrencySwitcherOn, null == (n = this.model) || n.setData(c, o, i), null == (a = this.view) || a.updateView(this.model), this.createItems(c.prizeList)
            }))
        }
        createItems(t) {
            this.itemsController = [];
            for (let r = 0; r < t.length; r++) {
                var e;
                let l = null == (e = this.view) ? void 0 : e.createItem(),
                    o = new c(l);
                o.init(), o.show(t[r], r, this.model), this.itemsController.push(o)
            }
        }
    }), e._RF.pop()
}