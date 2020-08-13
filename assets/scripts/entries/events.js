'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// Entry Events
const onGetAllEntries = (event) => {
  event.preventDefault()
  $('#authenticatedMain').hide()
  $('#authenticatedSite').show()
  const form = event.target
  const formData = getFormFields(form)
  api.getAllEntries(formData)
    .then(ui.getAllEntriesSuccess)
    .catch(ui.failure)
}

const onGetMyEntries = (event) => {
  event.preventDefault()
  $('#authenticatedMain').hide()
  $('#authenticatedEntry').hide()
  $('#authenticatedSite').hide()
  $('.editEntry').hide()
  $('#authenticatedUser').show()
  const form = event.target
  const formData = getFormFields(form)
  api.getMyEntries(formData)
    .then(ui.getMyEntriesSuccess)
    .catch(ui.failure)
}

// const onShowEntry = (event) => {
//   event.preventDefault()
//   api.showEntry()
//     .then(ui.showEntrySuccess)
//     .catch(ui.failure)
// }

const onAddEntry = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addEntry(formData)
    .then(ui.addEntrySuccess)
    .catch(ui.failure)
}

const onUpdateEntry = (event) => {
  event.preventDefault()
  $('.editEntry').show()
  const form = event.target
  const formData = getFormFields(form)
  $('.editEntry').on('submit', api.updateEntry(formData))
    .then(ui.updateEntrySuccess)
    .catch(ui.failure)
}

// const onDeleteEntry = (event) => {
//   event.preventDefault()
//   api.deleteEntry()
//     .then(ui.deleteEntrySuccess)
//     .catch(ui.failure)
// }

module.exports = {
  onGetAllEntries,
  onGetMyEntries,
  onAddEntry,
  onUpdateEntry
}
