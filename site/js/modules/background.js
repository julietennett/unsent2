import $ from "jquery";
const park = require('../../assets/background_park.png');
var parkBackground;

const Sketch = function(p5) {
    let gray = 0;
    p5.preload = () => {
      parkBackground = p5.loadImage(park);
    };
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
    };
    p5.draw = () => {
      let $newEmail = $('.new-email-button');
      p5.background(0);
      p5.image(parkBackground, 0, 0, p5.windowWidth, p5.windowHeight);
    };
};

export default Sketch;
