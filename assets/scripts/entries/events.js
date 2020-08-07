'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetEntries = (event) => {
  event.preventDefault()
  api.getEntries()
    .then(ui.getEntriesSuccess)
    .catch(ui.failure)
}

const onShowEntry = (event) => {
  event.preventDefault()
  api.showEntry()
    .then(ui.showEntrySuccess)
    .catch(ui.failure)
}

const onAddEntry = (event) => {
  event.preventDefault()
  api.addEntry()
    .then(ui.addEntrySuccess)
    .catch(ui.failure)
}

const onUpdateEntry = (event) => {
  event.preventDefault()
  api.updateEntry()
    .then(ui.updateEntrySuccess)
    .catch(ui.failure)
}

const onDeleteEntry = (event) => {
  event.preventDefault()
  api.deleteEntry()
    .then(ui.deleteEntrySuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.userPage').on('click', onGetEntries)
  $('#showEntry').on('click', onShowEntry)
  $('#publishEntry').on('click', onAddEntry)
  $('#updateEntry').on('click', onUpdateEntry)
  $('#deleteEntry').on('click', onDeleteEntry)
}

module.exports = {
  addHandlers
}
