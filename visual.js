/* globals $ */

console.log('2. Visual Ready')
// do i make one variable for all incorrect?

class ModelView {
  constructor (model) {
    this.model = model
  }
  init () {
    $('.a0').on('click', console.log('CLICKED'))
    $('.a1').on('click', console.log('CLICKED'))
    $('.a2').on('click', console.log('CLICKED'))
    $('.a3').on('click', console.log('CLICKED'))
  }
}
