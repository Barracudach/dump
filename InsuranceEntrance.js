import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as _ from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./InsuranceOld.js";
import * as y from "./InsuranceNew.js";
import * as I from "./InsuranceData.js";
import * as T from "./InsuranceSmallBox.js";
import * as f from "./cv.js";
import * as b from "./GameSceneInstance.js";
import * as w from "./AudioComp.js";
import * as L from "./soundEffect.js";
import * as M from "./CommonTools.js";

function main() {
    var S, C, D, v, N, B, E, P, V, x;
    s._RF.push({}, "388bfOumTpDhbhNZsCbYI4v", "InsuranceEntrance", void 0);
    const {
        ccclass: O,
        property: R
    } = r;
    e("InsuranceEntrance", (S = R(i), C = R(i), D = R(i), v = R(a), O((E = n((B = class extends _ {
        constructor(...e) {
            super(...e), t(this, "prefab_item_old", E, this), t(this, "prefab_item_new", P, this), t(this, "prefab_small_box", V, this), t(this, "shieldLayer", x, this), this._shieldLayer_callback = null, this._inst_insurance_old = null, this._inst_insurance_new = null, this._inst_insurance_smallBox = null, this._inst_insurance_data = null, this._msInterval = 1, this._msNowTime = 0, this._msLastTime = 0, this._nLeftTime = 0, this._addObserverFlag = !1
        }
        setViewMode(e) {
            this._inst_insurance_data.setViewMode(e)
        }
        setTypeMode(e) {
            this._inst_insurance_data.setTypeMode(e)
        }
        parseInsuranceData(e, n, t) {
            this._inst_insurance_data.parseInsuranceData(e, n, t)
        }
        parseInsuranceReplayData(e, n, t) {
            return this._inst_insurance_data.parseInsuranceReplayData(e, n, t), this._inst_insurance_data.getDataInsuranceReplay()
        }
        addPlayerCardsData(e, n, t, s, i) {
            this._inst_insurance_data.addPlayerCardsData(e, n, t, s, i)
        }
        initShieldLayer(e, n, t) {
            this._shieldLayer_callback = e, null === n && void 0 === n || (this.shieldLayer.getComponent(o).color = new l(l.BLACK)), null === t && void 0 === t || (this.shieldLayer.getComponent(u).opacity = t)
        }
        setShieldLayerVisible(e) {
            this.shieldLayer.active = e
        }
        init() {
            {
                let e = this._getSinglePrefabInst(this.prefab_item_old, p.gClassName);
                e && (this._inst_insurance_old = e.getComponent(p), this._inst_insurance_old.init())
            } {
                let e = this._getSinglePrefabInst(this.prefab_item_new, this.getInsuranceNewClassName());
                e && (this._inst_insurance_new = e.getComponent(y), this._inst_insurance_new.init())
            }
            this._hideInsuranceView(!1, I.InsuranceTypeMode.TYPE_OLD), this._hideInsuranceView(!1, I.InsuranceTypeMode.TYPE_NEW), this._hideInsuranceSmallBox(!1)
        }
        getInsuranceNewClassName() {
            return y.gClassName
        }
        initFinish(e, n = !0) {
            this._addObserver(), this.setTypeMode(e), n && (e === I.InsuranceTypeMode.TYPE_OLD ? this._inst_insurance_new && (h.stopAllByTarget(this._inst_insurance_new.node), this._inst_insurance_new.node.removeFromParent(), this._inst_insurance_new.node.destroy(), this._inst_insurance_new = null) : e === I.InsuranceTypeMode.TYPE_NEW && this._inst_insurance_old && (h.stopAllByTarget(this._inst_insurance_old.node), this._inst_insurance_old.node.removeFromParent(), this._inst_insurance_old.node.destroy(), this._inst_insurance_old = null))
        }
        isInsuranceSmallBox() {
            return this._inst_insurance_data.getViewMode() === I.InsuranceViewMode.VIEW_NORMAL && !this._inst_insurance_data.getDataIsSelfBuy()
        }
        autoShow(e = !0) {
            this._nLeftTime = this._inst_insurance_data.getDataInsurance().count_time, this.isInsuranceSmallBox() ? this._showInsuranceSmallBox(e) : this._showInsuranceView(e)
        }
        autoHide(e = !0) {
            this._hideInsuranceView(e), this._hideInsuranceSmallBox(e)
        }
        getLeftTime() {
            return this._nLeftTime
        }
        isActive() {
            let e = !1;
            switch (this._inst_insurance_data.getTypeMode()) {
                case I.InsuranceTypeMode.TYPE_OLD:
                    this._inst_insurance_old && (e = this._inst_insurance_old.node.active);
                    break;
                case I.InsuranceTypeMode.TYPE_NEW:
                    this._inst_insurance_new && (e = this._inst_insurance_new.node.active)
            }
            return e
        }
        getMainPanelSize() {
            let e = new c(c.ZERO);
            switch (this._inst_insurance_data.getTypeMode()) {
                case I.InsuranceTypeMode.TYPE_OLD:
                    e = d(this.prefab_item_old.data.getChildByName("panel").getContentSize());
                    break;
                case I.InsuranceTypeMode.TYPE_NEW:
                    e = d(this.prefab_item_new.data.getChildByName("panel").getContentSize())
            }
            return e
        }
        onLoad() {
            this._inst_insurance_data = new I.InsuranceData, this.setShieldLayerVisible(!1), this.shieldLayer.on(a.EventType.TOUCH_START, (e => {
                console.log(`shieldLayer click - name:${this.shieldLayer.name}, parentName:${this.shieldLayer.parent.name}, event:${e.type}`), this._shieldLayer_callback && this._shieldLayer_callback()
            }), this)
        }
        start() {}
        onDestroy() {
            this._removeObserver()
        }
        update(e) {
            this._msNowTime += e;
            let n = this._msNowTime - this._msLastTime;
            n >= this._msInterval && (this._msLastTime = this._msNowTime - (n - this._msInterval), --this._nLeftTime < 0 && (this._nLeftTime = 0))
        }
        _addObserver() {
            this._addObserverFlag || (this._addObserverFlag = !0, f.MessageCenter.register("add_insurance_time", this._onMsgAddInsuranceTime.bind(this), this.node), f.MessageCenter.register("player_do_buy_insurance", this._onMsgBuyInsurance.bind(this), this.node), f.MessageCenter.register("player_not_buy_insurance", this._onMsgNotBuyInsurance.bind(this), this.node))
        }
        _removeObserver() {
            this._addObserverFlag = !1, f.MessageCenter.unregister("add_insurance_time", this.node), f.MessageCenter.unregister("player_do_buy_insurance", this.node), f.MessageCenter.unregister("player_not_buy_insurance", this.node)
        }
        _onMsgBuyInsurance(e) {
            if (b.isInvalidRoomMultiWindow(e.gameData, null == this ? void 0 : this.node)) return;
            this.autoHide();
            let n = f.StringTools.serverGoldToShowNumber(e.msg.insure_amount),
                t = f.StringTools.formatC(f.config.getStringData("UIGameSceneTips13"), e.msg.player_name, f.Number(n));
            f.TT.showMsg(t, f.Enum.ToastType.ToastTypeInfo)
        }
        _onMsgNotBuyInsurance(e) {
            if (b.isInvalidRoomMultiWindow(e.gameData, null == this ? void 0 : this.node)) return;
            this.autoHide();
            let n = f.StringTools.formatC(f.config.getStringData("UIGameSceneTips12"), e.msg.player_name);
            f.TT.showMsg(n, f.Enum.ToastType.ToastTypeInfo)
        }
        _onMsgAddInsuranceTime(e) {
            b.isInvalidRoomMultiWindow(e.gameData, null == this ? void 0 : this.node) || (f.AudioMgr.playEffectByAudioCompInGameCash(w.Instance().setUrl(L.PlayerTurn).setRoomId(e.gameData.tRoomData.u32RoomId)), b.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.pkPayMoneyItem.insuranceCount = e.msg.count, this._nLeftTime = e.msg.rest_insurance_time, f.MessageCenter.send("update_insurance_time", {
                nLeftTime: this._nLeftTime,
                gameData: e.gameData
            }))
        }
        _getSinglePrefabInst(e, n) {
            if (!(e instanceof i)) return null;
            let t = this.node.getChildByName(n);
            return t && m(t, !0) || (t = g(e), t.name = n, this.node.addChild(t), n === y.gClassName && (M.instance.updateLayouts(t, !0), M.instance.updateAlignments(t, !0))), t
        }
        _showInsuranceView(e) {
            switch (this._inst_insurance_data.getViewMode() !== I.InsuranceViewMode.VIEW_REPLAY && (this.initShieldLayer((() => {
                    this._inst_insurance_data.getDataIsSelfBuy() || (this.setShieldLayerVisible(!1), this._hideInsuranceView(!1), this._showInsuranceSmallBox(!1))
                }), l.BLACK, 0), this.setShieldLayerVisible(!0)), this._inst_insurance_data.getTypeMode()) {
                case I.InsuranceTypeMode.TYPE_OLD:
                    this._inst_insurance_old && (this._inst_insurance_old.bindDataTarget(this._inst_insurance_data), this._inst_insurance_old.autoShow(e, this._nLeftTime));
                    break;
                case I.InsuranceTypeMode.TYPE_NEW:
                    this._inst_insurance_new && (this._inst_insurance_new.bindDataTarget(this._inst_insurance_data), this._inst_insurance_new.autoShow(e, this._nLeftTime))
            }
        }
        _hideInsuranceView(e, n) {
            this.initShieldLayer(null), this.setShieldLayerVisible(!1);
            let t = this._inst_insurance_data.getTypeMode();
            switch (null != n && (t = n), t) {
                case I.InsuranceTypeMode.TYPE_OLD:
                    this._inst_insurance_old && this._inst_insurance_old.autoHide(e);
                    break;
                case I.InsuranceTypeMode.TYPE_NEW:
                    this._inst_insurance_new && this._inst_insurance_new.autoHide(e)
            }
        }
        _showInsuranceSmallBox(e) {
            let n = this._getSinglePrefabInst(this.prefab_small_box, T.gClassName);
            if (n) {
                let e = "",
                    t = this._inst_insurance_data.getDataPlayerCards();
                for (let n = 0; n < t.length; ++n)
                    if (t[n].bPurchaser) {
                        t[n].nUID, e = t[n].sPlayerName;
                        break
                    } this._inst_insurance_smallBox = n.getComponent(T), this._inst_insurance_smallBox.show(!0, e, this.getLeftTime(), (() => {
                    this._hideInsuranceSmallBox(!1), this._showInsuranceView(!1)
                }))
            }
        }
        _hideInsuranceSmallBox(e) {
            this._inst_insurance_smallBox && this._inst_insurance_smallBox.hide(e)
        }
    }).prototype, "prefab_item_old", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = n(B.prototype, "prefab_item_new", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = n(B.prototype, "prefab_small_box", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = n(B.prototype, "shieldLayer", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = B)) || N));
    s._RF.pop()
}