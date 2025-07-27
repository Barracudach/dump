import * as r from "./cc.js";
import * as t from "./JurisdSpriteLoaderAssetEditor.js";
import * as s from "./JurisdSpriteLoaderAssetBundle.js";

function main() {
    r._RF.push({}, "3685eo+0wJF4pFv0tNLVcIg", "JurisdSpriteLoader", void 0);
    class d {
        loadSpriteFromAssetBundle(e, r, t, s, d) {
            return this.factoryMethod().loadSpriteFromAssetBundle(e, r, t, s, d)
        }
        getBundleNameSprite(e, r, t) {
            return this.factoryMethod().getBundleNameSprite(e, r, t)
        }
    }
    e("CreatorJurisdSpriteLoader", d);
    e("CreatorJurisdSpriteLoaderAssetBundle", class extends d {
        factoryMethod() {
            return new s
        }
    });
    e("CreatorJurisdSpriteLoaderAssetEditor", class extends d {
        factoryMethod() {
            return new t
        }
    }), r._RF.pop()
}