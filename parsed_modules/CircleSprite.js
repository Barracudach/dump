import * as t from "./cc.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as E from "./cv.js";

function main() {
    var u, _;
    t._RF.push({}, "d9143A3MVNFKZn5dWZ2R5pJ", "CircleSprite", void 0);
    const {
        ccclass: N,
        property: R
    } = i;
    let S = e("Head_Mode", function(e) {
        return e[e.CIRCLE = 0] = "CIRCLE", e[e.CLUB = 1] = "CLUB", e[e.IRREGULAR = 2] = "IRREGULAR", e[e.IRREGULAR_CIRCLE = 3] = "IRREGULAR_CIRCLE", e
    }({}));
    class A {
        constructor() {
            this.node = null, this.url = "", this.isHaveBg = !1, this.mode = 0, this.isDownload = !1, this.forceMask = !1, this.CUSTOM_DEFAULT_URL = "", this.plat = 0, this.isScale = !1
        }
    }
    e("CreateHead", A);
    e("CircleSprite", N(((_ = class e extends n {
        constructor(...e) {
            super(...e), this.maskNode = null, this.spriteNode = null, this.HEAD_DEFAULT_URL = "zh_CN/common/Head_01", this.CLUB_DEFAULT_URL = "zh_CN/common/club", this.IRREGULAR_DEFAULT_HEAD = "zh_CN/game/cowboy/head/head_1", this.IRREGULAR_CIRCLE_DEFAULT_HEAD = "zh_CN/common/head/head_1", this.CIRCLE_IMAGE_FOLDER = "circleimage/", this.mode = 0, this.isScale = !1, this.CUSTOM_DEFAULT_URL = "", this.isDownload = !1, this.nodeSize = void 0
        }
        static clean() {
            e.createArr = []
        }
        static updateCreateHead() {
            if (e.createArr.length <= 0) return;
            let t = e.createArr.length;
            for (let i = 0; i < t; i++) {
                let t = e.createArr[i];
                (new e).set(t.node, t.url, t.plat, t.isHaveBg, t.mode, t.isDownload, t.CUSTOM_DEFAULT_URL, t.forceMask, t.isScale)
            }
            e.clean()
        }
        static updateBigCreateHead() {
            if (e.createArr.length <= 0) return;
            let t = e.createArr.length;
            for (let i = 0; i < t; i++) {
                let t = e.createArr[i];
                (new e).setBig(t.node, t.url, t.plat, t.isHaveBg, t.mode, t.isDownload, t.CUSTOM_DEFAULT_URL, t.forceMask)
            }
            e.clean()
        }
        static setBigCircleSprite(t, i = "", n = 0, o = !0, s, a = !0, r = !1) {
            if (null == t || null == t) return void console.log("Set the avatar node to be empty");
            let d = new A;
            d.node = t, d.url = i, d.isHaveBg = o, d.plat = n, "number" == typeof s || null == s ? d.mode = null == s ? 0 : s : d.CUSTOM_DEFAULT_URL = s, d.isDownload = a, d.forceMask = r, e.createArr.push(d), e.updateBigCreateHead()
        }
        static setCircleSprite(t, i = "", n = 0, o = !0, s, a = !0, r = !1, d = !1) {
            if (null == t || null == t) return void console.log("Set the avatar node to be empty");
            let l = new A;
            l.node = t, l.url = i, l.isHaveBg = o, l.plat = n, l.isScale = d, "number" == typeof s || null == s ? l.mode = null == s ? 0 : s : l.CUSTOM_DEFAULT_URL = s, l.isDownload = a, l.forceMask = r, e.createArr.push(l), e.updateCreateHead()
        }
        static cleanHeadNode(t) {
            if (!t) return;
            let i = t.getParent().getChildByName(t.uuid + e.HEAD_NAME);
            i && (console.log("cleanHeadNode--------"), i.removeFromParent(), i.destroy())
        }
        static cleanVideoNode(t) {
            if (!t) return;
            let i = t.getParent().getChildByName(t.uuid + e.HEAD_NAME + "_VEDIO");
            i && (console.log("cleanHeadNode Video--------"), i.removeFromParent(), i.destroy())
        }
        static setHeadTexture(t, i, n = .95, h) {
            if (!t || !t.getParent()) return;
            let m = t.uuid,
                g = t.getParent().getChildByName(m + e.HEAD_NAME);
            if (!g) {
                console.log("~~~ setHeadTexture ==> " + this.name + "; No avatar node"), g = new o, g.addComponent(s), t.getParent().addChild(g), g.name = m + e.HEAD_NAME, g.getComponent(s).setAnchorPoint(t.getComponent(s).anchorPoint), g.setPosition(t.getPosition()), g.setScale(new a(n, n, n)), g.getComponent(s).setContentSize(t.getComponent(s).contentSize.width, t.getComponent(s).contentSize.height);
                let i = new o;
                i.addComponent(s), i.addComponent(r), g.addChild(i), i.name = "sprite_node"
            }
            const p = e.addMask(g);
            p.enabled || (p.enabled = !0);
            let c = t.getComponent(s).contentSize,
                C = d("sprite_node", g),
                E = new l;
            E.texture = i, C.getComponent(r).spriteFrame = E, h && g.getComponent(s).setContentSize(c.width * n, c.height * n);
            let u = e.getScaleData(g, C);
            C.setScale(new a(u, u, u))
        }
        static setHeadTextureWithData(t, i, n, a, m, g = 0, p = 1, c = 1) {
            if (!t || !t.getParent()) return;
            let C = t.uuid,
                u = t.getParent().getChildByName(C + e.HEAD_NAME + "_VEDIO");
            if (!u) {
                console.log("No avatar node"), u = new o, u.addComponent(s), t.getParent().addChild(u), u.name = C + e.HEAD_NAME + "_VEDIO", u.getComponent(s).setAnchorPoint(t.getComponent(s).anchorPoint), u.setPosition(t.getPosition()), u.setScale(t.scale), u.getComponent(s).setContentSize(t.getComponent(s).contentSize.width, t.getComponent(s).contentSize.height), u.setSiblingIndex(E.Enum.ZORDER_TYPE.ZORDER_1);
                let i = new o;
                i.addComponent(s), i.getComponent(s).width = t.getComponent(s).width, i.getComponent(s).height = t.getComponent(s).height;
                let n = i.addComponent(r),
                    a = new l;
                a.texture = new h, n.spriteFrame = a, n.type = r.Type.SIMPLE, n.sizeMode = r.SizeMode.CUSTOM, u.addChild(i), i.name = "sprite_node"
            }
            const _ = e.addMask(u);
            _.enabled || (_.enabled = !0);
            let N = d("sprite_node", u),
                R = N.getScale();
            R.x = p, R.y = c, N.setScale(R), N.angle = -g;
            let S = cc_mtt.vv.AssetsManager.texture_InitWithData(i, n, a, m, !1);
            N.getComponent(r).spriteFrame.texture = S
        }
        static getScaleData(e, t) {
            if (!e || !t) return 1;
            let i = e.getComponent(s).contentSize,
                n = t.getComponent(s).contentSize;
            return n.width > n.height ? i.width / n.height : e.getComponent(s).width / t.getComponent(s).width
        }
        static getHeadNode(t) {
            if (!t || !t.getParent()) return null;
            let i = t.uuid,
                n = t.getParent().getChildByName(i + e.HEAD_NAME);
            if (n) {
                return n.getChildByName("sprite_node")
            }
            return null
        }
        static getVideoNode(t) {
            if (!t || !t.getParent()) return null;
            let i = t.uuid,
                n = t.getParent().getChildByName(i + e.HEAD_NAME + "_VEDIO");
            if (n) {
                return n.getChildByName("sprite_node")
            }
            return null
        }
        setBig(t, i, n, a, d, l, h, m) {
            if (!t || !t.getParent()) return;
            let g = t.uuid;
            this.CUSTOM_DEFAULT_URL = h, this.mode = d, this.maskNode = t.getParent().getChildByName(g + e.HEAD_NAME), this.maskNode || (this.maskNode = new o, this.maskNode.addComponent(s), t.getParent().addChild(this.maskNode), this.maskNode.name = g + e.HEAD_NAME, this.maskNode.getComponent(s).setAnchorPoint(t.getComponent(s).anchorPoint), a ? t.setSiblingIndex(E.Enum.ZORDER_TYPE.ZORDER_1) : (this.maskNode.setSiblingIndex(E.Enum.ZORDER_TYPE.ZORDER_low), E.appConfig.getGeneralConfig().multiWindowEnabled && this.maskNode.getSiblingIndex() > E.Enum.ZORDER_TYPE.ZORDER_0 && this.maskNode.setSiblingIndex(E.Enum.ZORDER_TYPE.ZORDER_0)), this.spriteNode = new o, this.spriteNode.addComponent(s), this.spriteNode.addComponent(r), this.spriteNode.getComponent(s).setContentSize(this.maskNode.getComponent(s).contentSize), this.maskNode.addChild(this.spriteNode), this.spriteNode.name = "sprite_node"), this.maskNode.setPosition(t.getPosition()), this.maskNode.setScale(t.scale), this.maskNode.getComponent(s).setContentSize(t.getComponent(s).contentSize.width, t.getComponent(s).contentSize.height), this.maskNode._xurl = i, this.setInternal(t, i, n, l)
        }
        set(t, i, n, a, d, l, h, m, g) {
            if (!t || !t.getParent()) return;
            let p = t.uuid;
            this.CUSTOM_DEFAULT_URL = h, this.mode = d, this.isScale = g, this.maskNode = t.getParent().getChildByName(p + e.HEAD_NAME), this.maskNode || (this.maskNode = new o, this.maskNode.addComponent(s), t.getParent().addChild(this.maskNode), this.maskNode.name = p + e.HEAD_NAME, this.maskNode.getComponent(s).setAnchorPoint(t.getComponent(s).anchorPoint), a ? t.setSiblingIndex(E.Enum.ZORDER_TYPE.ZORDER_0) : (this.maskNode.setSiblingIndex(E.Enum.ZORDER_TYPE.ZORDER_low), E.appConfig.getGeneralConfig().multiWindowEnabled && this.maskNode.getSiblingIndex() > E.Enum.ZORDER_TYPE.ZORDER_0 && this.maskNode.setSiblingIndex(E.Enum.ZORDER_TYPE.ZORDER_0)), this.spriteNode = new o, this.spriteNode.addComponent(s), this.spriteNode.addComponent(r), this.maskNode.addChild(this.spriteNode), this.spriteNode.name = "sprite_node");
            const c = e.addMask(this.maskNode);
            this.maskNode.setPosition(t.getPosition()), this.maskNode.setScale(t.scale), this.maskNode.getComponent(s).setContentSize(t.getComponent(s).contentSize.width, t.getComponent(s).contentSize.height), this.maskNode._xurl = i;
            let C = !0;
            if ("" != i) {
                let e = i.lastIndexOf("/"),
                    t = i.slice(e + 1);
                C = !E.StringTools.isNumber(t)
            }
            C || m || e.destroyMask(c), this.setInternal(t, i, n, l)
        }
        static addMask(e) {
            let t = e.getComponent(m);
            return t || (t = e.addComponent(m), t.type = m.Type.GRAPHICS_ELLIPSE, t.segments = 128), t
        }
        static destroyMask(e) {
            const t = e.getComponent(g);
            e.destroy(), null == t || t.destroy()
        }
        setInternal(e, t, i, n) {
            if (this.maskNode.active = !0, this.nodeSize = e.getComponent(s).contentSize, this.spriteNode = d("sprite_node", this.maskNode), p(this.spriteNode.getComponent(r).spriteFrame) || this.setSpriteByUrl(), "" == t) return void this.setSpriteByUrl();
            let o = t.lastIndexOf("/"),
                a = t.slice(o + 1);
            if (E.StringTools.isNumber(a)) {
                let e = E.Number(a);
                return (e <= 0 || e > E.config.HEAD_LENGTH) && (e = 1), t = this.mode != S.IRREGULAR ? "zh_CN/common/head/head_" + e : "zh_CN/game/cowboy/head/head_" + e, void this.setSpriteByPath(t)
            }
            if (n) {
                t = E.dataHandler.getUserData().getImageUrlByPlat(t, i);
                let e = E.resMgr.get(t, c);
                if (e) {
                    this.isDownload = !0;
                    let t = new h;
                    t.image = e, this.setSpriteByTexture(t)
                } else this.updateSpriteByUrl(t)
            } else this.setSpriteByUrl(t);
            this.setSpriteScale()
        }
        setSpriteByUrl(e = "") {
            "" == e && (e = this.getDefaultUrl(this.mode)), this.setSpriteByPath(e)
        }
        setSpriteByTexture(e) {
            if (E.tools.isValidNode(e) && E.tools.isValidNode(this.spriteNode)) {
                let t = this.spriteNode.getComponent(r);
                const i = new l;
                i.texture = e, t.spriteFrame = i, this.setSpriteScale()
            }
        }
        setSpriteByPath(e) {
            this.spriteNode && p(this.spriteNode, !0) && E.resMgr.setSpriteFrame(this.spriteNode, e, this.setSpriteScale.bind(this))
        }
        setSpriteScale() {
            this.isDownload && this.isScale && this.maskNode.getComponent(s).setContentSize(.95 * this.nodeSize.width, .95 * this.nodeSize.height);
            let t = e.getScaleData(this.maskNode, this.spriteNode);
            this.spriteNode.setScale(t, t)
        }
        updateSpriteByUrl(e) {
            "" != e.substr(e.lastIndexOf("/") + 1) && this.downloadImage(e)
        }
        downloadImage(e) {
            E.resMgr.loadRemote(e, ((t, i) => {
                if (t) return void console.log(t.message || t);
                let n = new h;
                C.isNative && C.os === C.OS.WINDOWS && (n.setFilters(h.Filter.LINEAR, h.Filter.LINEAR), n.setMipFilter(h.Filter.LINEAR), n.setMipRange(1, 5)), n.image = i, E.resMgr.addRemoteHeadRes(e, n);
                let o = e.lastIndexOf("/"),
                    s = e.slice(o + 1),
                    a = this.maskNode._xurl.lastIndexOf("/");
                this.maskNode._xurl.slice(a + 1) == s && (this.isDownload = !0, this.setSpriteByTexture(n))
            }))
        }
        getDefaultUrl(e) {
            if (this.CUSTOM_DEFAULT_URL.length > 0) return this.CUSTOM_DEFAULT_URL;
            let t = this.HEAD_DEFAULT_URL;
            switch (e) {
                case S.CIRCLE:
                    t = this.HEAD_DEFAULT_URL;
                    break;
                case S.CLUB:
                    t = this.CLUB_DEFAULT_URL;
                    break;
                case S.IRREGULAR:
                    t = this.IRREGULAR_DEFAULT_HEAD;
                    break;
                case S.IRREGULAR_CIRCLE:
                    t = this.IRREGULAR_CIRCLE_DEFAULT_HEAD;
                    break;
                default:
                    console.log("Avatar mode error！！！")
            }
            return t
        }
    }).HEAD_NAME = "CircleSprite_mask_head", _.createArr = [], u = _)) || u);
    t._RF.pop()
}