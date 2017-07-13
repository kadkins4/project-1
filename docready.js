/* global $ */

$(document).ready(function () {
  const newGame = new Model()
  $('h1').click(function () {
    newGame.initCount()
    newGame.init()
  })
})
