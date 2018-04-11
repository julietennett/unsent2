import "../scss/main.scss"; //parcel doesn't understand importing stylesheets in html but it understands them in js
import $ from "jquery";


$(document).ready(function() {
  buttonHover();
  newEmail();
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


function newEmail() {
  let $draftButton = $('.draft');
  let $emailContainer = $('.email-text__container');

  let $emailText = [
    "I found myself in the park tonight surrounded by a crowd of people. There were people everywhere, coming together to sing and chant and cheer, a sense of comraderie and excitement everyone could feel. Amidst all of the chaos in the park, you were the farthest thing from my mind, but then I looked over to my side and somehow you were there. \n \n You were actually there! How did you manage to find the one spot next to mine? For a moment, my mind flashed to the time when I believed the universe pulled your atoms towards mine, with some sort of cosmic attraction (those are words I actually thought in my mind, can you believe that?) /n The last time we were in that park together, it was summertime. We laid in the grass, allowing the sunshine to hit our faces until we both had sunburns. I wrote about it in my journal that night and I said I could've lived in that moment forever. \n \n I looked over again and you and your friends had moved further into the crowd, out of my sight. ",
    "I saw you ride by me on a bike I've never seen before. I had to squint to tell if it was you, but you looked away before I could figure it out. As I walked to class I started to rehearse all of the things I never got to say to you. In my head, in that moment, I could finally yell. Under the quiet gray sky, my voice grew louder and louder as I reacted to the retorts I knew you would spit at me. Our voices whirled together in a tangle, wringing throughout my head as I walked further down the empty sidewalk towards campus. And my chest felt tight as I sat in my chair. The lecture began and I couldn't hear us anymore.",
    "I knew you would be at the bar tonight, but I wanted to go anyway. I couldn't help but scan the crowded room when I walked in, over the dozens of heads chatting and dancing and ordering drinks. I finally saw you by the wall directly across from me, flirting with a girl, and I remembered the time I last saw you drunk. \n \n That night in our friend's living room, a whole year ago (or has it been longer?), you insisted you needed me next to you, and you wouldn't stop until I took a seat beside you. I was the only thing you needed, you said. You were shouting it across the room over all of those heads. \n \n You didn't see me standing there at the bar. The next time I turned my head you were standing next to me and your lips were on hers. ",
    "It's been approximately 4 months since we last spoke before today. 4 months of silence, and even then there was 4 more months before that. And it's been almost a year since you last got VIP access to my thoughts. And yet, I sat down at the table today with the two friends we could both do a better job staying in touch with. I had a coffee in my hand and the first thing you said was 'I thought you stopped drinking coffee!' \n \n It's been one year since I've told you I stopped drinking coffee. But you remembered that afternoon conversation, laying in the grass. You must not have realized I went on that melodramatic anti-coffee rant knowing I would only last in my abstention for maybe a month. But you weren't around a month later to find out. You thought I was more dedicated to the coffeeless cause. And you remembered that. \n \n Just so you know, I drink coffee again. ",
    "'I'm over it', you know. We still don't speak and I'm over it. You'll never know what I had to say and I'm over it. I'm dating a girl now, and she makes me happy and I lie in bed next to her and she doesn't know I still draft emails to you in my head. \n \n I'm over it."
  ];
  var emailNum = 0;

  $draftButton.click( function() {
    $emailContainer.children('p').text($emailText[emailNum]);
    emailNum++;
  });

}
