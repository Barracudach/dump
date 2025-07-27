import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cv.js";
import * as c from "./EmojiMagicItem.js";
import * as u from "./EmojiLoader.js";
import * as b from "./CurrencyValue.js";

function main() {
    var p, h, g, d, f, S, m, v, y, D, A, E, j, w;
    a._RF.push({}, "04cf782rJRL9Jf543oP+P7R", "EmojiIcon", void 0);
    const {
        ccclass: T,
        property: C
    } = r;
    let L = t("EmojiAvailableState", function(t) {
        return t[t.Available = 0] = "Available", t[t.DisableByServer = 1] = "DisableByServer", t[t.NotEnoughBalance = 2] = "NotEnoughBalance", t[t.PotSizeRestriction = 3] = "PotSizeRestriction", t[t.AllinRestriction = 4] = "AllinRestriction", t
    }({}));
    t("default", (p = C(o), h = C(n), g = C(l), d = C(l), f = C(b), S = C(n), T((y = e((v = class extends c {
        constructor(...t) {
            super(...t), i(this, "countDownSpr", y, this), i(this, "bgGold", D, this), i(this, "bgGoldSpr", A, this), i(this, "bgDefaultSpr", E, this), i(this, "costLbl", j, this), i(this, "bgDisable", w, this), this.data = null, this.emojiAvailableState = L.Available
        }
        get EmojiAvailableState() {
            return this.emojiAvailableState
        }
        set EmojiAvailableState(t) {
            this.emojiAvailableState = t
        }
        updateData(t) {
            this.data = t, this.updateCost(), this.bgGold.getComponent(o).spriteFrame = t.type == u.config.EmojiList.Dragon ? this.bgGoldSpr : this.bgDefaultSpr
        }
        updateCost() {
            this.data.cost < 0 ? (this.bgGold.active = !1, this.costLbl.node.active = !1, this.costLbl.updateVal("0", this.data.currencyType)) : (this.bgGold.active = !0, this.costLbl.node.active = !0, this.costLbl.updateVal(s.StringTools.serverGoldToShowString(this.data.cost), this.data.currencyType))
        }
        setActiveState(t) {
            this.bgDisable.active = !t && this.EmojiAvailableState !== L.Available
        }
        onItemClicked() {
            switch (super.onItemClicked(), this.EmojiAvailableState) {
                case L.Available:
                    break;
                case L.DisableByServer:
                    s.TT.showMsg(s.config.getStringData("Fullscreen_emoji_disable_tip"), s.Enum.ToastType.ToastTypeError);
                    break;
                case L.NotEnoughBalance:
                    s.TT.showMsg(s.config.getStringData("Insufficient_Funds"), s.Enum.ToastType.ToastTypeError);
                    break;
                case L.PotSizeRestriction:
                case L.AllinRestriction:
            }
        }
        onLoad() {
            super.onLoad(), this.timeCountUpDelegated = this.onCountDownChanged.bind(this), this.countDownSpr.fillRange = 0
        }
        onCountDownChanged(t) {
            this.countDownSpr.fillRange = t, this.setActiveState(0 === t)
        }
    }).prototype, "countDownSpr", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(v.prototype, "bgGold", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(v.prototype, "bgGoldSpr", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(v.prototype, "bgDefaultSpr", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(v.prototype, "costLbl", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(v.prototype, "bgDisable", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = v)) || m));
    a._RF.pop()
}