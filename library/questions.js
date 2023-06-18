const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for your logo:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for your logo:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColour',
      message: 'Enter the color for the shape:',
    },
    {
      type: 'input',
      name: 'textColour',
      message: 'Enter the color for the text:',
    },
  ];
  
  module.exports = questions;
  