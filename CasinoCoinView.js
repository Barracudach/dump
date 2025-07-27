import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./CurrencyValue.js";
import * as a from "./Enum.js";
import * as u from "./cv.js";

function main() {
    var c, l, d, C;
    i._RF.push({}, "8a8a0CEXJdP/4oAoUDPYTFp", "CasinoCoinView", void 0);
    const {
        ccclass: p,
        property: g
    } = o;
    e("default", (c = g(s), p((C = n((d = class extends r {
        constructor(...e) {
            super(...e), t(this, "main_currency", C, this)
        }
        onEnable() {
            const e = "" + u.dataHandler.getUserData().casino_coin;
            this.main_currency.updateVal(e, a.CASINO_COIN, !1, a.CASINO_COIN), u.MessageCenter.register("update_info", this.UpdateCasinoCoin.bind(this), this.node), u.MessageCenter.register("update_gold", this.UpdateCasinoCoin.bind(this), this.node), this.UpdateCasinoCoin()
        }
        onDisable() {
            u.MessageCenter.unregister("update_info", this.node), u.MessageCenter.unregister("update_gold", this.node)
        }
        UpdateCasinoCoin() {
            this.setCasinoCoinNumber(u.dataHandler.getUserData().casino_coin)
        }
        setCasinoCoinNumber(e) {
            this.main_currency.value = u.StringTools.numToFloatString(e)
        }
    }).prototype, "main_currency", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = d)) || l));
    i._RF.pop()
}