/* global $ */

// user story = As a <role>, I want <feature>, so that <benefit>
// As a player, I want challenging questions to challenge my friends
// on their random music, travel, and game knowledge

// TEST AND TRANSITION INTO VISUAL

// logic handler
console.log('1. Logic Ready')

class Model {
  constructor () {
    this.cards = [ // eventually, one line for each object
      {
        Q: 'Fish?',
        1: 'Tilapia', // always correct
        2: 'Cows',
        3: 'Dogs',
        4: 'Pencil'
      },
      {
        Q: 'Pizza?',
        1: 'Pepperoni', // always correct
        2: 'Wanngggsss',
        3: 'Tunes',
        4: 'Aliens'
      },
      {
        Q: 'Peanuts?',
        1: 'Salted', // always correct
        2: 'Phones',
        3: 'Cuba',
        4: 'Mashed Potatoes'
      }]
    this.current = 0 // updates with randomQuest
  }
  timer () {
    var count = 60
    var counter = setInterval(time, 1000) // test good
    function time () {
      count = count - 1
      console.log(count)
      if (count === 0) {
        clearInterval(counter)
        console.log('over')
          // call game_end function (visual)
      }
    }
  } // close timer
  getQuestion (card) {
    console.log('getting question')
    console.log(`this is this.cards[this.current] ${this.cards}[${this.current}]`)
    return this.cards[this.current]
    // slice or splice selected into current[] --> 2nd phase used[]
  }
  randomQuest () { // look up js array randomizer
    console.log('running random question')
    this.current = Math.floor(Math.random() * this.cards.length) // QUESTION BIND
    console.log(`changed this.current to: ${this.current}`)
    this.getQuestion()
  }
  score (response) { // if correct: runs score + always runs visual response & randomQuest
    if (response === this.cards[this.current]['1']) {
      console.log('correct')
    // function visual response (visual)
    // function score up (visual)
    } else {
    // function visual response (visual)
      console.log('wrong')
    }
    this.randomQuest()
  }
  // send () {
  //   console.log(`this.cards[this.current] is: ${this.cards[this.current]}`)
  //   var shuffled = this.cards[this.current].concat().sort(function () { return 0.5 - Math.random() })
  //   console.log = (shuffled)
  // } // QUESTION SEND
} // close class model
