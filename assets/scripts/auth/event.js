'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

// Authentication Handlers
const authHandlers = (event) => {
  $('.sign-up').on('submit', onSignUp)
  $('.sign-in').on('submit', onSignIn)
  $('.change-password').on('submit', onChangePassword)
  $('.sign-out').on('click', onSignOut)
}

// Authentication Events
const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Toggle Handlers
const toggleHandlers = (event) => {
  $('.new-entry').on('click', onNewEntry)
  $('#new-password').on('click', onNewPassword)
  $('.main-page').on('click', onMainPage)
  $('.left-button').on('click', onSignUpClick)
  $('.right-button').on('click', onSignInClick)
  $('.edit-entry').on('click', onEditEntryClick)
  $('#close').on('click', onClose)
}

// Toggle Events
const onNewPassword = (event) => {
  event.preventDefault()
  $('.change-password').show()
}

const onMainPage = (event) => {
  event.preventDefault()
  $('#authenticated-user').hide()
  $('#authenticated-entry').hide()
  $('#authenticated-site').hide()
  $('#authenticated-main').show()
  $('#authenticated-edit').hide()
  $('.welcome').text(store.user.name + '\'s Space')
  $('.main-view').text('What would you like to do?')
  $('.blog-entry').empty()
  $('.site-entry').empty()
}

const onNewEntry = (event) => {
  event.preventDefault()
  $('#authenticated-main').hide()
  $('#authenticated-user').hide()
  $('#authenticated-site').hide()
  $('.change-password').hide()
  $('#authenticated-entry').show()
  $('.main-view').text('the happy space')
  $('.blog-entry').empty()
  $('.site-entry').empty()
}

const onEditEntryClick = (event) => {
  event.preventDefault()
  $('#authenticated-user').hide()
  $('#authenticated-edit').show()
  $('.new-edit').show()
  $('.main-view').text('do over')
}

const onSignUpClick = (event) => {
  event.preventDefault()
  $('.auth-view').text('')
  $('.left-button').hide()
  $('.sign-up').show()
}

const onSignInClick = (event) => {
  event.preventDefault()
  $('.auth-view').text('')
  $('.right-button').hide()
  $('.sign-in').show()
}

const onClose = (event) => {
  event.preventDefault()
  $('.change-password').hide()
}

module.exports = {
  authHandlers,
  toggleHandlers,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewEntry,
  onNewPassword,
  onEditEntryClick,
  onMainPage,
  onSignUpClick,
  onSignInClick,
  onClose
}
