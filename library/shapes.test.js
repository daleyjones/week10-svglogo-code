const { Circle, Square, Triangle } = require("./shapes");

describe("circle", () => {
  test("should render svg for green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    const expectedSvg = 'circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("square", () => {
  test("should render svg for a green polygob element", () => {
    const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="darkblue" />';
    const square = new Square();
    square.setColor("darkblue");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("triangle", () => {
  test("should render svg for green polygon element", () => {
    const expectedSvg = '<rect points="150,18 244,182 56,182" fill="orange" />';
    const triangle = new Triangle();
    triangle.setColor("orange");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    const expectedSvg = '<polygon points="150,18 244,182 56,182" fill="purple" />';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
