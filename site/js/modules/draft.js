import $ from "jquery";

class Draft {
  constructor() {
    this.viewDraft();
  }

  viewDraft() {
    let $draft01 = $('.draft1');
    let $draft02 = $('.draft2');
    let $draft03 = $('.draft3');
    let $draft04 = $('.draft4');
    let $draft05 = $('.draft5');

    let $email01 = $('.email1');
    let $email02 = $('.email2');
    let $email03 = $('.email3');
    let $email04 = $('.email4');
    let $email05 = $('.email5');

    let $livetext = $('.live-type');

    $draft01.click( function() {
      $livetext.css('display', 'none');
      $email02.addClass('hide');
      $email03.addClass('hide');
      $email04.addClass('hide');
      $email05.addClass('hide');
      $email01.removeClass('hide');
    })
    $draft02.click( function() {
      $livetext.css('display', 'none');
      $email01.addClass('hide');
      $email03.addClass('hide');
      $email04.addClass('hide');
      $email05.addClass('hide');
      $email02.removeClass('hide');
    })
    $draft03.click( function() {
      $livetext.css('display', 'none');
      $email02.addClass('hide');
      $email01.addClass('hide');
      $email04.addClass('hide');
      $email05.addClass('hide');
      $email03.removeClass('hide');
    })
    $draft04.click( function() {
      $livetext.css('display', 'none');
      $email02.addClass('hide');
      $email03.addClass('hide');
      $email01.addClass('hide');
      $email05.addClass('hide');
      $email04.removeClass('hide');
    })
    $draft05.click( function() {
      $livetext.css('display', 'none');
      $email02.addClass('hide');
      $email03.addClass('hide');
      $email04.addClass('hide');
      $email01.addClass('hide');
      $email05.removeClass('hide');
    })

  }

}

export default Draft;
