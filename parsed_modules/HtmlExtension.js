import * as t from "./cc.js";
import * as r from "./cv.js";

function main() {
    t._RF.push({}, "1ab1d+GshNIQoSQUfPKqhxC", "HtmlExtension", void 0);
    class i {
        static toRichText(e, t = 42) {
            if (e) {
                let r = Math.round(1.29 * t);
                0 == (e = (e = e.replace(/<h1[^>]*>/gi, "<br/><size=" + r + "><b>")).replace(/<\/h1>/gi, "</b></size><br/>")).indexOf("<br/>") && (e = e.substring(5)), e = (e = e.replace(/(<\/h[1-6]>|<\/p>|<\/li>)(<h[1-6]|<p|<li)/gi, "$1\n$2")).replace(/(<span[^>]*>|<\/span>|<li[^>]*>|<\/li>|<ol[^>]*>|<\/ol>|<ul[^>]*>|<\/ul>|<p[^>]*>|<\/p>)/gi, "")
            }
            return e
        }
        static toRichTextArray(e, t = 42) {
            return (e = i.toRichText(e, t)).split("\n")
        }
        static extractImageUrlInWebpage(e, t) {
            return new Promise(((n, a) => {
                let s = new XMLHttpRequest;
                s.onreadystatechange = function() {
                    if (4 == s.readyState) {
                        if (s.status >= 200 && s.status < 400) {
                            let e = s.responseText,
                                l = (new DOMParser).parseFromString(e, "text/html").getElementsByTagName("img");
                            (null == l || l.length <= 0) && (t.errorString = "Webpage does not contain img tags.", a(t));
                            let o = l[0];
                            if (null != o) {
                                let e = o.getAttribute("src");
                                if (null != e && "" != e) return e.startsWith("http") ? (t.imageUrl = i.fixLink(e), void n(t)) : (t.imageUrl = r.config.getServerHead() + e.replace(/^\//, ""), t.imageUrl = i.fixLink(t.imageUrl), void n(t))
                            }
                            return t.errorString = "Webpage does not contain a Image.", void a(t)
                        }
                        t.errorString = "Fail to load webpage with status code: " + s.status, a(t)
                    }
                }, s.open("GET", e, !0), s.send()
            }))
        }
        static fixLink(e) {
            const t = "https://";
            let r = e.replace(t, "");
            return r = r.replace(/\/\//g, "/"), r = t + r, r
        }
    }
    e("HtmlHelper", i), t._RF.pop()
}