/* global $ */

// user story = As a <role>, I want <feature>, so that <benefit>
// As a player, I want challenging questions to challenge my friends
// on their random music, travel, and game knowledge

// logic handler
console.log('1. Logic Ready')

class Model {
  constructor () {
    this.cards = [
      {q: 'Which of these is NOT a fish?', options: ['Filet Mignon', 'Gefilte', 'Tilapia', 'Herring'], answer: 'Filet Mignon' },
      {q: 'In Game of Thrones, this character pushed from a window in the first episode.', options: ['Bran', 'Tyrion', 'Ned', 'Arya'], answer: 'Bran'},
      {q: 'What band sings the song, "Satisfaction"', options: ['The Rolling Stones', 'Dave Matthews Band', 'Red Hot Chili Peppers', 'Goo Goo Dolls'], answer: 'The Rolling Stones'},
      {q: "In Game of Thrones, the Lannister's sigil is a", options: ['Lion', 'Raven', 'Dire Wolf', 'Flower'], answer: 'Lion'},
      {q: 'Master Chief is the main character in what popular video game?', options: ['Halo', 'Counter-Strike', 'SuperMario', 'Star Wars: Battleground'], answer: 'Halo'},
      {q: 'Finish the lyrics, song by Alt-J: "...she may contain the urge to run away but hold her down with soggy clothes and ___."', options: ['breezeblocks', 'cash-money', 'fresh-drinks', 'truelove'], answer: 'breezeblocks'},
      {q: "The highest prize pool for DOTA 2's: The International Tournament was...", options: ['$20.5M', '$13.5M', '$100,000', '$234,450'], answer: '$20.5M'},
      {q: 'Which is not a type of beer', options: ['Irish Poppy Arguille', 'Indian Pale Ale', 'Stout', 'Wheat Ale'], answer: 'Irish Poppy Arguille'},
      {q: 'What store did Dev from Master of None say he was going to as a pickup line on a dating apps?', options: ['Whole Foods', 'Home Depot', 'eXXXotic', 'Target'], answer: 'Whole Foods'},
      {q: "This band's lead singer was told by his father that he sung wonderfully off-key", options: ['Dave Matthews Band', 'Twenty-One Pilots', 'NSYNC', 'Backstreet Boys'], answer: 'Dave Matthews Band'},
      {q: 'In CSGO, a knife kill awards how much money?', options: ['1500', '400', '2000', '850'], answer: '1500'},
      {q: 'In Washington, DC: this event takes place nearly every Friday during the summer months.', options: ['Jazz in the Garden', 'DiscotechaMecha', 'PoliticsNParties', 'Madness at the Mall'], answer: ''},
      {q: 'This artist is from Washington, DC', options: ['Wale', 'Sylvan Esso', 'Justin Timberlake', 'Trombone Shorty'], answer: 'Wale'},
      {q: 'As of spring 2017, the highest paid eSports player made $2,824,396 and his alias is:', options: ['UNiVeRsE', 'ppd', 'SumaiL', 'Fear'], answer: 'UNiVeRsE'},
      {q: 'The most clever of all the Lannister family is: ', options: ['Tyrion', 'Littlefinger', 'Jamie', 'Cersei'], answer: 'Tyrion'},
      {q: 'Winter Is Coming is the slogan of ...', options: ['The Stark House', 'The Lannister House', 'The Greyjoy House', 'The Wildlings'], answer: 'The Stark House'},
      {q: "The Red Wedding was held at this man's keep", options: ['Walder Frey', 'Tywin Lannister', 'Euron Greyjoy', 'Jorah Mormont'], answer: 'Walder Frey'},
      {q: 'This "party" game involves people trying to figure out who the bad team is, it also has an alternate game called Werewolf', options: ['Mafia', 'Cops and Robbers', 'Hide and Seek', 'Jhuatcan'], answer: 'Mafia'},
      {q: 'Narcos is a show about this druglord', options: ['Pablo Escobar', 'Joaquin "El Chapo" Guzman', 'Rick Ross', 'Frank Lucas'], answer: ''},
      {q: 'James Naismith started this sport as a way to keep his student-athletes in shape in the off-season', options: ['Basketball', 'Baseball', 'Football', 'Golf'], answer: ''},
      {q: 'The first commercial arcade video game was...', options: ['Computer Space', 'Space Invaders', 'Tecmo Bowl', 'Kong'], answer: 'Computer Space'},
      {q: '"Heroes never die" is the tagline from what hero in the game OverWatch', options: ['Mercy', 'Roadhog', 'Reaper', 'Tracer'], answer: 'Mercy'},
      {q: 'In the movie, "Aliens" the jokester, Private Hudson said this famous line', options: ['"Game over man, Game Over!"', '"Say hello to my little friend"', '"I\'m the guy who does his job..."', '"I have a particular set of skills"'], answer: ''},
      {q: 'In a lot of popular competitive video games, these initials representing a region of the word is used to characterize bad gameplay', options: ['NA', 'EU', 'SEA', 'CIS'], answer: 'NA'},
      {q: 'Camping in video games refers to:', options: ['Standing In One Spot', 'Running Around Carelessly', 'Trying Way Too Hard', 'Only Playing With Friends'], answer: 'Standing In One Spot'},
      {q: "In OverWatch, one of D'Vas taunts is:", options: ['"Is this easy mode?"', '"I woke up like this"', '"I\'m making waffles!"', '"Let\'s break it down"'], answer: '"Is this easy mode?"'},
      {q: "'Throwing' in games refers to:", options: ['A team squandering a substantial lead', 'Baiting a team into a bad play', '#1 rank vs #2 rank', 'Using items all at once'], answer: 'A team squandering a substantial lead'},
      {q: 'What is the term used to show sarcasm or trolling', options: ['Kappa', 'Gamma', 'Delta', 'Lulzies'], answer: 'Kappa'},
      {q: 'This company created two of the most popular esports (DOTA2 & CSGO)', options: ['Valve', 'Bethesda Studios', 'Bungie', 'Nintendo'], answer: 'Valve'},
      {q: 'Bethesda Studios is known for creating Civilization, Elder Scrolls, & :', options: ['Fallout', 'Halo', 'Rainbow Six', 'Super Mario'], answer: 'Fallout'},
      {q: 'This N64 Super Smash Bros hero is thought to be too strong because of his ability to fly for long periods of time', options: ['Kirby', 'Yoshi', 'Captain Falcon', 'Starfox'], answer: 'Kirby'},
      {q: 'The letters OP in video games means:', options: ['Over-Powered', 'Optimal Power', 'Overly Predictable', 'Other Players'], answer: 'Over-Powered'},
      {q: 'The eSports organization NIP stands for: ', options: ['Ninjas in Pyjamas', 'Noobs in Power', 'Neva in Playa', 'NIP'], answer: 'Ninjas in Pyjamas'},
      {q: 'Lebron James made this statement, "I\'m taking my talents to..."', options: ['Miami', 'Florida', 'a better team', 'anywhere but Cleveland'], answer: 'Miami'},
      {q: "In most online arena games, an ambush is called a(n)", options: ['gank', 'jump', 'OOOH WEEE', 'kappa'], answer: 'gank'},
      {q: 'ESPN is to Sports, as ____ is to video games', options: ['Twitch', 'CNN', 'GameStop', 'Vulcun'], answer: 'Twitch'},
      {q: 'In Rocket Power, this is the name Otto gives to people who wears shoes on the beach', options: ['Shoobie', 'Squid', 'Sam', 'Tourist'], answer: 'Shoobie'},
      {q: 'The name of the creator of Nintendo is', options: ['Fusajiro Yamauchi', 'Mario Sanchez', 'Shigeru Miyamoto', 'Gaben'], answer: 'Fusajiro Yamauchi'},
      {q: '', options: ['', '', '', ''], answer: ''}

    ]
    this.currentQuestion = null // updates with randomQuest
    this.currentScore = 0
    // this.div1 = $('.a0').click(function () { score(($('.a0').text())) })
    // this.div2 = $('.a1').click(function () { score(($('.a1').text())) })
    // this.div3 = $('.a2').click(function () { score(($('.a2').text())) })
    // this.div4 = $('.a3').click(function () { score(($('.a3').text())) })
  }
  timer () {
    var count = 60
    var counter = setInterval(time, 1000) // test good
    function time () {
      count = count - 1
      $('.time').text(count)
      console.log(count)
      if (count === 0) {
        clearInterval(counter)
        $('.time').text('TIME UP')
        console.log('over')
          // call game_end function (visual)
      }
    }
  }
  displayCard () {
    let qIP = this.currentQuestion.q
    // let aIP = this.currentQuestion.options
    $('.problem').text(qIP)
    for (let i = 0; i <= 4; i++) {
      $('.a' + i).text(this.currentQuestion.options[i])
    }
    // scoreInit()
  }
    // slice or splice selected into current[] --> 2nd phase used[]
  randomQuest () { // look up js array randomizer
    console.log('running random question')
    this.currentQuestion = this.cards[Math.floor(Math.random() * this.cards.length)]
    return this.displayCard(this.currentQuestion)
  }
  // scoreInit () {
    // if (this.div1 || this.div2 || this.div3 || this.div4) {
  score (response) { // if correct: runs score + always runs visual response & randomQuest
    if (response === this.currentQuestion.answer) {
      console.log('correct')
      this.currentScore += 5 // score up
      $('.points').text(this.currentScore) // function visual response (visual)
    } else {
      console.log('wrong')
    }
    return this.randomQuest()
  }
    // }
  // }
} // close class model
