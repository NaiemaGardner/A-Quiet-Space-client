'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/event')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Authentication
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // Actions
  // $('div').on('click', function () {
  //   $(this).toggleClass('show-description')
  // })
})
