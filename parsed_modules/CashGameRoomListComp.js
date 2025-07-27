import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./ThemeSystem.js";
import * as b from "./ColorSystemType.js";
import * as d from "./LobbyHelper.js";
import * as h from "./LobbyTools.js";
import * as y from "./CashGroupItemRenderer.js";
import * as g from "./MVCListComp.js";
import * as C from "./i18nText.js";
import * as m from "./cv.js";
import * as f from "./HallScene.js";
import * as k from "./RuleDiscription.js";

function main() {
    var S, T, v, L, O, B, w, z, G, N, E, H, V, _, D, M;
    i._RF.push({}, "d6cb6zh4jJP9p76rQlHHNNY", "CashGameRoomListComp", void 0);
    const {
        ccclass: P,
        property: R
    } = a;
    e("default", (S = R(g), T = R(l), v = R(p), L = R(l), O = R(o), B = R(o), w = R(l), P((N = t((G = class extends g {
        constructor(...e) {
            super(...e), this.mvcView = void 0, n(this, "gameList", N, this), n(this, "labelGroupType", E, this), n(this, "stakeBorder", H, this), n(this, "labelStake", V, this), n(this, "toggleConvertCurrency", _, this), n(this, "toggleOpenSeatsOnly", D, this), n(this, "backTitleLabel", M, this)
        }
        onBackButtonClicked() {
            var e;
            h.playSoundBack(), null == (e = this.mvcView) || null == e.onBackClicked || e.onBackClicked()
        }
        getGameListNode() {
            var e;
            return null == (e = this.gameList) ? void 0 : e.node
        }
        updateHeaderName(e, t) {
            const n = y.get(e) ?? y.get(k.NLHE),
                i = (null == n ? void 0 : n.i18nKey) ?? d.getI18nKeyOfGameTypeNameByName(n.displayName);
            this.labelGroupType.getComponent(C).setKey(i, !0), this.stakeBorder.setColorScheme(b.LobbyV2, null == n ? void 0 : n.bgColor), this.labelStake.getComponent(p).setColorScheme(b.LobbyV2, null == n ? void 0 : n.textColor), this.labelStake.string = t, this.backTitleLabel && (e === k.PLO || e === k.PLO5 ? this.updateBackTitle(d.getI18nKeyOfGameTypeNameByName("plo"), t) : this.updateBackTitle(i, t))
        }
        updateConverCurrency(e) {
            d.setDesignBtnState(this.toggleConvertCurrency, e)
        }
        setActive(e) {
            this.node.active = e
        }
        onConvertCurrencyClicked() {
            var e;
            h.playSoundClick(), null == (e = this.mvcView) || null == e.onConvertCurrencyClicked || e.onConvertCurrencyClicked()
        }
        updateOpenSeatsOnly(e) {
            d.setDesignBtnState(this.toggleOpenSeatsOnly, e)
        }
        onOpenSeatsOnlyClicked() {
            var e;
            h.playSoundClick(), null == (e = this.mvcView) || null == e.onOpenSeatsOnlyClicked || e.onOpenSeatsOnlyClicked()
        }
        updateBackTitle(e, t) {
            const n = `${m.config.getStringData(e)} (${t})`,
                i = r.getScene().getComponentInChildren(f);
            if (i) {
                const e = 36,
                    t = i.getTopMenuWidth(),
                    n = s.getVisibleSize().width - t - this.backTitleLabel.node.position.x - 2 * e,
                    l = this.backTitleLabel.node.getComponent(c);
                if (l) {
                    const e = u(Math.floor(n), l.height);
                    l.setContentSize(e)
                }
            }
            m.StringTools.setShrinkString(this.backTitleLabel.node, n, !0)
        }
        showBackTitle(e) {
            this.backTitleLabel && (this.backTitleLabel.node.active = e)
        }
    }).prototype, "gameList", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(G.prototype, "labelGroupType", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(G.prototype, "stakeBorder", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(G.prototype, "labelStake", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(G.prototype, "toggleConvertCurrency", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(G.prototype, "toggleOpenSeatsOnly", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(G.prototype, "backTitleLabel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = G)) || z));
    i._RF.pop()
}