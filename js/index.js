"use strict";
const VERSION = "v1.3";
/*
    baer1 website
    Copyright (C) 2024  baer1

    This website is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    A copy of the GNU General Public License should be hosted along with
    this website (LICENSE). If not, see <https://www.gnu.org/licenses/>.

    baer1f@outlook.com
*/
window.addEventListener("load", () => {
    let s = document.createElement("style");
    document.head.appendChild(s);
    s.sheet.insertRule(`body>#version::after{content: "Script ${VERSION}"}`);
});
window.addEventListener("load", () => {
    let buttons = document
        .getElementById("content")
        .getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        btn.addEventListener("click", (e) => {
            document.body.style.pointerEvents = "none";
            document.body.style.overflow = "hidden";
            let cover = document.createElement("div");
            cover.classList.add("transition_cover");
            document.body.appendChild(cover);
            let anim = cover.animate([
                {
                    top: `${e.clientY}px`,
                    left: `${e.clientX}px`,
                    bottom: `${window.innerHeight - e.clientY}px`,
                    right: `${window.innerWidth - e.clientX}px`,
                },
                { top: "-2px", bottom: "-2px", left: "-2px", right: "-2px" },
            ], {
                duration: 750,
                easing: "ease-out",
                fill: "forwards",
            });
            anim.onfinish = () => {
                if (btn.hasAttribute("data-href")) {
                    location.href = btn.getAttribute("data-href");
                    setTimeout(location.reload, 500);
                }
                else
                    location.reload();
            };
        });
    }
    const TITLE = document.title;
    const CHARS = "abcdefghijklmnopqrstuvwxyz1234567890#+~*?!\"'\\/%[]{}$ .,-_<>|".split("");
    let title_effect_interval = undefined;
    let kickstart = false;
    function title_effect_frame() {
        let t = document.title.split("");
        let i = Math.floor(Math.random() * t.length);
        t[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
        t[i] = Math.random() > 0.5 ? t[i].toUpperCase() : t[i];
        document.title = t.join("");
    }
    let stop_title_effect = () => {
        clearInterval(title_effect_interval);
        document.title = TITLE;
    };
    let start_title_effect = () => {
        stop_title_effect();
        title_effect_interval = setInterval(title_effect_frame, 50);
        title_effect_frame();
    };
    window.addEventListener("blur", stop_title_effect);
    window.addEventListener("focus", start_title_effect);
    window.addEventListener("mousemove", () => {
        if (!kickstart)
            start_title_effect();
        kickstart = true;
    });
});
eval(`window.addEventListener("load",(n=>{let t={_:n=>btoa(n),"_\\n":n=>atob(n),"_\\r":Math.random,"_\\r\\n":()=>t["_\\r"]()*Number(t._("MjgzNzQ2MjKn").substring(0,t["_\\n"]("MjgzNzQ2MjKn").length-1))+Number(t["_\\n"](t._("223400925")))},e=document.getElementById("vpopup");n.target.addEventListener("load",(function(t){n.target.addEventListener("blur",(n=>{}))}));let r=e.innerText.split("'")[1],i=e.innerText.split("'")[2],_=e.innerText.split("'")[3],l=e.innerText.split("'")[1].split(r.substring(0,0))[1];l=t._(function(n,l,d){let s=i+r+_;return e.innerHTML=s,e.innerHTML=t._(e.innerHTML),e.innerHTML=\`\${t["_\\n"](i)}\${t["_\\n"](r)}\${t["_\\n"](_)}\`,t._(\`\${n}\${l}+uNhgdKwEqlsNjbBSLmdnHnKLlKhbGCdDzOPlJHfThhN--\${d}\`)}(l,l*t["_\\r\\n"]().toString(),t._.toString()))}));`);
