import $ from "jquery";

class About {
  constructor() {
    this.toggleAbout();
  }

  toggleAbout() {
    let $aboutContainer = $('.about__container');
    let $aboutLink = $('.about');
    let navOpen = false;
    //HIDE WHAT'S ON THE PAGE
    let $body = $('body');
    let $lander = $('.lander__container');
    let $emailContainer = $('.email__container');

    $aboutLink.click(function () {
      $aboutContainer.toggleClass('js-about-show');
      if (navOpen == false) {
        $aboutLink.text('CLOSE');
        navOpen = true;
        if ($body.hasClass('js-lander')) {
          $lander.addClass('js-hide-lander');
        } else {
          $emailContainer.removeClass('show-email');
        }
      } else if (navOpen == true) {
        $aboutLink.text('ABOUT THIS PROJECT');
        navOpen = false;
        if ($body.hasClass('js-lander')) {
          $lander.removeClass('js-hide-lander');
        } else {
          $emailContainer.addClass('show-email');
        }
      }
    });
  }

}

export default About;
