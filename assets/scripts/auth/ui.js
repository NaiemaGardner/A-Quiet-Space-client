'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#signUp')[0].reset()
  $('#authView').text('Sign up was successful! Now sign in.')
}
const signUpFailure = function () {
  $('#authView').text('Sign up attempt failed. Have you been here before? Try signing in.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#unauthenticated').hide()
  $('#changePassword').hide()
  $('#mainView').show()
  $('#authenticatedMain').show()
  $('#signIn')[0].reset()
  $('#mainView').text('Here you are..')
}
const signInFailure = function () {
  $('#authView').text('Sign in attempt failed. Double check your credentials and try again.')
}

const changePasswordSuccess = function () {
  $('#changePassword').hide()
  $('#changePassword')[0].reset()
  $('#mainView').text('Your password has been saved!')
}
const changePasswordFailure = function () {
  $('#changePassword').hide()
  $('#mainView').text('Could not update your password this time. Try again.')
}

const signOutSuccess = function () {
  $('#unauthenticated').show()
  $('#authView').text('Signed out. Hope you had a pleasant stay, see you soon!')
  $('#mainView').hide()
  $('#authenticatedMain').hide()
  $('#authenticatedUser').hide()
  $('#authenticatedSite').hide()
  store.user = null
}
const signOutFailure = function () {
  $('#mainView').text('Sign out attempt failed. Try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
