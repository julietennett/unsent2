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

//HOWL assets
var howlColor = ('#272D34');
var bricks;
var disco;
var lightL;
var lightR;
const bricksImg = require('../../assets/howl/bricks.png');
const discoImg = require('../../assets/howl/discoball.png');
const lightLImg = require('../../assets/howl/light-left.png');
const lightRImg = require('../../assets/howl/light-right.png');


const Sketch = function(p5) {
    p5.preload = () => {
      restaurantBG = p5.loadImage(restaurant);
      parkBG = p5.loadImage(park);
      cloudsBG = p5.loadImage(clouds);
      howlBG = p5.loadImage(howl);
      sunBG = p5.loadImage(sun);
      //HOWL IMAGES
      bricks = p5.loadImage(bricksImg);
      disco = p5.loadImage(discoImg);
      lightL = p5.loadImage(lightLImg);
      lightR = p5.loadImage(lightRImg);
    };
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
    };
    p5.draw = () => {
      let $newEmail = $('.new-email-button');
      let $draftButton = $('.draft-button');
      let bgNum = 0;

      $newEmail.click(function () {
        p5.push();
        p5.imageMode(p5.CENTER);
        p5.background(howlColor);
        p5.image(bricks, p5.windowWidth/2, p5.windowHeight/2, 1396, 701);
        p5.image(disco, p5.windowWidth/2, 75, 225, 162);
        p5.pop();
        p5.push();
        p5.image(lightL, p5.windowWidth/10, 0, 511, 627);
        p5.image(lightR, p5.windowWidth*(7/8) - lightR.width, 0, 511, 672);
        bgNum += 1;
        p5.pop();
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
