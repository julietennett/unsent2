import $ from "jquery";

class Footer {
  constructor() {
    this.footerColor();
  }

  footerColor() {
    let $newEmail = $('.new-email-button');
    let $draftButton = $('.draft-button');
    let $footer = $('.footer');
    let emailNum = 1;

    $newEmail.click(function () {
      $footer.children('*').addClass('js-white');
    });

    $draftButton.click(function () {
      console.log(emailNum);
      if (emailNum == 1) {
        emailNum += 1;
      } else if (emailNum == 2) {
        $footer.children('*').removeClass('js-white');
        emailNum += 1;
      } else if (emailNum == 3) {
        $footer.children('*').addClass('js-white');
        emailNum += 1;
      }  else if (emailNum == 4) {
        $footer.children('*').removeClass('js-white');
        emailNum += 1;
      }
    });

  }

}

export default Footer;
