const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes');

function handleCreateLogo(text, textColour, shape, shapeColour) {
    const userShape = Shapes.render(shape, shapeColour);
    const userText = `<text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="${textColour}" font-size="36">${text}</text>`;
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${userShape}${userText}</svg>`;
}

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please input the text for your logo: (Up to 3 characters)',
        validate: function(input) {
            if (input.length <= 3) {
                return true;
            } else {
                return 'The text can be no longer than 3 characters.';
            }
        }
    },

    {
        type: 'list',
        name: 'textColour',
        message: 'What colour would you like the text to be?',
        choices: ['red', 'blue', 'green', 'pink', 'purple', 'cyan', 'white', 'black', 'yellow', 'orange'],
    },

    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like for the logo image?',
        choices: ['Square', 'Circle', 'Triangle'],
    },

    {
        type: 'list',
        name: 'shapeColour',
        message: 'What colour would you like the selected shape to be?',
        choices: ['red', 'blue', 'green', 'pink', 'purple', 'cyan', 'white', 'black', 'yellow', 'orange'],
    },
]).then(answers => {
    const logoOutput = handleCreateLogo(answers.text, answers.textColour, answers.shape, answers.shapeColour);

    fs.writeFileSync('logo.svg', logoOutput);

    console.log('Generated logo.svg');
});