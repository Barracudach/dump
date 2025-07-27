import * as t from "./cc.js";
import * as o from "./cc.js";
import * as s from "./Enum.js";
import * as i from "./LocalizationController.js";
import * as n from "./LocalizationEvents.js";
import * as r from "./LobbyFilterHelper.js";
import * as l from "./LobbyTools.js";
import * as a from "./MVCController.js";
import * as h from "./MVCModel.js";
import * as g from "./SubfilterController.js";
import * as c from "./HomePokerTypeComp.js";
import * as p from "./HomePokerTypeView.js";
import * as u from "./LobbyHelper.js";

function main() {
    o._RF.push({}, "771a6Q7dqlG8ZMUgbCJD54H", "HomePokerTypeController", void 0);
    class M extends h {
        constructor(...e) {
            super(...e), this.tabs = []
        }
    }
    e("HomePokerTypeModel", M);
    e("HomePokerTypeController", class extends a {
        constructor(e, o) {
            super(p, M, e), this.hallPokerController = void 0, this.hallPokerController = o, this.hallPokerController.enableAppLogo(!1), this.model.tabs = this.hallPokerController.getAvailableTabs()
        }
        onInitializeBegin(e) {
            l.registerMessage(s.showHomePokerTypeView, this.onShowEvent.bind(this), this), l.registerMessage("SelfTournaments_Changed_My_MTT_List", this.onMyMTTChanged.bind(this), this), l.registerMessage(s.NotificationShow, this.onNotificationOpen.bind(this), this), i.getObserver().subscribe(n.CHANGE_LANGUAGE, this.onChangeLanguage, this), l.registerMessage(s.OnUpdateServerConfigSuccess, this.onUpdateServerConfigSuccess.bind(this), this)
        }
        onInitializeEnded(e) {}
        start() {
            const e = u.getLobbyTabShowAtBegin();
            e && (this.hallPokerController.changeTab(e), this.hallPokerController.showMvcView((() => {
                this.view.hide(), l.emitMessage(s.DisableTopAppLogo)
            })))
        }
        destroy() {
            l.unregisterMessage(s.showHomePokerTypeView, this), l.unregisterMessage("SelfTournaments_Changed_My_MTT_List", this), l.unregisterMessage(s.NotificationShow, this), i.getObserver().unsubscribe(n.CHANGE_LANGUAGE, this.onChangeLanguage, this), l.unregisterMessage(s.OnUpdateServerConfigSuccess, this), super.destroy()
        }
        onViewEvent(e, ...o) {
            switch (e) {
                case c.SHOW_HALL_TAB: {
                    let e = o[0];
                    "global_spins" === e && (e = "sng"), this.hallPokerController.changeTab(e), this.hallPokerController.showMvcView((() => {
                        this.view.hide(), l.emitMessage(s.DisableTopAppLogo)
                    }));
                    break
                }
                case c.SHOW_MY_MTT:
                    this.hallPokerController.changeTab("mtt", g), this.hallPokerController.showMvcView((() => {
                        this.view.hide(), l.emitMessage(s.DisableTopAppLogo)
                    }));
                    break;
                default:
                    t(`Unsupported event${e}`)
            }
        }
        onShowEvent() {
            l.emitMessage(s.EnableTopAppLogo), this.showMvcView(), l.saveLastSelectedTabToFile("")
        }
        showMvcView() {
            this.view.show()
        }
        onMyMTTChanged() {
            var e;
            const o = r.getMyMttCount();
            null == (e = this.view) || e.updateMyMttCount(o)
        }
        onChangeLanguage() {
            this.onMyMTTChanged()
        }
        isViewShow() {
            return this.view.isShow()
        }
        onNotificationOpen(e) {
            this.isViewShow() && (e ? l.emitMessage(s.DisableTopAppLogo) : l.emitMessage(s.EnableTopAppLogo))
        }
        onUpdateServerConfigSuccess() {
            this.model.tabs = this.hallPokerController.getAvailableTabs(!0), this.view.initView(this.model)
        }
    }), o._RF.pop()
}