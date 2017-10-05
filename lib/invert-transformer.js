module.exports= function invert(rgb) {
    const newRGB = {
        r: 255-rgb.r,
        g: 255-rgb.g,
        b: 255-rgb.b 
    };
    return newRGB;
};