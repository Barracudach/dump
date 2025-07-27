import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./cv.js";

function main() {
    var u, p, g, d, _, y;
    n._RF.push({}, "ba748yQS4xNp7FThtK44IeO", "RedEnvelopeHistoryStripe", void 0);
    const {
        ccclass: m,
        property: f
    } = s;
    t("default", (u = f(r), p = f(o), m((_ = e((d = class extends a {
        constructor(...t) {
            super(...t), i(this, "winnerDetailRichText", _, this), i(this, "bottomLine", y, this), this._itemData = void 0, this._contentWidth = void 0
        }
        onLoad() {
            h.MessageCenter.register(h.config.CHANGE_LANGUAGE, this.init.bind(this), this.node)
        }
        onDestroy() {
            h.MessageCenter.unregister(h.config.CHANGE_LANGUAGE, this.node)
        }
        init(t, e) {
            const i = t || this._itemData,
                n = e || this._contentWidth;
            this._itemData = i, this._contentWidth = n;
            const r = i.nick_name,
                o = h.StringTools.getCurrencySymbol(i.currency_type) + h.StringTools.numToFloatString(i.amount),
                s = i.room_name,
                a = this._getCurrencyContext(i.currency_type);
            let c = h.config.getStringData("red_envelope_history_stripe_award_context").replace(/{{user_name}}/, r);
            c = c.replace(/{{currency_type}}/, a), c = c.replace(/{{draw_amount}}/, o), c = c.replace(/{{table}}/, s), this.winnerDetailRichText.string = c, this.ResizeContentWidth(this.node, n), this.ResizeContentWidth(this.winnerDetailRichText.node, n), this.ResizeContentWidth(this.bottomLine.node, n), this.winnerDetailRichText.maxWidth = n
        }
        _getCurrencyContext(t) {
            let e;
            switch (t) {
                case 2:
                    e = h.config.getStringData("Earnings_lab_4");
                    break;
                case 6:
                    e = h.config.getStringData("Earnings_lab_2");
                    break;
                default:
                    throw new Error(`RedEnvelopeHistoryStripe :: _getCurrencyContext : <${t}> is not supported type yet!`)
            }
            return e
        }
        ResizeContentWidth(t, e) {
            t.getComponent(c).setContentSize(new l(e, t.getContentSize().height))
        }
    }).prototype, "winnerDetailRichText", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(d.prototype, "bottomLine", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = d)) || g));
    n._RF.pop()
}