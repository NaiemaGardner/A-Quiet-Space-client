'use strict'

const config = require('../config')

const getAllEntries = () => {
  return $.ajax({
    url: config.apiUrl + '/entries'
  })
}

const getMyEntries = () => {
  return $.ajax({
    url: config.apiUrl + '/entries/:id'
  })
}

const showEntry = () => {
  return $.ajax({
    url: config.apiURL + '/entries/:id'
  })
}

const addEntry = () => {
  return $.ajax({
    url: config.apiURL + '/entries'
  })
}

const updateEntry = () => {
  return $.ajax({
    url: config.apiURL + '/entries/:id'
  })
}

const deleteEntry = () => {
  return $.ajax({
    url: config.apiURL + '/entries/:id'
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
