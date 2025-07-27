import * as i from "./cc.js";

function main() {
    i._RF.push({}, "4b41dGhcqBMar3hUDbokzrI", "MVCView", void 0);
    e("MVCView", class {
        constructor() {
            this.emitEvent = void 0, this.engineView = void 0
        }
        loadView(e) {
            this.engineView = e, this.onAttachedEngineView(e)
        }
        initView(e) {}
        updateView(e) {}
    }), i._RF.pop()
}