// Based on https://www.a1k0n.net/js/donut.js
// modified to work with any website

class Donut extends HTMLElement {
  intervalId?: number;

  _A: number = 1;
  _B: number = 1;

  constructor() {
    super();
    this.connectedCallback();
  }

  connectedCallback() {
    let _ = this;
    this.intervalId = setInterval(() => {
      _.innerText = _._asciiframe();
    }, 75);
  }

  resume() {
    this.pause();
    this.connectedCallback();
  }
  pause() {
    clearInterval(this.intervalId);
  }

  _asciiframe() {
    let output: string[] = [];
    let z = [];
    this._A += 0.07;
    this._B += 0.03;
    let cosA = Math.cos(this._A),
      sinA = Math.sin(this._A),
      cosB = Math.cos(this._B),
      sinB = Math.sin(this._B);
    for (let k = 0; k < 1760; k++) {
      output[k] = k % 80 == 79 ? "\n" : " ";
      z[k] = 0;
    }
    for (let theta = 0; theta < 6.28; theta += 0.07) {
      let ct = Math.cos(theta),
        st = Math.sin(theta);
      for (let phi = 0; phi < 6.28; phi += 0.02) {
        let sinPhi = Math.sin(phi),
          cosPhi = Math.cos(phi),
          h = ct + 2, // R1 + R2*cos(theta)
          D = 1 / (sinPhi * h * sinA + st * cosA + 5), // this is 1/z
          t = sinPhi * h * cosA - st * sinA; // this is a clever factoring of some of the terms in x' and y'

        let x = 0 | (40 + 30 * D * (cosPhi * h * cosB - t * sinB)),
          y = 0 | (12 + 15 * D * (cosPhi * h * sinB + t * cosB)),
          o = x + 80 * y,
          N =
            0 |
            (8 *
              ((st * sinA - sinPhi * ct * cosA) * cosB -
                sinPhi * ct * sinA -
                st * cosA -
                cosPhi * ct * sinB));
        if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
          z[o] = D;
          output[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
        }
      }
    }
    return output.join("");
  }
}
customElements.define("donut-js", Donut);
