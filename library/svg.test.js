const { SVG, LogoText } = require("./svg");
const { Square, Circle, Triangle } = require("./shapes");

test("should render a 300 x 200 svg element", () => {
  const color = "red";
  const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red" /><circle cx="150" cy="100" r="80" fill="red" /><polygon points="150,18 244,182 56,182" fill="red" /><text x="50%" y="50%" font-size="4rem" alignment-baseline="middle" text-anchor="middle" fill="red">SVG</text></svg>';

  const square = new Square(color);
  const circle = new Circle(color);
  const triangle = new Triangle(color);
  const logoText = new LogoText("SVG", color);

  const svg = new SVG(square, logoText);
  svg.addShape(circle);
  svg.addShape(triangle);

  expect(svg.render()).toEqual(expectedSvg);
});
