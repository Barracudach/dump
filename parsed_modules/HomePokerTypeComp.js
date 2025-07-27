import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cv.js";
import * as g from "./LobbyTools.js";
import * as y from "./CommonHallSubViewController.js";
import * as b from "./HomePokerButton.js";

function main() {
    var f, L, _, H, E, C, S, I, P, k, B;
    o._RF.push({}, "3abbdw2DO9FqI1da9fIR92B", "HomePokerTypeComp", void 0);
    const {
        ccclass: M,
        property: v
    } = l, w = t("CompEvents", {
        SHOW_HALL_TAB: "HomePoker_show_hall_tab",
        SHOW_MY_MTT: "HomePoker_show_my_mtt"
    });
    t("HomePokerTypeComp", (f = M("HomePokerTypeComp"), L = v(n), _ = v(r), H = v(a), E = v(s), f((I = e((S = class extends y {
        constructor(...t) {
            super(...t), i(this, "myTournamentNode", I, this), i(this, "myTournamentLabel", P, this), i(this, "gridLayout", k, this), i(this, "btnPrefab", B, this), this.mvcViewTarget = void 0, this.TILE_DESIGN_WIDTH_TABLET = 1092, this.TILE_DESIGN_HEIGHT_TABLET = 456
        }
        setMvcViewTarget(t) {
            this.mvcViewTarget = t
        }
        start() {
            this.updateGridCellSize(), g.emitMessage("preStartFakeMultipleGame")
        }
        createTabs(t) {
            if (this.btnPrefab) {
                for (let e = 0; e < t.length; e++) {
                    const i = t[e],
                        o = this.gridLayout.node.getChildByName(i);
                    if (c(o, !0)) continue;
                    const n = m(this.btnPrefab);
                    n.setParent(this.gridLayout.node), n.active = !0, n.name = i, n.on(T.EventType.CLICK, this.onClickPokerTypeBtn, this);
                    const r = n.getComponent(b);
                    r && r.setupTabBtn(i)
                }
                this.gridLayout.node.children.forEach((e => {
                    t.includes(e.name) || e.destroy()
                }))
            } else u("Missing prefab reference")
        }
        onClickPokerTypeBtn(t) {
            const {
                target: e
            } = t;
            t.node.name && (g.playSoundClick(), this.mvcViewTarget.emit(w.SHOW_HALL_TAB, e.name))
        }
        onClickMyTours() {
            g.playSoundClick(), this.mvcViewTarget.emit(w.SHOW_MY_MTT)
        }
        onDestroy() {}
        updateMyMttCount(t) {
            if (this.myTournamentLabel) {
                const e = p.config.getStringData("HOME.MY_TOURNEYS");
                this.myTournamentLabel.string = p.StringTools.formatC(e, t)
            }
        }
        updateGridCellSize() {
            const {
                paddingLeft: t,
                paddingRight: e,
                spacingX: i,
                constraintNum: o
            } = this.gridLayout, n = this.gridLayout.getComponent(d).contentSize, r = h(this.gridLayout.node.children[0].getComponent(d).contentSize), a = p.config.isIPadDesign(this.node), s = (n.width - (t + e + (o - 1) * i)) / o;
            let l = r.height;
            a && (l = Math.min(this.TILE_DESIGN_HEIGHT_TABLET / this.TILE_DESIGN_WIDTH_TABLET * s, this.TILE_DESIGN_HEIGHT_TABLET)), this.gridLayout.cellSize = h(s, l), p.resMgr.adaptWidget(this.gridLayout.node, !0, !1)
        }
    }).prototype, "myTournamentNode", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(S.prototype, "myTournamentLabel", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(S.prototype, "gridLayout", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(S.prototype, "btnPrefab", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = S)) || C));
    o._RF.pop()
}