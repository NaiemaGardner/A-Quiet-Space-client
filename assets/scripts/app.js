'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/event')
const entryEvents = require('./entries/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Unauthenticated View
  $('#mainView').hide()
  $('#authenticatedMain').hide()
  $('#authenticatedUser').hide()
  $('#authenticatedEntry').hide()
  $('#authenticatedSite').hide()
  // Authentication
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('.signOut').on('click', authEvents.onSignOut)
  // Screen Toggling
  $('#siteContent').on('click', authEvents.onSiteContent)
  $('.userPage').on('click', authEvents.onUserPage)
  $('.newEntry').on('click', authEvents.onNewEntry)
  $('#newPassword').on('click', authEvents.onNewPassword)
  $('#updateEntry').on('click', authEvents.onUpdateEntry)
  $('.mainPage').on('click', authEvents.onMainPage)
  // Actions
  $(() => {
    entryEvents.addHandlers()
  })
  // $('div').on('click', function () {
  //   $(this).toggleClass('show-description')
  // })
})
