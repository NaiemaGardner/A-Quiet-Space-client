'use strict'

const showEntriesTemplate = require('../templates/blog-entry.handlebars')
const store = require('../store')

const getAllEntriesSuccess = (data) => {
  $('.main-view').text('Live, create, imagine.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('#siteEntry').append(showEntriesHtml)
}

const getMyEntriesSuccess = (data) => {
  store.user.entries = data.entries
  $('.welcome').text(store.user.name + '\'s Space')
  $('.main-view').text('What will you create next')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blog-entry').append(showEntriesHtml)
}

const showEntrySuccess = (data) => {
  $('.blog-entry').empty()
  $('.main-view').text('Here is the entry you requested.')
  const showEntriesHtml = showEntriesTemplate({ entries: [data.entry] })
  console.log('----showEntriesHtml show----')
  console.log(showEntriesHtml)
  $('.blog-entry').append(showEntriesHtml)
}

const addEntrySuccess = (data) => {
  store.entry = data.entry
  $('.main-view').text('Success! Check out the collection to view your new entry.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blog-entry').append(showEntriesHtml)
}

const updateEntrySuccess = (data) => {
  $('.main-view').text('Your entry has been updated!')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blog-entry').append(showEntriesHtml)
}

// const deleteEntrySuccess = (data) => {
//   $('.main-view').text('Poof! Your entry is gone.')
//   console.log(data)
//   const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
//   $('.blog-entry').remove(showEntriesHtml)
// }

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
  // deleteEntrySuccess,
  failure
}
