"use strict";
const VERSION = "v1.3-0.2";
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
            transition(btn.getAttribute("data-href"), btn.innerText);
        });
    }
    const TITLE = document.title;
    const CHARS = "abcdefghijklmnopqrstuvwxyz1234567890#+~*?!\"'\\/%[]{}$ .,-_<>|".split("");
    let title_effect_interval = undefined;
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
    start_title_effect();
    window.addEventListener("beforeunload", () => {
        stop_title_effect();
        return true;
    });
});
function transition(url, displayname) {
    if (document.body.getAttribute("transition-state"))
        return false;
    document.body.setAttribute("transition-state", "");
    let loader_node = document.getElementById("transition-loader"), continue_node = document.getElementById("transition-continue"), return_node = document.getElementById("transition-return");
    let preloader = document.createElement("iframe");
    [document.body, loader_node, continue_node, return_node].forEach((e) => {
        e.classList.add("transition");
    });
    loader_node.childNodes.forEach((e_node) => {
        let e = e_node;
        e.onanimationiteration = () => {
            if (preloader.hasAttribute("transition-finished")) {
                e.classList.add("transition-finished-anim");
                loader_node.onanimationiteration = null;
            }
        };
    });
    continue_node.href = url;
    if (!displayname) {
        continue_node.innerText = new URL(url).hostname;
    }
    else {
        continue_node.innerHTML = displayname;
    }
    preloader.src = url;
    preloader.addEventListener("load", () => {
        preloader.setAttribute("transition-finished", "");
        [loader_node, continue_node, return_node].forEach((e) => {
            e.classList.add("transition-finished");
        });
        setTimeout(() => {
            document.body.removeAttribute("transition-state");
            location.href = url;
        }, 750);
    });
    preloader.className = "preloader";
    document.body.appendChild(preloader);
}
function cancel_transition(e) {
    if (document.body.hasAttribute("transition-state"))
        return false;
    e === null || e === void 0 ? void 0 : e.preventDefault();
    let loader_node = document.getElementById("transition-loader");
    [
        document.body,
        loader_node,
        document.getElementById("transition-continue"),
        document.getElementById("transition-return"),
    ].forEach((e) => {
        e.classList.remove("transition");
    });
    loader_node.childNodes.forEach((e_node) => {
        let e = e_node;
        e.onanimationiteration = null;
        e.classList.remove("transition-finished-anim");
    });
    loader_node.classList.remove("transition-finished");
    document.body.removeAttribute("transition-state");
}
window.addEventListener("pageshow", (e) => {
    if (e.persisted)
        window.location.reload();
});
