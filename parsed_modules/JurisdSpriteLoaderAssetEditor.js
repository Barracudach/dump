import * as i from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./AppConfig.js";

function main() {
    e._RF.push({}, "61c2d2J8PZPb7XjR1mtWuMi", "JurisdSpriteLoaderAssetEditor", void 0);
    const n = ["png", "jpg", "jpeg", "prefab"];
    t("JurisdSpriteLoaderAssetEditor", class {
        async loadSpriteFromAssetBundle(t, e, s, n, a) {
            let u = this.getBundleNameSprite(t, e, s),
                d = this.getEditorSpritePathFile(u, s);
            (await Editor.Message.request("asset-db", "query-assets", {
                pattern: d
            })).forEach((function(t) {
                "cc.SpriteFrame" == t.type && i.loadAny({
                    uuid: t.uuid
                }, ((t, e) => {
                    if (t) return r(t.message || t), void(null == a || a(t));
                    null == n || n(e, null)
                }))
            }))
        }
        getBundleNameSprite(t, e, i) {
            if (null == i || "" == i) {
                return s.Instance.getLayoutBundleString(e)
            }
            let n = t + "/" + s.Instance.getLayoutBundleString(e);
            return this.checkExistImageFile(n, i) || r("!!! Should add sprite image file into " + n + " bundle, file path: " + i), n
        }
        checkExistImageFile(t, e) {
            for (const i of n)
                if (this.checkExistFile(t, e, i)) return !0;
            return !1
        }
        async checkExistFile(t, e, i) {
            let r = !1,
                s = this.getEditorSpritePath(t, e) + "." + i;
            return r = null != await Editor.Message.request("asset-db", "query-asset-info", s), r
        }
        getEditorSpritePathFile(t, e) {
            return this.getEditorSpritePath(t, e) + ".*"
        }
        getEditorSpritePath(t, e) {
            let i = "db://assets/bundles/jurisdictions/";
            return i += t + "/" + e, i
        }
    }), e._RF.pop()
}