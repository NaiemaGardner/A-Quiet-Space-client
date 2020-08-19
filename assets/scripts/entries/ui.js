'use strict'

const showEntriesTemplate = require('../templates/blog-entry.handlebars')
const showEntryTemplate = require('../templates/single-entry.handlebars')
const store = require('../store')

const getAllEntriesSuccess = (data) => {
  $('.welcome').text('The Collective')
  $('.main-view').text('Live, create, imagine.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('#site-entry').append(showEntriesHtml)
  $('#authenticated-entry').hide()
}

const getMyEntriesSuccess = (data) => {
  store.user.entries = data.entries
  $('.welcome').text(store.user.name + '\'s Space')
  $('.main-view').text('Create something new or select something to review.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blog-entry').append(showEntriesHtml)
  $('.return').hide()
  $('.single-entry').empty()
}

const showEntrySuccess = (data) => {
  store.user.entries._id = data.entry._id
  $('.blog-entry').empty()
  $('.main-view').text('Here is the entry you requested.')
  const showEntriesHtml = showEntryTemplate({ entry: data.entry })
  $('.single-entry').append(showEntriesHtml)
  $('.return').show()
}

const addEntrySuccess = (data) => {
  store.entry = data.entry
  $('.main-view').text('Success! Check out the collection to view your new entry.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blog-entry').append(showEntriesHtml)
  $('.user-entry')[0].reset()
}

const updateEntrySuccess = (data) => {
  $('.main-view').text('Your entry has been updated!')
  const showEntriesHtml = showEntryTemplate({ entry: data.entry })
  $('.blog-entry').append(showEntriesHtml)
}

const deleteEntrySuccess = () => {
  $('.main-view').text('Poof! Your entry is gone.')
  $('.single-entry').empty('')
}

const failure = (error) => {
  $('.main-view').text('All fields must be filled out.')
  console.error(error)
}

module.exports = {
  getAllEntriesSuccess,
  getMyEntriesSuccess,
  showEntrySuccess,
  addEntrySuccess,
  updateEntrySuccess,
  deleteEntrySuccess,
  failure
}
