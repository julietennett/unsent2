import $ from "jquery";

class Draft {
  constructor() {
    this.viewDraft();
  }

  viewDraft() {
    let $draft01button = $('.draft1');
    let $email01 = $('.email1');
    let $livetext = $('.live-type');

    $draft01button.click( function() {
      console.log('clicked!');
      $livetext.css('display', 'none');
      $email01.css('display', 'block');
      $email01.css('opacity', 1);
      $email01.css('transform', 'translateY(0)');
    })

  }

}

export default Draft;
