import * as o from "./cc.js";
import * as r from "./CocosCreator3Dumper.js";

function main() {
    o._RF.push({}, "db37c1/r9lOt448La/An1Ax", "Poco", void 0);
    const t = "1.1.0";
    e("default", class {
        constructor(e) {
            this.port = void 0, this.poco = void 0, this.rpc_dispacher = void 0, this.port = e || 5003, this.poco = new r, this.rpc_dispacher = {
                getSDKVersion: function() {
                    return t
                },
                GetSDKVersion: function() {
                    return t
                },
                dump: this.poco.dumpHierarchy,
                Dump: this.poco.dumpHierarchy,
                test: function() {
                    return "test"
                }
            }, this.init_server()
        }
        handle_request(e) {
            var o = {
                    id: e.id,
                    jsonrpc: e.jsonrpc,
                    result: null,
                    error: null
                },
                r = e.method,
                t = this.rpc_dispacher[r];
            if (t) {
                var n = e.params;
                try {
                    var s = t.apply(this.poco, n);
                    o.result = s
                } catch (e) {
                    o.error = {
                        message: e.stack
                    }
                }
            } else o.error = {
                message: 'No such rpc method "' + r + '", reqid: ' + e.id
            };
            return console.log(o), o
        }
        init_server() {
            console.log("try starting wss..");
            var e = this;
            try {
                if ("undefined" == typeof WebSocketServer) return void console.error("WebSocketServer is not enabled!");
                var o = new WebSocketServer;
                o.listen(this.port, (e => {
                    e || console.log("server booted!")
                })), o.onconnection = function(o) {
                    console.log("Network onConnection..."), o.ondata = function(r) {
                        console.log("Network onMessage..."), console.log(r);
                        try {
                            var t = JSON.parse(r),
                                n = e.handle_request(t),
                                s = JSON.stringify(n);
                            o.send(s, (e => {}))
                        } catch (e) {
                            console.log("[Poco] error when handling rpc request. req=" + r + "\nerror message: " + e.stack)
                        }
                    }, o.onclose = function() {
                        console.log("connection gone!")
                    }
                }, o.onclose = function() {
                    console.log("server is closed!")
                }
            } catch (e) {
                console.log(e.stack + "\n" + e.message)
            }
        }
    }), o._RF.pop()
}