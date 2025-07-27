import * as t from "./cc.js";
import * as s from "./LobbyHelper.js";
import * as i from "./LobbyTools.js";
import * as n from "./MVCController.js";
import * as o from "./MVCModel.js";
import * as r from "./CashGameItemController.js";
import * as a from "./CashGameRoomListView.js";
import * as l from "./MVCListController.js";
import * as h from "./HallPokerController.js";
import * as c from "./cv.js";
import * as u from "./MessageBroker.js";
import * as d from "./CashGroupItemRenderer.js";
import * as m from "./Enum.js";
import * as p from "./RuleDiscription.js";

function main() {
    t._RF.push({}, "ecb02WROaRLFaps7iGpOL9M", "CashGameRoomListController", void 0);
    class C extends o {
        constructor(...e) {
            super(...e), this.isShow = void 0, this.gameType = void 0, this.stakeName = void 0, this.convertCurrency = !1, this.openSeatsOnly = !1
        }
    }
    e("CashGameRoomListModel", C);
    e("default", class extends n {
        constructor(e, t) {
            super(a, C, t, {
                onRequestRefreshList: e
            }), this.listController = void 0, this.group = void 0, this.onRequestRefreshList = e
        }
        onInitializeBegin(e) {
            this.view.onBackClicked = this.hide.bind(this), this.view.onConvertCurrencyClicked = this.switchConvertCurrency.bind(this), this.view.onOpenSeatsOnlyClicked = this.switchOpenSeatsOnly.bind(this), this.model.openSeatsOnly = i.getOpenSeatsOnlyFromLocalStorage(), i.isJP() && (this.model.convertCurrency = h.isCashJPcurrencySwitcherOn)
        }
        onInitializeEnded(e) {
            this.listController = new l(this.requestRefreshGameListIfShowing.bind(this), this.createItemController.bind(this), this.updateItemControllerByData.bind(this), this.view.getGameListEngineView()), this.listController.init()
        }
        isModelShown() {
            return this.model.isShow
        }
        start() {
            this.view.updateConverCurrency(this.model.convertCurrency), this.view.updateOpenSeatsOnly(this.model.openSeatsOnly)
        }
        destroy() {
            var e;
            this.hide(), null == (e = this.listController) || e.destroy(), i.unregisterMessage(c.Enum.MessageCenterAction.NotificationShow, this)
        }
        createItemController(e) {
            let t = new r(e);
            return t.init(), t
        }
        updateItemControllerByData(e, t) {
            null == e || e.updateItemDataWhenScrolling(t, this.model.convertCurrency)
        }
        getFilteredItems() {
            var e;
            let t = null == (e = this.group) ? void 0 : e.items;
            return t ? (this.model.openSeatsOnly && (t = t.filter((e => e.player_count < e.player_count_max || s.checkCashGameIsZoom(e.game_id)))), t) : []
        }
        requestRefreshGameListIfShowing() {
            var e;
            this.model.isShow && (null == (e = this.onRequestRefreshList) || e.call(this))
        }
        setIsShow(e, t = !1) {
            this.model.isShow = e, this.listController && (this.listController.isUpdateItemWhenScrolling = e), this.view.updateIsShow(this.model.isShow, t)
        }
        show() {
            this.setIsShow(!0), c.appConfig.isWebApp && (i.registerMessage(c.Enum.MessageCenterAction.onGoBack, this.hide.bind(this), this), i.registerMessage(c.Enum.MessageCenterAction.onShowHall, this.hide.bind(this), this), c.MessageCenter.register("switchSceneBegan", this.onSwitchSceneBegan.bind(this), this)), i.registerMessage(c.Enum.MessageCenterAction.NotificationShow, this.onNotificationOpen.bind(this), this)
        }
        hide(e = !1) {
            var t;
            (this.setIsShow(!1, e), c.appConfig.isWebApp) && (i.unregisterMessage(c.Enum.MessageCenterAction.onGoBack, this), i.unregisterMessage(c.Enum.MessageCenterAction.onShowHall, this), c.MessageCenter.unregister("switchSceneBegan", this), null == (t = c.popUp) || t.hidePopup());
            i.unregisterMessage(c.Enum.MessageCenterAction.NotificationShow, this)
        }
        setGroupData(e) {
            var t, i, n;
            this.group = e, this.reloadList(), this.model.stakeName = s.getCashGroupName({
                stakes: null == (t = e.usdStake) ? void 0 : t.stake,
                ante: null == (i = e.usdStake) ? void 0 : i.ante
            }, m.USD, null), this.model.gameType = p.NLHE;
            const o = null != (n = e.items) && n.length ? e.items[0] : null;
            o && (this.model.gameType = s.getGameType(o.game_id, o.game_mode)), this.view.updateHeader(this.model), this.updateWebAppBackButton()
        }
        reloadList() {
            var e;
            this.model.isShow && (null == (e = this.listController) || e.setItems(this.getFilteredItems()))
        }
        switchConvertCurrency() {
            this.changeConvertCurrency(!this.model.convertCurrency)
        }
        changeConvertCurrency(e) {
            var t;
            this.model.convertCurrency = e, h.isCashJPcurrencySwitcherOn = e, this.view.updateConverCurrency(this.model.convertCurrency), null == (t = this.listController) || null == (t = t.getItemControllers()) || t.forEach((e => {
                e.updateDisplayCurrency(this.model.convertCurrency)
            }))
        }
        switchOpenSeatsOnly() {
            this.changeOpenSeatsOnly(!this.model.openSeatsOnly)
        }
        updateWebAppBackButton() {
            var e;
            if (!c.appConfig.isWebApp || !this.model.isShow) return;
            const t = (null == (e = d.get(this.model.gameType)) ? void 0 : e.displayName) ?? "",
                i = s.getI18nKeyOfGameTypeNameByName(t),
                n = c.tools.getTranslatedString(i),
                o = this.model.stakeName ?? "",
                r = n ? `${n} (${o})` : "";
            u.getInstance().sendShowBackButton(!0, r)
        }
        onSwitchSceneBegan(e) {
            var t;
            c.appConfig.isWebApp && null != (t = this.model) && t.isShow && e !== c.Enum.SCENE.HALL_SCENE.toString() && u.getInstance().sendShowBackButton(!1)
        }
        changeOpenSeatsOnly(e) {
            this.model.openSeatsOnly = e, i.saveOpenSeatsOnlyToLocalStorage(e), this.view.updateOpenSeatsOnly(this.model.openSeatsOnly), this.reloadList()
        }
        onNotificationOpen(e) {
            this.view.showBackTitle(!e)
        }
    }), t._RF.pop()
}