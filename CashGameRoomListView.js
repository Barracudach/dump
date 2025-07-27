import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cv.js";
import * as s from "./CommonTools.js";
import * as c from "./MVCView.js";
import * as l from "./CashGameRoomListComp.js";
import * as p from "./HallPokerComp.js";

function main() {
    t._RF.push({}, "83cf17UYZJJbI5ehJgyo6Wm", "CashGameRoomListView", void 0);
    e("CashGameRoomListView", class extends c {
        constructor(...e) {
            super(...e), this.comp = void 0, this.onBackClicked = void 0, this.onConvertCurrencyClicked = void 0, this.onOpenSeatsOnlyClicked = void 0
        }
        loadView(e) {
            const t = s.instance.getParentScene(n, null).getComponentInChildren(o).node.getChildByName("mainView").getComponentInChildren(p);
            let c = t.node;
            a.appConfig.isLandscapeLayout && (c = t.panelCashListItem.getChildByName("container"));
            const l = i(e);
            l.parent = c, l.active = !1, super.loadView(l)
        }
        onAttachedEngineView(e) {
            this.comp = e.getComponent(l), this.comp.mvcView = this
        }
        getGameListEngineView() {
            var e;
            return null == (e = this.comp) ? void 0 : e.getGameListNode()
        }
        updateIsShow(e, t) {
            var n, o;
            if (!e || null != (n = this.comp) && null != (n = n.node) && n.active) {
                if (!e && null != (o = this.comp) && null != (o = o.node) && o.active) {
                    var i, s;
                    if (a.appConfig.isLandscapeLayout) null == (i = this.comp) || i.setActive(e);
                    else a.action.showAction(null == (s = this.comp) ? void 0 : s.node, a.action.eMoveActionDir.EMAD_TO_RIGHT, a.action.eMoveActionType.EMAT_FADE_OUT, t ? a.action.delay_type.INSTANT : a.action.delay_type.NORMAL, ((e, t) => {}), ((t, n) => {
                        var o;
                        null == (o = this.comp) || o.setActive(e)
                    }))
                }
            } else {
                var c, l;
                if (!a.appConfig.isLandscapeLayout) a.action.showAction(null == (l = this.comp) ? void 0 : l.node, a.action.eMoveActionDir.EMAD_TO_LEFT, a.action.eMoveActionType.EMAT_FADE_IN, t ? a.action.delay_type.INSTANT : a.action.delay_type.NORMAL, null, (() => {
                    a.MessageCenter.send(a.Enum.MessageCenterAction.DisableTopAppLogo)
                }), 0, !0);
                null == (c = this.comp) || c.setActive(e)
            }
        }
        updateHeader(e) {
            var t;
            null == (t = this.comp) || t.updateHeaderName(e.gameType, e.stakeName)
        }
        updateConverCurrency(e) {
            var t;
            null == (t = this.comp) || t.updateConverCurrency(e)
        }
        updateOpenSeatsOnly(e) {
            var t;
            null == (t = this.comp) || t.updateOpenSeatsOnly(e)
        }
        showBackTitle(e) {
            var t;
            null == (t = this.comp) || t.showBackTitle(e)
        }
    }), t._RF.pop()
}