class LogoText {
  constructor(text, color) {
    this.color = color;
    this.text = text;
  }

  render() {
    return `<text x="100" y="100" font-size="50" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
  }
}

class SVG {
  constructor(shape, logoText) {
    this.shape = shape;
    this.logoText = logoText;
  }

  render() {
    const svg = `<svg version="1.1" width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    ${this.shape.render()}
    ${this.logoText.render()}
    </svg>`;

    return svg;
  }
}

module.exports = { LogoText, SVG };
