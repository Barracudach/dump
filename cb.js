import * as e from "./cc.js";
import * as n from "./CowboyRoomData.js";
import * as r from "./CowboyEnum.js";
import * as o from "./HashMap.js";
import * as a from "./cv.js";
import * as s from "./Enum.js";

function main() {
    e._RF.push({}, "9fc01qfnNpMQIaXPhR0wV/8", "cb", void 0);
    class i {
        constructor() {
            this.m_cowboyCurrRoom = new n, this.Enum = r, this.cowboyPlist = new o, this.winPatternChart = [{
                text: "HC"
            }, {
                text: "1P"
            }, {
                text: "2P"
            }, {
                text: "T"
            }, {
                text: "S"
            }, {
                text: "F"
            }, {
                text: "FH"
            }, {
                text: "Q"
            }, {
                text: "SF"
            }, {
                text: "RF"
            }]
        }
        static getInstance() {
            return i.g_instance || (i.g_instance = new i), i.g_instance
        }
        getCowboyRoom() {
            return this.m_cowboyCurrRoom
        }
        addPlist(t, e) {
            this.cowboyPlist.add(t, e)
        }
        getTextureByName(t, e) {
            let n = this.cowboyPlist.get(t);
            if (n) {
                let t = n.getSpriteFrame(e);
                if (t) return t;
                console.log("不存在图片:" + e)
            } else console.log("不存在图集:" + t);
            return null
        }
        loadSpriteTextureByPlist(t, e, n) {
            t.getSpriteFrame(n) ? a.resMgr.loadSpriteTextureByPlist(t, e, n) : a.resMgr.loadSpriteTextureByPlist(this.cowboyPlist.get("language_PLIST"), e, n)
        }
        loadButtonTextureByPlist(t, e, n, r, o, s) {
            t.getSpriteFrame(n) ? a.resMgr.loadButtonTextureByPlist(t, e, n, r, o, s) : a.resMgr.loadButtonTextureByPlist(this.cowboyPlist.get("language_PLIST"), e, n, r, o, s)
        }
        loadButtonTextureByAutoAtlas(t, e, n, r, o, s, i) {
            if (i.length <= 0) return this.loadButtonTextureByPlist(t, e, n, r, o, s);
            t.getSpriteFrame(n) ? a.resMgr.loadButtonTextureByPlist(t, e, n, r, o, s) : a.resMgr.loadButtonTextureByPlistForPreview(t, e, n, r, o, s, i)
        }
        getLanguagePath(t, e) {
            e && void 0 !== e || (e = a.config.getCurrentLanguage());
            let n = e;
            switch (e) {
                case s.zh_CN:
                case s.en_US:
                case s.vi_VN:
                case s.ja_JP:
                case s.ko_KR:
                case s.id_ID:
                    break;
                case s.th_TH:
                    n = s.en_US;
                    break;
                case s.zh_TW:
                    n = s.zh_CN;
                    break;
                default:
                    n = a.appConfig.getGeneralConfig().defaultLanguage
            }
            return n + "/" + t
        }
        getWinPatternString(t) {
            var e;
            return (null == (e = this.winPatternChart[t - 1]) ? void 0 : e.text) || ""
        }
    }
    i.g_instance = null;
    t("default", i.getInstance());
    e._RF.pop()
}