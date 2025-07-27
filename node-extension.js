import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";

function main() {
    e._RF.push({}, "cee0cUqG8RDt56U5CytM9zP", "node-extension", void 0);
    t("NodeExtension", class {
        static addOrGetComponent(t, e) {
            let n = t.getComponent(e);
            return n || (n = t.addComponent(e)), n
        }
    }), n.prototype.addOrGetComponent = function(t) {
        let e = this.getComponent(t);
        return e || (e = this.addComponent(t)), e
    }, n.prototype.convertToNodeSpaceAR = function(t, e) {
        return this.addOrGetComponent(o).convertToNodeSpaceAR(t, e)
    }, n.prototype.convertToWorldSpaceAR = function(t, e) {
        return this.addOrGetComponent(o).convertToWorldSpaceAR(t, e)
    }, n.prototype.getContentSize = function() {
        let t = this.getComponent(o);
        if (t) return t.contentSize;
        new r(0, 0)
    }, n.prototype.setContentSize = function(t, e) {
        let n = this.addOrGetComponent(o);
        t instanceof r ? n.setContentSize(t) : n.setContentSize(t, e)
    }, e._RF.pop()
}