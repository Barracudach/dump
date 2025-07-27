import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as d from "./ScrollViewReuse.js";

function main() {
    var u, g, C, _, p, b, f, m;
    n._RF.push({}, "8da59G4BCtHJ5Wtunl6khOE", "AreaView", void 0);
    const {
        ccclass: A,
        property: D
    } = o;
    t("default", (u = D(a), g = D(s), C = D(r), A((b = e((p = class extends h {
        constructor(...t) {
            super(...t), i(this, "scrollView", b, this), i(this, "areaItem", f, this), i(this, "bg", m, this), this._codeData = [], this.itemData = [], this._searchContent = "", this._AREA_COUNT = 235, this.getAreaCallback = null, this.exitAreaCallback = null
        }
        onLoad() {
            this.initText(), this.initCodeData(), c.MessageCenter.register("AreaView_onBtnCodeItemClick", this.onBtnCodeItemClick.bind(this), this.node), c.MessageCenter.register(c.config.CHANGE_LANGUAGE, this.onMsgChangeLanguage.bind(this), this.node), c.config.adaptSize([this.scrollView.node, this.bg]), c.resMgr.adaptWidget(this.node, !0)
        }
        onDestroy() {
            c.MessageCenter.unregister("AreaView_onBtnCodeItemClick", this.node), c.MessageCenter.unregister(c.config.CHANGE_LANGUAGE, this.node)
        }
        start() {
            let t = this.scrollView.getComponent(d);
            t.bindPrefab(this.areaItem, "AreaItem", this.itemData), t.generateItemPool(), t.bindScrollEventTarget(this), this.updatSpawnData("" === this._searchContent)
        }
        onMsgChangeLanguage() {
            this.initText(), this.initCodeData(), this.updatSpawnData("" === this._searchContent)
        }
        initText() {
            c.action.setText(this.node, "Text_5", "Login_Scene_areaCode_panel_Text_5"), c.action.setText(this.node, "search_conuntry_text", "Login_Scene_areaCode_panel_search_conuntry_text", !0)
        }
        initCodeData() {
            this._codeData = [];
            for (var t = 0; t < this._AREA_COUNT; ++t) {
                var e = "areaCode" + t;
                this._codeData.push(c.config.getStringData(e))
            }
        }
        updatSpawnData(t) {
            this.itemData = [];
            for (var e = this._codeData, i = 0, n = 0; n < e.length; ++n)(-1 != e[n].toLowerCase().indexOf(this.getSearchContent()) || t) && (this.itemData[i] = e[n], i++);
            this.scrollView.getComponent(d).reloadView(this.itemData)
        }
        getSearchContent() {
            return this._searchContent.toLowerCase().replace("+", "*")
        }
        onEditBoxSearchEnd() {
            this._searchContent = this.node.getChildByName("search_conuntry_text").getComponent(l).string, this.updatSpawnData("" === this._searchContent)
        }
        onBtnCleanCodeClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), this._searchContent = "", this.node.getChildByName("search_conuntry_text").getComponent(l).string = this._searchContent, this.updatSpawnData("" === this._searchContent)
        }
        onBtnCodeItemClick(t) {
            if (this.itemData.length <= 0) return;
            this.node.active = !1;
            let e = this.itemData[t],
                i = e.indexOf(","),
                n = e.indexOf("*"),
                a = e.substring(i + 1, n) + "+" + e.substring(n + 1, e.length);
            this.getAreaCallback && this.getAreaCallback(a)
        }
        onBtnBackClick() {
            c.AudioMgr.playButtonSound("back_button.mp3"), this.node.active = !1, this.exitAreaCallback && this.exitAreaCallback()
        }
        setBg(t) {
            this.bg.active = t
        }
        getAreaCode(t) {
            let e = "";
            for (var i = 0; i < this._AREA_COUNT; ++i) {
                let n = this._codeData[i],
                    a = n.lastIndexOf("*");
                if (n.substring(a + 1) == t) {
                    let i = n.lastIndexOf(",");
                    e = n.substring(i + 1, a) + "+" + t;
                    break
                }
            }
            return e
        }
    }).prototype, "scrollView", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(p.prototype, "areaItem", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(p.prototype, "bg", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = p)) || _));
    n._RF.pop()
}