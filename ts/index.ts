const VERSION = "v1.5";
/*
    baer1 website
    Copyright (C) 2024  baer1

    This website is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    A copy of the GNU General Public License should be hosted along with
    this website (LICENSE). If not, see <https://www.gnu.org/licenses/>.

    videocreator@outlook.de
*/

window.addEventListener("load", () => {
  let s = document.createElement("style");
  document.head.appendChild(s);
  s.sheet!.insertRule(`#version::after{content: "Script ${VERSION}"}`);
});

window.addEventListener("load", () => {
  let buttons: HTMLCollectionOf<HTMLButtonElement> = document
    .getElementById("content")!
    .getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    const button: HTMLButtonElement = buttons[i];

    button.addEventListener("click", () => {
      // Link validation (minimal)
      let href = button.getAttribute("data-href");
      if (!href)
        return alert(
          "This button does not have a data-href attribute.\nPlease open an issue on GitHub to get this fixed"
        );

      // Transition
      document.body.style.pointerEvents = "none";
      document.body
        .animate([{ opacity: "1" }, { opacity: "0" }], {
          duration: 500,
          easing: "ease-in",
          fill: "forwards",
        })
        .addEventListener("finish", () => {
          location.href = href;
        });
    });
  }
});

// Prevent site displaying the transition end state when returning
window.addEventListener("pageshow", (e: PageTransitionEvent) => {
  if (e.persisted) location.reload();
});
