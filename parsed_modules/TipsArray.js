import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as N from "./cc.js";
import * as a from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as i from "./cc.js";
import * as T from "./cc.js";
import * as _ from "./cv.js";
import * as I from "./TweenControl.js";

function main() {
    var S, v;
    e._RF.push({}, "01790SJwoVPZrVd2dYubqFk", "TipsArray", void 0);
    const {
        ccclass: y,
        property: H
    } = o;
    t("TipsArray", y(((v = class t extends n {
        constructor(...t) {
            super(...t), this.errorMsg = null, this.arr = [], this.currentNode = null, this.rootNode = null, this.initPos = new i(0, -45)
        }
        init() {
            r.load("zh_CN/commonPrefab/errorMsg", function(t, e) {
                console.log("start load commonPrefab/errorMsg.prefab file"), t ? console.log(t.message || t) : (this.errorMsg = e, console.log("^^^^^^^^" + this.errorMsg))
            }.bind(this))
        }
        onDestroy() {
            r.release("zh_CN/commonPrefab/errorMsg")
        }
        reset() {
            if (!this.rootNode) return;
            _.resMgr.adaptWidget(this.rootNode, !0);
            let t = _.config.IS_IPHONEX_SCREEN ? _.config.FULLSCREEN_OFFSETY : 0;
            this.rootNode.position = new i(.5 * _.config.WIDTH, _.config.DESIGN_HEIGHT > _.config.DESIGN_WIDTH ? _.config.HEIGHT - t : .5 * _.config.HEIGHT)
        }
        showMsg(t, e, o = !1, n = !1, i, r = !1) {
            if (_.StringTools.getArrayLength(t) <= 0) return;
            if (n) return void _.popUp.showMsg({
                txt: t,
                cashGameScene: i
            });
            _.appConfig.getGeneralConfig().showInAppNotifications && !0 || r ? (this.getErrorNode(), _.config.DESIGN_WIDTH < _.config.DESIGN_HEIGHT ? (_.resMgr.setSpriteFrame(this.currentNode, "zh_CN/common/common_tips_bg"), this.currentNode.getComponent(s).setContentSize(_.config.WIDTH, this.currentNode.getComponent(s).height)) : (_.resMgr.setSpriteFrame(this.currentNode, "zh_CN/common/common_tips_bg_1"), this.currentNode.getComponent(s).setContentSize(.5 * _.config.WIDTH, this.currentNode.getComponent(s).height)), this.showError(this.currentNode, t, e, o)) : g("[In App Notification] ==> TipsArray:", e, t, o)
        }
        getErrorNode() {
            if (this.arr.length > 0)
                for (var t = 0; t < this.arr.length; t++)
                    if (!this.arr[t].active) return void(this.currentNode = this.arr[t]);
            this.createNode()
        }
        createNode() {
            if (null == this.rootNode) {
                this.rootNode = new c, this.rootNode.getComponent(s).setContentSize(_.config.WIDTH, 0), a.addPersistRootNode(this.rootNode), this.rootNode.addComponent(d), this.rootNode.setSiblingIndex(_.Enum.ZORDER_TYPE.ZORDER_TT);
                let t = _.config.IS_IPHONEX_SCREEN ? _.config.FULLSCREEN_OFFSETY : 0;
                this.rootNode.setPosition(.5 * _.config.WIDTH, _.config.DESIGN_HEIGHT > _.config.DESIGN_WIDTH ? _.config.HEIGHT - t : .5 * _.config.HEIGHT)
            }
            var t = h(this.errorMsg);
            this.rootNode.addChild(t), this.arr.push(t), this.currentNode = t, _.resMgr.adaptWidget(this.currentNode), this.initPos = l("content", this.currentNode).getPosition()
        }
        showError(t, e, o, n = !1) {
            void 0 !== e && "" !== e || console.log("Error: TipsArray txt is empty"), t.active = !0;
            var i = l("content", t);
            i.setPosition(this.initPos);
            let r = _.String(e);
            i.getComponent(p).string = r;
            var g = l("close_button", t),
                c = l("times", t);
            n ? (g.active = !0, c.active = !0, i.getComponent(p).fontSize = 30, c.getComponent(p).fontSize = 30) : (g.active = !1, c.active = !1, i.getComponent(p).fontSize = 42, c.getComponent(p).fontSize = 42);
            let a = _.resMgr.getLabelStringSize(i.getComponent(p)),
                d = _.config.DESIGN_WIDTH,
                h = _.StringTools.readingTime(r, .7);
            var E = f().to(.3, {
                    opacity: 255
                }, {
                    easing: N.fade
                }),
                S = f().delay(h),
                v = f().to(1, {
                    opacity: 0
                }, {
                    easing: N.fade
                }),
                y = f().call((() => {
                    t.active = !1
                }));
            if (n) {
                let e = 5,
                    o = c.getComponent(p);
                o.string = _.StringTools.formatC("(%d)", e);
                let n = function() {
                    e--, e > 0 ? o.string = _.StringTools.formatC("(%d)", e) : (u.stopAllByTarget(c), t.active = !1)
                };
                f(c).delay(1).call(n).repeat(6).start(), g.on(m.EventType.CLICK, (e => {
                    u.stopAllByTarget(c), t.active = !1
                }), this)
            }
            if (I.fadeIn(i, 0), c.setPosition(C(i.getPosition().x + i.getComponent(s).width / 2 + c.getComponent(s).width / 2, c.getPosition().y)), g.setPosition(C(t.getComponent(s).getBoundingBox().size.width / 2 - g.getComponent(s).width / 2 - 50, g.getPosition().y)), d < a.width) {
                let e = i,
                    o = a.width - d + 50,
                    r = n ? 4 : o / 100,
                    s = C(e.getPosition().x + o / 2 + 10, e.getPosition().y);
                if (e.setPosition(s), !n) {
                    let e = .3 + h;
                    f(i).delay(e).to(r, {
                        position: C(s.x - o, s.y)
                    }).start(), f(t.getComponent(T)).sequence(E, f().delay(r + .3 + h), v, y).start()
                }
            } else n ? f(t.getComponent(T)).sequence(E, S).start() : f(t.getComponent(T)).sequence(E, S, v, y).start()
        }
        static getInstance() {
            return t.g_instance && t.g_instance.rootNode && E(t.g_instance.rootNode, !0) || (t.g_instance = new t, t.g_instance.init()), t.g_instance
        }
    }).g_instance = void 0, S = v)) || S);
    e._RF.pop()
}