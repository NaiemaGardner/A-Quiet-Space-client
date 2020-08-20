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
  $('#authenticated-main').hide()
  $('#authenticated-user').hide()
  $('#authenticated-entry').hide()
  $('#authenticated-edit').hide()
  $('#authenticated-site').hide()
  // Authentication
  // $(() => {
  //   authEvents.addHandlers()
  // })
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('click', authEvents.onSignOut)
  // Screen Toggling
  $('.new-entry').on('click', authEvents.onNewEntry)
  $('#new-password').on('click', authEvents.onNewPassword)
  $('#updateEntry').on('click', authEvents.onUpdateEntry)
  $('.main-page').on('click', authEvents.onMainPage)
  $('.left-button').on('click', authEvents.onSignUpClick)
  $('.right-button').on('click', authEvents.onSignInClick)
  $('.edit-entry').on('click', authEvents.onEditEntryClick)
  $('.return').on('click', entryEvents.onGetMyEntries)
  $('#close').on('click', authEvents.onClose)
  // Actions
  // $(() => {
  //   entryEvents.addHandlers()
  // })
  $('.site-content').on('click', entryEvents.onGetAllEntries)
  $('.user-page').on('click', entryEvents.onGetMyEntries)
  $('.user-entry').on('submit', entryEvents.onAddEntry)
  $('.new-edit').on('submit', entryEvents.onUpdateEntry)
  $('.blog-entry').on('click', entryEvents.onShowEntry)
  $('.single-entry').on('click', entryEvents.onDeleteEntry)
  // $('#info-box').on('click', function () {
  //   $(this).toggleClass('show-description')
  // })
})
