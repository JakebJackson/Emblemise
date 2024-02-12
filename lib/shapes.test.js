const Jest = require('jest');
const Shapes = require('./shapes');

describe('Shapes', () => {
    describe('Shapes', () => {
        it('should return a css string that displays the selected shape to the svg file', () => {
            const shape = 'Triangle';
            const shapeColour = 'blue';
            const shapeTest = new Shapes;
            expect(shapeTest.render(shape, shapeColour)).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue"/>')
        })
    })
});