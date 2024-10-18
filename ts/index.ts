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
  connectedCallback() {
    // Allow click to be overridden in HTML
    if (!this.hasAttribute("onclick"))
      this.addEventListener("click", () => {
        // Replace instant change with transition
        changePage(this.getAttribute("href")!);
      });

    if (!this.hasAttribute("oncontextmenu"))
      this.addEventListener("contextmenu", (e: MouseEvent) => {
        // Prevent browser context menu opening
        e.preventDefault();
        // Copy link to clipboard when right-clicking
        copyString(this.getAttribute("href")!);
      });

    // If logo set, insert before text
    let logo_url: string | null = this.getAttribute("logo");
    if (logo_url) {
      let logo_img = document.createElement("img");
      logo_img.src = logo_url;

      // For easier CSS access
      logo_img.classList.add("logo");

      this.insertBefore(logo_img, this.firstChild);
    }
  }
}
customElements.define("baer1-button", Button);

function changePage(url: string) {
  // Check if link is empty
  if (!url)
    // Print an error, both in console and to the user
    return [alert, console.error].forEach((func) => {
      func(`Invalid url:\n${url}`);
    });

  // Disable pointer-events on body, to prevent disruption of transition
  document.body.style.pointerEvents = "none";

  // Play transition animation
  document.body
    .animate([{ opacity: "1" }, { opacity: "0" }], {
      duration: 500,
      easing: "ease-in",
      fill: "forwards",
    })
    .addEventListener("finish", () => {
      // When done, actually redirect to target url
      location.href = url;
    });
}

function copyString(value: string): Promise<void> {
  // Create new promise to return
  return new Promise((resolve: () => void, reject: (reason?: any) => void) => {
    // Create popup element
    let popup = document.createElement("div");
    popup.classList.add("copied");
    popup.innerText = "Copying...";

    // Copy value to clipboard and schedule popup update
    try {
      navigator.clipboard.writeText(value).then(() => {
        popup.innerText = "✓ Copied";
        resolve();
      });
    } catch {
      popup.innerText = "✖ Copy operation rejected";
      reject();
    }

    // Display the popup element
    document.body.appendChild(popup);

    // Play popup animation
    popup
      .animate(
        [
          { opacity: "0", transform: "translateY(calc(100% + 8px))" },
          { opacity: "1", transform: "none" },
        ],
        {
          duration: 500,
          easing: "ease-out",
          fill: "forwards",
        }
      )
      .addEventListener("finish", () => {
        // When done, schedule popup fadeout
        setTimeout(() => {
          popup
            .animate([{ opacity: "1" }, { opacity: "0" }], {
              duration: 300,
              easing: "ease-in",
              fill: "forwards",
            })
            .addEventListener("finish", () => {
              // When faded out, remove popup element
              popup.remove();
            });
        }, 1750);
      });
  });
}

// Prevent site displaying the transition end state (black screen) when returning
window.addEventListener("pageshow", (e: PageTransitionEvent) => {
  if (e.persisted) location.reload();
});
