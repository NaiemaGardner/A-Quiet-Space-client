'use strict'

const authEvents = require('./auth/event')
const entryEvents = require('./entries/events')

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
  $(() => {
    authEvents.authHandlers()
  })
  // Screen Toggling
  $(() => {
    authEvents.toggleHandlers()
  })
  // Entry Actions
  $(() => {
    entryEvents.entryHandlers()
  })
})
