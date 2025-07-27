import * as n from "./cc.js";
import * as e from "./cc.js";
import * as o from "./cv.js";
import * as i from "./MiniGameDialogBase.js";

function main() {
    n._RF.push({}, "5cdfcl2MGhKz7VeyrS1Zidt", "ConcreteMiniGameDialog", void 0);
    class a extends i {
        updateCenterButton(t) {
            var n;
            null == (n = this.implementation) || n.updateCenterButton(t)
        }
        setLegacyDialog(t) {
            var n;
            null == (n = this.implementation) || n.setLegacyDialog(t)
        }
        show(t, n, e, o, i, a, g) {
            var s;
            null == (s = this.implementation) || s.show(t, n, e, o, i, a, g)
        }
        close() {
            var t;
            null == (t = this.implementation) || t.close()
        }
        showCenterButton(t, n) {
            var e;
            null == (e = this.implementation) || e.showCenterButton(t, n)
        }
        blockCenterButton() {
            var t;
            null == (t = this.implementation) || t.blockCenterButton()
        }
        setTheme(t) {
            var n;
            null == (n = this.implementation) || n.setTheme(t)
        }
        static showDialog(t) {
            const {
                miniDialog: n,
                stringContent: e,
                stringLeftBtn: o,
                stringRightBtn: i,
                cbLeftBtn: g,
                cbRightBtn: s,
                isReachedMax: r,
                legacyDialog: l,
                isShowBtnCenter: c,
                stringCenterButton: C,
                cbCenterBtn: u,
                onUpdateContent: f,
                themeType: h,
                onChangeLanguage: m
            } = t, B = new a(n || l);
            l && n && B.setLegacyDialog(l), B.show(e, o, i, g, s, f, m), c && n && B.showCenterButton(C, u), r && B.blockCenterButton(), h && B.setTheme(h)
        }
        static onChangeLanguageAutoBetPopup(t, n, i) {
            return a => {
                if (t) {
                    if (console.log("update content for legacyDialog"), i.title) {
                        t.title.getComponent(e).string = o.config.getStringDataCasino(i.title)
                    }
                    if (i.textContent)
                        if (i.contentArgs) {
                            if (Array.isArray(i.contentArgs) && i.contentArgs.length) t.txt_content.string = o.StringTools.formatC(o.config.getStringDataCasino(i.textContent), ...i.contentArgs);
                            else if ("function" == typeof i.contentArgs) {
                                const n = i.contentArgs();
                                t.txt_content.string = o.StringTools.formatC(o.config.getStringDataCasino(i.textContent), ...n)
                            }
                        } else t.txt_content.string = o.config.getStringDataCasino(i.textContent);
                    if (i.leftBtn) {
                        t.btn_left.node.getChildByName("txt").getComponent(e).string = o.config.getStringDataCasino(i.leftBtn)
                    }
                    if (i.rightBtn) {
                        t.btn_right.node.getChildByName("txt").getComponent(e).string = o.config.getStringDataCasino(i.rightBtn)
                    }
                }
                if (n && i.centerBtn) {
                    console.log("update content for newDialog");
                    n.btn_center.node.getChildByName("txt").getComponent(e).string = o.config.getStringDataCasino(i.centerBtn)
                }
            }
        }
    }
    t("ConcreteMiniGameDialog", a), n._RF.pop()
}