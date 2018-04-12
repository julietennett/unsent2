import $ from "jquery";
import TypeIt from 'typeit';

class NewEmail {
  constructor() {
    this.changeText();
    this.email1();

   }

  email1() {
    let $draftButton = $('.draft');
    let $emailContainer = $('.email-text__container');
    let emailTextContainer = '.email-text__container p';
    let $draftMsg = $('.msg-draft');
    var instance = new TypeIt(emailTextContainer, {
      speed: 10
    });
    let emailNum = 1;

    if (emailNum == 1) {
      instance.type('It\'s been a long time, I know it has. But I managed to get to the restaurant. ')
        .pause(800)
        .type('I may have avoided eye contact as best as I could, allowing my eyes to dart away from yours, hands wringing in my lap away from your line of sight, mind racing and blank all at the same time. ')
        .pause(800)
        .type('But I was there, sitting across from you in the crowded restaurant as our waiter interupted the hesitant conversation developing between us. My hair was cut short and it\'s a different color than you saw last. You told me you didn\'t recognize it. ')
        .pause(1000)
        .type('You see, I\'m new now. A new person. I\'m not who you used to know. Can\t you tell by my hair? ')
        .pause(1000)
        .break()
        .break()
        .type('So it was you and the New Me, we placed our orders, and we no longer had menus to stare at with just a little too much intensity. So you started talking again, and suddenly we were laughing. ')
        .pause(800)
        .type('I could hear myself laughing. ')
        .pause(800)
        .type('It was a sound I recognized, a familiar feeling in my gut that I hadn\'t felt in so many months. And suddenly I could see myself again, through all of the doors I pulled shut between us. ')
        .pause(1000)
        .break()
        .break()
        .type('When I am with you, I am myself. It\'s always been that way, but I don\'t think you knew that. ')
        .pause(800)
        .type('I don\'t think you knew that every time you looked at me, laughed with me, prompted me, I felt myself growing more and more familiar. ')
        .pause(1000)
        .break()
        .break()
        .type('And then our plates arrived, and our food dwindled, and nothing was left but to call the check. I didn\'t want to go. ')
        .pause(800)
        .type('When dinner was over, you walked away in the middle of a sentence. And now I have to go back to being the New Me again.' )
        .pause(1000)
        .break()
        .break()
        .type('I might cut my hair.');
    }

    $draftButton.click( function() {
      instance.reset();
      if (emailNum == 1) {
          instance.type('I found myself in the park tonight surrounded by a crowd of people. ')
          .pause(800)
          .type('There were people everywhere, coming together to sing and chant and cheer, a sense of comraderie and excitement everyone could feel. Amidst all of the chaos in the park, you were the farthest thing from my mind, but then I looked over to my side and somehow you were there. ')
          .pause(800)
          .break()
          .break()
          .type('You were actually there! How did you manage to find the one spot next to mine? For a moment, my mind flashed to the time when I believed the universe pulled your atoms towards mine, with some sort of cosmic attraction ')
          .pause(800)
          .type('(those are words I actually thought in my mind, can you believe that?) ')
          .pause(1000)
          .break()
          .break()
          .type('The last time we were in that park together, it was summertime. We laid in the grass, allowing the sunshine to hit our faces until we both had sunburns. ')
          .pause(800)
          .type('I wrote about it in my journal that night and I said I could\'ve lived in that moment forever. ')
          .pause(1000);
      }
      emailNum++;
    });

  };

  email2() {

  }



  changeText() {
    let $draftButton = $('.draft');
    let $emailContainer = $('.email-text__container');
    let emailTextContainer = '.email-text__container p';
    let $draftMsg = $('.msg-draft');

    let draftMsgText = [
      "yeah, maybe later...",
      "you missed your chance",
      "it's not worth it",
      "it's too late",
      "forget it"
    ]
    var emailNum = 1;

    $draftButton.click( function() {
      $draftMsg.text(draftMsgText[emailNum]);
      emailNum++;
    });
  }
}

export default NewEmail;
