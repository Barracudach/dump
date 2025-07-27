import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";

function main() {
    var o;
    t._RF.push({}, "7629btlS4tFQ6VecxQQIdPM", "PokerMasterSkeletonAnimHandler", void 0);
    const {
        ccclass: s,
        property: l
    } = i;
    e("PokerMasterSkeletonAnimHandler", s(o = class extends n {
        constructor(...e) {
            super(...e), this.versusSkeleton = void 0, this.aquamanSkeleton = void 0, this.sharkSkeleton = void 0, this.animationDelay = 3.3333001136779785
        }
        initMainAquamanSkeleton(e) {
            this.aquamanSkeleton = e.getComponent(a.Skeleton)
        }
        initMainSharkSkeleton(e) {
            this.sharkSkeleton = e.getComponent(a.Skeleton)
        }
        setMainAquamanIdleState() {
            this.aquamanSkeleton.setAnimation(0, "Idle_Simple", !0)
        }
        setMainAquamanWinState() {
            this.aquamanSkeleton.setMix("Idle_Simple", "Win", .1), this.aquamanSkeleton.setAnimation(0, "Win", !1), this.aquamanSkeleton.addAnimation(0, "Idle_Simple", !0, this.animationDelay).mixDuration = .2
        }
        setMainAquamanLooseState() {
            this.aquamanSkeleton.setMix("Idle_Simple", "Lose", .2), this.aquamanSkeleton.setAnimation(0, "Lose", !1), this.aquamanSkeleton.addAnimation(0, "Idle_Simple", !0, this.animationDelay).mixDuration = .2
        }
        setMainSharkIdleState() {
            this.sharkSkeleton.setAnimation(0, "Idle_Simple", !0)
        }
        setMainSharkWinState() {
            this.sharkSkeleton.setMix("Idle_Simple", "Win", .1), this.sharkSkeleton.setAnimation(0, "Win", !1), this.sharkSkeleton.addAnimation(0, "Idle_Simple", !0, this.animationDelay).mixDuration = .2
        }
        setMainSharkLooseState() {
            this.sharkSkeleton.setMix("Idle_Simple", "Lose", .1), this.sharkSkeleton.setAnimation(0, "Lose", !1), this.sharkSkeleton.addAnimation(0, "Idle_Simple", !0, this.animationDelay).mixDuration = .2
        }
    }) || o);
    t._RF.pop()
}