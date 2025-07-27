import * as u from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as h from "./DesignSystemButtonBase.js";
import * as r from "./DesignSystemButtonBase.js";
import * as a from "./MttGroupFilterPopupComp.js";
import * as c from "./StringTools.js";
import * as p from "./cv.js";

function main() {
    var l;
    e._RF.push({}, "48bb9h7EcBCCaU+yWPtTskC", "MttGroupFilterPopupCompLandscape", void 0);
    const {
        ccclass: d,
        property: m
    } = u;
    t("MttGroupFilterPopupCompLandscape", d("MttGroupFilterPopupCompLandscape")(l = class extends a {
        onLoad() {
            p.MessageCenter.register(p.Enum.MessageCenterAction.onMTTSearchBoxInput, this.onMTTSearchBoxInput.bind(this), this.node)
        }
        onDestroy() {
            p.MessageCenter.unregister(p.Enum.MessageCenterAction.onMTTSearchBoxInput, this.node)
        }
        onShow(t = !0) {
            this.updateDelemeter(), this.node.parent.active = !0, this.node.setPosition(s.ZERO)
        }
        onClickCloseBtn() {
            var t;
            null == (t = this.mvcView) || t.emitEvent("CLOSE_BTN_CLICK")
        }
        onHide(t = !0) {
            this.node.parent.active = !1
        }
        setActive(t, e) {
            super.setActive(t, e), n(this.node.parent) && this.node.parent.setSiblingIndex(-1)
        }
        setShowHideBtn() {
            n(this.showRunningBtn.getComponent(i)) && (this.showRunningBtn.getComponent(i).isChecked = this._isShowRunning), n(this.hideSatellitesBtn.getComponent(i)) && (this.hideSatellitesBtn.getComponent(i).isChecked = this._isHideSatellites)
        }
        setShowMTTBtnCount() {}
        setSearchFieldClearBtn() {}
        setBuyinBtn() {
            for (let t = 0; t < this.buyInBtn.length; t++) {
                const e = this._buyInBtnType.includes(t),
                    s = this.buyInBtn[t].getComponent(r);
                n(s) && (s.btnState = e ? h.pressed : h.normal, s.isChecked = e)
            }
            const t = this._buyInBtnType.includes(6);
            if (this.buyInCustomNode.active !== t) {
                var e, s;
                this.buyInCustomNode.active = t;
                const n = null == (e = this.buyInCustomNode.parent.getComponent(o)) ? void 0 : e.spacingY,
                    i = this.buyInCustomNode.getContentSize().height + (n ?? 0);
                null == (s = this.mvcView) || s.emitEvent("EXPAND_GROUP_FILTER", t ? i : -i)
            }
            this.resetSilder(), this._buyInBtnType.includes(6) && !1 === this._isSetCustomSilder ? (this.setBuyInCustomSilder(), this.resetSilder()) : this._buyInBtnType.includes(6) && !0 === this._isSetCustomSilder && this.resetSilder()
        }
        setGametypeBtn() {
            for (let t = 0; t < this.gameBtn.length; t++) {
                const e = this._gameBtnType.includes(t),
                    s = this.gameBtn[t].getComponent(r);
                n(s) && (s.btnState = e ? h.pressed : h.normal, s.isChecked = e)
            }
        }
        checkShowResetBtn() {
            return !0
        }
        isNumeric(t) {
            return c.getInstance().isNumber(t)
        }
        onTextChangedTo() {
            this.updateBuyInCustomSlider()
        }
        onTextChangedFrom() {
            this.updateBuyInCustomSlider()
        }
        updateBuyInCustomSlider() {
            const t = this.buyInCustomFrom.string.replace("$", ""),
                e = this.buyInCustomTo.string.replace("$", "");
            this.isNumeric(t) && (this._buyInCustomFrom = Number(t)), this.isNumeric(e) && (this._buyInCustomTo = Number(e));
            let s = this.getClosestStep(this._buyInCustomFrom);
            s == this._buyinCustomPoint.length - 1 && s--;
            const n = this.getCustomerSliderPosForStep(s);
            let i = this.getClosestStep(this._buyInCustomTo);
            0 == i && i++;
            const o = this.getCustomerSliderPosForStep(i);
            this.updateFilledBar(n, o, !1)
        }
        onMTTSearchBoxInput(t) {
            this.searchByName(t)
        }
    }) || l);
    e._RF.pop()
}