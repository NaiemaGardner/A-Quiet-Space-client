'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#sign-up')[0].reset()
  $('#auth-view').text('Sign up was successful! Sign in now to play.')
}
const signUpFailure = function () {
  $('#auth-view').text('Sign up attempt failed. Please try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in')[0].reset()
  $('#main-view').text('Welcome User!')
}
const signInFailure = function () {
  $('#auth-view').text('Sign in attempt failed. Please check your credentials and try again.')
}

const changePasswordSuccess = function () {
  $('#change-password')[0].reset()
  $('#main-view').text('Your password has been updated successfully!')
}
const changePasswordFailure = function () {
  $('#main-view').text('Failed to update your password. Please try again.')
}

const signOutSuccess = function () {
  $('#auth-view').text('User signed out. Come back soon!')
  store.user = null
}
const signOutFailure = function () {
  $('#main-view').text('Sign out attempt failed. Please try again.')
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
