module.exports = function greyscale(rgb) {
    const avg = (rgb.r + rgb.g + rgb.b) /3;
    const newRGB = {
        r: avg,
        g: avg, 
        b: avg,
        
    };
    return newRGB;
};