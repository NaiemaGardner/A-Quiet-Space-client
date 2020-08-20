'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Auth Events
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Screen Toggling
const onNewPassword = function (event) {
  event.preventDefault()
  $('.change-password').show()
}

const onMainPage = function (event) {
  event.preventDefault()
  $('#authenticated-user').hide()
  $('#authenticated-entry').hide()
  $('#authenticated-site').hide()
  $('#authenticated-main').show()
  $('#authenticated-edit').hide()
  $('#site-entry').empty()
  $('.blog-entry').empty()
}

const onNewEntry = function (event) {
  event.preventDefault()
  $('#authenticated-main').hide()
  $('#authenticated-user').hide()
  $('#authenticated-site').hide()
  $('#authenticated-entry').show()
  $('.main-view').text('the happy space')
  $('.blog-entry').empty()
  $('#site-entry').empty()
}

const onEditEntryClick = function (event) {
  event.preventDefault()
  $('#authenticated-user').hide()
  $('#authenticated-edit').show()
  $('.main-view').text('do over')
}

const onSignUpClick = function (event) {
  event.preventDefault()
  $('.auth-view').text('')
  $('.left-button').hide()
  $('.sign-up').show()
}

const onSignInClick = function (event) {
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
