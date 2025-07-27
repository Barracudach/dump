import * as o from "./cc.js";

function main() {
    o._RF.push({}, "dcc70X7VSRMO4trgzJ0JvUn", "env", void 0);
    e("detectRuntime", (() => "object" == typeof process && process && "object" == typeof process.env && process.env && "string" == typeof process.version ? "node" : "object" == typeof window ? "browser" : "undefined" != typeof WebSocketPair ? "cloudflare-worker" : "string" == typeof EdgeRuntime ? "vercel-edge" : "undefined" != typeof WorkerGlobalScope && "function" == typeof importScripts ? "web-worker" : "unknown"));
    o._RF.pop()
}