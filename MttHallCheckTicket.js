import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cc.js";
import * as s from "./ListView.js";
import * as a from "./SlideView.js";
import * as r from "./MttHallCheckTicketItem.js";

function main() {
    var h, u, k, C, d, b, p, f, m;
    e._RF.push({}, "a24fb5PZWNFpp4ddfWTmOvT", "MttHallCheckTicket", void 0);
    const {
        ccclass: w,
        property: g
    } = o;
    t("MttHallCheckTicket", (h = w("MttHallCheckTicket"), u = g(a), k = g(s), C = g(n), h((p = i((b = class extends c {
        constructor(...t) {
            super(...t), l(this, "slideView", p, this), l(this, "listView", f, this), l(this, "confirmButton", m, this), this._onClickBackCallback = null, this._onClickCloseCallback = null, this._onClickConfirmCallback = null, this._tool = null
        }
        set tool(t) {
            this._tool = t, this.enableSignUpButton(!!this._tool)
        }
        get tool() {
            return this._tool
        }
        onLoad() {
            this.listView.bindScrollEventTarget(this), this.listView.init(this.updateItem.bind(this))
        }
        registerOnClickBackCallback(t) {
            this._onClickBackCallback = t
        }
        registerOnClickCloseCallback(t) {
            this._onClickCloseCallback = t
        }
        registerOnClickConfirmCallback(t) {
            this._onClickConfirmCallback = t
        }
        show() {
            this.node.active = !0;
            this.slideView.show(!1, (() => {
                this.node.active = !1
            }))
        }
        hide() {
            this.slideView.hide()
        }
        updateItems(t) {
            this.listView.notifyDataSetChanged(t)
        }
        updateItem(t, i, l) {
            var e;
            const n = t.getComponent(r);
            n.registerOnClickCallback((t => {
                this.tool = t, this.listView.sv.content.children.forEach((t => {
                    var i;
                    const l = t.getComponent(r);
                    l.setSelected((null == (i = this.tool) ? void 0 : i.Id) == l.backpackId)
                }))
            })), n.setData(i), n.setSelected((null == (e = this.tool) ? void 0 : e.Id) == n.backpackId)
        }
        enableSignUpButton(t) {
            this.confirmButton && (this.confirmButton.interactable = t && !!this.tool)
        }
        onClickBack() {
            var t;
            this.hide(), null == (t = this._onClickBackCallback) || t.call(this)
        }
        onClickClose() {
            var t;
            this.hide(), null == (t = this._onClickCloseCallback) || t.call(this)
        }
        onClickConfirm() {
            var t;
            this.hide(), null == (t = this._onClickConfirmCallback) || t.call(this, this.tool)
        }
    }).prototype, "slideView", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = i(b.prototype, "listView", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = i(b.prototype, "confirmButton", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = b)) || d));
    e._RF.pop()
}