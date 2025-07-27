import * as t from "./cc.js";
import * as n from "./is-thenable.js";

function main() {
    t._RF.push({}, "b80cfF2GG1IU6h6UNKmyikY", "task-group", void 0);
    e("createTaskGroup", (() => {
                    let e, t, r = 0;
                    return {
                        done: () => e,
                        run: s => {
                            const u = s();
                            return n(u) && (1 == ++r && (e = new Promise((e => t = e))), u.finally((() => 0 == --r && t()))), u
                        }