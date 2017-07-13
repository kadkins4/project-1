/* global $ */

// user story = As a <role>, I want <feature>, so that <benefit>
// As a player, I want challenging questions to challenge my friends
// on their random music, travel, and game knowledge

// TEST AND TRANSITION INTO VISUAL

// logic handler
console.log('1. Logic Ready')

class Model {
  constructor () {
    this.cards = [
      {
        q: 'Fish?',
        options: ['Pencil', 'Dogs', 'Cows', 'Tilapia'],
        answer: 'Tilapia'
      },
      {
        q: 'Pizza?',
        options: ['Pepperoni', 'Wings', 'Tunes', 'Aliens'],
        answer: 'Pepperoni'
      },
      {
        q: 'Peanuts?',
        options: ['Salted', 'Phones', 'Cuba', 'Mashed Potatoes'],
        answer: 'Salted'
      }]
    this.currentQuestion = null // updates with randomQuest
    this.currentScore = 0
    this.div1 = $('.a0').click(function () { console.log('CLICKED') })
    this.div2 = $('.a1').click(function () { console.log('CLICKED') })
    this.div3 = $('.a2').click(function () { console.log('CLICKED') })
    this.div4 = $('.a3').click(function () { console.log('CLICKED') })
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
  }
    // slice or splice selected into current[] --> 2nd phase used[]
  randomQuest () { // look up js array randomizer
    console.log('running random question')
    this.currentQuestion = this.cards[Math.floor(Math.random() * this.cards.length)]
    return this.displayCard(this.currentQuestion)
  }
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
} // close class model
