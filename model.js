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
  }
  send () {
    let currCard = this.currentQuestion
    let right = this.currentQuestion.answers.right
    let wrong = this.currentQuestion.answers.wrong
    // var answersArr = wrong.concat(right).sort(function () { return 0.5 - Math.random() })
    return {
      question: this.currentQuestion.Q,
      answer: answersArr
    }
  }
    // slice or splice selected into current[] --> 2nd phase used[]
  randomQuest () { // look up js array randomizer
    console.log('running random question')
    this.currentQuestion = this.cards[Math.floor(Math.random() * this.cards.length)]
    console.log(`changed this.current to: ${this.currentQuestion}`)
  }
  score (response) { // if correct: runs score + always runs visual response & randomQuest
    if (response === this.currentQuestion.answer) {
      console.log('correct')
    // function visual response (visual)
    // function score up (visual)
    } else {
    // function visual response (visual)
      console.log('wrong')
    }
    this.randomQuest()
  }
} // close class model
