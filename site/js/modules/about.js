import $ from "jquery";

class About {
  constructor() {
    this.toggleAbout();
  }

  toggleAbout() {
    let $aboutContainer = $('.about__container');
    let $aboutLink = $('.about');
    let navOpen = false;
    let $footer = $('.footer');
    //HIDE WHAT'S ON THE PAGE
    let $body = $('body');
    let $lander = $('.lander__container');
    let $emailContainer = $('.email__container');
    let $draftsContainer = $('.drafts__container');

    $aboutLink.click(function () {
      $aboutContainer.toggleClass('js-about-show');
      if (navOpen == false) {
        $footer.children('*').addClass('js-about-color');
        $aboutLink.text('CLOSE');
        navOpen = true;
        if ($body.hasClass('js-lander')) {
          $lander.addClass('js-hide-lander');
        } else {
          $emailContainer.removeClass('show-email');
          $draftsContainer.css('display', 'none');
        }
      } else if (navOpen == true) {
        $footer.children('*').removeClass('js-about-color');
        $aboutLink.text('ABOUT THIS PROJECT');
        navOpen = false;
        if ($body.hasClass('js-lander')) {
          $lander.removeClass('js-hide-lander');
        } else {
          $emailContainer.addClass('show-email');
          $draftsContainer.css('display', 'flex');
        }
      }
    });
  }

}

export default About;
