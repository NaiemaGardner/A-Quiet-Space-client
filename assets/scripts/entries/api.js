'use strict'

const store = require('../store')
const config = require('../config')

// const getAllEntries = () => {
//   return $.ajax({
//     url: config.apiUrl + '/entries'
//   })
// }
//
// const getMyEntries = () => {
//   return $.ajax({
//     url: config.apiUrl + '/entries/:id'
//   })
// }
//
// const showEntry = () => {
//   return $.ajax({
//     url: config.apiUrl + '/entries/:id'
//   })
// }

const addEntry = (formData) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/entries',
    method: 'POST',
    data: formData
  })
}

// const updateEntry = () => {
//   return $.ajax({
//     url: config.apiUrl + '/entries/:id'
//   })
// }
//
// const deleteEntry = () => {
//   return $.ajax({
//     url: config.apiUrl + '/entries/:id'
//   })
// }

module.exports = {
//   // getAllEntries,
//   // getMyEntries,
//   // showEntry,
  addEntry
//   // updateEntry,
//   // deleteEntry
}
