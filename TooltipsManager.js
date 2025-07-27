import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./CommonTools.js";
import * as P from "./cv.js";
import * as w from "./TooltipsHandler.js";
import * as S from "./TooltipsHandler.js";
import * as C from "./TooltipsHandler.js";

function main() {
    var b, y;
    e._RF.push({}, "5a08azzfztJ2rv7xHyJyhJe", "TooltipsManager", void 0);
    const {
        ccclass: v,
        property: m
    } = o;
    class N {
        constructor() {
            this.targetNode = void 0, this.fieldValidator = null, this.position = void 0, this.gap = void 0, this.title = void 0, this.content = void 0, this.type = void 0, this.maxTooltipWidth = 500, this.skinType = w.Default, this.paddingX = void 0, this.anchorPosLeft = void 0, this.anchorPosRight = void 0, this.anchorPosMiddle = void 0, this.fontSizeContent = 24, this.lineHeightContent = 32
        }
        setFieldValidator(t) {
            return this.fieldValidator = t, this
        }
        setPosition(t) {
            return this.position = t, this
        }
        setGap(t) {
            return this.gap = t, this
        }
        setTitle(t) {
            return this.title = t, this
        }
        setContent(t) {
            return this.content = t, this
        }
        setType(t) {
            return this.type = t, this
        }
        setMaxTooltipWidth(t) {
            return this.maxTooltipWidth = t, this
        }
        setSkinType(t) {
            return this.skinType = t, this
        }
        setPaddingX(t) {
            return this.paddingX = t, this
        }
        setFontSizeContent(t) {
            return this.fontSizeContent = t, this
        }
        setLineHeightContent(t) {
            return this.lineHeightContent = t, this
        }
        setTargetNode(t) {
            return this.targetNode = t, this
        }
        setAnchorPosLeft(t) {
            return this.anchorPosLeft = t, this
        }
        setAnchorPosRight(t) {
            return this.anchorPosRight = t, this
        }
        setAnchorPosMiddle(t) {
            return this.anchorPosMiddle = t, this
        }
    }
    t("TooltipParams", N);
    t("default", v(((y = class t extends i {
        constructor(...t) {
            super(...t), this.tooltipPrefab = null, this.forceTooltipPrefabForNextInstantiate = null, this.nodePool = null, this.containerNode = null, this._listShowedTooltips = [], this._lastShownTooltipData = null
        }
        static getInstance() {
            return null !== this.instance && void 0 !== this.instance || (t.instance = new t, t.instance.init()), t.instance
        }
        init() {
            let t = n.getBundle(P.appConfig.layoutUse);
            t ? this.onBundleLoaded(null, t) : n.loadBundle(P.appConfig.layoutUse, this.onBundleLoaded.bind(this)), this.nodePool = new s
        }
        onBundleLoaded(t, e) {
            t ? l(t.message || t) : e.load("prefabs/Tooltips", a, function(t, e) {
                t ? l(t.message || t) : this.tooltipPrefab = e
            }.bind(this))
        }
        static showToolTipsForFieldValidatorAt(t, e, o, i, n = new h(18.5), s = C.PointerLeft) {
            if (!this.instance || !this.instance.nodePool) return;
            let l = P.appConfig.isLandscapeLayout ? 500 : r.getVisibleSize().width - 100;
            const a = (new N).setFieldValidator(t).setPosition(e).setGap(n).setTitle(o).setContent(i).setType(s).setMaxTooltipWidth(l).setSkinType(w.Default);
            this.instance.showToolTips(a)
        }
        registerPopupEvent() {
            P.MessageCenter.register(P.Enum.MessageCenterAction.onDisablePopUpMsg, this.showTooltipOnPopupClose.bind(this), this), P.MessageCenter.register(P.Enum.MessageCenterAction.onOpenPopUpMsg, this.hideTooltipOnPopupOpen.bind(this), this)
        }
        unRegisterPopupEvent() {
            P.MessageCenter.unregister(P.Enum.MessageCenterAction.onDisablePopUpMsg, this), P.MessageCenter.unregister(P.Enum.MessageCenterAction.onOpenPopUpMsg, this)
        }
        hideTooltipOnPopupOpen() {
            t.hideAllTooltips()
        }
        showTooltipOnPopupClose() {
            var e;
            (null == (e = this._lastShownTooltipData) ? void 0 : e.popupIndex) == P.tools.visiblePopupCount && this._lastShownTooltipData.fieldValidator && t.showToolTipsForFieldValidator(this._lastShownTooltipData.fieldValidator, this._lastShownTooltipData.title, this._lastShownTooltipData.content, this._lastShownTooltipData.gap, this._lastShownTooltipData.type)
        }
        static showToolTips(e, o, i, n = new h(18.5), s = C.PointerLeft, l = 0, a = w.Default, d, c = 24, u = 32) {
            if (!this.instance || !this.instance.nodePool) return;
            l <= 0 && (l = P.appConfig.isLandscapeLayout ? 500 : r.getVisibleSize().width - 100), d && (t.targetNodeSize = d.getComponent(p).contentSize);
            const T = (new N).setPosition(e).setGap(n).setTitle(o).setContent(i).setType(s).setMaxTooltipWidth(l).setSkinType(a).setTargetNode(d).setFontSizeContent(c).setLineHeightContent(u);
            this.instance.showToolTips(T)
        }
        static showToolTipsForFieldValidator(e, o, i, n = new h(18.5), s = C.PointerLeft) {
            if (e.showOrHideErrorToolTipText(!0, i)) return;
            if (!this.instance || !this.instance.nodePool) return;
            const l = e.getInvalidFieldNode();
            let a = s;
            if (!P.appConfig.isLandscapeLayout) {
                let t = l.getPosition();
                t = l.parent.getComponent(p).convertToWorldSpaceAR(t), a = C.PointerLeft
            }
            const r = l.getComponent(p).contentSize,
                d = l.getComponent(p).anchorPoint,
                c = this.instance.getToolTipPosition(r, d, a),
                u = l.getComponent(p).convertToWorldSpaceAR(c);
            t.targetNodeSize = r, this.showToolTipsForFieldValidatorAt(e, u, o, i, n, a)
        }
        getToolTipPosition(t, e, o = C.PointerLeft) {
            let i;
            if (P.appConfig.isLandscapeLayout) i = new h(t.width * (1 - e.x), t.height * (.5 - e.y));
            else switch (o) {
                case C.PointerDown:
                    i = new h(t.width * (.5 - e.x), t.height * (1 - e.y));
                    break;
                default:
                    i = new h(t.width * (.5 - e.x), t.height * (0 - e.y))
            }
            return i
        }
        get getLastShownTooltipData() {
            return this._lastShownTooltipData
        }
        static isAnyTooltipsShowed() {
            return !!this.getInstance() && this.getInstance().isAnyTooltipsShowed()
        }
        isAnyTooltipsShowed() {
            return this._listShowedTooltips.length > 0
        }
        static hideAllTooltips() {
            this.getInstance() && this.getInstance().executeHideAllTooltips()
        }
        executeHideAllTooltips() {
            for (; this._listShowedTooltips.length > 0;) {
                let t = this._listShowedTooltips[0];
                if (d(t, !0)) {
                    let e = null == t ? void 0 : t.getComponent(S);
                    e ? e.bindedFieldValidator && e.bindedFieldValidator.onDisableCallback ? e.bindedFieldValidator.onDisableCallback() : e.hideNode() : this._listShowedTooltips.splice(0, 1)
                } else this._listShowedTooltips.splice(0, 1)
            }
        }
        showToolTips(t) {
            this.registerPopupEvent();
            const e = this.getTooltipsNode(t.targetNode);
            if (null == e) return void l("Can not load a new tooltips node");
            this._lastShownTooltipData = {
                position: t.position,
                gap: t.gap,
                title: t.title,
                content: t.content,
                type: t.type,
                fieldValidator: t.fieldValidator,
                maxTooltipWidth: t.maxTooltipWidth,
                skinType: t.skinType,
                targetNode: t.targetNode,
                popupIndex: P.tools.visiblePopupCount,
                lineHeightContent: t.lineHeightContent
            }, e.active = !0;
            let o = e.getComponent(S);
            if (null == o) return void l("Can not get TooltipsHandler");
            o.showToolTips(t);
            let i = !1;
            for (let t = 0; t < this._listShowedTooltips.length; t++) {
                if (this._listShowedTooltips[t] === e) {
                    i = !0;
                    break
                }
            }
            i || this._listShowedTooltips.push(e)
        }
        onTooltipsDisable(t) {
            this.nodePool.put(t);
            for (let e = 0; e < this._listShowedTooltips.length; e++) {
                if (this._listShowedTooltips[e] === t) {
                    this.unRegisterPopupEvent(), this._listShowedTooltips.splice(e, 1);
                    break
                }
            }
        }
        getTooltipsNode(t) {
            let e, o = null;
            o = t ? f.instance.getParentScene(c, t) : c.getScene();
            let i = o.getComponentInChildren(u).node;
            if (null == i.getChildByName("TooltipContainer") ? (this.containerNode = new T("TooltipContainer"), this.containerNode.addComponent(p), this.containerNode.setParent(i)) : this.containerNode = i.getChildByName("TooltipContainer"), this.containerNode.setSiblingIndex(-1), this.nodePool.size() > 0) e = this.nodePool.get(), e.setParent(this.containerNode);
            else {
                if (!this.tooltipPrefab) return l("Can not load tooltip prefab"), null;
                if (e = g(this.forceTooltipPrefabForNextInstantiate || this.tooltipPrefab), this.forceTooltipPrefabForNextInstantiate = null, !e) return l("Can not instantiate tooltip prefab"), null;
                e.setParent(this.containerNode), e.setSiblingIndex(P.Enum.ZORDER_TYPE.ZORDER_SHADER);
                let t = e.getComponent(S);
                if (null == t) return l("Can not get TooltipsHandler"), e;
                t.onDisableCallback = this.onTooltipsDisable.bind(this)
            }
            return e
        }
    }).instance = void 0, y.targetNodeSize = null, b = y)) || b);
    e._RF.pop()
}