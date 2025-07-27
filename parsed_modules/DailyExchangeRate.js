import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./CurrencyManager.js";
import * as c from "./cv.js";
import * as l from "./Enum.js";

function main() {
    var h, u, f, b;
    i._RF.push({}, "2ef4b3mFvNI9L2eCOc/jYVy", "DailyExchangeRate", void 0);
    const {
        ccclass: d,
        property: C
    } = a;
    e("default", (h = C(o), d((b = t((f = class extends r {
        constructor(...e) {
            super(...e), n(this, "lblExchange", b, this), this._orgLblWidth = 0
        }
        onLoad() {
            this._orgLblWidth = this.lblExchange.node.getComponent(s).width, this.onLanguageChange(), c.MessageCenter.register(c.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onDestroy() {
            c.MessageCenter.unregister(c.config.CHANGE_LANGUAGE, this)
        }
        onLanguageChange() {
            if (this.lblExchange.overflow = o.Overflow.NONE, c.dataHandler.getUserData().getCountryCurrency().type === l.MXN && c.appConfig.getLobbyConfig().casino.showMXNInfo) {
                const e = g.getInstance().convert(l.MXN, l.CNY, 1);
                this.lblExchange.string = c.StringTools.formatC(c.config.getStringData("minigame_menu_exchange_rate"), "1 MXN", e)
            } else {
                const e = g.getInstance().convert(l.USD, l.CNY, 1);
                this.lblExchange.string = c.StringTools.formatC(c.config.getStringData("minigame_menu_exchange_rate"), "$1", e)
            }
            this.scheduleOnce(this.autoResizeLabel.bind(this), .02)
        }
        autoResizeLabel() {
            this.lblExchange.node.getComponent(s).width > this._orgLblWidth && (this.lblExchange.overflow = o.Overflow.SHRINK, this.lblExchange.node.getComponent(s).width = this._orgLblWidth)
        }
    }).prototype, "lblExchange", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = f)) || u));
    i._RF.pop()
}