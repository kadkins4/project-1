/* globals $ */

console.log('2. Visual Ready')
// do i make one variable for all incorrect?

class ModelView {
  constructor (model) {
    this.model = model
  }
  init () {
    this.display = {
      option: $('.option'),
      prob: $('.problem'),
      time: $('.time'),
      pts: $('.points')
    }
    $('a0').on('click', score())
    this.option1 = $('.a0').on('click', console.log('CLICKED'))
  }
  // displayCard () {
  //   let qIP = this.model.currentQuestion.q
  //   let aIP = this.model.currentQuestion.options
  //   $('prob').text(qIP)
  //   $('option').text(aIP)
  // }

  renderTimer () {
    this.model.timer.on('change', this.displayTime())
  }
  displayTime () {
    (this.model.timer(), this.time)
  }
}

// display = send().question or .answer
