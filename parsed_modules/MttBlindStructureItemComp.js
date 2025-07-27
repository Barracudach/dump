import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./ThemeSystem.js";
import * as u from "./ColorSystemTypeOther.js";
import * as c from "./StringTools.js";
import * as h from "./NodePage.js";
import * as p from "./Translator.js";
import * as m from "./ColorsystemLobbyV2.js";
import * as g from "./FormatParser.js";
import * as f from "./cv.js";

function main() {
    var d, b, S, B, L, T, y, v, C, _, I, k, M, w, D, N, z, P;
    n._RF.push({}, "544d44ruK9PT5ZaC2S0Rk+L", "MttBlindStructureItemComp", void 0);
    const {
        ccclass: x,
        property: F
    } = l;
    t("default", (d = F(o), b = F(r), S = F(r), B = F(r), L = F(r), T = F(r), y = F(o), v = F(o), x((I = e((_ = class extends s {
        constructor(...t) {
            super(...t), i(this, "stopIcon", I, this), i(this, "level", k, this), i(this, "timeBank", M, this), i(this, "blind", w, this), i(this, "ante", D, this), i(this, "durationLbl", N, this), i(this, "tupleBg", z, this), i(this, "line", P, this), this._info = void 0
        }
        onLoad() {}
        start() {}
        setDuration(t, e) {
            this.durationLbl.string = t > 0 ? `${t} ${p("UITitle33")}` : `${g.RoundToDecimal(e/60,2)} ${p("TIME.MINUTES_V2")}`
        }
        setLevelText(t) {
            this.level.string = t.Level
        }
        setInfo(t) {
            this._info = t;
            const {
                id: e,
                blindConfig: i,
                blindHand: n,
                isCurrentLevel: o,
                isShortDeck: r,
                isStopSignUpLevel: l,
                levelDuration: s,
                timeBank: a
            } = t;
            this.showSeparateLine(e > 1), this.setLevelText(i), this.showStopSignUpIcon(l), this.setAnte(i.Ante), this.setBlindTxt(r ? c.ScientificNotationWithFormat(i.Ante) : c.ScientificNotationWithFormat(i.SmallBlind) + "/" + c.ScientificNotationWithFormat(i.BigBlind)), this.setTimeBank(a), this.setDuration(n, s), this.setHighlightCurrentLevel(o)
        }
        setTupleBackground(t) {
            this.tupleBg && (this.tupleBg.active = t % 2 == 1)
        }
        setHighlightCurrentLevel(t) {
            let e = this.tupleBg.getComponent(a),
                i = t ? u.MttBlindStructureItemHighlight : u.MttBlindStructureItemBg;
            f.appConfig.isLandscapeLayout && (i = t ? u.MttBlindStructureItemHighlightLandscape : u.MttBlindStructureItemBgLandscape), e && e.setColorScheme(e.colorScheme, i)
        }
        showStopSignUpIcon(t) {
            this.stopIcon && (this.stopIcon.active = t)
        }
        setAnte(t) {
            this.ante && (this.ante.string = t > 0 ? c.ScientificNotationWithFormat(h.roundValue(t)) : "-")
        }
        setBlindTxt(t) {
            this.blind && (this.blind.string = t)
        }
        setTimeBank(t) {
            if (!this.timeBank) return;
            this.timeBank.string = t > 0 ? this._info.blindConfig.Level > 1 ? `+${t} ${p("TIME.SECOND_V2")}` : `${t} ${p("TIME.SECOND_V2")}` : "-";
            let e = this.timeBank.node.getComponent(a),
                i = t > 0 ? m.ListItem_Mtt_Text_PrizePoolValue_Normal : m.ListItem_Mtt_Title_Other_Text;
            e && e.setColorScheme(e.colorScheme, i)
        }
        showSeparateLine(t) {
            this.line && (this.line.active = t)
        }
        onLanguageChange() {
            this.setTimeBank(this._info.timeBank), this.setDuration(this._info.blindHand, this._info.levelDuration)
        }
    }).prototype, "stopIcon", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(_.prototype, "level", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(_.prototype, "timeBank", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(_.prototype, "blind", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(_.prototype, "ante", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(_.prototype, "durationLbl", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(_.prototype, "tupleBg", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(_.prototype, "line", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = _)) || C));
    n._RF.pop()
}