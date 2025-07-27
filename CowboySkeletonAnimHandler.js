import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";

function main() {
    var l;
    t._RF.push({}, "480cdE3kbhJfq2bEADJA30d", "CowboySkeletonAnimHandler", void 0);
    const {
        ccclass: s,
        property: a
    } = i;
    class S {
        constructor() {
            this.cowboy = null, this.bull = null
        }
    }
    e("CowboySkeletonAnimHandler", s(l = class extends o {
        constructor(...e) {
            super(...e), this.versusSkeleton = void 0, this.cowboySkeleton = void 0, this.bullSkeleton = void 0
        }
        initVersusSkeletons(e) {
            var t = e.getComponentsInChildren(n.Skeleton);
            this.versusSkeleton = new S, this.versusSkeleton.cowboy = t[0], this.versusSkeleton.bull = t[1]
        }
        initMainCowboySkeleton(e) {
            this.cowboySkeleton = e.getComponent(n.Skeleton)
        }
        initMainBullSkeleton(e) {
            this.bullSkeleton = e.getComponent(n.Skeleton)
        }
        setVersusState() {
            this.versusSkeleton.cowboy.setAnimation(0, "Idle_Variant", !1).animationStart = 1.6;
            this.versusSkeleton.bull.setAnimation(0, "Idle_Variant", !1).animationStart = 1.75
        }
        setMainCowboyIdleState() {
            this.cowboySkeleton.setAnimation(0, "Idle", !0)
        }
        setMainCowboyWinState() {
            this.cowboySkeleton.setMix("Idle", "Win", .1), this.cowboySkeleton.setAnimation(0, "Win", !1), this.cowboySkeleton.addAnimation(0, "Idle", !0, 3.3333001136779785).mixDuration = .2
        }
        setMainCowboyLooseState() {
            this.cowboySkeleton.setMix("Idle", "Lose", .2), this.cowboySkeleton.setAnimation(0, "Lose", !1), this.cowboySkeleton.addAnimation(0, "Idle", !0, 3.3333001136779785).mixDuration = .2
        }
        setMainBullIdleState() {
            this.bullSkeleton.setAnimation(0, "Idle", !0)
        }
        setMainBullWinState() {
            this.bullSkeleton.setMix("Idle", "Win", .1), this.bullSkeleton.setAnimation(0, "Win", !1), this.bullSkeleton.addAnimation(0, "Idle", !0, 3.3333001136779785).mixDuration = .2
        }
        setMainBullLooseState() {
            this.bullSkeleton.setMix("Idle", "Lose", .1), this.bullSkeleton.setAnimation(0, "Lose", !1), this.bullSkeleton.addAnimation(0, "Idle", !0, 3.3333001136779785).mixDuration = .2
        }
    }) || l);
    t._RF.pop()
}