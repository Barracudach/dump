import * as d from "./cc.js";
import * as g from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./ScrollViewReuse.js";
import * as m from "./cv.js";

function main() {
    var h, f;
    o._RF.push({}, "5c5670zBxVEcoDoIHnJkbbL", "LogTools", void 0);
    const {
        ccclass: w,
        property: p
    } = e;
    t("LogTools", w(((f = class t extends n {
        constructor(...t) {
            super(...t), this.scrollView = null, this.logButton = null, this.logItemPrefab = null, this.clearButton = null, this.msgNode = null, this.logData = []
        }
        init() {
            let t = this;
            l.load("zh_CN/commonPrefab/LogPanel", function(o, e) {
                console.log("start load commonPrefab/LogPanel.prefab file"), o ? console.log(o.message || o) : (t.msgNode = s(e), i.addPersistRootNode(this.msgNode), t.msgNode.addComponent(a), t.msgNode.setSiblingIndex(m.Enum.ZORDER_TYPE.ZORDER_LOG), t.msgNode.active = !0, t.scrollView = c("scrollview", t.msgNode).getComponent(r), t.scrollView.node.active = !1, t.logButton = c("logButton", t.msgNode), t.logButton.on(g.EventType.CLICK, t.onclinckLogButton, t), t.clearButton = c("clearButton", t.msgNode), t.clearButton.on(g.EventType.CLICK, t.onClear, t), m.resMgr.adaptWidget(this.msgNode), t.initScrollviewData(), l.load("zh_CN/commonPrefab/LogItem", function(o, e) {
                    console.log("start load commonPrefab/LogPanel.prefab file"), o ? console.log(o.message || o) : t.onLoadItemComplete(e)
                }.bind(this)))
            }.bind(this))
        }
        start() {}
        onLoadItemComplete(t) {
            this.logItemPrefab = t
        }
        onclinckLogButton() {
            this.scrollView.node.active = !this.scrollView.node.active, this.scrollView.node.active && this.showScrollview()
        }
        onClear() {
            this.logData = [], this.scrollView.getComponent(u).reloadView(this.logData)
        }
        showScrollview() {
            let t = this.scrollView.getComponent(u);
            t.bindPrefab(this.logItemPrefab, "LogItem", []), t.generateItemPool(), t.bindScrollEventTarget(this), t.reloadView(this.logData)
        }
        addLog(t) {
            if (this.logData.unshift(t), !this.scrollView) return;
            this.scrollView.getComponent(u).reloadView(this.logData)
        }
        initScrollviewData() {
            for (let t = 0; t < 1; t++) this.logData.push("start----------------------")
        }
        getLogDataString() {
            let t = this.logData.length,
                o = "";
            console.debug("getLogDataString::len::" + t);
            for (let e = 0; e < t; e++) o += this.logData[e];
            return o
        }
        static getInstance() {
            return t.g_instance && t.g_instance.msgNode && d(t.g_instance.msgNode, !0) || (t.g_instance = new t, t.g_instance.init()), t.g_instance
        }
    }).g_instance = void 0, h = f)) || h);
    o._RF.pop()
}