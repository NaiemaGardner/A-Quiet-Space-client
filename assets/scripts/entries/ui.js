'use strict'

const showEntriesTemplate = require('../templates/blog-entry.handlebars')
const showEntryTemplate = require('../templates/single-entry.handlebars')
const store = require('../store')

const getAllEntriesSuccess = (data) => {
  console.log('---get all data---')
  console.log(data)
  $('.welcome').text('The Collection')
  $('.main-view').text('Live, create, imagine.')
  const array = Object.values(data.entries)
  if (array.length < 5) {
    $('.button-bar-bottom-site').hide()
  } else {
    $('.button-bar-bottom-site').show()
  }
  const list = array.sort()
  console.log('---list get all----')
  console.log(list)
  const showEntriesHtml = showEntriesTemplate({ entries: list })
  $('.site-entry').append(showEntriesHtml)
  $('#authenticated-entry').hide()
  $('#authenticated-edit').hide()
  $('.change-password').hide()
}

const getMyEntriesSuccess = (data) => {
  $('.blog-entry').empty()
  store.user.entries = data.entries
  if (data.entries.length < 5) {
    $('.button-bar-bottom-user').hide()
  } else {
    $('.button-bar-bottom-user').show()
  }
  $('.welcome').text(store.user.name + '\'s Space')
  if (data.entries.length === 0) {
    $('.main-view').text('Try creating a new entry or reviewing the site\'s collection for inspiration.')
  } else {
    $('.main-view').text('Create something new or select an entry to review.')
  }
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blog-entry').append(showEntriesHtml)
  $('.return').hide()
  $('#authenticated-edit').hide()
  $('.change-password').hide()
  $('.single-entry').empty()
  $('.site-entry').empty()
}

const showEntrySuccess = (data) => {
  store.user.entries._id = data.entry._id
  $('.button-bar-bottom-user').hide()
  $('.blog-entry').empty()
  $('.main-view').text('Here is the entry you requested.')
  const showEntriesHtml = showEntryTemplate({ entry: data.entry })
  $('.single-entry').append(showEntriesHtml)
  $('.return').show()
}

const addEntrySuccess = (data) => {
  store.entry = data.entry
  $('.main-view').text('Success! Check out your collection to view the new entry.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.site-entry').append(showEntriesHtml)
  $('.blog-entry').append(showEntriesHtml)
  $('.user-entry')[0].reset()
}

const updateEntrySuccess = (data) => {
  $('.new-edit')[0].reset()
  $('.new-edit').hide()
  $('.main-view').text('Now check out your collection!')
}

const deleteEntrySuccess = () => {
  $('.main-view').text('Poof! Your entry is gone.')
  $('.edit-entry').hide()
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
