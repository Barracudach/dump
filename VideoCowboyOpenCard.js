import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./VideoCowboyManager.js";
import * as C from "./CowboyCard.js";
import * as g from "./cv.js";
import * as y from "./GroupLabel.js";
import * as c from "./TweenControl.js";

function main() {
    var T, u, b, v;
    a._RF.push({}, "8893bDMBVRLYr+smCQ7XeOe", "VideoCowboyOpenCard", void 0);
    const {
        ccclass: m,
        property: S
    } = d;
    e("default", (T = S(r), m((v = t((b = class extends s {
        constructor(...e) {
            super(...e), i(this, "resultCardTypePrefab", v, this), this._panel = null, this._card = [], this._isNormal = !1, this._redCardType = null, this._blueCardType = null, this._redCardTypeBg = null, this._blueCardTypeBg = null, this._redCardTypeWinNode = null, this._redCardTypeLoseNode = null, this._blueCardTypeWinNode = null, this._blueCardTypeLoseNode = null
        }
        onLoad() {
            g.resMgr.adaptWidget(this.node, !0), this._panel = this.node.getChildByName("Panel_1"), this._panel.active = !1;
            for (let e = 0; e < 9; e++) {
                let t = this._panel.getChildByName(g.StringTools.formatC("card_%d", e)),
                    i = C.create();
                i.ResetFromNode(t), i.node.setPosition(t.getPosition().x, t.getPosition().y - 1), i.node.active = !1, this._card.push(i), t.active = !0
            }
            this._redCardType = this._panel.getChildByName("card_type_0"), this._blueCardType = this._panel.getChildByName("card_type_1"), this._redCardTypeBg = this._panel.getChildByName("card_type_bg_0"), this._blueCardTypeBg = this._panel.getChildByName("card_type_bg_1"), this._redCardTypeBg.setSiblingIndex(this._panel.children.length - 4), this._blueCardTypeBg.setSiblingIndex(this._panel.children.length - 3), this._redCardType.setSiblingIndex(this._panel.children.length - 2), this._blueCardType.setSiblingIndex(this._panel.children.length - 1);
            const e = o(this.resultCardTypePrefab);
            this._redCardType.addChild(e), this._redCardTypeWinNode = e.getChildByName("win_card_type").getComponent(y), this._redCardTypeLoseNode = e.getChildByName("lose_card_type").getComponent(y);
            const t = o(this.resultCardTypePrefab);
            this._blueCardType.addChild(t), this._blueCardTypeWinNode = t.getChildByName("win_card_type").getComponent(y), this._blueCardTypeLoseNode = t.getChildByName("lose_card_type").getComponent(y), g.MessageCenter.register(g.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node), this.onChangeLanguage()
        }
        start() {
            if (g.config.IS_IPHONEX_SCREEN) {
                let e = this._panel.getContentSize();
                this._panel.addOrGetComponent(n).setContentSize(new l(e.width + g.viewAdaptive.IPHONEX_OFFSETY, e.height)), this._panel.getChildByName("background").addOrGetComponent(n).setContentSize(new l(e.width + g.viewAdaptive.IPHONEX_OFFSETY, e.height))
            }
        }
        reset() {
            if (c.stopAll(this._panel), !this._isNormal) {
                for (let e = 0; e < 9; e++) this._card[e].node.active = !1, this._card[e].showCard(!1), this._card[e].Gray(!1);
                return this._panel.active = !1, this._redCardType.active = !1, this._blueCardType.active = !1, this._redCardTypeBg.active = !1, void(this._blueCardTypeBg.active = !1)
            }
            this._isNormal = !1, console.error("-------------------------------------reset---------------------------------------------------\x3e"), c.moveTo(this._panel, .4, h(0, this._panel.getPosition().y, 0), null, null, (() => {
                for (let e = 0; e < 9; e++) this._card[e].node.active = !1, this._card[e].showCard(!1), this._card[e].Gray(!1);
                this._panel.active = !1, this._redCardType.active = !1, this._blueCardType.active = !1, this._redCardTypeBg.active = !1, this._blueCardTypeBg.active = !1
            }))
        }
        setMode(e) {
            this._isNormal = e
        }
        showCardNotify(e) {
            if (this.setMode(e), p.getVideoCowboyRoom().openCardData.forEach(((e, t, i) => {
                    this._card[e - 1].node.active || (this._card[e - 1].SetContent(t.number, t.suit), this._card[e - 1].showCard(!0))
                })), this._isNormal ? this._isNormal = !1 : (this._panel.setPosition(this._panel.getContentSize().width, this._panel.position.y), this._panel.active = !0), this._panel.active)
                for (let e = 0; e < 9; e++) this._card[e].node.active || this._card[e].getCardBack().node.active || (this._card[e].node.active = !0);
            else this._panel.setPosition(0, this._panel.position.y), console.error("-------------------------------------showCardNotify---------------------------------------------------\x3e ", this._panel.getContentSize().width, "---\x3e", this._panel.position.y), this._panel.active = !0, c.moveTo(this._panel, .4, h(this._panel.getContentSize().width, this._panel.getPosition().y, 0), null, null, (() => {
                for (let e = 0; e < 9; e++) this._card[e].node.active || this._card[e].getCardBack().node.active || (this._card[e].node.active = !0)
            }))
        }
        updateWinCards() {
            for (let e = 0; e < 9; e++) this._card[e].Gray(!0);
            let e = p.getVideoCowboyRoom().winCards.length;
            for (let t = 0; t < e; t++) {
                let e = p.getVideoCowboyRoom().winCards[t];
                for (let t = 0; t < 9; t++)
                    if (this._card[t].GetNumber() == e.number && this._card[t].GetSuit() == e.suit) {
                        this._card[t].Gray(!1);
                        break
                    }
            }
        }
        updateCardType() {
            this._redCardType.active = !0, this._blueCardType.active = !0, this._redCardTypeBg.active = !0, this._blueCardTypeBg.active = !0;
            const e = p.getVideoCowboyRoom().redLevel,
                t = p.getVideoCowboyRoom().blueLevel;
            0 == p.getVideoCowboyRoom().result ? (this.setSpriteFrame(this._redCardTypeBg, "game_dznz_PLIST", "win_cardtype_bg"), this.setSpriteFrame(this._blueCardTypeBg, "game_dznz_PLIST", "win_cardtype_bg"), this._redCardTypeWinNode.node.active = !0, this._redCardTypeWinNode.setString(this.getCardTypeString(e)), this._blueCardTypeWinNode.node.active = !0, this._blueCardTypeWinNode.setString(this.getCardTypeString(t))) : 1 == p.getVideoCowboyRoom().result ? (this.setSpriteFrame(this._redCardTypeBg, "game_dznz_PLIST", "win_cardtype_bg"), this.setSpriteFrame(this._blueCardTypeBg, "game_dznz_PLIST", "lose_cardtype_bg"), this._redCardTypeWinNode.node.active = !0, this._redCardTypeWinNode.setString(this.getCardTypeString(e)), this._blueCardTypeLoseNode.node.active = !0, this._blueCardTypeLoseNode.setString(this.getCardTypeString(t))) : -1 == p.getVideoCowboyRoom().result && (this.setSpriteFrame(this._redCardTypeBg, "game_dznz_PLIST", "lose_cardtype_bg"), this.setSpriteFrame(this._blueCardTypeBg, "game_dznz_PLIST", "win_cardtype_bg"), this._redCardTypeLoseNode.node.active = !0, this._redCardTypeLoseNode.setString(this.getCardTypeString(e)), this._blueCardTypeWinNode.node.active = !0, this._blueCardTypeWinNode.setString(this.getCardTypeString(t)))
        }
        setSpriteFrame(e, t, i) {
            p.loadSpriteTextureByPlist(p.getPlistAtlas(t), e.getComponent(_), i)
        }
        onChangeLanguage() {
            this.updateCardTypeText()
        }
        onDestroy() {
            g.MessageCenter.unregister(g.config.CHANGE_LANGUAGE, this.node)
        }
        updateCardTypeText() {
            const e = p.getVideoCowboyRoom().redLevel,
                t = p.getVideoCowboyRoom().blueLevel,
                i = p.getVideoCowboyRoom().result;
            var a, r;
            if (0 == i) null == (a = this._redCardTypeWinNode) || a.setString(this.getCardTypeString(e)), null == (r = this._blueCardTypeWinNode) || r.setString(this.getCardTypeString(t));
            else if (1 == i) {
                var d, s;
                null == (d = this._redCardTypeWinNode) || d.setString(this.getCardTypeString(e)), null == (s = this._blueCardTypeLoseNode) || s.setString(this.getCardTypeString(t))
            } else if (-1 == i) {
                var o, n;
                null == (o = this._redCardTypeLoseNode) || o.setString(this.getCardTypeString(e)), null == (n = this._blueCardTypeWinNode) || n.setString(this.getCardTypeString(t))
            }
        }
        getCardTypeString(e) {
            let t = "";
            switch (e) {
                case 1:
                    t = "M_UITitle113";
                    break;
                case 2:
                    t = "M_UITitle114";
                    break;
                case 3:
                    t = "M_UITitle115";
                    break;
                case 4:
                    t = "Cowboy_three_of_a_kind_text";
                    break;
                case 5:
                    t = "M_UITitle117";
                    break;
                case 6:
                    t = "M_UITitle118";
                    break;
                case 7:
                    t = "M_UITitle119";
                    break;
                case 8:
                    t = "Cowboy_quads_text";
                    break;
                case 9:
                    t = "M_UITitle121";
                    break;
                case 10:
                    t = "M_UITitle122"
            }
            return g.config.getStringData(t)
        }
        hideAllCardsAndCardType() {
            this._redCardType.active = !1, this._blueCardType.active = !1, this._redCardTypeBg.active = !1, this._blueCardTypeBg.active = !1, this._blueCardTypeWinNode.node.active = !1, this._blueCardTypeLoseNode.node.active = !1, this._redCardTypeWinNode.node.active = !1, this._redCardTypeLoseNode.node.active = !1
        }
    }).prototype, "resultCardTypePrefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = b)) || u));
    a._RF.pop()
}