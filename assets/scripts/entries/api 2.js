'use strict'

const store = require('../store')
const config = require('../config')

const getAllEntries = () => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/entries',
    method: 'GET'
  })
}

const getMyEntries = () => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/users/' + store.user._id + '/entries',
    method: 'GET'
  })
}

const showEntry = (entryId) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/entries/' + entryId,
    method: 'GET'
  })
}

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

const updateEntry = (formData, entryId) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/entries/' + entryId,
    method: 'PATCH',
    data: formData
  })
}

const deleteEntry = (entryId) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/entries/' + entryId,
    method: 'DELETE'
  })
}

module.exports = {
  getAllEntries,
  getMyEntries,
  showEntry,
  addEntry,
  updateEntry,
  deleteEntry
}
