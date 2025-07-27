import * as t from "./cc.js";
import * as o from "./HashMap.js";
import * as a from "./CowboyEnum.js";
import * as i from "./cv.js";
import * as n from "./VideoCowboyRoomData.js";
import * as s from "./Enum.js";

function main() {
    t._RF.push({}, "10383jobxFGX6zPiL1TUljq", "VideoCowboyManager", void 0);
    class r {
        constructor() {
            this.m_VideoCowboyCurrRoom = new n, this.Enum = a, this.VideoCowboyPlist = new o
        }
        static getInstance() {
            return r.g_instance || (r.g_instance = new r), r.g_instance
        }
        getVideoCowboyRoom() {
            return this.m_VideoCowboyCurrRoom
        }
        isPlayVideo() {
            return !0
        }
        addPlist(e, t) {
            this.VideoCowboyPlist.add(e, t)
        }
        getPlistAtlas(e) {
            return this.VideoCowboyPlist.get(e)
        }
        getTextureByName(e, t) {
            let o = this.VideoCowboyPlist.get(e);
            if (o) {
                let e = o.getSpriteFrame(t);
                if (e) return e;
                console.log("不存在图片:" + t)
            } else console.log("不存在图集:" + e);
            return null
        }
        loadSpriteTextureByPlist(e, t, o) {
            e.getSpriteFrame(o) ? i.resMgr.loadSpriteTextureByPlist(e, t, o) : i.resMgr.loadSpriteTextureByPlist(this.VideoCowboyPlist.get("language_PLIST"), t, o)
        }
        loadButtonTextureByPlist(e, t, o, a, n, s, r) {
            if ((null == r ? void 0 : r.length) <= 0) return this.loadButtonTextureByPlist(e, t, o, a, n, s);
            e.getSpriteFrame(o) ? i.resMgr.loadButtonTextureByPlist(e, t, o, a, n, s) : i.resMgr.loadButtonTextureByPlistForPreview(e, t, o, a, n, s, r)
        }
        getLanguagePath(e, t) {
            t && void 0 !== t || (t = i.config.getCurrentLanguage());
            let o = t;
            switch (t) {
                case s.zh_CN:
                case s.en_US:
                case s.vi_VN:
                case s.ja_JP:
                case s.ko_KR:
                case s.id_ID:
                    break;
                case s.th_TH:
                    o = s.en_US;
                    break;
                case s.zh_TW:
                    o = s.zh_TW;
                    break;
                default:
                    o = i.appConfig.getGeneralConfig().defaultLanguage
            }
            return o + "/" + e
        }
        getBetTableLanguagePath(e, t) {
            t && void 0 !== t || (t = i.config.getCurrentLanguage());
            let o = t;
            switch (t) {
                case s.zh_CN:
                case s.en_US:
                case s.vi_VN:
                case s.ja_JP:
                case s.ko_KR:
                case s.es_MX:
                case s.fr_CA:
                case s.th_TH:
                case s.zh_TW:
                case s.pt_BR:
                    break;
                default:
                    o = i.appConfig.getGeneralConfig().defaultLanguage
            }
            return o + "/" + e
        }
    }
    r.g_instance = null;
    e("default", r.getInstance());
    t._RF.pop()
}