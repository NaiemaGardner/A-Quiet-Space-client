'use strict'

const showEntriesTemplate = require('../templates/blog-entry.handlebars')

const getAllEntriesSuccess = (data) => {
  $('.mainView').text('Live, create, imagine.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('#siteEntry').append(showEntriesHtml)
}

const getMyEntriesSuccess = (data) => {
  $('.mainView').text('Entries galore!')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blogEntry').append(showEntriesHtml)
}

// const showEntrySuccess = (data) => {
//   $('.mainView').text('Here is the entry you requested. What would you like to do next?')
//   console.log(data)
// }

const addEntrySuccess = (data) => {
  $('.mainView').text('Success! Check out the collection to view your new entry.')
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blogEntry').append(showEntriesHtml)
}

const updateEntrySuccess = (data) => {
  $('.mainView').text('Your entry has been updated!')
  console.log(data)
  const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
  $('.blogEntry').append(showEntriesHtml)
}

// const deleteEntrySuccess = (data) => {
//   $('.mainView').text('Poof! Your entry is gone.')
//   console.log(data)
//   const showEntriesHtml = showEntriesTemplate({ entries: data.entries })
//   $('.blogEntry').remove(showEntriesHtml)
// }

const failure = (error) => {
  $('.mainView').text('Failed.')
  console.error(error)
}

module.exports = {
  getAllEntriesSuccess,
  getMyEntriesSuccess,
  // showEntrySuccess,
  addEntrySuccess,
  updateEntrySuccess,
  // deleteEntrySuccess,
  failure
}
