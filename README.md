# SVG Logo Maker

The SVG Logo Maker is a tool that allows you to create customizable SVG logos with ease. With this tool, you can generate logos consisting of various shapes, colors, and text, all in the scalable vector graphics (SVG) format.

## Features

- Choose from a variety of shapes, including circles, squares, and triangles.
- Customize the color of each shape to match your branding.
- Add text to your logo with customizable font, size, and color.
- Generate logos in the SVG format for scalability and compatibility.
- Simple and intuitive interface for easy logo creation.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/svg-logo-maker.git
Navigate to the project directory:

# bash
Copy code
cd svg-logo-maker
Install the dependencies:

# # bash
Copy code
npm install
Usage
Import the necessary classes and modules for logo creation in your code:

javascript
Copy code
const { Circle, Square, Triangle } = require("./shapes");
const { SVG, LogoText } = require("./svg");
Create instances of shape objects with desired colors:

javascript
Copy code
const circle = new Circle("green");
const square = new Square("blue");
const triangle = new Triangle("orange");
Create an instance of the LogoText class with the desired text and color:

javascript
Copy code
const logoText = new LogoText("Your Text", "white");
Create an instance of the SVG class, passing the shape and text objects:

javascript
Copy code
const svg = new SVG(circle, logoText);
Render the SVG logo:

javascript
Copy code
const logoSVG = svg.render();
Save the generated SVG logo to a file or use it as desired.

Examples
Creating a Green Circle Logo
javascript
Copy code
const circle = new Circle("green");
const logoText = new LogoText("Your Text", "white");
const svg = new SVG(circle, logoText);
const logoSVG = svg.render();
Creating a Blue Square Logo
javascript
Copy code
const square = new Square("blue");
const logoText = new LogoText("Your Text", "white");
const svg = new SVG(square, logoText);
const logoSVG = svg.render();
Creating an Orange Triangle Logo
javascript
Copy code
const triangle = new Triangle("orange");
const logoText = new LogoText("Your Text", "white");
const svg = new SVG(triangle, logoText);
const logoSVG = svg.render();
Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

sql
Copy code

Feel free to copy and paste this into your VS Code README.md file.