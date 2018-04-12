import $ from "jquery";

class HoverMessage {
  constructor() {
    this.buttonHover();
    this.changeText();
   }

  buttonHover() {
    let $draftButton = $('.draft-button');
    let $draftMsg = $('.msg-draft');
    let $sendButton = $('.send-button');
    let $sendMsg = $('.msg-send');

    $draftButton.hover(
      function () {
        $draftMsg.removeClass('js-hide');
      },
      function () {
        $draftMsg.addClass('js-hide');
      }
    );

    $draftButton.mousemove( function(evt) {
      let xPos = evt.pageX;
      let yPos = evt.pageY;

      $draftMsg.css("left", xPos + 5);
      $draftMsg.css("top", yPos + 5);
    });


    $sendButton.hover(
      function () {
        $sendMsg.removeClass('js-hide');
      },
      function () {
        $sendMsg.addClass('js-hide');
      }
    );

    $sendButton.mousemove( function(evt) {
      let xPos = evt.pageX;
      let yPos = evt.pageY;

      $sendMsg.css("left", xPos + 12);
      $sendMsg.css("top", yPos + 10);
    });
  }

  changeText() {
    let $draftButton = $('.draft-button');
    let $draftMsg = $('.msg-draft');

    let draftMsgText = [
      "yeah, maybe later...",
      "you missed your chance",
      "it's not worth it",
      "it's too late",
      "you could never say this",
      "just forget it"
    ]
    let hoverNum = 1;

    $draftButton.click( function() {
      if (hoverNum < 5) {
        $draftMsg.text(draftMsgText[hoverNum]);
        hoverNum++;
      } else {
        $draftMsg.text(draftMsgText[5]);
        $draftButton.css('cursor', 'not-allowed');
      }
    });
  }
}

export default HoverMessage;
