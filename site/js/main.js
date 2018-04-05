import "../scss/main.scss"; //parcel doesn't understand importing stylesheets in html but it understands them in js
import $ from "jquery";


$(document).ready(function() {
  buttonHover();
});

function buttonHover() {
  let $sendButton = $('.send');
  let $draftButton = $('.draft');
  let $sendMsg = $('.msg-send');
  let $draftMsg = $('.msg-draft');

  $sendButton.on("mouseenter", function () {
    $sendMsg.removeClass('js-hide');
  });
  $sendButton.on("mouseleave", function () {
    $sendMsg.addClass('js-hide');
  });
  $draftButton.on("mouseenter", function () {
    $draftMsg.removeClass('js-hide');
  });
  $draftButton.on("mouseleave", function () {
    $draftMsg.addClass('js-hide');
  });
}
