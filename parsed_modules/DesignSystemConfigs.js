import * as t from "./cc.js";
import * as n from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as i from "./AutoConfigNodes.js";
import * as s from "./AutoConfigNodes.js";
import * as l from "./borderGraphic.js";
import * as c from "./borderGraphic.js";
import * as h from "./FontSystem.js";
import * as u from "./FontSystemModel.js";
import * as m from "./FontSystemModel.js";
import * as p from "./ThemeSystem.js";
import * as f from "./ThemeSystemEditBox.js";
import * as S from "./ColorSystemType.js";
import * as y from "./ColorSystemWeight.js";
import * as d from "./ColorSystemTypeOther.js";

function main() {
    e._RF.push({}, "ad8bat6uKZPwaknyAAEI3rc", "DesignSystemConfigs", void 0);
    let g = o("editBoxState", function(o) {
        return o[o.normal = 0] = "normal", o[o.hover = 1] = "hover", o[o.focused = 2] = "focused", o[o.error = 5] = "error", o
    }({}));
    const C = o("editBoxStatesConfig", {
        [g.normal]: {
            "strokesColor.colorScheme": S.Other,
            "strokesColor.colorSchemeOther": d.InputBorderLight,
            "fillColor.colorScheme": S.Other,
            "fillColor.colorSchemeOther": d.LightBG_Light
        },
        [g.hover]: {
            "strokesColor.colorScheme": S.Other,
            "strokesColor.colorSchemeOther": d.InputBorderHover
        },
        [g.focused]: {
            "strokesColor.colorScheme": S.Gold,
            "strokesColor.colorWeight": y.W400
        },
        [g.error]: {
            "strokesColor.colorScheme": S.Other,
            "strokesColor.colorSchemeOther": d.FailedIcon
        }
    });
    let a = function(o) {
        return o ? 3 : 2
    };
    o("editBoxStateConfig", (function(o, e, n) {
            return {
                [s]: [p, t],
                [i]: [{
                    type: r,
                    props: {
                        isAlignTop: !0,
                        top: 0,
                        isAlignRight: !0,
                        right: 0,
                        isAlignBottom: !0,
                        bottom: 0,
                        isAlignLeft: !0,
                        left: 0
                    }
                }, {
                    type: c,
                    props: Object.assign({
                        borderLineWidth: 1 * a(o),
                        borderRoundRadius: 6 * a(o),
                        enabledStrokeColor: !0,
                        borderDir: l.Inside
                    }, C[n])
                }]
            }
        })), o("editBoxConfig", (function(o) {
                    return {
                        [i]: [{
                            type: f
                        }, {
                            type: n,
                            props: {
                                height: 19 * a(o)
                            }
                        }],
                        background: {
                            [i]: [{
                                type: p
                            }]
                        },
                        textLabel: {
                            [i]: [{
                                type: h,
                                props: {
                                    fontWeight: m.Custom,
                                    fontCustomWeight: u.W500,
                                    fontSize: 15 * a(o)
                                }
                            }, {
                                type: p,
                                props: {
                                    colorScheme: S.Other,
                                    colorSchemeOther: d.TypoGraphyMain
                                }
                            }]
                        },
                        placeholderLabel: {
                            [i]: [{
                                type: h,
                                props: {
                                    fontWeight: m.Custom,
                                    fontCustomWeight: u.W400,
                                    fontSize: 15 * a(o)
                                }
                            }, {
                                type: p,
                                props: {
                                    colorScheme: S.Other,
                                    colorSchemeOther: d.TypoGraphySecond
                                }
                            }]
                        }