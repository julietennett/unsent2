import $ from "jquery";

class Lander {
  constructor() {
    this.hideLander();
  }

  hideLander() {
    let $lander = $('.lander__container');
    let $newEmail = $('.new-email-button');
    let $emailContainer = $('.email__container');
    let $body = $('body');

    $newEmail.click(function () {
      $lander.addClass('js-hide-lander');
      $body.removeClass('js-lander');
      $emailContainer.addClass('show-email');
    });
  }

}

export default Lander;
