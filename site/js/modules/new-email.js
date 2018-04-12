import $ from "jquery";
import TypeIt from 'typeit';

class NewEmail {
  constructor() {
    this.changeText();
   }

  changeText() {
    let $draftButton = $('.draft-button');
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
      } else if (emailNum == 2) {
        instance.type('I saw you ride by me on a bike I\'ve never seen before. I had to squint to tell if it was you, but you looked away before I could figure it out. ')
          .pause(800)
          .type('As I walked to class I started to rehearse all of the things I never got to say. I could finally yell, louder and louder as the retorts I knew you would have spat at me rung through my head. And my chest felt tight as I sat in my chair. ')
          .pause(1000)
          .type('The lecture began and I couldn\'t hear us anymore.');
      } else if (emailNum == 3) {
        instance.type('I remembered the last time I saw you drunk tonight as I watched you flirt with a girl across the bar. That time, a whole year ago (or has it been longer?), you insisted you needed me next to you, and you wouldn\'t stop until I crossed the livingroom and took a seat beside you. I was the only thing you needed, you said. ')
          .pause(800)
          .type('You didn\'t see me at the bar tonight but the next time I turned my head you were standing next to me and your lips were on hers.');
      } else if (emailNum == 4) {
        instance.type('It\'s been approximately 4 months since we last spoke before today. ')
          .pause(800)
          .type('4 months of silence, and 4 more months before that. ')
          .pause(800)
          .type('And it\'s been almost a year since you last got VIP access to my thoughts. ')
          .pause(800)
          .type('And yet, I sat down at the table today with the two friends we could both do a better job staying in touch with. I had a coffee in my hand and the first thing you said was \"I thought you stopped drinking coffee!\"')
          .break()
          .break()
          .pause(800)
          .type('It\'s been one year since I told you I stopped drinking coffee. But you remembered that afternoon conversation. And you didn\'t realized I went on that melodramatic anti-coffee rant knowing I would only last in my coffee abstention for maybe a month. But you weren\'t around a month later to find out. You thought I was more dedicated to the coffeeless cause. ')
          .pause(800)
          .type('And you remembered.');
      } else if (emailNum == 5) {
        instance.type('\"I\'m over it\", you know. ')
        .pause(800)
        .type('We still don\'t speak and I\'m over it. ')
        .pause(800)
        .type('You\'ll never know what I had to say and I\'m over it. ')
        .pause(800)
        .type('I\'m so over it, I\'m even dating someone new now. And we\'re happy. And she doesn\'t know that I still draft emails to you in my head. ')
        .break()
        .break()
        .pause(1000)
        .type('But I\'m over it. ')
        .break()
        .break()
        .pause(1000)
        .type('I\'m over it. ');
      };
      emailNum++;
    });

  };

  email2() {

  }
}

export default NewEmail;
