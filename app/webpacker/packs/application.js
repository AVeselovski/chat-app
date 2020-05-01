/* eslint-disable */
import '../stylesheets/custom.scss'

require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()
require('channels')
require('bootstrap')

const { scrollToBottom } = require('../js/helpers')

// Initialize Bootstrap 4 utils
document.addEventListener('turbolinks:load', () => {
  scrollToBottom()

  $('.alert').alert()

  setTimeout(() => {
    $('.alert').removeClass('show')
  }, 5000)

  const newMsgForm = document.querySelector("#new_message")
  // LoL, horrible...
  if (newMsgForm) {
    newMsgForm.addEventListener("submit", e => {
      setTimeout(() => {
        e.target[0].value = ""
      });
    })
  }
})
