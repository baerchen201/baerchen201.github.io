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

class Button extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (!this.hasAttribute("onclick"))
      this.addEventListener("click", () => {
        changePage(this.getAttribute("data-href"));
      });

    let data_icon: string | null = this.getAttribute("data-icon");
    console.debug(data_icon);
    if (data_icon) {
      let icon = document.createElement("img");
      icon.classList.add("icon");
      icon.src = data_icon;
      console.log(icon);
      this.insertBefore(icon, this.firstChild);
    }
  }
}
customElements.define("baer1-button", Button);

function changePage(url: string | null) {
  // Minimal link validation
  if (!url)
    // Haha compact code (I will NOT regret this some time in the future, failing to read this)
    return [alert, console.error].forEach((func) => {
      func(`Invalid url:\n${url}`);
    });

  // Transition
  document.body.style.pointerEvents = "none";
  document.body
    .animate([{ opacity: "1" }, { opacity: "0" }], {
      duration: 500,
      easing: "ease-in",
      fill: "forwards",
    })
    .addEventListener("finish", () => {
      location.href = url;
    });
}

// Prevent site displaying the transition end state when returning
window.addEventListener("pageshow", (e: PageTransitionEvent) => {
  if (e.persisted) location.reload();
});
