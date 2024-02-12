class Shapes {
    static render(shape, shapeColour) {
        switch (shape) {
            case 'Square':
                return `<rect x="100" y="50" width="100" height="100" fill="${shapeColour}"/>`;
            case 'Circle': 
                return `<circle cx="150" cy="100" r="50" fill="${shapeColour}"/>`;
            case 'Triangle':
                return `<polygon points="150,25 250,150 50,150" fill="${shapeColour}"/>`;
        }
    }
}

module.exports = Shapes;