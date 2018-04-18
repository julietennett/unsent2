import $ from "jquery";
import TypeIt from 'typeit';

class NextEmail {
  constructor() {
    this.changeText();
   }

  changeText() {
    let $newEmail = $('.new-email-button');
    let $draftButton = $('.draft-button');
    let $emailContainer = $('.email-text__container');
    let emailTextContainer = '.live-type';
    let $draftMsg = $('.msg-draft');
    let $draftButtons = $('.drafts__container')
    var instance = new TypeIt(emailTextContainer, {
      speed: 25,
      startDelay: 1500,
      cursorSpeed: 850,
    });
    let emailNum = 1;
    let $body = $('body');

    $newEmail.click(function () {
      if (emailNum == 1) {
        instance.reset();
        instance.type('It\'s been a long time, ')
          .pause(500)
          .type('I know it has. ')
          .pause(1000)
          .type('But I managed to get to the restaurant. ')
          .pause(1000)
          .type('I may have avoided eye contact as best as I could, allowing my eyes to dart away from yours, ')
          .pause(500)
          .type('hands wringing in my lap away from your line of sight, ')
          .pause(500)
          .type('mind racing and blank all at the same time. ')
          .pause(800)
          .type('But I was there, sitting across from you. ')
          .pause(800)
          .type('My hair was cut short and it\'s a different color than you saw last. ')
          .pause(500)
          .type('You told me you didn\'t recognize it. ')
          .pause(1000)
          .type('You see, I\'m new now. ')
          .pause(500)
          .type('A new person. ')
          .pause(500)
          .type('I\'m not who you used to know. ')
          .pause(800)
          .type('Can\'t you tell by my hair? ')
          .pause(700)
          .break()
          .pause(700)
          .break()
          .pause(1500)
          .type('So it was you and the New Me, we placed our orders, and we no longer had menus to stare at with just a little too much intensity. ')
          .pause(800)
          .type('So you started talking again, and suddenly we were laughing. ')
          .pause(800)
          .type('It was a sound I recognized, a familiar feeling in my gut that I hadn\'t felt in so many months. And suddenly I could see myself again through all of the doors I pulled shut between us. ')
          .pause(700)
          .break()
          .pause(700)
          .break()
          .pause(800)
          .type('Our plates arrived, our food dwindled, and nothing was left but to call the check. ')
          .pause(800)
          .type('I didn\'t want to go. ')
          .pause(800)
          .type('When dinner was over, you walked away in the middle of a sentence. ')
          .pause(800)
          .type('And now I have to go back to being the New Me again.' )
          .pause(500)
          .break()
          .pause(500)
          .break()
          .pause(800)
          .type('I might cut my hair.');
        }
      });

    $draftButton.click( function() {
      instance.reset();
      if (emailNum == 1) {
        instance.type('I found myself in the park tonight surrounded by a crowd of people. ')
          .pause(800)
          .type('There were people everywhere, ')
          .pause(300)
          .type('coming together to sing and chant and cheer, ')
          .pause(300)
          .type('a sense of comraderie and excitement everyone could feel. ')
          .pause(600)
          .type('Amidst all of the chaos in the park, ')
          .pause(200)
          .type('you were the farthest thing from my mind, ')
          .pause(300)
          .type('but then I looked over to my side and somehow you were there. ')
          .pause(500)
          .break()
          .pause(500)
          .break()
          .pause(500)
          .type('You were actually there! ')
          .pause(500)
          .type('How did you manage to find the one spot next to mine? ')
          .pause(800)
          .type('For a moment, my mind flashed to the time when I believed the universe pulled your atoms towards mine with a cosmic attraction ')
          .pause(300)
          .type('(those are words I actually thought in my mind, can you believe that?) ')
          .pause(500)
          .break()
          .pause(500)
          .break()
          .pause(300)
          .type('The last time we were in that park together, it was summertime. ')
          .pause(800)
          .type('We laid in the grass, allowing the sunshine to hit our faces until we both had sunburns. ')
          .pause(800)
          .type('I wrote about it in my journal that night and I said I could\'ve lived in that moment forever. ')
          .pause(500)
          .break()
          .pause(500)
          .break()
          .pause(300)
          .type('I looked over again and you and your friends had moved further into the crowd, out of my sight. ');
      } else if (emailNum == 2) {
        instance.type('I saw you ride by me on a bike I\'ve never seen before. ')
          .pause(500)
          .type('I had to squint to tell if it was you, but you looked away before I could figure it out. ')
          .pause(800)
          .type('As I walked to class I started to rehearse all of the things I never got to say. ')
          .pause(600)
          .type('I could finally yell, louder and louder as the retorts I knew you would have spat at me rung through my head. ')
          .pause(1000)
          .type('My chest felt tight as I sat down in my chair. ')
          .pause(1000)
          .type('The lecture began and I couldn\'t hear us anymore.');
      } else if (emailNum == 3) {
        instance.type('Tonight, ')
          .pause(300)
          .type('I watched you flirt with a girl from across the bar, and I thought about the last time I saw you drunk. ')
            .pause(800)
          .type('That time, ')
          .pause(200)
          .type('a whole year ago (or has it been longer?), ')
          .pause(300)
          .type('you insisted you needed me next to you. ')
          .pause(500)
          .type('You didn\'t stop until I crossed the livingroom and took a seat beside you. ')
          .pause(800)
          .type('I was the only thing you needed, you said. ')
          .pause(500)
          .break()
          .pause(500)
          .break()
          .pause(300)
          .type('You didn\'t see me at the bar tonight, and the next time I turned my head you were standing next to me but your lips were on hers.');
      } else if (emailNum == 4) {
        instance.type('It\'s been approximately 4 months since we last spoke before today. ')
          .pause(800)
          .type('4 months of silence, and 4 more months before that. ')
          .pause(800)
          .type('And it\'s been almost a year since you last got VIP access to my thoughts. ')
          .pause(800)
          .type('And yet, I sat down at the table today with the two friends we could both do a better job staying in touch with. ')
          .pause(500)
          .type('I had a coffee in my hand and the first thing you said was \"I thought you stopped drinking coffee!\"')
          .pause(500)
          .break()
          .pause(500)
          .break()
          .pause(800)
          .type('It\'s been one year since I told you I stopped drinking coffee. ')
          .pause(300)
          .type('But you remembered that afternoon conversation. ')
          .pause(600)
          .type('And you didn\'t realize I went on that melodramatic anti-coffee rant knowing I would only last in my coffee abstention for maybe a month. ')
          .pause(800)
          .type('But you weren\'t around a month later to find out. ')
          .pause(600)
          .type('You thought I was more dedicated to the coffeeless cause. ')
          .pause(300)
          .type('And you remembered.')
          .pause(500)
          .break()
          .pause(500)
          .break()
          .pause(800)
          .type('Just so you know, I drink coffee again.');
      } else if (emailNum == 5) {
        $draftButtons.removeClass('hide-drafts');
        instance.type('I\'m over it, you know. ')
        .pause(800)
        .type('We still don\'t speak and I\'m over it. ')
        .pause(800)
        .type('You\'ll never know what I had to say and I\'m over it. ')
        .pause(800)
        .type('I\'m so over it, I\'m even dating someone new now. ')
        .pause(500)
        .type('And we\'re happy. ')
        .pause(500)
        .type('And she doesn\'t know that I still draft emails to you in my head. ')
        .pause(500)
        .break()
        .pause(500)
        .break()
        .pause(800)
        .type('But I miss you.')
        .pause(600)
        .delete(15)
        .pause(800)
        .type('But I still want to talk about it.')
        .pause(600)
        .delete(34)
        .pause(800)
        .type('But I\'m over it.')
        .pause(500)
        .break()
        .pause(500)
        .break()
        .pause(800)
        .type('I\'m over it. ');
      };
      emailNum++;
    });

  };

}

export default NextEmail;
