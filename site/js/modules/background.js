import $ from "jquery";
const restaurant = require('../../assets/background_restaurant.png');
const park = require('../../assets/background_park.png');
const clouds = require('../../assets/background_clouds.png');
const howl = require('../../assets/background_howl.png');
const sun = require('../../assets/background_sun.png');
var cloudsBG;
var sunBG;

////////////BACKGROUND BOOLEANS
var restBoolean;
var parkBoolean;
var cloudsBoolean;
var howlBoolean;
var sunBoolean;

////////////RESTAURANT ASSETS
var restColor = ('#282647');
var stars;
var lights;
var lightsX;
var wall;
var wallX;

////////////PARK ASSETS
var parkColor = ('#132437');
var parkBG;
var parkStars;
var lampostL;
var lampostM;
var lampostR;

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
//RESTAURANT IMG PATHS
const starsImg = require('../../assets/restaurant/stars.png');
const lightsImg = require('../../assets/restaurant/lights.png');
const wallImg = require('../../assets/restaurant/wall.png');
//PARK IMG PATHS
const parkBGImg = require('../../assets/park/skyBG.png');
const parkStarsImg = require('../../assets/park/park-stars.png');
const lampostLImg = require('../../assets/park/lamp-post.png');
const lampostMImg = require('../../assets/park/lamp-post.png');
const lampostRImg = require('../../assets/park/lamp-post.png');
//HOWL IMG PATHS
const bricksImg = require('../../assets/howl/bricks.png');
const discoImg = require('../../assets/howl/discoball.png');
const lightLImg = require('../../assets/howl/light-left.png');
const lightRImg = require('../../assets/howl/light-right.png');

////////////SUN ASSETS


const Sketch = function(p5) {

  /////////////////////////////PRELOAD IMAGES
  p5.preload = () => {
    cloudsBG = p5.loadImage(clouds);
    sunBG = p5.loadImage(sun);
    //RESTAURANT IMAGES
    stars = p5.loadImage(starsImg);
    lights = p5.loadImage(lightsImg);
    wall = p5.loadImage(wallImg);
    //PARK IMAGES
    parkBG = p5.loadImage(parkBGImg);
    parkStars = p5.loadImage(parkStarsImg);
    lampostL = p5.loadImage(lampostLImg);
    lampostM = p5.loadImage(lampostMImg);
    lampostR = p5.loadImage(lampostRImg);
    //HOWL IMAGES
    bricks = p5.loadImage(bricksImg);
    disco = p5.loadImage(discoImg);
    lightL = p5.loadImage(lightLImg);
    lightR = p5.loadImage(lightRImg);
  };


  /////////////////////////////SETUP
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
    //BOOLEANS
    restBoolean = false;
    parkBoolean = false;
    cloudsBoolean = false;
    howlBoolean = false;
    sunBoolean = false;

    //RESTAURANT POS
    lightsX = -lights.width;
    wallX = p5.windowWidth + wall.width;

    //HOWL POS
    lightLX = 0 - lightL.width;
    lightRX = p5.windowWidth;
    discoY = 0 - disco.height;
  };


  /////////////////////////////DRAW
  p5.draw = () => {
    let $newEmail = $('.new-email-button');
    let $draftButton = $('.draft-button');
    let bgNum = 0;

    //////RESTAURANT DRAW
    if (restBoolean == true) {
      p5.push();
      p5.background(restColor);
      p5.imageMode(p5.CENTER);
      p5.image(stars, p5.windowWidth/2, p5.windowHeight/2, 1304, 626);
      p5.image(lights, lightsX, lights.height/2, 1500, 85);
      p5.image(wall, wallX, p5.windowHeight - wall.height/2, 1500, 231);
      if (lightsX <= p5.windowWidth/2) {
        lightsX += 60;
      };
      if (wallX >= p5.windowWidth/2) {
        wallX -= 60;
      };
      p5.pop();
    }

    //////PARK DRAW
    if (parkBoolean == true) {

    }


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
      restBoolean = true;
      bgNum += 1;
    });
    $draftButton.click( function() {
      if (bgNum == 1) {
        restBoolean = false;
        parkBoolean = true;
        bgNum += 1;
      } else if (bgNum == 2) {
        p5.background(250);
        p5.image(cloudsBG, 0, 0, p5.windowWidth, p5.windowHeight);
        bgNum += 1;
      } else if (bgNum == 3) {
        howlBoolean = true;
        bgNum += 1;
      } else if (bgNum == 4) {
        howlBoolean = false;
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
