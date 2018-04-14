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

    $newEmail.click(function () {
      $bodyBg.css("background-image", `url(${restBG})`);
      $bodyBg.addClass('js-bg-show');
      bgNum += 1;
    });
    $draftButton.click( function() {
      if (bgNum == 1) {
        $bodyBg.css("background-image", `url(${parkBG})`);
        bgNum += 1;
      } else if (bgNum == 2) {
        $bodyBg.css("background-image", `url(${cloudsBG})`);
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
