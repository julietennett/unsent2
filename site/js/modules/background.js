import $ from "jquery";
const restaurant = require('../../assets/background_restaurant.png');
const park = require('../../assets/background_park.png');
const clouds = require('../../assets/background_clouds.png');
const howl = require('../../assets/background_howl.png');
const sun = require('../../assets/background_sun.png');
var restaurantBG;
var parkBG;
var cloudsBG;
var howlBG;
var sunBG;

const Sketch = function(p5) {
    p5.preload = () => {
      restaurantBG = p5.loadImage(restaurant);
      parkBG = p5.loadImage(park);
      cloudsBG = p5.loadImage(clouds);
      howlBG = p5.loadImage(howl);
      sunBG = p5.loadImage(sun);
    };
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
    };
    p5.draw = () => {
      let $newEmail = $('.new-email-button');
      let $draftButton = $('.draft-button');
      let bgNum = 0;

      $newEmail.click(function () {
        p5.background(0);
        p5.image(restaurantBG, 0, 0, p5.windowWidth, p5.windowHeight);
        bgNum += 1;
      });
      $draftButton.click( function() {
        if (bgNum == 1) {
          p5.background(250);
          p5.image(parkBG, 0, 0, p5.windowWidth, p5.windowHeight);
          bgNum += 1;
        } else if (bgNum == 2) {
          p5.background(250);
          p5.image(cloudsBG, 0, 0, p5.windowWidth, p5.windowHeight);
          bgNum += 1;
        } else if (bgNum == 3) {
          p5.background(250);
          p5.image(howlBG, 0, 0, p5.windowWidth, p5.windowHeight);
          bgNum += 1;
        } else if (bgNum == 4) {
          p5.background(250);
          p5.image(sunBG, 0, 0, p5.windowWidth, p5.windowHeight);
          bgNum += 1;
        } else if (bgNum == 5) {
          p5.background(233, 228, 233);
        }
      });
    };
};

export default Sketch;
