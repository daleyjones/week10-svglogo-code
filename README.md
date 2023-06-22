## SVG Logo Maker
The SVG Logo Maker is a powerful tool that simplifies the process of creating customizable SVG logos using HTML, JavaScript, JSON, Node.js, and package.json. With this tool, you can generate logos consisting of various shapes, colors, and text, all in the scalable vector graphics (SVG) format.

## Features
Choose from a variety of shapes, including circles, squares, and triangles.
Customize the color of each shape to match your branding.
Add text to your logo with customizable font, size, and color.
Generate logos in the SVG format for scalability and compatibility.
Simple and intuitive interface for easy logo creation
## Installation

1. Clone the repository: Git clone https://github.com/daleyjones/week10-svglogo-generator.git

2. Navigate to the project directory: On the terminal cd svglogo-generator.


3. Install the dependencies: npm install


## Usage
To use the SVG Logo Maker in your code, follow these steps:

1. Import the necessary classes and modules for logo creation:
javascript

const { Circle, Square, Triangle } = require("./shapes");

const { SVG, LogoText } = require("./svg");

2. Create instances of shape objects with desired colors:
javascript

const circle = new Circle("green");

const square = new Square("blue");

const triangle = new Triangle("orange");

3. Customize the shapes and add them to your logo using the available methods and properties.

4. Generate the SVG logo using the SVG class and save it to a file or use it in your application.



const logo = new SVG();

logo.addShape(circle);

logo.addShape(square);

logo.addShape(triangle);

logo.addText(new LogoText("Your Text", "Arial", 24, "red"));

logo.generateSVG("logo.svg");

5. Feel free to experiment with different shapes, colors, and text options to create your desired logo.


## Demonstration
Check out the video demonstration [here](https://drive.google.com/file/d/16bTA0C2_Q6jet3oCYfjWGc4aXpgLOBOq/view).

## Credits
Made by Daley Jones.

## License
This project is licensed under the MIT License.