'use strict'

const store = require('../store')

const signUpSuccess = function (response) {
  $('.sign-up')[0].reset()
  $('.auth-view').text('Sign up success! Now sign in.')
  $('.left-button').show()
  $('.sign-up').hide()
}
const signUpFailure = function () {
  $('.sign-up')[0].reset()
  $('.auth-view').text('Sign up failed. Have you been here before? Try signing in.')
  $('.left-button').show()
  $('.sign-up').hide()
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#unauthenticated').hide()
  $('.change-password').hide()
  $('.right-button').show()
  $('.sign-in').hide()
  $('.main-view').show()
  $('#authenticated-main').show()
  $('.sign-in')[0].reset()
  $('.welcome').text('Welcome ' + store.user.name)
  $('.main-view').text('What would you like to do?')
}
const signInFailure = function () {
  $('.sign-in')[0].reset()
  $('.auth-view').text('Sign in failed. Check your credentials and try again.')
  $('.right-button').show()
  $('.sign-in').hide()
}

const changePasswordSuccess = function () {
  $('.change-password').hide()
  $('.change-password')[0].reset()
  $('.main-view').text('Your password has been saved!')
}
const changePasswordFailure = function () {
  $('.change-password').hide()
  $('.main-view').text('All fields must be filled out.')
}

const signOutSuccess = function () {
  $('#unauthenticated').show()
  $('.auth-view').text('Hope you had a pleasant stay, see you soon!')
  $('.main-view').hide()
  $('#authenticated-main').hide()
  $('#authenticated-user').hide()
  $('#authenticated-site').hide()
  $('#authenticated-entry').hide()
  store.user = null
  $('.blog-entry').empty()
}
const signOutFailure = function () {
  $('.main-view').text('Sign out attempt failed. Try again.')
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
