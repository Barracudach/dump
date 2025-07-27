import * as t from "./cc.js";

function main() {
    t._RF.push({}, "1f56crBRX9LdZAdpTVJ/8QH", "MVCController", void 0);
    i("EVENT_VIEW_LOADED", "VIEW_LOADED");
    i("MVCController", class {
        get view() {
            return this._view
        }
        get model() {
            return this._model
        }
        get engineView() {
            return this._engineView
        }
        get customData() {
            return this._customData
        }
        constructor(i, t, e, n) {
            this._view = void 0, this._model = void 0, this._engineView = void 0, this._customData = void 0, this._initialized = !1, this._view = new i, this._model = new t, this.view.emitEvent = this.onViewEvent.bind(this), this._engineView = e, this._customData = n
        }
        init() {
            this._initialized || (this._initialized = !0, this.onInitializeBegin(this._customData), this.view.loadView(this._engineView), this.onInitializeEnded(this._customData), this.view.initView(this.model), this.start())
        }
        onInitializeBegin(i) {}
        onInitializeEnded(i) {}
        start() {}
        destroy() {
            this._customData = null, this._engineView = null
        }
        onViewEvent(i, ...t) {}
        isAttachEngineView(i) {
            var t;
            return !!i && (null == (t = this.view) ? void 0 : t.engineView) == i
        }
    }), t._RF.pop()
}