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

    let $restContainer = $('.restaurant__container')
    let $parkContainer = $('.park__container');
    let $cloudContainer = $('.cloud__container');
    let $howlContainer = $('.howl__container');
    let $sunContainer = $('.sun__container');
    let $img = $('img');

    $newEmail.click(function () {
      $bodyBg.css("background-image", `url(${restBG})`);
      $bodyBg.addClass('js-bg-show');
      $restContainer.children($img).addClass('js-show');
      bgNum += 1;
    });
    $draftButton.click( function() {
      if (bgNum == 1) {
        $restContainer.children($img).removeClass('js-show');
        $bodyBg.css("background-image", `url(${parkBG})`);
        $parkContainer.children($img).addClass('js-show');
        bgNum += 1;
      } else if (bgNum == 2) {
        $parkContainer.children($img).removeClass('js-show');
        $bodyBg.css("background-image", `url(${cloudsBG})`);
        $cloudContainer.children($img).addClass('js-show');
        bgNum += 1;
      } else if (bgNum == 3) {
        $cloudContainer.children($img).removeClass('js-show');
        $bodyBg.css("background-image", `url(${howlBG})`);
        $howlContainer.children($img).addClass('js-show');
        bgNum += 1;
      } else if (bgNum == 4) {
        $howlContainer.children($img).removeClass('js-show');
        $bodyBg.css("background-image", `url(${sunBG})`);
        $sunContainer.children($img).addClass('js-show');
        bgNum += 1;
      } else if (bgNum == 5) {
        $sunContainer.children($img).removeClass('js-show');
        $bodyBg.css("background-image", "none");
      }
    });
  }

}

export default Background;
