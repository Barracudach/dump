import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as z from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as B from "./cc.js";
import * as x from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as D from "./cc.js";
import * as T from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as k from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as M from "./cv.js";

function main() {
    var O, P, R, V, N, A, H, L, U, F, G, I, X, $, q, Y, Z, W, Q, j, K, J, tt, et, it, nt, st, ot, at, lt;
    n._RF.push({}, "13f34wKQyVCwIOL+bQlYXuA", "SliderVerify", void 0);
    const {
        ccclass: rt,
        property: _t
    } = _;
    t("SliderVerify", (O = _t(s), P = _t(o), R = _t(o), V = _t(o), N = _t(o), A = _t(o), H = _t(a), L = _t(o), U = _t(o), F = _t(l), G = _t(r), I = _t(r), X = _t(r), $ = _t(r), rt((Z = e((Y = class t extends h {
        constructor(...t) {
            super(...t), i(this, "img_bg", Z, this), i(this, "node_drag", W, this), i(this, "node_match", Q, this), i(this, "panel_view", j, this), i(this, "panel_result", K, this), i(this, "panel_detail", J, this), i(this, "txt_detail", tt, this), i(this, "view_shield", et, this), i(this, "panel_shield", it, this), i(this, "slider", nt, this), i(this, "btn_drag", st, this), i(this, "btn_close", ot, this), i(this, "btn_flush", at, this), i(this, "btn_detail", lt, this), this.g_class_name = "SliderVerify", this._mask = null, this._mask_img = null, this._node_drag_src_pos = d(0, 0), this._node_drag_tar_pos = d(0, 0), this._node_drag_range_size = c(15, 0), this._btn_drag_src_pos = d(0, 0), this._btn_drag_tar_pos = d(0, 0), this._result_time = 0, this._result_icon = null, this._result_txt = null, this._result_callback = null, this._isDragVerify = !1, this._title_txt = null, this._detail_txt_bg_src_size = new g(g.ZERO), this._detail_txt_content_src_size = new g(g.ZERO), this._currentGameID = null, this._isRequested = !1
        }
        static initSingleInst(e, i, n, o) {
            var a;
            if (!(e instanceof u)) return null;
            i = i || p.getScene().getComponentInChildren(m).node, n = n || 0;
            let l = b(e);
            const r = null == (a = l) ? void 0 : a.getComponent(t);
            if (r) {
                let t = d(l.getComponent(C).width, l.getComponent(C).height),
                    e = d(l.scale.x, l.scale.y),
                    n = d(l.getComponent(C).anchorPoint);
                o = o || n.subtract(i.getComponent(C).anchorPoint).multiply(t).multiply(e), r.panel_shield.addOrGetComponent(s).enabled = !1, r.view_shield.addOrGetComponent(s).enabled = !1, l.setPosition(new f(o.x, o.y, 0)), l.active = !1
            } else l.destroy(), l = null;
            if (r && !r.node.isChildOf(i)) try {
                r.node.parent = i, r.node.setSiblingIndex(n)
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log("Already added slider")
            }
            return r
        }
        autoShow(t, e = !0, i = null) {
            this.node.active = !0, this.panel_shield.active = !0, this._result_callback = t, this._resetView(), this.panel_view.active = !0, v.stopAllByTarget(this.panel_view), e ? (this.panel_view.setScale(new f(.5, .5, 1)), y(this.panel_view).to(.2, {
                scale: new f(1, 1, 1)
            }, {
                easing: "expoOut"
            }).call((() => {
                this.panel_shield.active = !1
            })).start()) : (this.panel_view.setScale(w(f.ONE)), this.panel_shield.active = !1), this._currentGameID = i
        }
        autoHide(t = !0, e = null) {
            this.panel_view.setScale(w(f.ONE)), this.panel_shield.active = !0, this.panel_view.active = !0, v.stopAllByTarget(this.panel_view), t ? y(this.panel_view).sequence(y().to(.2, {
                scale: new f(.5, 1, 1)
            }, {
                easing: "expoIn"
            }), y().call((() => {
                this.panel_view.active = !1, this.panel_shield.active = !1, this.node.active = !1, e && e()
            }))).start() : (this.node.active = !1, this.panel_shield.active = !1, e && e())
        }
        onLoad() {
            M.resMgr.adaptWidget(this.node, !0), this._title_txt = this.panel_view.getChildByName("txt_title").getComponent(a);
            let t = this.panel_detail.getChildByName("img_bg");
            this._detail_txt_bg_src_size = c(t.getComponent(C).contentSize), this._detail_txt_content_src_size = c(this.txt_detail.node.parent.getComponent(C).contentSize), this._mask = this.node_drag.getChildByName("mask").getComponent(T), this._mask_img = this._mask.node.getChildByName("img").getComponent(s), this._result_icon = this.panel_result.getChildByName("img_icon").getComponent(s), this._result_txt = this.panel_result.getChildByName("txt_desc").getComponent(a);
            let e = (0 - this.slider.node.getComponent(C).anchorX) * this.slider.node.getComponent(C).width - 10,
                i = (.5 - this.slider.node.getComponent(C).anchorY) * this.slider.node.getComponent(C).height;
            this._btn_drag_src_pos = d(e + this.btn_drag.node.getComponent(C).width * this.btn_drag.node.getComponent(C).anchorX, i + this.btn_drag.node.getComponent(C).height * (this.btn_drag.node.getComponent(C).anchorY - .5)), e = (1 - this.slider.node.getComponent(C).anchorX) * this.slider.node.getComponent(C).width + 10, this._btn_drag_tar_pos = d(e - this.btn_drag.node.getComponent(C).width * (1 - this.btn_drag.node.getComponent(C).anchorX), this._btn_drag_src_pos.y), this.img_bg.node.active = !1, this.panel_result.active = !1, this.panel_detail.active = !1
        }
        start() {}
        onEnable() {
            this._registerEvent()
        }
        onDisable() {
            this._unregisterEvent()
        }
        onDestroy() {
            console.log(`${this.g_class_name}: onDestroy`)
        }
        _registerEvent() {
            this.btn_close.node.on("click", this._onClickClose, this), this.btn_flush.node.on("click", this._onClickFlush, this), this.btn_detail.node.on("click", this._onClickDetail, this), this.panel_detail.on(o.EventType.TOUCH_END, this._onDetailPanelTouchEnd, this), this.btn_drag.node.on(o.EventType.TOUCH_START, this._onDragBtnTouchStart, this), this.btn_drag.node.on(o.EventType.TOUCH_MOVE, this._onDragBtnToucMove, this), this.btn_drag.node.on(o.EventType.TOUCH_END, this._onDragBtnToucEnd, this), this.btn_drag.node.on(o.EventType.TOUCH_CANCEL, this._onDragBtnToucCancel, this), M.MessageCenter.register("on_update_slider_verify_result", this._onMsgUpdateSliderVerifyResult.bind(this), this.node)
        }
        _unregisterEvent() {
            this.btn_close.node.off("click", this._onClickClose, this), this.btn_flush.node.off("click", this._onClickFlush, this), this.btn_detail.node.off("click", this._onClickDetail, this), this.panel_detail.off(o.EventType.TOUCH_END, this._onDetailPanelTouchEnd, this), this.btn_drag.node.off(o.EventType.TOUCH_START, this._onDragBtnTouchStart, this), this.btn_drag.node.off(o.EventType.TOUCH_MOVE, this._onDragBtnToucMove, this), this.btn_drag.node.off(o.EventType.TOUCH_END, this._onDragBtnToucEnd, this), this.btn_drag.node.off(o.EventType.TOUCH_CANCEL, this._onDragBtnToucCancel, this), M.MessageCenter.unregister("on_update_slider_verify_result", this.node)
        }
        _updateStaticText() {
            this._title_txt.string = M.config.getStringData("slider_verify_ui_title_txt")
        }
        _resetView() {
            this._updateStaticText(), this.view_shield.active = !0, this.node_drag.active = !1, this.node_match.active = !1, this.btn_drag.node.active = !1, this.img_bg.node.active = !1, this.panel_result.active = !1, this.panel_detail.active = !1, v.stopAllByTarget(this.btn_drag.node), this.btn_drag.unscheduleAllCallbacks(), this.btn_drag.node.setPosition(new f(this._btn_drag_src_pos.x, this._btn_drag_src_pos.y, 0)), v.stopAllByTarget(this.node), this.unscheduleAllCallbacks(), this._loadLoadingBG((() => {
                this._updateView()
            }))
        }
        _updateView() {
            this.view_shield.active = !1, this.img_bg.node.active = !0, this.btn_drag.node.active = !0, this._generateMatchPos()
        }
        _remoteLoadingBG(t) {
            let e = this.img_bg.node.getComponent(C).width,
                i = this.img_bg.node.getComponent(C).height,
                n = Math.floor(M.StringTools.randomRange(0, 1030)),
                s = M.StringTools.formatC("https://picsum.photos/id/%d/%d/%d", n, e, i);
            M.resMgr.loadRemote(`${s}png`, ((e, i) => {
                e ? console.error(e.message || e) : (this.img_bg.spriteFrame = new S, this.img_bg.spriteFrame.texture = i, t && t())
            }))
        }
        _loadLoadingBG(t) {
            let e = `zh_CN/sliderVerify/bg/${Math.floor(M.StringTools.randomRange(0,30))}`;
            M.resMgr.setSpriteFrame(this.img_bg.node, e, (e => {
                t && t()
            }))
        }
        _generateMatchPos() {
            let t = -this.img_bg.node.getComponent(C).anchorX * this.img_bg.node.getComponent(C).width,
                e = -this.img_bg.node.getComponent(C).anchorY * this.img_bg.node.getComponent(C).height,
                i = t + this.img_bg.node.getComponent(C).width,
                n = e + this.img_bg.node.getComponent(C).height,
                s = d(20, 20),
                o = t + this.node_match.getComponent(C).width * this.node_match.scale.x;
            o += this.node_match.getComponent(C).width * this.node_match.getComponent(C).anchorX * this.node_match.scale.x, o += s.x;
            let a = e;
            a += this.node_match.getComponent(C).height * this.node_match.getComponent(C).anchorY * this.node_match.scale.y, a += s.y;
            let l = i;
            l -= this.node_match.getComponent(C).width * (1 - this.node_match.getComponent(C).anchorX) * this.node_match.scale.x, l -= s.x;
            let r = n;
            r -= this.node_match.getComponent(C).height * (1 - this.node_match.getComponent(C).anchorY) * this.node_match.scale.y, r -= s.y;
            let _ = M.StringTools.randomRange(o, l),
                h = M.StringTools.randomRange(a, r);
            this.node_match.setPosition(_, h), this.node_match.active = !0, this._mask_img.spriteFrame = this.img_bg.spriteFrame.clone(), this._mask_img.node.setPosition(-this.node_match.position.x, -this.node_match.position.y), this.node_drag.setPosition(t + this.node_drag.getComponent(C).width * this.node_drag.getComponent(C).anchorX, this.node_match.position.y), this.node_drag.active = !0, this._node_drag_src_pos = d(this.node_drag.position.x, this.node_drag.position.y), this._node_drag_tar_pos = d(i - this.node_drag.getComponent(C).width * (1 - this.node_drag.getComponent(C).anchorX), this.node_drag.position.y)
        }
        _updateMatchPos() {
            let t = this.btn_drag.node.position.x - this._btn_drag_src_pos.x,
                e = Math.min(this._node_drag_src_pos.x + t, this._node_drag_tar_pos.x);
            this.node_drag.setPosition(e, this.node_drag.position.y)
        }
        _recoverDragBtnPos(t = !0) {
            if (this.view_shield.active = !0, this.btn_drag.node.active = !0, v.stopAllByTarget(this.btn_drag.node), this.btn_drag.unscheduleAllCallbacks(), t) {
                let t = .3,
                    e = y(this.btn_drag.node).to(t, {
                        position: new f(this._btn_drag_src_pos.x, this._btn_drag_src_pos.y, 0)
                    }, {
                        easing: "expoOut"
                    });
                y(this.btn_drag.node).sequence(e, y().call((() => {
                    this.view_shield.active = !1, this.btn_drag.unscheduleAllCallbacks(), console.log(`${this.g_class_name}: drag btn action recover pos`)
                }))).start(), this.btn_drag.schedule((() => {
                    this._updateMatchPos()
                }), 0)
            } else this.view_shield.active = !1, this.btn_drag.node.setPosition(new f(this._btn_drag_src_pos.x, this._btn_drag_src_pos.y, 0)), this._updateMatchPos()
        }
        _checkVerifyResult() {
            let t = !1,
                e = Math.abs(this.node_drag.position.x - this.node_match.position.x),
                i = Math.abs(this.node_drag.position.y - this.node_match.position.y),
                n = ((new Date).getTime() - this._result_time) / 1e3;
            if (n = M.StringTools.toFixed(n, 1), e <= this._node_drag_range_size.width && i <= this._node_drag_range_size.height) {
                t = !0;
                let e = "";
                e = n <= 1 ? M.StringTools.formatC(M.config.getStringData("slider_verify_ui_result_success_txt_1"), n) : M.StringTools.formatC(M.config.getStringData("slider_verify_ui_result_success_txt_2"), n), this._showResultPanel(!0, e)
            } else t = !1;
            this._isDragVerify = !0, this.view_shield.active = !0;
            let s = t ? 0 : 1;
            M.worldNet.requestAuthVerify(s, this._currentGameID), this._isRequested = !0
        }
        _showResultPanel(t, e) {
            let i = "",
                n = new x(x.WHITE);
            t ? (n = E(24, 157, 115), i = "zh_CN/sliderVerify/icon_result_success") : (n = E(255, 73, 73), i = "zh_CN/sliderVerify/icon_result_faild"), this.view_shield.active = !0, this.panel_result.active = !0, this._result_txt.string = e, this._result_txt.node.getComponent(D).color = n, M.resMgr.setSpriteFrame(this._result_icon.node, i)
        }
        _showDetailPanel(t, e = !0) {
            this.panel_detail.active = !0;
            let i = this.panel_detail.getChildByName("img_bg"),
                n = i.getChildByName("scrollview").getComponent(z);
            if (i.active = !0, v.stopAllByTarget(i), t) {
                let t = "\n  ",
                    e = M.config.getCurrentLanguage() === M.Enum.LANGUAGE_TYPE.zh_CN || M.config.getCurrentLanguage() == M.Enum.LANGUAGE_TYPE.zh_TW,
                    s = M.config.getStringData("slider_verify_ui_detail_txt"),
                    o = M.StringTools.calculateAutoWrapString(this.txt_detail.node, s + t + e);
                this.txt_detail.string = o;
                let a = n.content.getComponent(C).contentSize,
                    l = M.resMgr.getLabelStringSize(this.txt_detail),
                    r = l.height - a.height;
                if (r > 0) {
                    let t = 1,
                        e = Math.min(r, t * a.height),
                        s = i.getComponent(C).contentSize;
                    s.height += e, i.getComponent(C).setContentSize(s), a.height += e, n.node.getComponent(C).setContentSize(a), n.content.getComponent(C).setContentSize(a.width, l.height)
                }
            }
            let s = null;
            if (t) {
                i.setScale(w(f.ZERO));
                let t = y(i).call((() => {
                    i.setScale(w(f.ONE)), this.panel_shield.active = !1
                }));
                if (e) {
                    const e = y(i).to(.3, {
                        scale: w(f.ONE)
                    }, {
                        easing: "backOut"
                    });
                    s = y(i).sequence(e, t)
                } else s = t
            } else {
                i.setScale(w(f.ONE));
                let t = y(i).call((() => {
                    i.setScale(w(f.ZERO)), this.panel_shield.active = !1, this.panel_detail.active = !1, n.scrollToOffset(d(k.ZERO)), i.getComponent(C).setContentSize(this._detail_txt_bg_src_size), n.node.getComponent(C).setContentSize(this._detail_txt_content_src_size), n.content.getComponent(C).setContentSize(this._detail_txt_content_src_size)
                }));
                if (e) {
                    const e = y(i).to(.3, {
                        scale: w(f.ZERO)
                    }, {
                        easing: "backIn"
                    });
                    s = y(i).sequence(e, t)
                } else s = t
            }
            s && (s.start(), this.panel_shield.active = !0)
        }
        _onDetailPanelTouchEnd(t) {
            console.log(`${this.g_class_name}: detail panel_view touch end`), this._showDetailPanel(!1), t.propagationStopped = !0
        }
        _onDragBtnTouchStart(t) {
            console.log(`${this.g_class_name}: drag touch start`), this._result_time = (new Date).getTime(), t.propagationStopped = !0
        }
        _onDragBtnToucMove(t) {
            let e = t.getLocation(),
                i = w(0, 0, 0);
            const n = this.btn_drag.node.scene ? this.btn_drag.node.scene.designResolutionScaleX : 1,
                s = this.btn_drag.node.scene ? this.btn_drag.node.scene.designResolutionScaleY : 1;
            this.btn_drag.node.parent.getComponent(C).convertToNodeSpaceAR(new f(e.x / n, e.y / s), i), i.x = Math.min(i.x, this._btn_drag_tar_pos.x), i.x = Math.max(i.x, this._btn_drag_src_pos.x), this.btn_drag.node.setPosition(i.x, this.btn_drag.node.position.y), this._updateMatchPos(), t.propagationStopped = !0
        }
        _onDragBtnToucEnd(t) {
            console.log(`${this.g_class_name}: drag touch end`), this._checkVerifyResult(), t.propagationStopped = !0
        }
        _onDragBtnToucCancel(t) {
            console.log(`${this.g_class_name}: drag touch cancel`);
            let e = t.getLocation();
            e.x <= 0 || e.x >= B.getVisibleSize().width || e.y <= 0 || e.y >= B.getVisibleSize().height ? this._recoverDragBtnPos() : this._checkVerifyResult(), t.propagationStopped = !0
        }
        _onClickClose(t) {
            M.AudioMgr.playButtonSound("button_click"), this._isDragVerify = !1, M.worldNet.requestAuthVerify(1, this._currentGameID), this.autoHide(!0, (() => {
                M.TT.showMsg(M.config.getStringData("slider_verify_toast_result_faild_txt"), M.Enum.ToastType.ToastTypeError)
            }))
        }
        _onClickFlush(t) {
            M.AudioMgr.playButtonSound("button_click"), this._resetView()
        }
        _onClickDetail(t) {
            M.AudioMgr.playButtonSound("button_click"), this._showDetailPanel(!this.panel_detail.active)
        }
        _onMsgUpdateSliderVerifyResult(t) {
            if (this._isRequested) switch (this._isRequested = !1, console.log(`${this.g_class_name}: response msg slider verify result: ${t.error}`), t.error) {
                case 1: {
                    let t = 1;
                    this.scheduleOnce((() => {
                        this.autoHide(!0, (() => {
                            M.TT.showMsg(M.config.getStringData("slider_verify_toast_result_success_txt"), M.Enum.ToastType.ToastTypeSuccess), this._result_callback && this._result_callback()
                        }))
                    }), t)
                }
                break;
                case 239:
                    if (this._isDragVerify) {
                        this._showResultPanel(!1, M.config.getStringData("slider_verify_ui_result_faild_txt_1"));
                        let t = 1;
                        this.scheduleOnce((() => {
                            this._resetView()
                        }), t)
                    }
                    break;
                case 240: {
                    this._showResultPanel(!1, M.config.getStringData("slider_verify_ui_result_faild_txt_2"));
                    let t = 1;
                    this.scheduleOnce((() => {
                        this.autoHide()
                    }), t)
                }
                break;
                default:
                    this.autoHide(!0, (() => {
                        M.TT.showMsg(M.config.getStringData(`ServerErrorCode${t.error}`), M.Enum.ToastType.ToastTypeError)
                    }))
            }
        }
    }).prototype, "img_bg", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(Y.prototype, "node_drag", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(Y.prototype, "node_match", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(Y.prototype, "panel_view", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(Y.prototype, "panel_result", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(Y.prototype, "panel_detail", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(Y.prototype, "txt_detail", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Y.prototype, "view_shield", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Y.prototype, "panel_shield", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(Y.prototype, "slider", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(Y.prototype, "btn_drag", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(Y.prototype, "btn_close", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(Y.prototype, "btn_flush", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(Y.prototype, "btn_detail", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = Y)) || q));
    n._RF.pop()
}