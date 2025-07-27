import * as t from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./DialogBox.js";

function main() {
    l._RF.push({}, "f06bbSeKeZPmKz2flA4Tauq", "DialogBoxController", void 0);
    i("default", class {
        constructor(i, o, l, s) {
            this.node = null, this.dialogScripts = [], this.currentDialog = null, this.dialogPrefab = null, this.dialogLayer = null, this.onHideAllDialogAction = null, this.dialogStyle = 0, this.onHideDialogBox = i => {
                if (i && this.dialogScripts && t(this.node)) {
                    let t = this.dialogScripts.indexOf(i);
                    t >= 0 && t < this.dialogScripts.length && this.dialogScripts.splice(t, 1)
                }
            }, this.node = i, this.dialogPrefab = o, this.dialogLayer = l, this.onHideAllDialogAction = s
        }
        getDialogBoxByKey(i) {
            let t = this.getDialogBoxIndexByKey(i);
            return t >= 0 ? this.dialogScripts[t] : null
        }
        getDialogBoxIndexByKey(i) {
            if (this.dialogScripts && i)
                for (let o = 0; o < this.dialogScripts.length; o++)
                    if (this.dialogScripts[o] && t(this.dialogScripts[o].node) && this.dialogScripts[o].dialogKey == i) return o;
            return -1
        }
        getDialogBoxIndex(i) {
            if (this.dialogScripts && i)
                for (let o = 0; o < this.dialogScripts.length; o++)
                    if (this.dialogScripts[o] && t(this.dialogScripts[o].node) && this.dialogScripts[o] == i) return o;
            return -1
        }
        add(i) {
            this.dialogScripts.push(i)
        }
        remove(i) {
            let t = this.getDialogBoxIndex(i);
            t >= 0 && this.dialogScripts.splice(t, 1)
        }
        showDialogBox(i, l, e, a, g = this.dialogLayer, r = null, n = "") {
            if (n && this.getDialogBoxByKey(n)) return void cc_mtt.vv.ConsoleLog.log("showDialogBox: same dialog with key exists", n);
            for (let o = 0; o < this.dialogScripts.length; o++) {
                const s = this.dialogScripts[o];
                if (s && t(s.node) && !(s.titleForPopup != i && (s.titleForPopup || i) || s.titleForPopupContent != l && (s.titleForPopupContent || l) || s.node.parent != g || s.dialogKey != n)) return void cc_mtt.vv.ConsoleLog.log("showDialogBox: dialog with same title or content already exists")
            }
            let d = o(this.dialogPrefab),
                h = d.getComponent(s);
            d.parent = g, cc_mtt.vv.DataManager.popUps.push(d), h.show(i, l, e, a, n, this), this.currentDialog = h, r && r instanceof Function && r()
        }
        removeEmptyDialogScript() {
            let i = 0;
            for (; i < this.dialogScripts.length;) this.dialogScripts[i] && t(this.dialogScripts[i].node) ? i++ : this.dialogScripts.splice(i, 1)
        }
        hideDialogBox(i = "") {
            let t = 0;
            for (; t < this.dialogScripts.length;) !this.dialogScripts[t] || i && this.dialogScripts[t].dialogKey != i ? t++ : this.dialogScripts[t].hide()
        }
        hideAllDialogBox() {
            let i = 0;
            for (; i < this.dialogScripts.length;) this.dialogScripts[i] && this.dialogScripts[i].hide(), i++;
            this.onHideAllDialogAction && this.onHideAllDialogAction instanceof Function && this.onHideAllDialogAction()
        }
    }), l._RF.pop()
}