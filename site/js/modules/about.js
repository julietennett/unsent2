import $ from "jquery";

class About {
  constructor() {
    this.toggleAbout();
  }

  toggleAbout() {
    let $aboutContainer = $('.about__container');
    let $aboutLink = $('.about');
    let navOpen = false;

    $aboutLink.click(function () {
      $aboutContainer.toggleClass('js-about-show');
      if (navOpen == false) {
        $aboutLink.text('CLOSE');
        navOpen = true;
      } else if (navOpen == true) {
        $aboutLink.text('ABOUT THIS PROJECT');
        navOpen = false;
      }
    });
  }

}

export default About;
