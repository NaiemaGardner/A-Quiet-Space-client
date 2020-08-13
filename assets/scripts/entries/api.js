'use strict'

const store = require('../store')
const config = require('../config')

const getAllEntries = (formData) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/entries',
    method: 'GET',
    data: formData
  })
}

const getMyEntries = (formData) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/entries/:id',
    method: 'GET',
    data: formData
  })
}

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

const updateEntry = (formData) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/entries/:id',
    method: 'PATCH',
    data: formData
  })
}

// const deleteEntry = () => {
//   return $.ajax({
//     url: config.apiUrl + '/entries/:id'
//   })
// }

module.exports = {
  getAllEntries,
  getMyEntries,
  //   // showEntry,
  addEntry,
  updateEntry
//   // deleteEntry
}
