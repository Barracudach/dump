import * as t from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./EncryptDecryptString.js";
import * as d from "./cv.js";
import * as C from "./HoneyPotCashGame.js";
import * as u from "./HoneyPotMtt.js";
import * as c from "./HoneyPotChangeColor.js";
import * as p from "./HoneyPotChangePos.js";
import * as r from "./HoneyPotChangeScale.js";

function main() {
    i._RF.push({}, "2c453pgWyVI+6cbCiW5RhJm", "HoneyPotHelper", void 0);
    class g {
        static get config() {
            if (!g._config) {
                var e, n, a, t, i, C, u, c, p, r, h, s, b, f, H, v, y, m, P;
                const S = d.appConfig.getHoneyPotConfig();
                let G;
                try {
                    G = JSON.parse(l.decryptData(S))
                } catch (e) {
                    o("[HoneyPot Bug] Error parsing HoneyPot config: " + e)
                }
                g._config = {
                    enabled: null == (null == (e = G) ? void 0 : e.enabled) || G.enabled,
                    enableChangeCardColor: null == (null == (n = G) ? void 0 : n.enableChangeCardColor) || G.enableChangeCardColor,
                    enableChangePublicCardSize: null == (null == (a = G) ? void 0 : a.enableChangePublicCardSize) || G.enableChangePublicCardSize,
                    enableChangePublicCardPos: null == (null == (t = G) ? void 0 : t.enableChangePublicCardPos) || G.enableChangePublicCardPos,
                    enableChangeActionButtonPos: null == (null == (i = G) ? void 0 : i.enableChangeActionButtonPos) || G.enableChangeActionButtonPos,
                    enableChangeActionButtonColor: null == (null == (C = G) ? void 0 : C.enableChangeActionButtonColor) || G.enableChangeActionButtonColor,
                    enableChangeHoleCardSize: null == (null == (u = G) ? void 0 : u.enableChangeHoleCardSize) || G.enableChangeHoleCardSize,
                    modifyUIProbability: null != (null == (c = G) ? void 0 : c.modifyUIProbability) ? G.modifyUIProbability : .001,
                    publicCardGapWidth: null != (null == (p = G) ? void 0 : p.publicCardGapWidth) ? G.publicCardGapWidth : d.appConfig.isLandscapeLayout ? -4 : -6,
                    publicCardGapHeight: null != (null == (r = G) ? void 0 : r.publicCardGapHeight) ? G.publicCardGapHeight : d.appConfig.isLandscapeLayout ? -4 : -6,
                    publicCardMoveX: null != (null == (h = G) ? void 0 : h.publicCardMoveX) ? G.publicCardMoveX : 0,
                    publicCardMoveY: null != (null == (s = G) ? void 0 : s.publicCardMoveY) ? G.publicCardMoveY : d.appConfig.isLandscapeLayout ? 12 : 18,
                    selfHoleCardGapWidth: null != (null == (b = G) ? void 0 : b.selfHoleCardGapWidth) ? G.selfHoleCardGapWidth : d.appConfig.isLandscapeLayout ? -4 : -19.38,
                    selfHoleCardGapHeight: null != (null == (f = G) ? void 0 : f.selfHoleCardGapHeight) ? G.selfHoleCardGapHeight : d.appConfig.isLandscapeLayout ? -6 : -29.4,
                    opponentHoleCardGapWidth: null != (null == (H = G) ? void 0 : H.opponentHoleCardGapWidth) ? G.opponentHoleCardGapWidth : d.appConfig.isLandscapeLayout ? -4 : -15.27,
                    opponentHoleCardGapHeight: null != (null == (v = G) ? void 0 : v.opponentHoleCardGapHeight) ? G.opponentHoleCardGapHeight : d.appConfig.isLandscapeLayout ? -6 : -21,
                    actionButtonMoveX: null != (null == (y = G) ? void 0 : y.actionButtonMoveX) ? G.actionButtonMoveX : d.appConfig.isLandscapeLayout ? -20 : -15,
                    actionButtonMoveY: null != (null == (m = G) ? void 0 : m.actionButtonMoveY) ? G.actionButtonMoveY : d.appConfig.isLandscapeLayout ? -20 : -15,
                    colorAdjustAmount: null != (null == (P = G) ? void 0 : P.colorAdjustAmount) ? G.colorAdjustAmount : 16
                }
            }
            return g._config
        }
        static addComponentToCashGame(e, o, i, l, d, u) {
            if (g.config.enabled) {
                const h = g.config;
                let s = o.getComponent(C);
                if (s || (s = o.addComponent(C), s.initCashGame(e)), h.enableChangePublicCardPos && g.addComponent(p, i, {
                        moveX: h.publicCardMoveX,
                        moveY: h.publicCardMoveY
                    }), h.enableChangeActionButtonPos && g.addComponent(p, l, {
                        moveX: h.actionButtonMoveX,
                        moveY: h.actionButtonMoveY
                    }), h.enableChangeActionButtonColor && d.forEach((e => g.addComponent(c, e))), h.enableChangePublicCardSize) {
                    const e = n(g.config.publicCardGapWidth, g.config.publicCardGapHeight),
                        o = g.getDesignSize().publicCardSize,
                        i = new a(o.width + e.width, o.height + e.height);
                    if (i.width > 0 && i.height > 0) {
                        const e = new t(i.width / o.width, i.height / o.height);
                        u.forEach((o => {
                            g.addComponent(r, o.parent, {
                                scale: e
                            })
                        }))
                    }
                }
            }
        }
        static addComponentToMttGame(e) {
            if (g.config.enabled && e) {
                let o = e.node.getComponent(u);
                o || (o = e.node.addComponent(u), o.initMtt(e))
            }
        }
        static addColorComponent(e, o) {
            g.addComponent(c, e, {
                blendNode: o
            })
        }
        static addChangeScaleComponent(e, o) {
            g.addComponent(r, e, {
                scale: o
            })
        }
        static addComponent(e, o, n) {
            if (g.config.enabled) {
                let a = o.getComponent(e);
                a || (a = o.addComponent(e), a.init(n))
            }
        }
        static getChangedColor(e) {
            return d.tools.getAdjustedColor(e, g.config.colorAdjustAmount)
        }
        static getDesignSize() {
            return d.appConfig.isLandscapeLayout ? {
                publicCardSize: new a(124, 170),
                selfHoleCardSize: new a(124, 170),
                opponentHoleCardSize: new a(124, 170),
                actionButtonSize: new a(320, 126)
            } : {
                publicCardSize: new a(126, 171),
                selfHoleCardSize: new a(163.38, 236.4),
                opponentHoleCardSize: new a(105, 153),
                actionButtonSize: new a(324, 132)
            }
        }
        static addSelfHoleCardChangeScaleComponent(e) {
            const o = g.config,
                i = n(o.selfHoleCardGapWidth, o.selfHoleCardGapHeight),
                l = g.getDesignSize().selfHoleCardSize,
                d = new a(l.width + i.width, l.height + i.height);
            if (d.width > 0 && d.height > 0) {
                const o = new t(d.width / l.width, d.height / l.height);
                e.forEach((e => g.addComponent(r, e, {
                    scale: o
                })))
            }
        }
        static getChangeTypes() {
            const e = [],
                o = d.appConfig.isLandscapeLayout ? 2 : 3,
                n = g.config,
                a = g.config;
            return n.enableChangeCardColor && e.push("Changed Card Color by " + n.colorAdjustAmount), n.enableChangePublicCardSize && e.push("Changed Public Card Size by " + a.publicCardGapWidth / o + " " + a.publicCardGapHeight / o), n.enableChangePublicCardPos && e.push("Changed Public Card Position by " + a.publicCardMoveX / o + " " + a.publicCardMoveY / o), n.enableChangeActionButtonPos && e.push("Changed Action Button Position by " + a.actionButtonMoveX / o + " " + a.actionButtonMoveY / o), n.enableChangeActionButtonColor && e.push("Changed Action Button Color by " + n.colorAdjustAmount), n.enableChangeHoleCardSize && e.push("Changed Hole Card Size by " + a.selfHoleCardGapWidth / o + " " + a.selfHoleCardGapHeight / o), e
        }
    }
    e("default", g), g._config = void 0, i._RF.pop()
}