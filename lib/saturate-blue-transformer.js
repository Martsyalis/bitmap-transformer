module.exports = function saturateB(rgb) {
    const newRGB = {
        r: (rgb.r< 20)? rgb.r : rgb.r-15,
        g: (rgb.r< 20)? rgb.g : rgb.g-15,
        b: (rgb.r< 200)? rgb.b +50 : rgb.b,
    };
    return newRGB;
};