'use strict'

const showEntriesTemplate = require('../templates/blog-entry.handlebars')

const getAllEntriesSuccess = (data) => {
  $('.main-view').text('Live, create, imagine.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('#siteEntry').append(showEntriesHtml)
  console.log(data)
}

const getMyEntriesSuccess = (data) => {
  $('.main-view').text('Entries galore!')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blog-entry').append(showEntriesHtml)
}

const showEntrySuccess = (data) => {
  $('.main-view').text('Here is the entry you requested.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blog-entry').append(showEntriesHtml)
}

const addEntrySuccess = (data) => {
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
  $('.main-view').text('Failed.')
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
