class LogoText {
  constructor(text, color) {
    this.color = color;
    this.text = text;
  }

  render() {
    return `<text x="50%" y="50%" font-size="4rem" alignment-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
  }
}

class SVG {
  constructor(...shapes) {
    this.shapes = shapes;
  }

  render() {
    const sortedShapes = this.shapes.sort((a, b) => a.priority - b.priority);
    const shapeElements = sortedShapes.map(shape => shape.render()).join('');
    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeElements}</svg>`;
    return svg;
  }
}

module.exports = SVG;



module.exports = { LogoText, SVG };

