const assert = require('assert');
const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');
const saturateBlue = require('../lib/saturate-blue-transformer');

describe('transformers', () => {

    it('invert', () => {
        // HINT: invert subtracts each value from 255
        const transformed = invert({
            r: 34,
            g: 100,
            b: 205
        });
        assert.deepEqual(transformed, {
            r: 221,
            g: 155,
            b: 50
        });
    });

    it('grayscale', () => {
        // HINT: grayscale assigns the average of all three colors
        // as the new value for each color
        const transformed = grayscale({
            r: 34,
            g: 100,
            b: 205
        });

        assert.deepEqual(transformed, {
            r: 113,
            g: 113,
            b: 113
        });
    });

    it('saturate blue', () => {
        // HINT: grayscale assigns the average of all three colors
        // as the new value for each color
        const transformed = saturateBlue({
            r: 34,
            g: 100,
            b: 100
        });

        assert.deepEqual(transformed, {
            r: 19,
            g: 85,
            b: 150
        });
    });
});