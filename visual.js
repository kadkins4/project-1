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
  
  // this.div1 = $('.a0').click(function () { score(($('.a0').text())) })
  // this.div2 = $('.a1').click(function () { score(($('.a1').text())) })
  // this.div3 = $('.a2').click(function () { score(($('.a2').text())) })
  // this.div4 = $('.a3').click(function () { score(($('.a3').text())) })
}
