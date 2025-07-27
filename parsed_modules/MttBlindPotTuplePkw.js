import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./MttBlindPotTableTuple.js";
import * as a from "./NodePage.js";
import * as u from "./Translator.js";
import * as c from "./ThemeSystem.js";
import * as h from "./StringTools.js";
import * as p from "./ColorSystemType.js";
import * as d from "./ColorSystemMainBtnState.js";
import * as g from "./ColorSystemTypeOther.js";

function main() {
    var f, S, T, m, B, b;
    n._RF.push({}, "da544PePINLQIIx8awZbdjn", "MttBlindPotTuplePkw", void 0);
    const {
        ccclass: y,
        property: P
    } = r;
    t("MttBlindPotTuplePkw", (f = P(o), S = P(l), y((B = e((m = class extends s {
        constructor(...t) {
            super(...t), i(this, "durationLbl", B, this), i(this, "tupleBg", b, this)
        }
        setInfo(t, e, i, n, o, l, r = 0) {
            this._tupleId = e, this.setLevelText(t), this.setTupleBackground(e), this.stopIcon.active = t.Level < n, t.BasePot ? (this.selectTableAttributes(1), this.basePot.string = h.ScientificNotationWithFormat(a.roundValue(t.BasePot))) : (this.selectTableAttributes(0), this.ante.string = h.ScientificNotationWithFormat(a.roundValue(t.Ante)), this.blind.string = (o ? "" : h.ScientificNotationWithFormat(t.SmallBlind) + "/") + h.ScientificNotationWithFormat(t.BigBlind)), this.setDuration(l, r), this.setHighlightCurrentLevel(i == t.Level)
        }
        setDuration(t, e) {
            this.durationLbl.string = t > 0 ? t.toString() : Math.round(e / 60) + u("TIME.MINUTE")
        }
        setTupleBackground(t) {
            this.tupleBg && (this.tupleBg.active = t % 2 == 0)
        }
        setLevelText(t) {
            this.level.string = t.Level
        }
        setHighlightCurrentLevel(t) {
            let e = [this.level, this.blind, this.ante, this.durationLbl];
            for (let i of e) {
                let e = i.getComponent(c),
                    n = t ? g.MttBlindStructureHighlight : g.MttBlindStructureNormal;
                e && (i == this.level || i == this.ante ? t ? e.setColorScheme(p.Other, g.MttBlindStructureHighlight) : e.setColorScheme(p.MainBtn, d.NormalText) : e.setColorScheme(e.colorScheme, n))
            }
        }
    }).prototype, "durationLbl", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(m.prototype, "tupleBg", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = m)) || T));
    n._RF.pop()
}