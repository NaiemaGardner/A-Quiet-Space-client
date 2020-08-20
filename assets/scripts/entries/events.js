'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

// Entry Events
const onGetAllEntries = (event) => {
  event.preventDefault()
  $('#authenticated-main').hide()
  $('#authenticated-site').show()
  api.getAllEntries()
    .then(ui.getAllEntriesSuccess)
    .catch(ui.failure)
}

const onGetMyEntries = (event) => {
  event.preventDefault()
  $('#authenticated-main').hide()
  $('#authenticated-entry').hide()
  $('#authenticated-site').hide()
  $('.edit-entry').hide()
  $('#authenticated-user').show()
  api.getMyEntries()
    .then(ui.getMyEntriesSuccess)
    .catch(ui.failure)
}

const onShowEntry = (event) => {
  event.preventDefault()
  $('.edit-entry').show()
  const entryIndex = $(event.target).closest('main').index()
  const entryId = store.user.entries[entryIndex]._id
  api.showEntry(entryId)
    .then(ui.showEntrySuccess)
    .catch(ui.failure)
}

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
  const form = event.target
  console.log('----update form-----')
  console.log(form)
  const formData = getFormFields(form)
  console.log('----update form data-----')
  console.log(formData)
  console.log('----update store.user.entries._id-----')
  console.log(store.user.entries._id)
  api.updateEntry(formData, store.user.entries._id)
    .then(ui.updateEntrySuccess)
    .catch(ui.failure)
}

const onDeleteEntry = (event) => {
  event.preventDefault()
  api.deleteEntry(store.user.entries._id)
    .then(ui.deleteEntrySuccess)
    .catch(ui.failure)
}

module.exports = {
  onGetAllEntries,
  onGetMyEntries,
  onShowEntry,
  onAddEntry,
  onUpdateEntry,
  onDeleteEntry
}
