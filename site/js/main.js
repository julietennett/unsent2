import "../scss/main.scss"; //parcel doesn't understand importing stylesheets in html but it understands them in js
import $ from "jquery";
import NewEmail from "./modules/new-email";


$(document).ready(function() {
  buttonHover();
  new NewEmail();
});

function buttonHover() {
  let $draftButton = $('.draft');
  let $draftMsg = $('.msg-draft');
  let $sendButton = $('.send');
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
