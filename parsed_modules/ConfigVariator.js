import * as t from "./cc.js";
import * as e from "./cc.js";
import * as i from "./cv.js";
import * as r from "./ObjUtils.js";

function main() {
    t._RF.push({}, "8e398VxXN1JerRalnAouIRL", "ConfigVariator", void 0);
    a("ConfigVariator", class {
        constructor(a, t, e) {
            this.variableConfigs = [], this.variatorsApplied = {}, this.defaultConfigValues = {}, a && (this.variableConfigs = a.filter((a => a.layout.includes(t))), this.getDefaultsFromBaseConfig(e))
        }
        disableConfigVariation() {
            this.variableConfigs.forEach((a => {
                this.setVariantTargetValue(a.variantTarget, a.variantPath, this.getDefaultConfigValue(a.variantTarget, a.variantPath))
            }))
        }
        setConfigVariant(a, t) {
            this.variatorsApplied[a] = t, this.variableConfigs.forEach((a => {
                this.executeVariableConfig(a)
            }))
        }
        executeVariableConfig(a) {
            for (const t of a.variants)
                if (this.executeVariant(t, a.variantTarget, a.variantPath)) return;
            this.setVariantTargetValue(a.variantTarget, a.variantPath, this.getDefaultConfigValue(a.variantTarget, a.variantPath))
        }
        executeVariant(a, t, e) {
            let i = a.variantsList;
            for (const a in i)
                if (i.hasOwnProperty(a) && (null == this.variatorsApplied[a] || this.variatorsApplied[a] !== i[a])) return !1;
            return this.setVariantTargetValue(t, e, a.variantValue), !0
        }
        setVariantTargetValue(a, t, e) {
            "function" == typeof e ? r.traverseObjSet(i.appConfig.baseConfig[a], t, e()) : r.traverseObjSet(i.appConfig.baseConfig[a], t, e)
        }
        getDefaultsFromBaseConfig(a) {
            this.variableConfigs.forEach((t => {
                this.defaultConfigValues[t.variantTarget] || (this.defaultConfigValues[t.variantTarget] = {});
                let e = r.traverseObjGet(a[t.variantTarget], t.variantPath);
                r.traverseObjSet(this.defaultConfigValues[t.variantTarget], t.variantPath, e)
            }))
        }
        getDefaultConfigValue(a, t) {
            let i = r.traverseObjGet(this.defaultConfigValues[a], t);
            return null != i ? i : (e(`No configuration found for target "${a}" and path "${t}"`), null)
        }
    }), t._RF.pop()
}