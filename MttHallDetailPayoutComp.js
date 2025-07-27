import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./MttHallDetailPayoutItemComp.js";
import * as u from "./FormatParser.js";
import * as p from "./MttHallDetailExpandTab.js";
import * as m from "./Translator.js";

function main() {
    var b, h, C, f, d, P, L, y, g;
    a._RF.push({}, "b784exnawNOXoV43LgXrKMA", "MttHallDetailPayoutComp", void 0);
    const {
        ccclass: D,
        property: M
    } = o;
    t("MttHallDetailPayoutComp", (b = D("MttHallDetailPayoutComp"), h = M(r), C = M(l), f = M(n), b((L = e((P = class extends p {
        constructor(...t) {
            super(...t), this.mvcView = void 0, i(this, "itemPrefab", L, this), i(this, "itemContentNode", y, this), i(this, "prizeCircleLabel", g, this), this._model = null
        }
        updateInfo(t) {
            this._model = t, this.itemContentNode.removeAllChildren(), t.payoutList.forEach(((t, e) => {
                const i = this.createItem().getComponent(c);
                i.setInfo(t), i.showSeparateLine(e > 0)
            })), this.setPrizeCircleLabel()
        }
        createItem() {
            let t = s(this.itemPrefab);
            return t.parent = this.itemContentNode, t
        }
        setPrizeCircleLabel() {
            const {
                prizeCircle: t,
                entries: e
            } = this._model;
            this.prizeCircleLabel.string = cc_mtt.vv.DataManager.customFormatStr(m("MTT_HALL.PRIZE_CIRCLE_AMONG_PLAYERS"), [t, e]), this.prizeCircleLabel.string += ` (${e>0?u.RoundToDecimal(t/e*100,2):100}%)`
        }
        onLanguageChange() {
            this.setPrizeCircleLabel()
        }
    }).prototype, "itemPrefab", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(P.prototype, "itemContentNode", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(P.prototype, "prizeCircleLabel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = P)) || d));
    a._RF.pop()
}