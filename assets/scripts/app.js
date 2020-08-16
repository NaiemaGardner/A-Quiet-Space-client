'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/event')
const entryEvents = require('./entries/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Unauthenticated View
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.main-view').hide()
  $('#authenticatedMain').hide()
  $('#authenticatedUser').hide()
  $('#authenticatedEntry').hide()
  $('#authenticatedSite').hide()
  // Authentication
  // $(() => {
  //   authEvents.addHandlers()
  // })
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('.signOut').on('click', authEvents.onSignOut)
  // Screen Toggling
  $('.newEntry').on('click', authEvents.onNewEntry)
  $('#newPassword').on('click', authEvents.onNewPassword)
  $('#updateEntry').on('click', authEvents.onUpdateEntry)
  $('.mainPage').on('click', authEvents.onMainPage)
  $('.left-button').on('click', authEvents.onSignUpClick)
  $('.right-button').on('click', authEvents.onSignInClick)
  // Actions
  // $(() => {
  //   entryEvents.addHandlers()
  // })
  $('#siteContent').on('click', entryEvents.onGetAllEntries)
  $('.userPage').on('click', entryEvents.onGetMyEntries)
  $('#userEntry').on('submit', entryEvents.onAddEntry)
  $('#editEntry').on('submit', entryEvents.onUpdateEntry)
  $('.btn btn-primary show').on('click', entryEvents.onShowEntry)
  // $('#info-box').on('click', function () {
  //   $(this).toggleClass('show-description')
  // })
})
