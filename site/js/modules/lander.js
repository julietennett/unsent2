import $ from "jquery";

class Lander {
  constructor() {
    this.hideLander();
  }

  hideLander() {
    let $lander = $('.lander__container');
    let $newEmail = $('.new-email-button');
    let $emailContainer = $('.email__container');

    $newEmail.click(function () {
      $lander.addClass('js-hide-lander');
      $emailContainer.removeClass('hide-email');
    });
  }

}

export default Lander;
