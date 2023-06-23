const { SVG, LogoText } = require("./svg");
const { Circle, Square, Triangle } = require("./shapes");

test("should render a 300 x 200 svg element", () => {
  const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><rect x="90" y="40" width="120" height="120" fill="blue" /><polygon points="150,18 244,182 56,182" fill="red" /><text x="50%" y="50%" font-size="4rem" alignment-baseline="middle" text-anchor="middle" fill="red">hello</text></svg>`;

  const circle = new Circle("green"); 
  const square = new Square("blue"); 
  const triangle = new Triangle("red"); 
  const logoText = new LogoText("hello", "red");

  const svg = new SVG(circle, square, triangle, logoText);

  expect(svg.render()).toMatch(expectedSvg);
});

