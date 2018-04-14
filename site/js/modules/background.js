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

////////////BACKGROUND BOOLEANS
var restBoolean;
var parkBoolean;
var cloudsBoolean;
var howlBoolean;
var sunBoolean;

////////////RESTAURANT ASSETS


////////////PARK ASSETS


////////////CLOUDS ASSETS


////////////HOWL ASSETS
var howlColor = ('#272D34');
var bricks;
var disco;
var discoY;
var lightL;
var lightLX;
var lightR;
var lightRX;
const bricksImg = require('../../assets/howl/bricks.png');
const discoImg = require('../../assets/howl/discoball.png');
const lightLImg = require('../../assets/howl/light-left.png');
const lightRImg = require('../../assets/howl/light-right.png');

////////////SUN ASSETS


const Sketch = function(p5) {

  /////////////////////////////PRELOAD IMAGES
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


  /////////////////////////////SETUP
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
    restBoolean = false;
    parkBoolean = false;
    cloudsBoolean = false;
    howlBoolean = false;
    sunBoolean = false;

    lightLX = 0 - lightL.width;
    lightRX = p5.windowWidth;
    discoY = 0 - disco.height;
  };


  /////////////////////////////DRAW
  p5.draw = () => {
    let $newEmail = $('.new-email-button');
    let $draftButton = $('.draft-button');
    let bgNum = 0;


    //////HOWL DRAW
    if (howlBoolean == true) {
      p5.push();
      p5.imageMode(p5.CENTER);
      p5.background(howlColor);
      p5.image(bricks, p5.windowWidth/2, p5.windowHeight/2, 1396, 701);
      p5.image(disco, p5.windowWidth/2, discoY, 225, 162);
      p5.pop();
      p5.push();
      p5.image(lightL, lightLX, 0, 511, 627);
      p5.image(lightR, lightRX, 0, 511, 672);
      if (lightLX <= p5.windowWidth/10) {
        lightLX += 35;
      }
      if (lightRX >= p5.windowWidth*(7/8) - lightR.width) {
        lightRX -= 35;
      }
      if (discoY <= 75) {
        discoY += 15;
      }
      p5.pop();
    }

    $newEmail.click(function () {
      bgNum += 1;
    });
    $draftButton.click( function() {
      if (bgNum == 1) {
        p5.background(250);
        p5.image(parkBG, 0, 0, p5.windowWidth, p5.windowHeight);
        bgNum += 1;
        howlBoolean = false;
      } else if (bgNum == 2) {
        p5.background(250);
        p5.image(cloudsBG, 0, 0, p5.windowWidth, p5.windowHeight);
        bgNum += 1;
      } else if (bgNum == 3) {
        howlBoolean = true;
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
