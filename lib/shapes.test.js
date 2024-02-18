const Shapes = require('./shapes');

describe('Shapes', () => {
    describe('render', () => {
        it('should return a css string that displays the selected shape to the svg file', () => {
            const shape = 'Triangle';
            const shapeColour = 'blue';
            expect(Shapes.render(shape, shapeColour)).toEqual('<polygon points="150,25 250,150 50,150" fill="blue"/>');
        })
    })
});