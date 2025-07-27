import * as t from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as n from "./AbstractDumper.js";
import * as o from "./CocosCreator3Node.js";

function main() {
    c._RF.push({}, "f1311rE5WpMd5pLHOZ+d16L", "CocosCreator3Dumper", void 0);
    e("default", class extends n {
        getRoot() {
            const e = t.getScene(),
                c = r.instance.getVisibleSize();
            return o.screenHeight = c.height, o.screenWidth = c.width, new o(e)
        }
    }), c._RF.pop()
}