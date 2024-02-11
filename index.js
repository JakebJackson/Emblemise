const inquirer = require('inquirer');
const fs = require('fs');

function handleCreateLogo(text, textColour, shape, shapeColour) {
    const userShape = handleCreateShape(shape, shapeColour)
    const userText = `<text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="${textColour}" font-size="36">${text}</text>`;
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${userShape}${userText}</svg>`;
}

function handleCreateShape(shape, shapeColour) {
    switch (shape) {
        case 'Square':
            return `<rect x="100" y="50" width="100" height="100" fill="${shapeColour}"/>`;
        case 'Circle': 
            return `<circle cx="150" cy="100" r="50" fill="${shapeColour}"/>`;
        case 'Triangle':
            return `<polygon points="150,25 250,150 50,150" fill="${shapeColour}"/>`;
    }
}

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please input the text for your logo: (Up to 3 characters)',
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