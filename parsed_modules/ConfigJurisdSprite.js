import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./JurisdLoader.js";
import * as u from "./ConfigJurisdBase.js";

function main() {
    var l;
    t._RF.push({}, "42abbnGcThG8KkvegnA+/TB", "ConfigJurisdSprite", void 0);
    const {
        ccclass: p,
        disallowMultiple: d,
        menu: h,
        requireComponent: c
    } = n;
    e("ConfigJurisdSprite", p(l = d(l = h("Custom UI/Config Jurisdiction Sprite")(l = c(i)(l = class extends u {
        constructor(...e) {
            super(...e), this._sprite = null, this.spriteFromJurisdLoader = void 0, this.fileType = s
        }
        set sprite(e) {
            this._sprite = e
        }
        get sprite() {
            return this._sprite = this.getComponent(i), this._sprite
        }
        onLoad() {
            this.reload()
        }
        async updateFilePath() {
            let e = await a.getJurisdSpriteRelativePath(this.sprite.spriteFrame, this.useCommonBundle, this.filePath);
            null == e ? (r("Do not use reference from Bundles"), this.clearPreview()) : this.filePath = e
        }
        update() {}
        setSprite(e) {
            this.sprite.spriteFrame = e
        }
        reload() {
            r("@@@@ reload", this.name, this.sprite.enabled), this.sprite.enabled && super.reload()
        }
        loadBundle(e) {
            let t = this;
            a.loadJurisdSprite(e, this.filePath, ((e, i) => {
                o(t, !0) ? (e && t.setSprite(e), t.bundle = i) : console.log("ConfigJurisdSprite was destroyed")
            }))
        }
        clearPreview() {
            return !!this.sprite.spriteFrame && (this.sprite.spriteFrame = null, !0)
        }
    }) || l) || l) || l) || l);
    t._RF.pop()
}