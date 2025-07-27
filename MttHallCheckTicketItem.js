import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./AutoResizeLabel.js";
import * as p from "./CommonTools.js";
import * as b from "./FormatParser.js";
import * as m from "./ThemeSystem.js";
import * as h from "./ColorSystemType.js";
import * as d from "./ColorsystemLobbyV2.js";

function main() {
    var y, g, f, k, C, S, _, I, N, T, x, v, B, z, D, F, L;
    r._RF.push({}, "3cc85ATyppA3JvVECySNnyi", "MttHallCheckTicketItem", void 0);
    const {
        ccclass: w,
        property: M
    } = s;
    e("MttHallCheckTicketItem", (y = w("MttHallCheckTicketItem"), g = M(m), f = M(m), k = M(o), C = M(l), S = M(u), _ = M(a), I = M(n), y((x = t((T = class extends c {
        constructor(...e) {
            super(...e), i(this, "bg", x, this), i(this, "bgBorder", v, this), i(this, "ticketImage", B, this), i(this, "defaultTicketImageSpriteFrame", z, this), i(this, "toolName", D, this), i(this, "expiry", F, this), i(this, "toggleNode", L, this), this._data = null, this._onClickCallback = null
        }
        get backpackId() {
            var e;
            return null == (e = this._data) ? void 0 : e.Id
        }
        registerOnClickCallback(e) {
            this._onClickCallback = e
        }
        setData(e) {
            this._data = e, this.setToolName(cc_mtt.vv.DataManager.i18DataFromServer(e.Name, e.NameI18N)), this.setExpiredDate(e.Expiry || e.Expired)
        }
        setToolName(e) {
            this.toolName && this.toolName.setString(e)
        }
        setExpiredDate(e) {
            if (this.expiry)
                if (e) {
                    const {
                        date: t,
                        month: i,
                        year: r
                    } = p.instance.splitDateTime(e), [o, l] = b.addStartPadding([t, i], 2, "0");
                    this.expiry.string = `${o}.${l}.${r}`
                } else this.expiry.string = "-"
        }
        setSelected(e) {
            this.bg.setColorScheme(h.LobbyV2, e ? d.BuyIn_RoundBox2 : d.BuyIn_RoundBox), this.bgBorder.setColorScheme(h.LobbyV2, e ? d.BuyIn_OptionBorder_Selected : d.BuyIn_OptionBorder2), this.toggleNode.active = e
        }
        onClick() {
            var e;
            null == (e = this._onClickCallback) || e.call(this, this._data)
        }
    }).prototype, "bg", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(T.prototype, "bgBorder", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(T.prototype, "ticketImage", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(T.prototype, "defaultTicketImageSpriteFrame", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(T.prototype, "toolName", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(T.prototype, "expiry", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(T.prototype, "toggleNode", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = T)) || N));
    r._RF.pop()
}