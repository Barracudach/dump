import * as n from "./cc.js";
import * as t from "./Enum.js";
import * as i from "./Enum.js";
import * as W from "./Enum.js";
import * as T from "./Enum.js";
import * as o from "./Enum.js";
import * as mod2 from "./Asia.js";
import * as e from "./WPTO.js";
import * as a from "./WPTG.js";
import * as mod5 from "./WPTGMX.js";
import * as mod6 from "./WPTGMXStore.js";
import * as mod7 from "./WPTGBRStore.js";
import * as mod8 from "./WPTGROWStore.js";
import * as mod9 from "./WPTGPH.js";
import * as mod10 from "./WPTGO.js";

function main() {
    n._RF.push({}, "5321e9JKtJKUJz7Klc+nDL4", "DefaultConfig", void 0);
    W.Asia, o.PKW, i.NONE, T.Debug, t.PKWDesktop, W.Asia, o.PKW, i.NONE, T.Debug, t.H5, W.WPTO, o.WPTO, i.WPTO, T.Debug, t.WPTO;
    let c = {
            jurisdiction: W.WPTO,
            appBrand: o.WPTO,
            appClone: i.WPTO,
            baseConfig: e,
            layoutUse: "landscape",
            buildVariant: T.Debug,
            clientType: t.WPTO,
            appTitle: "WPT Online",
            isWebApp: !1,
            enablePocoSDK: !1
        },
        u = (W.WPTG, o.WPTO, i.WPTG, T.Debug, t.WPTO, {
            jurisdiction: W.WPTG,
            appBrand: o.WPTO,
            appClone: i.WPTG,
            baseConfig: a,
            layoutUse: "landscape",
            buildVariant: T.Production,
            clientType: t.WPTO,
            appTitle: "WPT Global",
            isWebApp: !1,
            enablePocoSDK: !1
        }),
        O = (W.WPTGMX, o.WPTO, i.WPTG, T.Staging, t.WPTO, W.WPTGBRStore, o.WPTO, i.WPTG, T.Production, t.WPTO, W.WPTGMXStore, o.WPTO, i.WPTG, T.Production, t.WPTO, W.WPTGROWStore, o.WPTO, i.WPTG, T.Production, t.WPTO, W.WPTGPH, o.WPTO, i.WPTGPH, T.Production, t.WPTO, W.WPTGPH, o.WPTO, i.WPTGPH, T.Production, t.WPTO, W.WPTGO, o.WPTO, i.WPTGO, T.Production, t.WPTO, W.WPTGO, o.WPTO, i.WPTGO, T.Production, t.WPTO, P("DefaultConfig", c));
    O = P("DefaultConfig", u), n._RF.pop()
}