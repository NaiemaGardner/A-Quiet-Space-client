'use strict'

const store = require('../store')

const signUpSuccess = (response) => {
  $('.sign-up')[0].reset()
  $('.auth-view').text('Sign up success! Now sign in.')
  $('.left-button').show()
  $('.sign-up').hide()
}
const signUpFailure = () => {
  $('.sign-up')[0].reset()
  $('.auth-view').text('Sign up failed. Have you been here before? Try signing in.')
  $('.left-button').show()
  $('.sign-up').hide()
}

const signInSuccess = (response) => {
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
const signInFailure = () => {
  $('.sign-in')[0].reset()
  $('.auth-view').text('Sign in failed. Check your credentials and try again.')
  $('.right-button').show()
  $('.sign-in').hide()
}

const changePasswordSuccess = () => {
  $('.change-password').hide()
  $('.change-password')[0].reset()
  $('.main-view').text('Your password has been saved!')
}
const changePasswordFailure = function () {
  $('.change-password').hide()
  $('.main-view').text('Couldn\'t change your password this time. Try again.')
}

const signOutSuccess = () => {
  $('#unauthenticated').show()
  $('.auth-view').text('Hope you had a pleasant stay, see you soon!')
  $('#authenticated-main').hide()
  $('#authenticated-user').hide()
  $('#authenticated-site').hide()
  $('#authenticated-entry').hide()
  $('#authenticated-edit').hide()
  store.user = null
  $('.blog-entry').empty()
  $('.site-entry').empty()
  $('.user-entry')[0].reset()
  $('.new-edit')[0].reset()
}
const signOutFailure = () => {
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
