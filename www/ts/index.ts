/*
    baer1 website
    Copyright (C) 2024  baer1

    This website is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    A copy of the GNU General Public License can be found on this website's
    GitHub repository (LICENSE). If not, see <https://www.gnu.org/licenses/>.

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
        // If shift key held, do not modify contextmenu behaviour
        // Firefox is the best browser, but a lot of people still use Chromium browsers
        if (e.shiftKey) return;

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

class CopiedPopup extends HTMLElement {
  _status: Promise<void>;
  _resolve: () => void = (..._) => undefined;
  _reject: (reason?: any) => void = (..._) => undefined;

  constructor(timeout?: number) {
    super();

    // Initial text
    this.innerText = "Copying...";

    // Initialize status promise
    this._status = new Promise(
      (resolve: () => void, reject: (reason?: any) => void) => {
        this._resolve = resolve;
        this._reject = reject;
      }
    );

    // Play pop-up animation
    this.animate(
      [
        { opacity: "0", transform: "translateY(calc(100% + 8px))" },
        { opacity: "1", transform: "none" },
      ],
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards",
      }
    ).addEventListener("finish", () => {
      // Set timeout
      if (timeout) timeout = setTimeout(this._reject, timeout);

      // When done, schedule fadeout
      this._status.then(() => {
        setTimeout(() => {
          this.animate([{ opacity: "1" }, { opacity: "0" }], {
            duration: 300,
            easing: "ease-in",
            fill: "forwards",
          }).addEventListener("finish", () => {
            // When faded out, remove self
            this.remove();
          });
        }, 1750);
      });

      // If times out, display error
      this._status.catch(() => {
        this.innerText = "✖ Copy operation timed out";
        this._lock();
        setTimeout(() => {
          this.animate([{ opacity: "1" }, { opacity: "0" }], {
            duration: 300,
            easing: "ease-in",
            fill: "forwards",
          }).addEventListener("finish", () => {
            // When faded out, remove self
            this.remove();
          });
        }, 500);
      });
    });
  }

  _lock() {
    this.success = this.failure = () => {
      throw new Error("Popup locked");
    };
  }
  success() {
    this._resolve();
    this.innerText = "✓ Copied";
    this._lock();
  }
  failure() {
    this._resolve();
    this.innerText = "✖ Copy operation rejected";
    this._lock();
  }
}
customElements.define("baer1-copied", CopiedPopup);

function copyString(value: string): Promise<void> {
  // Create new promise to return
  return new Promise((resolve: () => void, reject: (reason?: any) => void) => {
    // Create popup element with a 10s timeout
    let popup = new CopiedPopup(10e3);

    // Copy value to clipboard and schedule popup update
    navigator.clipboard
      .writeText(value)
      .then(() => {
        popup.success();
        resolve();
      })
      .catch(() => {
        popup.failure();
        reject();
      });

    // Display the popup element
    document.body.appendChild(popup);
  });
}

// Prevent site displaying the transition end state (black screen) when returning
window.addEventListener("pageshow", (e: PageTransitionEvent) => {
  if (e.persisted) location.reload();
});
