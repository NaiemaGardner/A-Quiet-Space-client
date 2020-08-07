'use strict'

const config = require('../config')

const getEntries = () => {
  return $.ajax({
    url: config.apiUrl + '/entries'
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
  getEntries,
  showEntry,
  addEntry,
  updateEntry,
  deleteEntry
}
