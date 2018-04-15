import $ from "jquery";

const restBG = require('../../assets/restaurant/restaurant-bg.png');
const parkBG = require('../../assets/park/park-bg.png');
const cloudsBG = require('../../assets/clouds/clouds-bg.png');
const howlBG = require('../../assets/howl/howl-bg.png');
const sunBG = require('../../assets/sun/sun-bg.png');

class Background {
  constructor() {
    this.changeBackground();
   }

  changeBackground() {
    let $newEmail = $('.new-email-button');
    let $draftButton = $('.draft-button');
    let $bodyBg = $('.body__bg');
    let bgNum = 0;

    let $restLights = $('.rest__lights');
    let $restWall = $('.rest__wall');
    let $fogL = $('.park__fog--left');
    let $fogR = $('.park__fog--right');
    let $lampostL = $('.lampost__left--container');
    let $lampostR = $('.lampost__right--container');
    let $cloudContainer = $('.cloud__container');
    let $img = $('img');

    $newEmail.click(function () {
      $bodyBg.css("background-image", `url(${restBG})`);
      $bodyBg.addClass('js-bg-show');
      $restLights.addClass('js-show');
      $restWall.addClass('js-show');
      bgNum += 1;
    });
    $draftButton.click( function() {
      if (bgNum == 1) {
        $restLights.removeClass('js-show');
        $restWall.removeClass('js-show');
        $bodyBg.css("background-image", `url(${parkBG})`);
        $fogL.addClass('js-show');
        $fogR.addClass('js-show');
        $lampostL.addClass('js-show');
        $lampostR.addClass('js-show');
        bgNum += 1;
      } else if (bgNum == 2) {
        $fogL.removeClass('js-show');
        $fogR.removeClass('js-show');
        $lampostL.removeClass('js-show');
        $lampostR.removeClass('js-show');
        $bodyBg.css("background-image", `url(${cloudsBG})`);
        $cloudContainer.children($img).addClass('js-show');
        bgNum += 1;
      } else if (bgNum == 3) {
        $bodyBg.css("background-image", `url(${howlBG})`);
        bgNum += 1;
      } else if (bgNum == 4) {
        $bodyBg.css("background-image", `url(${sunBG})`);
        bgNum += 1;
      } else if (bgNum == 5) {
        $bodyBg.css("background-image", "none");
      }
    });
  }

}

export default Background;
