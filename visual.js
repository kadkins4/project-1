/* globals $ */

console.log('2. Visual Ready')
// do i make one variable for all incorrect?

class ModelView {
  constructor (model) {
    this.model = model
  }
  init () {
    this.display = {
      correct: $('.a1'),
      a2: $('.a2'),
      a3: $('.a3'),
      a4: $('.a4'),
      prob: $('.problem'),
      time: $('.time'),
      pts: $('.points')
    }
  }
  displayCard (card) {
    let qIP = this.model.currCard.Q
    let aIP = this.model.answersArr
    $('prob').text(qIP)
  }
  renderTimer () {
    this.model.timer.on('change', this.displayTime())
  }
  displayTime () {
    (this.model.timer(), this.time)
  }
}

// display = send().question or .answer
