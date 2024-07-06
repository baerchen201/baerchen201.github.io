const VERSION: string = "v2.0";
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
  let s: HTMLStyleElement = document.createElement("style");
  document.head.appendChild(s);
  s.sheet!.insertRule(`body>#version::after{content: "Script ${VERSION}"}`);
});

window.addEventListener("load", () => {
  // New website code here
});
