/* global $ */

// user story = As a <role>, I want <feature>, so that <benefit>
// As a player, I want challenging questions to challenge my friends
// on their random music, travel, and game knowledge

// logic handler
console.log('1. Logic Ready')

class Model {
  constructor () {
    this.cards = [ // question pool
      {q: 'Which of these is NOT a fish?', options: ['Filet Mignon', 'Gefilte', 'Tilapia', 'Herring'], answer: 'Filet Mignon' },
      {q: 'In Game of Thrones, this character is pushed from a window in the first episode.', options: ['Bran', 'Tyrion', 'Ned', 'Arya'], answer: 'Bran'},
      {q: 'What band sings the song, "(I can\'t get no) Satisfaction"', options: ['The Rolling Stones', 'Dave Matthews Band', 'Red Hot Chili Peppers', 'Goo Goo Dolls'], answer: 'The Rolling Stones'},
      {q: "In Game of Thrones, the Lannister's sigil is a", options: ['Lion', 'Raven', 'Dire Wolf', 'Flower'], answer: 'Lion'},
      {q: 'Master Chief is the main character in what popular video game?', options: ['Halo', 'Counter-Strike', 'SuperMario', 'Star Wars: Battleground'], answer: 'Halo'},
      {q: 'Finish the lyrics, song by Alt-J: "...she may contain the urge to run away but hold her down with soggy clothes and ___."', options: ['breezeblocks', 'cash-money', 'fresh-drinks', 'truelove'], answer: 'breezeblocks'},
      {q: "The highest prize pool for DOTA 2's: The International Tournament was...", options: ['$20.5M', '$13.5M', '$100,000', '$234,450'], answer: '$20.5M'},
      {q: 'Which is not a type of beer', options: ['Irish Poppy Arguille', 'Indian Pale Ale', 'Stout', 'Wheat Ale'], answer: 'Irish Poppy Arguille'},
      {q: 'What store did Dev from Master of None say he was going to as a pickup line on a dating apps?', options: ['Whole Foods', 'Home Depot', 'that trendy store', 'Target'], answer: 'Whole Foods'},
      {q: "This band's lead singer was told by his father that he sung 'wonderfully off-key'", options: ['Dave Matthews Band', 'Twenty-One Pilots', 'NSYNC', 'Backstreet Boys'], answer: 'Dave Matthews Band'},
      {q: 'In Counter-Strike (CSGO), a knife kill awards how much money?', options: ['1500', '400', '2000', '850'], answer: '1500'},
      {q: 'In Washington, DC: this event takes place nearly every Friday during the summer months.', options: ['Jazz in the Garden', 'DiscotechaMecha', 'PoliticsNParties', 'Madness at the Mall'], answer: 'Jazz in the Garden'},
      {q: 'This artist is from Washington, DC', options: ['Wale', 'Sylvan Esso', 'Justin Timberlake', 'Trombone Shorty'], answer: 'Wale'},
      {q: 'As of spring 2017, the highest paid eSports player made $2,824,396 and his alias is:', options: ['UNiVeRsE', 'ppd', 'SumaiL', 'Fear'], answer: 'UNiVeRsE'},
      {q: 'The most clever of all the Lannister family is: ', options: ['Tyrion', 'Littlefinger', 'Jamie', 'Cersei'], answer: 'Tyrion'},
      {q: 'Winter Is Coming is the slogan of ...', options: ['The Stark House', 'The Lannister House', 'The Greyjoy House', 'The Wildlings'], answer: 'The Stark House'},
      {q: "The Red Wedding was held at this man's keep", options: ['Walder Frey', 'Tywin Lannister', 'Euron Greyjoy', 'Jorah Mormont'], answer: 'Walder Frey'},
      {q: 'This "party" game involves people trying to figure out who the bad team is, it also has an alternate game called Werewolf', options: ['Mafia', 'Cops and Robbers', 'Hide and Seek', 'Jhuatcan'], answer: 'Mafia'},
      {q: 'Narcos is a show about this druglord', options: ['Pablo Escobar', 'Joaquin "El Chapo" Guzman', 'Rick Ross', 'Frank Lucas'], answer: 'Pablo Escobar'},
      {q: 'James Naismith started this sport as a way to keep his student-athletes in shape in the off-season', options: ['Basketball', 'Baseball', 'Football', 'Golf'], answer: 'Basketball'},
      {q: 'The first commercial arcade video game was...', options: ['Computer Space', 'Space Invaders', 'Tecmo Bowl', 'Kong'], answer: 'Computer Space'},
      {q: '"Heroes never die" is the tagline from what hero in the game OverWatch', options: ['Mercy', 'Roadhog', 'Reaper', 'Tracer'], answer: 'Mercy'},
      {q: 'In the movie, "Aliens" the jokester, Private Hudson said this famous line', options: ['"Game over man, Game Over!"', '"Say hello to my little friend"', '"I\'m the guy who does his job..."', '"I have a particular set of skills"'], answer: '"Game over man, Game Over!"'},
      {q: 'In a lot of popular competitive video games, these initials represent which region of the world is used to characterize bad gameplay', options: ['NA - North America', 'EU - Europe', 'SEA - Southeastern Asia', 'CIS - Commonwealth of Independent States'], answer: 'NA - North America'},
      {q: 'Camping in video games refers to:', options: ['Standing In One Spot', 'Running Around Carelessly', 'Trying Way Too Hard', 'Only Playing With Friends'], answer: 'Standing In One Spot'},
      {q: "In OverWatch, one of D'Vas taunts is:", options: ['"Is this easy mode?"', '"I woke up like this"', '"I\'m making waffles!"', '"Let\'s break it down"'], answer: '"Is this easy mode?"'},
      {q: "'Throwing' in games refers to:", options: ['A team squandering a substantial lead', 'Baiting a team into a bad play', '#1 rank vs #2 rank', 'Using items all at once'], answer: 'A team squandering a substantial lead'},
      {q: 'What is the term used to show sarcasm or trolling', options: ['Kappa', 'Gamma', 'Delta', 'Lulzies'], answer: 'Kappa'},
      {q: 'This company created two of the most popular esports (DOTA2 & CSGO)', options: ['Valve', 'Bethesda Studios', 'Bungie', 'Nintendo'], answer: 'Valve'},
      {q: 'Bethesda Studios is known for creating Civilization, Elder Scrolls, & :', options: ['Fallout', 'Halo', 'Rainbow Six', 'Super Mario'], answer: 'Fallout'},
      {q: 'This N64 Super Smash Bros hero is thought to be too strong because of his ability to fly for long periods of time', options: ['Kirby', 'Yoshi', 'Captain Falcon', 'Starfox'], answer: 'Kirby'},
      {q: 'The letters O.P. in video games means:', options: ['Over-Powered', 'Optimal Power', 'Overly Predictable', 'Other Players'], answer: 'Over-Powered'},
      {q: 'The eSports organization NIP stands for: ', options: ['Ninjas in Pyjamas', 'Noobs in Power', 'Neva in Playa', 'NIP'], answer: 'Ninjas in Pyjamas'},
      {q: 'Lebron James made this statement, "I\'m taking my talents to..."', options: ['Miami', 'Florida', 'a better team', 'anywhere but Cleveland'], answer: 'Miami'},
      {q: 'In most online arena games, an ambush is called a(n)', options: ['gank', 'jump', 'OOOH WEEE', 'kappa'], answer: 'gank'},
      {q: 'ESPN is to Sports, as ____ is to video games', options: ['Twitch', 'CNN', 'GameStop', 'Vulcun'], answer: 'Twitch'},
      {q: 'In Rocket Power, this is the name Otto gives to people who wears shoes on the beach', options: ['Shoobie', 'Squid', 'Sam', 'Tourist'], answer: 'Shoobie'},
      {q: 'The name of the creator of Nintendo is', options: ['Fusajiro Yamauchi', 'Mario Sanchez', 'Shigeru Miyamoto', 'Gaben'], answer: 'Fusajiro Yamauchi'},
      {q: "'The King in the North' refers to which Game of Thrones character?", options: ['Rob Stark', 'Tyrion Lannister', 'Khaleesi', 'Ned Stark'], answer: 'Rob Stark'},
      {q: 'In Overwatch, this strategy is the act of running past the first line of defense', options: ['Dive', 'Bulldoze', 'Truck Stick', 'Careless'], answer: 'Dive'},
      {q: 'In video games, this skill describes the ability to control multiple people at once', options: ['micro', 'macro', 'insane hand-eye-brain coordination', 'multitasking'], answer: 'micro'},
      {q: 'This is the term that compeitive gamers use when they fear a game\'s mechanics are becoming too easy for new players to get better', options: ['skill cap', 'training wheels', 'nerfgun', 'sniped'], answer: 'skill cap'},
      {q: 'In Breaking Bad, this character was a former student of Mr. White', options: ['Jesse', 'Walter', 'Skylar', 'Gustavo'], answer: 'Jesse'},
      {q: 'Two Italian plumbers are constantly trying to save a princess from this turtle-like character', options: ['Bowser', 'Mario & Luigi', 'Franklin', 'Peach'], answer: 'Bowser'},
      {q: 'This former New York Knicks player is a big advocate for E-Sports', options: ['Jeremy Lin', 'Patrick Ewing', 'Rick Fox', 'Allen Iverson'], answer: 'Jeremy Lin'},
      {q: 'A former LA Lakers player started up his own E-Sports Organization called', options: ['Echo Fox', 'Kobe Sports', 'Shaqqin Co.', 'Odom Oath'], answer: 'Echo Fox'}
    ]
    this.currentQuestion = null // updates with randomQuest
    this.currentScore = 0
    this.usedCards = [] // empty array to store used
    this.div1 = $('.a0') // answer clicks
    this.div1.click(() => { this.score(this.div1.text()) })
    this.div2 = $('.a1')
    this.div2.click(() => { this.score(this.div2.text()) })
    this.div3 = $('.a2')
    this.div3.click(() => { this.score(this.div3.text()) })
    this.div4 = $('.a3')
    this.div4.click(() => { this.score(this.div4.text()) })
    this.refresh = $('.game-end') // refresh game at end
    this.refresh.click(() => { location.reload() })
  }
  timer () {
    var count = 75
    var self = this
    var counter = setInterval(time, 1000)
    function time () {
      count = count - 1
      $('.time').text(count)
      if (count === 0) {
        clearInterval(counter)
        $('.time').text('GG')
        $('h1').text('QUiZZLe')
        $('.game-end').click(() => { location.reload() }) // allows reload on question div
        $('.problem').text(`Your Score: ${self.currentScore}. Click Here To Restart.`) // displays score
        $('.a0').off() // disables buttons
        $('.a1').off()
        $('.a2').off()
        $('.a3').off()
        $('.play').removeClass('correct')
        $('.play').removeClass('incorrect')
      }
    }
  }
  displayCard () {
    let qIP = this.currentQuestion.q
    let aIP = this.currentQuestion.options
    $('.problem').text(qIP)
    function shuffleArray (array) {
      for (var i = aIP.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = aIP[i]
        aIP[i] = aIP[j]
        aIP[j] = temp
      }
      return aIP
    }
    shuffleArray()
    for (let i = 0; i <= 4; i++) {
      $('.a' + i).text(aIP[i])
    }
  }
  randomQuest () {
    console.log('generating random question') // picking card
    var index = [Math.floor(Math.random() * this.cards.length)]
    this.currentQuestion = this.cards[index]
    this.usedCards.push(this.cards[index]) // removing from card pool and placing in used pool
    this.cards.splice(index, 1)
    return this.displayCard(this.currentQuestion)
  }
  // blinkCorrect () {
  //   $('.correct').fadeIn(500).fadeOut(500)
  // }
  score (response) { // if correct: runs score + always runs visual response & randomQuest
    if (response === this.currentQuestion.answer) {
      this.currentScore += 5 // score up
      $('.points').text(this.currentScore)
      $('.play').removeClass('incorrect')
      $('.play').addClass('correct')
       // visual response
    } else {
      $('.play').addClass('incorrect')
      // visual response
      console.log('incorrect')
    }
    return this.randomQuest()
  }
  init () {
    this.timer()
    this.randomQuest()
  }
  initCount () {
    var initTime = 5
    var initCount = setInterval(time.bind(this), 1000)
    function time () {
      initTime = initTime - 1
      $('h1').text(initTime)
      if (initTime === 0) {
        clearInterval(initCount)
        $('h1').text('Good Luck, Have Fun')
        this.refresh.off()
        this.init()
      }
    }
  }
} // close class model
