class LogoText {
  constructor(text, color) {
    this.color = color;
    this.text = text;
  }

  render() {
    return ` <text x="50%" y="50%" font-size="4rem" alignment-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
   
  }
}

class SVG {
  constructor(shape, logoText) {
    this.shape = shape;
    this.logoText = logoText;
  }

  render() {
    const svg = `<svg version="1.1" width="200" height="220" xmlns="http://www.w3.org/2000/svg">
    ${this.shape.render()}
    ${this.logoText.render()}
    </svg>`;

    return svg;
  }
}

module.exports = { LogoText, SVG };
